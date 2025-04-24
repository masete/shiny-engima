"use client";

import { useEffect, useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

type FormData = {
  business_name: string;
  ursb_reg: string;
  business_location: string;
  business_industry: string;
  email: string;
  password: string;
};

interface AuthFormProps {
  type: "login" | "register";
}

export default function AuthForm({ type }: AuthFormProps) {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [industries, setIndustries] = useState<string[]>([]);

  useEffect(() => {
    const loadIndustries = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/industries`
        );
        const data = await res.json();
        setIndustries(data);
      } catch (error) {
        console.error("Error fetching industries:", error);
      }
    };

    loadIndustries();

    // Check for session
    const accessToken = sessionStorage.getItem("access_token");
    if (accessToken) {
      router.push("/");
    }
  }, [router]);

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    if (type === "register") {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/sign-up-step-one-vendor`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          }
        );

        const result = await res.json();

        if (res.ok) {
          toast.success("Registration successful!");
          router.push("/login");
        } else {
          toast.error("Registration failed!");
          console.error("Register error:", result);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error occurred");
      }
    } else if (type === "login") {
      try {
        const payload = new URLSearchParams({
          grant_type: "",
          username: data.email,
          password: data.password,
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

        const result = await res.json();

        if (res.ok) {
          sessionStorage.setItem("access_token", result.access_token);
          router.push("/");
        } else {
          toast.error("Invalid credentials");
          console.error("Login error:", result);
        }
      } catch (error) {
        console.error("Unexpected error:", error);
        toast.error("Unexpected error occurred");
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full space-y-5 text-white"
    >
      {type === "register" && (
        <>
          <input
            {...register("business_name", { required: true })}
            className={`w-full p-2 rounded-md bg-gray-800 ${
              errors.business_name ? "border border-red-500" : ""
            }`}
            placeholder="Business Name"
            type="text"
          />
          <input
            {...register("ursb_reg", { required: true })}
            className={`w-full p-2 rounded-md bg-gray-800 ${
              errors.ursb_reg ? "border border-red-500" : ""
            }`}
            placeholder="URSB Reg Number"
            type="text"
          />
          <input
            {...register("business_location", { required: true })}
            className={`w-full p-2 rounded-md bg-gray-800 ${
              errors.business_location ? "border border-red-500" : ""
            }`}
            placeholder="Business Location"
            type="text"
          />
          <select
            {...register("business_industry", { required: true })}
            className={`w-full p-2 rounded-md bg-gray-800 ${
              errors.business_industry ? "border border-red-500" : ""
            }`}
          >
            <option value="">Select Industry</option>
            {industries.map((industry) => (
              <option key={industry} value={industry}>
                {industry}
              </option>
            ))}
          </select>
        </>
      )}
      <input
        {...register("email", { required: true })}
        className={`w-full p-2 rounded-md bg-gray-800 ${
          errors.email ? "border border-red-500" : ""
        }`}
        placeholder="Email"
        type="email"
      />
      <input
        {...register("password", { required: true })}
        className={`w-full p-2 rounded-md bg-gray-800 ${
          errors.password ? "border border-red-500" : ""
        }`}
        placeholder="Password"
        type="password"
      />
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
      >
        {type === "register" ? "Register" : "Login"}
      </button>
    </form>
  );
}
