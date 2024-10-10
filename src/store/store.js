import { RequestCookies } from 'next/dist/compiled/@edge-runtime/cookies';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';


const baseURL = 'https://slovehub-be.vercel.app'; // Your Node.js backend URL

// Zustand store to manage authentication state
const useAuthStore = create(persist((set) => ({
  user: null, // User object (null when not logged in)
  error: null, // Authentication error state
  loading: false, // Loading state for login/signup actions
  serviceData: {}, // Service data for individual services
  allServices: [], // All services data
  allSubjects: [],

  // Login action
  login: async (username, password) => {
    set({ loading: true, error: null });
    try {
      const userData = { username, password };
      console.log(userData);
      const response = await fetch(`${baseURL}/auth/login`, {
        method: "POST", // Set method to POST
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData), // Stringify the body
      });

      if (!response.ok) {
        throw new Error('Login failed'); // Handle non-200 responses
      }

      const data = await response.json(); // Parse JSON response
      console.log(data)
      set({ user: data.user, loading: false });
    } catch (err) {
      set({ error: err.message || 'Login failed', loading: false });
    }
  },


  // Logout action
  logout: async () => {
    try {
      await fetch(`${baseURL}/auth/logout`, {
        method: 'POST', // Ensure the method is POST
      });
      set({ user: null }); // Clear user on logout
    } catch (err) {
      console.error('Logout failed', err);
    }
  },

  // Fetch the current user from the backend (for SSR or client-side check)
  fetchUser: async () => {
    try {
      const response = await fetch(`${baseURL}/auth/profile`, {
        headers: {
          'Content-Type': 'application/json', // Specify content type        
        },
        credentials: 'include'
      });
      const data = await response.json();
      console.log(data.user)
      set({ user: data.user });
    } catch (err) {
      set({ user: null });
      console.error(err); // Log any errors
    }
  },
  // Inside Zustand store (store code)
  loadServiceBySlug: async (slug) => {
    try {
      const response = await fetch(`${baseURL}/page/${slug}`);
      if (!response.ok) {
        throw new Error(`Failed to load service with status: ${response.status}`); // Log the status code
      }
      const data = await response.json();
      set({ serviceData: data });
    } catch (err) {
      console.error('Error loading service data:', err); // Log any errors
      set({ error: err.message || 'Failed to load service', loading: false });
    }
  },


  updateService: async (update) => {
    try {
      const response = await fetch(`${baseURL}/page/update/${update.slug}`, {
        method: "POST", // Change this to 'PUT' if your backend expects a PUT request
        headers: {
          'Content-Type': 'application/json', // Set the content type
        },
        body: JSON.stringify(update.formState), // Ensure formState is structured correctly
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error(`Failed to update service with status: ${response.status}`); // Log the status code
      }
      console.log(response.body); // Check response for debugging

      const data = response // Expect updated page data
      console.log(data.body); // Log the updated data for debugging

      set({ serviceData: data.body }); // Update state with the new service data
    } catch (err) {
      console.error('Error updating service data:', err); // Log any errors
      set({ error: err.message || 'Failed to update service', loading: false });
    }
  },

  loadServices: async () => {
    try {
      const response = await fetch(`${baseURL}/page/services/title`, {
        headers: {
          'Content-Type': 'application/json', // Specify content type
        },
      })// Ensure this is correct
      if (!response.ok) {
        throw new Error('Failed to load services'); // Handle non-200 responses
      }
      const data = await response.json(); // Parse JSON response
      set({ allServices: data }); // Accessing data structure correctly
    } catch (err) {
      console.error(err); // Log the error for debugging
      set({ error: err.message || 'Failed to load services', loading: false });
    }
  },
  loadSubjects: async () => {
    try {
      const response = await fetch(`${baseURL}/page/subjects/title`, {
        headers: {
          'Content-Type': 'application/json', // Specify content type
        },
      })// Ensure this is correct
      if (!response.ok) {
        throw new Error('Failed to load services'); // Handle non-200 responses
      }
      const data = await response.json(); // Parse JSON response
      set({ allSubjects: data }); // Accessing data structure correctly
    } catch (err) {
      console.error(err); // Log the error for debugging
      set({ error: err.message || 'Failed to load services', loading: false });
    }
  },
})));

export default useAuthStore;
