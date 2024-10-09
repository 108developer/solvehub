import { useState } from 'react';
import PageModal from './PageModal';
import SettingsModal from './SettingsModal';
import AccountModal from './AccountModal';
import useAuthStore from '../../store/store';
import { useParams } from 'next/navigation';

const EditModal = () => {
    const [isProfileOpen, setIsProfileOpen] = useState(false);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [isAccountOpen, setIsAccountOpen] = useState(false);
    const openProfileModal = () => {
        setIsProfileOpen(true)
        setIsSettingsOpen(false)
        setIsAccountOpen(false)
    };
    const closeProfileModal = () => setIsProfileOpen(false);

    const openSettingsModal = () => {
        setIsSettingsOpen(true)
        setIsProfileOpen(false)
        setIsAccountOpen(false)
    };
    const closeSettingsModal = () => setIsSettingsOpen(false);

    const openAccountModal = () => {
        setIsAccountOpen(true)
        setIsProfileOpen(false)
        setIsSettingsOpen(false)
    };
    const closeAccountModal = () => setIsAccountOpen(false);

    const handleFormSubmit = (formData) => {
        console.log('Form data received:', formData);
        // Handle form submission (e.g., API call)
    };
    return (
        <div className="flex">
            {/* Sidebar */}
            <div className="w-fit items-center gap-5 text-white flex">
                <button onClick={openProfileModal} className=" hover:bg-gray-700">
                    Edit Page
                </button>
                <button onClick={openSettingsModal} className=" hover:bg-gray-700">
                    Settings
                </button>
                <button onClick={openAccountModal} className=" hover:bg-gray-700">
                    Account
                </button>
            </div>

            {/* Modals */}
            {isProfileOpen && <PageModal onSubmit={handleFormSubmit} closeModal={closeProfileModal} />}
            {isSettingsOpen && <SettingsModal closeModal={closeSettingsModal} />}
            {isAccountOpen && <AccountModal closeModal={closeAccountModal} />}
        </div>
    );
};

export default EditModal;
