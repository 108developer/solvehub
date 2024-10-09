import useAuthStore from '@/store/store';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

const LoginModal = () => {
    const { login, loading, error, user, fetchUser, logout } = useAuthStore();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    // Open and close modal
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => {
        setIsOpen(false)
        router.push('/');
    };

    // Handle form submit for login
    const handleSubmit = async (e) => {
        e.preventDefault();
        await login(username, password);

        // If login is successful, redirect to profile and close modal
        if (!error && user) {
            closeModal();
            router.push('/');
        }
    };

    // Fetch user when component mounts to check if logged in
    useEffect(() => {
        if (user === null) {
            fetchUser();
        } else { console.log(user) }
    }, []);

    // Redirect to login page if user is not available
    useEffect(() => {
        if (user === !null) {
            router.push('/')
        }
    }, [user]);

    // Handle logout


    return (
        <>
            {/* Button to open the modal */}
            <button onClick={openModal} className="glow-text text-white rounded">
                Login
            </button>

            {/* Modal Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50"
                    onClick={closeModal}
                >
                    {/* Modal Content */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className={`bg-[#EBEBEB] rounded-lg shadow-lg max-w-sm w-full p-6 transform transition-all duration-300 ease-in-out
              ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Login</h2>

                        {/* Login Form */}
                        <form onSubmit={handleSubmit}>
                            {error && <p className="text-red-500">{error}</p>}
                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2" htmlFor="username">
                                    Username:
                                </label>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-600 mb-2" htmlFor="password">
                                    Password:
                                </label>
                                <input
                                    type="text"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-full"
                            >
                                {loading ? 'Logging in...' : 'Login'}
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
            )}
        </>
    );
};

export default LoginModal;
