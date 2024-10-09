"use client"
import useAuthStore from '@/store/store';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const AccountSidebar = ({ closeModal }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const { logout, user } = useAuthStore()
    const router = useRouter();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle account update logic here
        console.log('Account updated:', { email, password });
        closeModal(); // Close the sidebar after submit
    };

    const handleLogout = async () => {
        await logout();
        router.push('/');
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
                {user ? <button className='w-full text-black bg-blue-50' onClick={handleLogout}>Logout</button> : <><h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Account</h2>
                    <form onSubmit={handleSubmit} className="flex-1">
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="email">
                                Email:
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-600 mb-2" htmlFor="password">
                                Password:
                            </label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full p-2 border border-gray-300 rounded"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                        >
                            Update Account
                        </button>
                    </form></>}

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

export default AccountSidebar;
