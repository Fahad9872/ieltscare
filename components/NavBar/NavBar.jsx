import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import logo from "../../assets/Pages/Home/images/logo.png";
import Image from "next/image";
import { AiOutlineMenu } from "react-icons/ai";
import { GiCancel } from "react-icons/gi";
import { capitalizeFirstLetter, isEmpty } from "../../utils/utils";
import { GoChevronDown } from "react-icons/go";
import { FiArrowRight } from "react-icons/fi";

const NavBar = () => {
  const text = `hover:text-[#FE0000]`;

  const router = useRouter();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const [topLocationBar, setTopLocationBar] = useState(false);
  const [courseBar, setCourseBar] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let userName = "Ravi";

  const examData = [
    {
      title: "CUET Exam",
      description: "For UG, PG, Research Programs",
      link: "/cuet",
    },
    {
      title: "IIT-JEE Exam",
      description: "UG Engineering Exam",
      link: "/iit-jee",
    },
    {
      title: "School Preparation",
      description: "for 6th to 12th exam",
      link: "/school-preparation",
    },
    {
      title: "NEET Exam",
      description: "UG medical admissions.",
      link: "/neet",
    },
    { title: "CLAT Exam", description: "Law entrance exam", link: "/clat" },
    {
      title: "Defence Exams",
      description: "Defence exams",
      link: "/defence-exams",
    },
  ];

  const scrollToSection = (id) => {
    const section = document.getElementById("app-download");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setTopLocationBar(false); // Close the dropdown after navigation
    }
  };

  const examDataMobile = [
    { title: "CUET ", description: "For UG, PG, Research Programs" },
    { title: "IIT-JEE ", description: "UG Engineering Exam" },
    { title: "School Preparation", description: "for 6th to 12th exam" },
    { title: "NEET ", description: "UG medical admissions." },
    { title: "CLAT ", description: "Law entrance exam" },
  ];

  const removeDropdown = (e) => {
    setTopLocationBar(false);
    e.stopPropagation();
  };

  useEffect(() => {
    document.body.addEventListener("click", removeDropdown);
  }, []);

  return (
    <div className="">
      <div
        className={`flex justify-between items-center md:px-10 px-3 py-3 bg-white`}
      >
        <div
          onClick={() => {
            router.push(`/`);
          }}
        >
          <Image
            width={80}
            height={30}
            sizes="(max-width: 768px) 100vw, 170px"
            priority={true}
            fetchPriority="high"
            src={logo}
            alt=""
          />
        </div>

        <div>
          <nav className="md:flex hidden">
            <div
              onClick={() => {
                router.push(`/`);
              }}
            >
              <p
                className={`${text}  text-[16px] font-semibold text-[#FE0000] mx-3 cursor-pointer`}
              >
                Home
              </p>
            </div>

            <div className="relative">
              {/* Toggle Button */}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setTopLocationBar(!topLocationBar);
                  setCourseBar(false);
                  e.stopPropagation();
                }}
                className="flex items-center mx-3 cursor-pointer"
              >
                <p className="text-[#000000] text-[16px]">Exams we cover</p>
                {topLocationBar ? (
                  <GoChevronDown className="ml-1 text-[16px] rotate-180" />
                ) : (
                  <GoChevronDown className="ml-1 text-[16px]" />
                )}
              </div>

              {/* Dropdown Content */}
              {topLocationBar && (
                <div className="absolute top-12 right-0 w-[600px] bg-white shadow-lg rounded-[10px] p-6 z-50 ">
                  <div className="grid grid-cols-2 gap-x-5">
                    {examData.map((exam, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          if (exam.link) {
                            router.push(exam.link);
                          } else {
                            scrollToSection(exam.id);
                          }
                          e.stopPropagation();
                        }}
                        className="flex flex-col cursor-pointer pb-4"
                      >
                        <div className="flex items-center justify-between w-full">
                          <h3 className="text-[18px] font-semibold text-black">
                            {exam.title}
                          </h3>
                          <FiArrowRight size={20} className="text-purple-500" />
                        </div>
                        <p className="text-[14px] text-[#787878]">
                          {exam.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                router.push(`/blogs`);
              }}
            >
              <p
                className={`${text} text-[#000000] text-[16px] mx-3 cursor-pointer`}
              >
                Success Story
              </p>
            </div>
            <div
              onClick={() => {
                router.push(`/blogs`);
              }}
            >
              <p
                className={`${text} text-[#000000] text-[16px] mx-3 cursor-pointer`}
              >
                Contact Us
              </p>
            </div>
          </nav>
        </div>

        {!isAuthenticated ||
        (typeof window !== "undefined" &&
          window.localStorage.getItem("USER_TYPE") === "2") ? (
          <div className=" md:flex hidden flex-row items-center gap-5">
            <button
              onClick={() => {
                router.push(
                  "https://play.google.com/store/apps/details?id=com.ostello.mentors.mentorify"
                );
              }}
              className="bg-[#FE0000] text-white px-5 py-3 font-medium rounded-[20px]"
            >
              Start Preparing Now
            </button>
          </div>
        ) : (
          <div className="md:flex hidden justify-center text-black space-x-2">
            <div
              className="flex items-center"
              onClick={() =>
                router.push(
                  typeof window !== "undefined" &&
                    window.localStorage.getItem("USER_TYPE") === "1"
                    ? "/admin-dashboard/overview"
                    : typeof window !== "undefined" &&
                      window.localStorage.getItem("USER_TYPE") === "3"
                    ? "/profile"
                    : typeof window !== "undefined" &&
                      window.localStorage.getItem("USER_TYPE") === "6"
                    ? "/caller-dashboard/search"
                    : typeof window !== "undefined" &&
                      window.localStorage.getItem("USER_TYPE") === "7"
                    ? "/caller-dashboard/search"
                    : "/"
                )
              }
            >
              <div className="bg-[#FE0000] h-10 w-10 rounded-full flex items-center justify-center p-1 text-white cursor-pointer ">
                {userName?.slice(0, 1).toUpperCase()}
              </div>
              <p className="text-[#FE0000] text-lg ml-2 cursor-pointer">
                {!isEmpty(userName) && capitalizeFirstLetter(userName)}
              </p>
            </div>
          </div>
        )}

        <div className="md:hidden block">
          <div className="bg-[#FE0000] rounded px-3 py-2">
            <AiOutlineMenu
              className="text-white cursor-pointer"
              size={20}
              onClick={() => {
                setIsMenuOpen((prev) => !prev);
              }}
            />
          </div>
          <div
            className={`transition-all duration-300 ${
              !isMenuOpen ? "translate-x-full" : "translate-x-0"
            } w-[50vh] h-screen bg-white shadow-4xl  -right-2 top-0 p-5 rounded-r-xl z-50 fixed z-50`}
          >
            <div className="flex justify-between items-center">
              <Link legacyBehavior prefetch={false} href={"/"}>
                <Image
                  width={120}
                  height={30}
                  sizes="(max-width: 768px) 100vw, 120px"
                  src={logo}
                  alt=""
                />
              </Link>
              <GiCancel
                onClick={() => {
                  setIsMenuOpen(false);
                }}
                className="text-xl text-[#FF0000] cursor-pointer"
              />
            </div>
            {!isAuthenticated ||
            (typeof window !== "undefined" &&
              window.localStorage.getItem("USER_TYPE") === "2") ? (
              <div className="mt-3 ">
                <button
                  onClick={() => {
                    router.push(
                      "https://play.google.com/store/apps/details?id=com.ostello.mentors.mentorify"
                    );
                  }}
                  className="bg-[#FE0000] text-white px-5 py-3 font-medium rounded-[20px]"
                >
                  Start Preparing Now
                </button>
              </div>
            ) : (
              <div className="flex mt-3 text-black space-x-2">
                <div
                  className="flex items-center"
                  onClick={() =>
                    router.push(
                      typeof window !== "undefined" &&
                        window.localStorage.getItem("USER_TYPE") === "1"
                        ? "/admin-dashboard/overview"
                        : typeof window !== "undefined" &&
                          window.localStorage.getItem("USER_TYPE") === "3"
                        ? "/profile"
                        : typeof window !== "undefined" &&
                          window.localStorage.getItem("USER_TYPE") === "6"
                        ? "/caller-dashboard/search"
                        : typeof window !== "undefined" &&
                          window.localStorage.getItem("USER_TYPE") === "7"
                        ? "/caller-dashboard/search"
                        : "/"
                    )
                  }
                >
                  <div className="bg-[#FE0000] h-8 w-8 rounded-full flex items-center justify-center p-1 text-white cursor-pointer ">
                    {userName?.slice(0, 1).toUpperCase()}
                  </div>
                  <p className="text-[#FE0000] text-md ml-2 cursor-pointer">
                    {!isEmpty(userName) && capitalizeFirstLetter(userName)}
                  </p>
                </div>
              </div>
            )}

            <div
              onClick={() => {
                router.push(`/`);
              }}
            >
              <p
                className={`${text}  text-[20px] font-semibold text-[#FE0000] mx-3 cursor-pointer my-1`}
              >
                Home
              </p>
            </div>

            <div className="relative my-1">
              {/* Toggle Button */}
              <div
                onClick={(e) => {
                  e.preventDefault();
                  setTopLocationBar(!topLocationBar);
                  setCourseBar(false);
                  e.stopPropagation();
                }}
                className="flex items-center mx-3 cursor-pointer"
              >
                <p className="text-[#000000] text-[20px]">Exams we cover</p>
                {topLocationBar ? (
                  <GoChevronDown className="ml-1 text-[16px] rotate-180" />
                ) : (
                  <GoChevronDown className="ml-1 text-[16px]" />
                )}
              </div>

              {/* Dropdown Content */}
              {topLocationBar && (
                <div className="absolute top-7 left-0 w-fit bg-white shadow-lg rounded-[10px] p-6 z-50 ">
                  <div className="">
                    {examData.map((exam, index) => (
                      <div
                        key={index}
                        onClick={(e) => {
                          if (exam.link) {
                            router.push(exam.link);
                          } else {
                            scrollToSection(exam.id);
                          }
                          e.stopPropagation();
                        }}
                        className="flex flex-col cursor-pointer pb-2"
                      >
                        <div className="flex items-center justify-between w-full">
                          <h3 className="text-[16px] font-semibold text-black">
                            {exam.title}
                          </h3>
                          <FiArrowRight size={16} className="text-purple-500" />
                        </div>
                        <p className="text-[14px] text-[#787878]">
                          {exam.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div
              onClick={() => {
                router.push(`/blogs`);
              }}
            >
              <p
                className={`${text} text-[#000000] text-[20px] mx-3 cursor-pointer`}
              >
                Blog
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
