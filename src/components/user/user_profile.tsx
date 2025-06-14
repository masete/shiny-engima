"use client";

import React, { useState, ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { BsShop } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Bookmark, ShoppingCart } from "lucide-react";

interface User {
    full_name: ReactNode;
    email: string;
    username: string;
}

const Profile = () => {
    const [user, setUser] = useState<User | null>(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    const toggleDropdown = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleRedirect = (path: string) => {
        router.push(path);
        setDropdownOpen(false);
    };

    const handleLogout = () => {
        sessionStorage.removeItem("access_token");
        sessionStorage.removeItem("refresh_token");
        setUser(null); // clear user state
        setDropdownOpen(false);
        router.push("/option");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            const dropdown = document.getElementById("profile-dropdown");
            if (dropdown && !dropdown.contains(event.target as Node)) {
                setDropdownOpen(false);
            }
        };

        if (dropdownOpen) {
            document.addEventListener("click", handleClickOutside);
        } else {
            document.removeEventListener("click", handleClickOutside);
        }

        return () => document.removeEventListener("click", handleClickOutside);
    }, [dropdownOpen]);

    useEffect(() => {
        const getUser = async () => {
            const token = sessionStorage.getItem('access_token');

            if (!token) {
                setLoading(false);
                return;
            }

            try {
                const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
                const endpoint = "/auth/user/me";

                const res = await fetch(`${baseUrl}${endpoint}`, {
                    method: "GET",
                    headers: {
                        accept: "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });

                if (!res.ok) throw new Error('Failed to fetch user data');

                const data: User = await res.json();
                setUser(data);
            } catch (error: any) {
                console.error('Failed to fetch user data:', error);
            } finally {
                setLoading(false);
            }
        };

        getUser();
    }, []);

    return (
        <div className="mb-4 ml-3 gap-2 md:gap-6 flex flex-wrap items-center bg-gray-100 pt-2 px-4 md:px-6 lg:px-8">
            <div className="flex items-center space-x-3 md:space-x-4">
                <FaRegHeart size={20} className="text-black hover:text-blue-500 cursor-pointer" />
                <Link href={'/cart'}>
                    <ShoppingCart size={20} className="text-black hover:text-blue-500 cursor-pointer" />
                </Link>
                {user && (
                    <Link href={'/topVendors/portfolio'}>
                        <BsShop className="text-black text-lg md:text-xl" />
                    </Link>
                )}
            </div>

            <div className="relative flex items-center">
                <div className="border-2 rounded-full cursor-pointer flex items-center" onClick={toggleDropdown}>
                    <Image
                        src={user ? "/profilepic1.jpg" : "/user.svg"}
                        alt="User icon"
                        width={40}
                        height={40}
                        className="border-2 border-white rounded-full bg-blue-900 object-cover w-10 h-10 md:w-10 md:h-10"
                    />
                </div>

                {dropdownOpen && (
                    <div
                        id="profile-dropdown"
                        className="absolute right-0 mt-20 w-48 bg-white border rounded-lg shadow-lg z-50"
                    >
                        {user ? (
                            <>
                                <button
                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                                    onClick={() => handleRedirect("/settings")}
                                >
                                    Settings
                                </button>
                                <button
                                    className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-200"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </button>
                            </>
                        ) : (
                            <button
                                className="block w-full px-2 py-2 text-center text-black/90 hover:bg-gray-200"
                                onClick={() => handleRedirect("/option")}
                            >
                                Login
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default Profile;
