import React, { useEffect, useState } from 'react';

interface NotificationsProps {
  isAuthenticated: boolean;
}

const Notifications: React.FC<NotificationsProps> = ({ isAuthenticated }) => {
  return (
    <div className={`flex flex-row items-start justify-start max-w-lg left-0 ${!isAuthenticated ? 'blur-sm' : ''}`}>
    <div className="flex justify-between px-1 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 -mr-2">
      <div className="relative w-6 h-2 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <img className="w-[40px] h-[40px] object-cover rounded-full" src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="" />
        </div>
      </div>
    </div>
    <div className="flex justify-between px-1 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 -mr-2">
      <div className="relative w-6 h-2 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <img className="w-[40px] h-[40px] object-cover rounded-full" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="" />
        </div>
      </div>
    </div>
    <div className="flex justify-between px-1 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 -mr-2">
      <div className="relative w-6 h-2 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <img className="[40px] h-[40px] object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
      </div>
    </div>
    <div className="flex justify-between px-1 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 -mr-2">
      <div className="relative w-6 h-2 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <img className="[40px] h-[40px] object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
      </div>
    </div>
    <div className="flex justify-between px-1 py-1 bg-white items-center gap-1 rounded-lg border border-gray-100 -mr-2">
      <div className="relative w-6 h-2 rounded-full hover:bg-red-700 bg-gradient-to-r from-purple-400 via-blue-500 to-red-400 ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-gray-200 rounded-full border-2 border-white">
          <img className="[40px] h-[40px] object-cover rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
        </div>
      </div>
    </div>
  </div>
  );
};

const NotificationsPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const token = sessionStorage.getItem('access_token');
      
      // Debugging: Check if the token is correctly retrieved
      console.log('Retrieved token:', token);
      
      if (!token) {
        console.warn('User is not authenticated: No token found');
        setIsAuthenticated(false);
        setLoading(false);
        return;
      }

      try {
        // http://48.216.240.183/
        const res = await fetch("http://48.216.240.183/market-place/auth/user/me", {
        // const res = await fetch("http://watotomarketplace.com/market-place/auth/user/me", {
          method: "GET",
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) {
          // If token is invalid or fetch fails
          console.error('Failed to fetch user data:', res.status);
          setIsAuthenticated(false);
          setLoading(false);
          return;
        }

        const data = await res.json();
        console.log('User data:', data); // Optional: log the user data for verification
        setIsAuthenticated(true);
      } catch (error) {
        console.error('Failed to fetch user data:', error);
        setIsAuthenticated(false); // Ensure we reset auth if there's an error
      } finally {
        setLoading(false); // Stop the loading spinner
      }
    };

    getUser();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return <Notifications isAuthenticated={isAuthenticated} />;
};

export default NotificationsPage;
