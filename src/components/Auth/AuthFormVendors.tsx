"use client";

import { useEffect, useState } from "react";
import { fetchCampusses, fetchSkills } from '../../../actions/campuss';
import { Campuss, Skill, Industry, FormData } from "@/lib/types";
import {
  EmailOutlined,
  LockOutlined,
  PersonOutline,
} from "@mui/icons-material";
import { useForm, SubmitHandler } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { PiGreaterThanLight } from "react-icons/pi";
import toast from "react-hot-toast";
import { FaArrowLeft } from "react-icons/fa";


const AuthForm = ({ type }: { type: "register" | "login" }) => {
  const [campusses, setCampusses] = useState<Campuss[]>([]);
  const [skills, setSkills] = useState<Skill[]>([]);
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues:
      type === "register"
        ? { contact_person_f_name: "", contact_person_surname: "",contact_person_l_name:"", contact_person_phone_number: "", contact_person_email: "",campus_id: 0, cell_no: "" }
        : { contact_person_email: "", password: "" },
  });


  // fetch profession
  useEffect(() => {
    const loadSkills = async () => {
      try {
        const data = await fetchSkills();
        console.log("campusses skills", data)
        setSkills(data);
      } catch (error) {
        console.error("Failed to fetch skills:", error);
      }
    };

    loadSkills();
  }, []);

   // fetch campusse
  useEffect(() => {
    const loadCampusses = async () => {
      try {
        const data = await fetchCampusses();
        // console.log("campusses", data)
        setCampusses(data);
      } catch (error) {
        console.error("Failed to fetch industries:", error);
      }
    };

    loadCampusses();
  }, []);


  const onSubmit: SubmitHandler<FormData> = async (data) => {
    // const previousData = JSON.parse(sessionStorage.getItem("registerData") || "{}") as FormData;
    sessionStorage.setItem("registerData", JSON.stringify(data)); // Store form data
    console.log("registerData",JSON.stringify(data) )
    router.push("/vendor/vsignup1"); // Navigate to next form
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
          <div className="text-center mb-4">
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

            <h3 className="hidden md:block text-x font-bold">
              {type === "register" ? "Sign Up and Join the Community" : "Vendor Log In"}
            </h3>
          </div>

        <div className="w-full ml-8 justify-center items-center bg-gray-100">
          <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
            {type === "register" && (
              <>
                <div className="relative items-center">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("contact_person_f_name", { required: "First name is required" })}
                      type="text"
                      placeholder="First Name"
                      className={`flex-1 bg-transparent outline-none ${errors.contact_person_f_name ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="hidden md:block text-gray-500" />
                  </div>
                  {errors.contact_person_f_name && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.contact_person_f_name.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("contact_person_surname", { required: "surname is required" })}
                      type="text"
                      placeholder="surname"
                      className={`flex-1 bg-transparent outline-none ${errors.contact_person_surname ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="hidden md:block text-gray-500" />
                  </div>
                  {errors.contact_person_surname && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.contact_person_surname.message}</p>
                  )}
                </div>


                 <div className="relative">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("contact_person_l_name", { required: "Last name is required" })}
                      type="text"
                      placeholder="Last Name"
                      className={`flex-1 bg-transparent outline-none ${errors.contact_person_l_name ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="hidden md:block text-gray-500" />
                  </div>
                  {errors.contact_person_l_name && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.contact_person_l_name.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="flex w-[80%] items-center border-2 px-4 py-1">
                    <input
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      type="tel"
                      placeholder="Phone Number"
                      className={`flex-1 bg-transparent outline-none ${errors.contact_person_phone_number ? "border-red-500" : ""}`}
                    />
                    <PersonOutline className="hidden md:block text-gray-500" />
                  </div>
                  {errors.contact_person_phone_number && (
                    <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.contact_person_phone_number.message}</p>
                  )}
                </div>
              </>
            )}

            <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("contact_person_email", { required: "Email is required" })}
                  type="email"
                  placeholder="Email"
                  className={`flex-1 bg-transparent outline-none ${errors.contact_person_email ? "border-red-500" : ""}`}
                />
                <EmailOutlined className="hidden md:block text-gray-500" />
              </div>
              {errors.contact_person_email && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.contact_person_email.message}</p>
              )}
            </div>

             {/* Skills Dropdown */}
          {/*  <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <select
                  {...register("profesion", { required: "Skill selection is required" })}
                  className={`flex-1 bg-transparent outline-none ${
                    errors.profesion ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Select Profession</option>
                  {skills.map((skill) => (
                    <option key={skill.id} value={skill.id}>
                      {skill.name}
                    </option>
                  ))}
                </select>
                
              </div>
              {errors.profesion && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">
                  {errors.profesion.message}
                </p>
              )}
            </div> 
            */}

            

            <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <select
                  {...register("campus_id", { required: "Campuss selection is required" })}
                  className={`flex-1 bg-transparent outline-none ${
                    errors.campus_id ? "border-red-500" : ""
                  }`}
                >
                  <option value="">Watoto Campus</option>
                  {campusses.map((campus) => (
                    <option key={campus.id} value={campus.id}>
                      {campus.name}
                    </option>
                  ))}
                </select>
                {/* <LockOutlined className="hidden md:block text-gray-500" /> */}
              </div>
              {errors.campus_id && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">
                  {errors.campus_id.message}
                </p>
              )}
            </div>

            <div className="relative">
              <div className="flex w-[80%] items-center border-2 px-4 py-1">
                <input
                  {...register("cell_no", { required: "Cell Number is required" })}
                  type="cell_no"
                  placeholder="Cell Number"
                  className={`flex-1 bg-transparent outline-none ${errors.cell_no ? "border-red-500" : ""}`}
                />
                {/* <LockOutlined className="hidden md:block text-gray-500" /> */}
              </div>
              {errors.cell_no && (
                <p className="absolute text-red-500 text-xs left-4 bottom-1">{errors.cell_no.message}</p>
              )}
            </div>

            
                <button
                  type="submit"
                  className="w-[80%] py-2 mt-2 bg-blue-600 text-white hover:bg-blue-700 transition"
                >
                  {type === "register" ? "Next" : "Log In"}
                </button>
          
           
          </form>
          </div>

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
