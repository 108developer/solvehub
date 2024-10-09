import { useState } from 'react';

const SettingsSidebar = ({ closeModal }) => {
    const [notifications, setNotifications] = useState(false);
    const [privacy, setPrivacy] = useState('public'); // options: public, private

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle settings update logic here
        console.log('Settings updated:', { notifications, privacy });
        closeModal(); // Close the sidebar after submit
    };

    return (
        <div
            className="fixed inset-0 flex justify-end bg-gray-800 bg-opacity-50 z-50"
            onClick={closeModal}
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="bg-white w-1/3 h-full p-6 flex flex-col"
            >
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Settings</h2>
                <form onSubmit={handleSubmit} className="flex-1">
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="notifications">
                            Notifications:
                        </label>
                        <input
                            type="checkbox"
                            id="notifications"
                            checked={notifications}
                            onChange={() => setNotifications(!notifications)}
                        />
                        <span className="ml-2 text-gray-600">
                            {notifications ? 'Enabled' : 'Disabled'}
                        </span>
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-600 mb-2" htmlFor="privacy">
                            Privacy:
                        </label>
                        <select
                            id="privacy"
                            value={privacy}
                            onChange={(e) => setPrivacy(e.target.value)}
                            className="w-full p-2 border border-gray-300 rounded"
                        >
                            <option value="public">Public</option>
                            <option value="private">Private</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                    >
                        Update Settings
                    </button>
                </form>

                {/* Close Modal Button */}
                <button
                    onClick={closeModal}
                    className="mt-4 w-full text-center text-blue-600 hover:underline"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default SettingsSidebar;
