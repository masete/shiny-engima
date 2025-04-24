"use client";

import { useState } from "react";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { FaEye, FaEyeSlash } from "react-icons/fa";

interface FormData {
  password: string;
  surname?: string;
  f_name?: string;
  phone_number?: string;
  email: string;
}

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { f_name: "", surname: "", phone_number: "", email: "", password: "" }
        : { email: "", password: "" },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    console.log(data);

    if (type === "register") {
      // Handle register logic here
      let res;
      const payload = {
        ...(data as FormData),
        user_type: 0, // Adding user_type with a value of 0
      };

      console.log("payload", payload)

      try {
        res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-up-step-one`,
          // "http://watotomarketplace.com/market-place/auth/sign-up-step-one", 
          {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
          body: JSON.stringify(payload),
        });

        if (res.ok) {
          const responseData = await res.json(); // Parse the response data
          const user_id = responseData.id; // Assuming user_id is returned

          console.log(user_id);

          // Navigate to OTP page with user_id as a query parameter or state
          sessionStorage.setItem("user_id", user_id);
          // console.log(user_id);
          router.push("/otp");
        } else {
          const errorData = await res.json();
          console.error("Server response:", errorData);
          toast.error("Something went wrong");
        }
      } catch (error) {
        // console.error("Request failed", error);
        toast.error("Network error occurred");
      }
    }

    if (type === "login") {
      // Handle login logic here
      let res;

      try {
        const payload = new URLSearchParams({
          // grant_type: "", // Include this if needed
          username: data.email,
          password: data.password,
          // scope: "", // Include this if needed
          // client_id: "", // Include this if needed
          // client_secret: "", // Include this if needed
        });

        console.log("Payload:", payload.toString());
        
        res = await fetch("http://watotomarketplace.com/market-place/auth/sign-in", {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "accept": "application/json",
          },
          body: payload.toString(),
        });

        if (res.ok) {
          const result = await res.json();
          console.log("Login successful:", result);

          // Store the token in sessionStorage
          sessionStorage.setItem("access_token", result.access_token);
          const storedToken = sessionStorage.getItem("access_token");
          console.log("Stored Access Token:", storedToken);
  
          router.push("/");
        } else {
          toast.error("Invalid credentials");
          const errorData = await res.json();
          console.log("Payload before sending:", payload.toString());
          console.error("Login error:", errorData);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col md:flex-row items-center">
      {/* Left side (image with overlay text) */}
      <div className="hidden md:flex relative w-full md:w-3/5 h-full bg-gradient-to-tr from-purple-400 to-green-400">
        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center px-10 text-white">
          <Link href="/">
            <img
              src="/Marketplace_logo_white.png"
              alt="logo"
              className="mb-4"
              height={100}
              width={280}
            />
          </Link>

          <h2 className="text-4xl font-bold">EQUIP</h2>
          <div className="border-2 w-10 border-white inline-block my-4"></div>
          <p className="text-lg leading-relaxed">
            Equip believers with tailored biblical-based knowledge and skills
            that adequately address different areas of societal brokenness.
          </p>
          <p className="mt-20 text-sm">A Ministry of Watoto Church</p>
        </div>
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <img
          src="/background.jpeg"
          alt="background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right side (form) */}
      <div className="w-full md:w-2/5 h-full bg-gray-100 flex flex-col justify-center items-center px-8 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-6">
            <img
              src="/Marketplace_logo_black.png"
              alt="logo"
              className="mx-auto mb-4"
              height={80}
              width={150}
            />

          <Link href="/option">
            <div className="flex items-center text-sm text-start justify-start space-x-2">
                <FaArrowLeft />
                <span>Back</span>
            </div>
          </Link>


            <h3 className="text-2xl font-bold">
              {type === "register" ? "Sign Up" : "Log In"}
            </h3>
          </div>

          <div className="w-full ml-8 justify-center items-center bg-gray-100">
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
                <div className="relative">
                  <div className="flex w-[80%]  items-center border-2 px-4 py-1">
                    <input
                      {...register("f_name", { required: "First name is required" })}
                      type="text"
                      placeholder="First Name"
                      className={`flex-1 bg-transparent outline-none ${errors.f_name ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="text-gray-500" />
                  </div>
                  {errors.f_name && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.f_name.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="flex w-[80%]  items-center border-2 px-4 py-1">
                    <input
                      {...register("surname", { required: "Last name is required" })}
                      type="text"
                      placeholder="Last Name"
                      className={`flex-1 bg-transparent outline-none ${errors.surname ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="text-gray-500" />
                  </div>
                  {errors.surname && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.surname.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="flex w-[80%]  items-center border-2 px-4 py-1">
                    <input
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      placeholder="Phone Number"
                      className={`flex-1 bg-transparent outline-none ${errors.phone_number ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="text-gray-500" />
                  </div>
                  {errors.phone_number && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.phone_number.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="relative">
              <div className="flex w-[80%]  items-center border-2 px-4 py-1">
                <input
                  {...register("email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className={`flex-1 bg-transparent outline-none ${errors.email ? "border-red-500" : ""}`}
                />
                <EmailOutlined className="text-gray-500" />
              </div>
              {errors.email && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.email.message}</p>
              )}
            </div>

            <div className="relative">
              <div className="flex w-[80%]  items-center border-2 px-4 py-1">
                <input
                  {...register("password", { required: "Password is required" })}
                  type="password"
                  placeholder="Password"
                  className={`flex-1 bg-transparent outline-none ${errors.password ? "border-red-500" : ""}`}
                />

              <button
                type="button"
                className="text-gray-500 ml-2"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
                {/* <LockOutlined className="text-gray-500" /> */}
              </div>
              {errors.password && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-[80%] py-1 mt-2 bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {type === "register" ? "Sign Up" : "Log In"}
            </button>
          </form>
          </div>

          <p className="text-center mt-4">
            {type === "register" ? (
              <Link href="/buyer/login">
                Already have an account?{" "}
                <span className="text-blue-600 font-semibold">Log In</span>
              </Link>
            ) : (
              <Link href="/option">
                Don’t have an account?{" "}
                <span className="text-blue-600 font-semibold">Sign Up</span>
              </Link>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
