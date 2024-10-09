import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ title, items, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null); // Reference to the dropdown for detecting outside clicks

    const toggleDropdown = () => setIsOpen((prev) => !prev);
    const handleItemClick = (item) => {
        onSelect(item);
        setIsOpen(false);
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    // Add event listener on mount and clean up on unmount
    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        // Clean up the event listener on unmount
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={dropdownRef}>
            <button onClick={toggleDropdown} className="gap-px flex glow-text items-center">
                {title}
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-up">
                        <polyline points="18 15 12 9 6 15"></polyline>
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-chevron-down">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                )}
            </button>
            {isOpen && (
                <ul className="absolute z-50 w-80 text-white bg-transparent/65 shadow-lg rounded-md">
                    {items.map((item) => (
                        <li
                            key={item._id} // Use item._id for unique key
                            onClick={() => handleItemClick(item)}
                            className="px-4 py-2 glow-text cursor-pointer"
                        >
                            <a href={`/${item.slug}`}> {/* Access the slug property for the link */}
                                {item.title} {/* Render the title instead of the entire object */}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
