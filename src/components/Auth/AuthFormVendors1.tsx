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
import { Eye, EyeOff } from "lucide-react";

const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const [industry, setIndustry] = useState<Industry[]>([]);
  const [previousData, setPreviousData] = useState<FormData | null>(null);
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? {
            business_name: "",
            phone_number: "",
            business_email: "",
            about_business: "",
            address: "",
            industry_id: 0,
            registration_no: "",
          }
        : { business_email: "", password: "" },
  });

  useEffect(() => {
    const loadIndustry = async () => {
      try {
        const data = await fetchIndustry();
        setIndustry(data);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      }
    };

    loadIndustry();
  }, []);

  const defaultIndustries = [{ id: "default", name: "General Industry" }];
  const industryList = industry.length > 0 ? industry : defaultIndustries;

  useEffect(() => {
    const previousData = sessionStorage.getItem("registerData");
    if (!previousData) {
      toast.error("Previous data is missing");
      return;
    }
    setPreviousData(JSON.parse(previousData));
  }, []);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (type === "register") {
      if (!previousData) {
        toast.error("Previous data is missing");
        return;
      }

      const payload = {
        ...previousData,
        ...data,
        user_type: 1,
        business_id: 0,
        business_type: 0,
        start_date: "2025-05-27",
      };

      try {
        const response = await fetch(
          "https://watotomarketplace.com/market-place/auth/sign-up-step-one-vendor",
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
        const formData = new URLSearchParams();
        formData.append("grant_type", "password");
        formData.append("username", data.business_email);
        formData.append("password", data.password);
        formData.append("scope", "");
        formData.append("client_id", "string");
        formData.append("client_secret", "string");

        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-in`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/x-www-form-urlencoded",
              accept: "application/json",
            },
            body: formData.toString(),
          }
        );

        if (res.ok) {
          const result = await res.json();
          sessionStorage.setItem("access_token", result.access_token);
          const storedToken = sessionStorage.getItem("access_token");
          // sessionStorage.setItem("token_type", result.token_type);
          sessionStorage.setItem("user_type", result.user_type);
          const storedUserType = sessionStorage.getItem("user_type");

          
          console.log("Stored Access Token:", storedToken);
          console.log("user type:", storedUserType);
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
    <div className="min-h-screen w-full flex flex-col md:flex-row">
      {/* Left Image Section */}
      <div className="hidden md:flex w-full md:w-3/5 relative">
        <img
          src="/background.jpeg"
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-70 z-10 flex flex-col items-center justify-center text-white px-8">
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
          <div className="w-10 border-t-2 border-white my-4"></div>
          <p className="text-center text-lg max-w-xl">
            Equip believers with tailored biblical-based knowledge and skills that adequately address different areas of societal brokenness.
          </p>
          <p className="mt-10 text-sm">A Ministry of Watoto Church</p>
        </div>
      </div>

      {/* Form Section */}
      <div className="w-full md:w-2/5 px-6 py-12 flex justify-center items-center bg-gray-100">
        <div className="w-full max-w-md">
          <div className="mb-4 text-center">
            <img
              src="/Marketplace_logo_black.png"
              alt="logo"
              className="mx-auto mb-2"
              height={80}
              width={150}
            />
            <Link href="/vendor/vsignup" className="flex items-center text-sm justify-start space-x-2">
              <FaArrowLeft />
              <span>Back</span>
            </Link>
            <h3 className="mt-4 text-lg font-semibold">
              {type === "register" ? "Sign Up and Join the Community" : "Vendor Log In"}
            </h3>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
                {[
                  { name: "business_name", placeholder: "Business Name" },
                  { name: "phone_number", placeholder: "Business Phone Number" },
                  { name: "about_business", placeholder: "Business Description" },
                  { name: "address", placeholder: "Business Address" },
                  { name: "registration_no", placeholder: "URSB Reg Number" },
                ].map(({ name, placeholder }) => (
                  <div key={name} className="flex flex-col">
                    <input
                      {...register(name as keyof FormData, { required: `${placeholder} is required` })}
                      type="text"
                      placeholder={placeholder}
                      className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors[name as keyof FormData] && (
                      <p className="text-red-500 text-sm">
                        {errors[name as keyof FormData]?.message as string}
                      </p>
                    )}
                  </div>
                ))}

                <div className="flex flex-col">
                  <select
                    {...register("industry_id", { required: "Industry is required" })}
                    className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="">Select Industry</option>
                    {industryList.map((ind) => (
                      <option key={ind.id} value={ind.id}>
                        {ind.name}
                      </option>
                    ))}
                  </select>
                  {errors.industry_id && (
                    <p className="text-red-500 text-sm">{errors.industry_id.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="flex flex-col">
              <input
                {...register("business_email", { required: "Business email is required" })}
                type="email"
                placeholder="Business Email"
                className="border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.business_email && (
                <p className="text-red-500 text-sm">{errors.business_email.message}</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="mb-1 text-sm font-medium">Password</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  {...register("password", { required: "Password is required" })}
                  placeholder="••••••••"
                  className="w-full border px-3 py-2 pr-10 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute top-1/2 right-3 transform -translate-y-1/2"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {type === "register" ? "Submit" : "Log In"}
            </button>

            <p className="text-center mt-4 text-sm">
              {type === "register" ? (
                <Link href="/vendor/vlogin" className="text-blue-600 hover:underline">
                  Already have an account? Log in
                </Link>
              ) : (
                <Link href="/vendor/vsignup" className="text-blue-600 hover:underline">
                  Don’t have an account? Sign up
                </Link>
              )}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;

