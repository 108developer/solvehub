// utils/Dropdown.js
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
            <button onClick={toggleDropdown} className="flex glow-text items-center">
                {title}
            </button>
            {isOpen && (
                <ul className="absolute z-50 w-80 bg-transparent/65 shadow-lg rounded-md">
                    {items.map((item, index) => (
                        <li
                            key={index}
                            onClick={() => handleItemClick(item)}
                            className="px-4 py-2  glow-text cursor-pointer"
                        >
                            <a href={`/${item}`}>
                            {item}
                            </a>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default Dropdown;
