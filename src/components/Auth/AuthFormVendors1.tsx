"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";
import { useEffect, useState } from "react";
import { fetchIndustry } from "../../../actions/campuss";
import { Industry } from "@/lib/types";
import { FormData } from "@/lib/types";


const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const [industry, setIndustry] = useState<Industry[]>([]);
  const [previousData, setPreviousData] = useState<FormData | null>(null);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { business_name: "", phone_number: "", business_email: "", about_business: "", address:'', industry_id : 0, registration_no: ""}
        : { business_email: "", password: "" },
  });


   useEffect(() => {
      const loadIndustry = async () => {
        try {
          const data = await fetchIndustry();
          // console.log("campusses", data)
          setIndustry(data);
        } catch (error) {
          console.error("Failed to fetch industries:", error);
        }
      };
  
      loadIndustry();
    }, []);


    const defaultIndustries = [{ id: "default", name: "General Industry" }]; // Default option

    const industryList = industry.length > 0 ? industry : defaultIndustries; //


    useEffect(() => {
      const previousData = sessionStorage.getItem("registerData");
    
      if (!previousData) {
        toast.error("Previous data is missing");
       // Redirect back if missing
        return;
      }
    
      setPreviousData(JSON.parse(previousData)); // Store previous data in state
      // console.log("previous data page2", previousData)
    }, []);

    const onSubmit: SubmitHandler<FormData> = async (data) => {
      if (type === "register") {
        if (!previousData) {
          toast.error("Previous data is missing");
          return;
        }
        console.log("previous data", previousData)
    
        const payload = {
          ...previousData,
          ...data,
          user_type: 1,
          "business_id": 0,
          "business_type": 0,
          "start_date": "2025-05-27",
        };

        console.log("full data", payload)
    
        try {
          const response = await fetch(
            "http://watotomarketplace.com/market-place/auth/sign-up-step-one-vendor",
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                accept: "application/json",
              },
              body: JSON.stringify(payload),
            }
          );
    
          const resultAction = await response.json();
    
          if (response.ok && resultAction?.id) {
            sessionStorage.setItem("user_id", resultAction.id);
            router.push("/vendor/vlogin");
            // router.push("/otp");
          } else {
            toast.error("Signup failed");
            console.error("Error response:", resultAction);
          }
        } catch (err) {
          console.error("Signup failed:", err);
          toast.error("Signup failed: Something went wrong");
        }
      } else if (type === "login") {
        try {
          const payload = new URLSearchParams({
            username: data.email,
            Password: data.password,
            grant_type: "",
            scope: "",
            client_id: "",
            client_secret: "",
          });
    
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                accept: "application/json",
              },
              body: payload.toString(),
            }
          );
    
          if (res.ok) {
            const result = await res.json();
            sessionStorage.setItem("access_token", result.access_token);
            router.push("/");
          } else {
            const errorData = await res.json();
            toast.error("Invalid credentials");
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
        <div className="w-full items-center justify-center max-w-md">
          <div className="text-center mb-2">
            <img
              src="/Marketplace_logo_black.png"
              alt="logo"
              className="mx-auto mb-2"
              height={80}
              width={150}
            />

        <Link href="/vendor/vsignup">
            <div className="flex items-center text-sm text-start justify-start space-x-2">
                <FaArrowLeft />
                <span>Back</span>
            </div>
        </Link>
          

            <h3 className="hidden md:block text-x font-bold">
              {type === "register" ? "Sign Up and Join the Community" : "Vendor Log In"}
            </h3>
          </div>

        <div className="w-full ml-8 justify-center items-center bg-gray-100">
            <h6 className="pb-2">Business Details</h6>
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
                <div className="relative items-center">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("business_name", { required: "Business name is required" })}
                      type="text"
                      placeholder="Business Name"
                      className={`flex-1 bg-transparent outline-none ${errors.business_name ? "border-red-500" : ""}`}
                    />
                    {/* <PersonOutline className="hidden md:block text-gray-500" /> */}
                  </div>
                  {errors.business_name && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.business_name.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("phone_number", { required: "Business phone number is required" })}
                      type="text"
                      placeholder="Business Phone Number"
                      className={`flex-1 bg-transparent outline-none ${errors.phone_number ? "border-red-500" : ""}`}
                    />
                    {/* <PersonOutline className="hidden md:block text-gray-500" /> */}
                  </div>
                  {errors.phone_number && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.phone_number.message}</p>
                  )}
                </div>

               

                <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("about_business", { required: "Description is required" })}
                  type="location"
                  placeholder="Business Description"
                  className={`flex-1 bg-transparent outline-none ${errors.about_business ? "border-red-500" : ""}`}
                />
                {/* <EmailOutlined className="hidden md:block text-gray-500" /> */}
              </div>
              {errors.about_business && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.about_business.message}</p>
              )}
            </div>

            <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("address", { required: "Address is required" })}
                  type="location"
                  placeholder="Business Address"
                  className={`flex-1 bg-transparent outline-none ${errors.address ? "border-red-500" : ""}`}
                />
                {/* <EmailOutlined className="hidden md:block text-gray-500" /> */}
              </div>
              {errors.address && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.address.message}</p>
              )}
            </div>

              <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <select
                  {...register("industry_id", { required: "Industry is required" })}
                  className={`flex-1 bg-transparent outline-none ${errors.industry_id  ? "border-red-500" : ""}`}
                >
                  <option value="">Select Industry</option>

                  {industryList.map((ind) => (
                    <option key={ind.id} value={ind.id}>
                      {ind.name}
                    </option>
                  ))}

                </select>
              </div>
              {errors.industry_id  && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.industry_id.message}</p>
              )}
            </div>

             <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("registration_no", { required: "URSB Registration number is required" })}
                  type="ursb_reg"
                  placeholder="URSB Reg Number"
                  className={`flex-1 bg-transparent outline-none ${errors.registration_no ? "border-red-500" : ""}`}
                />
           
              </div>
              {errors.registration_no && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.registration_no.message}</p>
              )}
            </div>
              </>
            )}
          
            

           <div className="relative">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("business_email", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      placeholder="Business Email"
                      className={`flex-1 bg-transparent outline-none ${errors.business_email ? "border-red-500" : ""}`}
                    />
                    {/* <PersonOutline className="hidden md:block text-gray-500" /> */}
                  </div>
                  {errors.business_email && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.business_email.message}</p>
                  )}
            </div>
            
            <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("password", { required: "Password is required" })}
                  type="Password"
                  placeholder="Password"
                  className={`flex-1 bg-transparent outline-none ${errors.password ? "border-red-500" : ""}`}
                />
           
              </div>
              {errors.password && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-[80%] py-2 mt-2 bg-blue-600 text-white hover:bg-blue-700 transition"
            >
              {type === "register" ? "Submit" : "Log In"}
            </button>
          </form>
          
          </div>
          {/* )} */}

          <p className="text-center mt-4">
            {type === "register" ? (
              <Link href="/vendor/vlogin">
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

