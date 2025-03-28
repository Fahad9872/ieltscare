import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { AiFillSetting, AiOutlineDatabase } from "react-icons/ai";
import { FiLogOut } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import {
  MdDashboard,
  MdOutlineDashboard,
  MdOutlineHighlight,
  MdOutlineInsertChart,
  MdOutlineSubscriptions,
  MdReviews,
} from "react-icons/md";
import { RiFileMarkLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import Link from "next/link";
import logo from "../../../assets/Pages/Merchant/logo.png";
import {
  FaExclamationCircle,
  FaMoneyCheckAlt,
  FaSchool,
  FaUsers,
} from "react-icons/fa";
import { FaCrown } from "react-icons/fa";
import { SiGoogleads } from "react-icons/si";
import { IoRadioOutline } from "react-icons/io5";
import dashboardlogo from "../../../assets/Pages/Merchant/Sidebar/dashboard.png";
import dashboardActivelogo from "../../../assets/Pages/Merchant/Sidebar/dashboard-active.png";
import coursesActivelogo from "../../../assets/Pages/Merchant/Sidebar/course-active.png";
import courseslogo from "../../../assets/Pages/Merchant/Sidebar/course.png";
import liveActivelogo from "../../../assets/Pages/Merchant/Sidebar/live-active.png";
import livelogo from "../../../assets/Pages/Merchant/Sidebar/live.png";
import appActivelogo from "../../../assets/Pages/Merchant/Sidebar/app-active.png";
import applogo from "../../../assets/Pages/Merchant/Sidebar/app.png";
import studentActivelogo from "../../../assets/Pages/Merchant/Sidebar/student-active.png";
import studentlogo from "../../../assets/Pages/Merchant/Sidebar/student.png";
import walletActivelogo from "../../../assets/Pages/Merchant/Sidebar/wallet-active.png";
import walletlogo from "../../../assets/Pages/Merchant/Sidebar/wallet.png";
import chatActivelogo from "../../../assets/Pages/Merchant/Sidebar/chat-active.png";
import chatlogo from "../../../assets/Pages/Merchant/Sidebar/chat.png";
import leadsActivelogo from "../../../assets/Pages/Merchant/Sidebar/leads-active.png";
import leadslogo from "../../../assets/Pages/Merchant/Sidebar/leads.png";
import batchesActivelogo from "../../../assets/Pages/Merchant/Sidebar/batches-active.png";
import batcheslogo from "../../../assets/Pages/Merchant/Sidebar/batches.png";
import attendanceActivelogo from "../../../assets/Pages/Merchant/Sidebar/attendance-active.png";
import attendancelogo from "../../../assets/Pages/Merchant/Sidebar/attendance.png";
import notificationActivelogo from "../../../assets/Pages/Merchant/Sidebar/notification-active.png";
import notificationlogo from "../../../assets/Pages/Merchant/Sidebar/notification.png";
import facultyActivelogo from "../../../assets/Pages/Merchant/Sidebar/faculty-active.png";
import facultylogo from "../../../assets/Pages/Merchant/Sidebar/faculty.png";
import integrationActivelogo from "../../../assets/Pages/Merchant/Sidebar/integration-active.png";
import integrationlogo from "../../../assets/Pages/Merchant/Sidebar/integration.png";
import storeActivelogo from "../../../assets/Pages/Merchant/Sidebar/store-active.png";
import storelogo from "../../../assets/Pages/Merchant/Sidebar/store.png";
import analyticsActivelogo from "../../../assets/Pages/Merchant/Sidebar/analytics-active.png";
import analyticslogo from "../../../assets/Pages/Merchant/Sidebar/analytics.png";
import settingActivelogo from "../../../assets/Pages/Merchant/Sidebar/setting-active.png";
import settinglogo from "../../../assets/Pages/Merchant/Sidebar/setting.png";
import reelActivelogo from "../../../assets/Pages/Merchant/Sidebar/reel-active.png";
import reellogo from "../../../assets/Pages/Merchant/Sidebar/reel.png";
import assessmentActivelogo from "../../../assets/Pages/Merchant/Sidebar/assessment-active.png";
import assessmentlogo from "../../../assets/Pages/Merchant/Sidebar/assessment.png";
import fulllogo from "../../../assets/Pages/Merchant/fulllogo.png";
import axios from "axios";
import { LuLoader2 } from "react-icons/lu";

export default function Sidebar() {
  const router = useRouter();

  return (
    <>
      <aside
        className=" hidden  lg:block group hover:w-[230px] transition duration-700
          ease-in-out w-[75px]    overflow-y-scroll "
      >
        <div>
          <div
            onClick={() => {
              router.push("/");
            }}
            className="logo  my-2 group-hover:px-0 px-3  flex items-center gap-1"
          >
            <img
              className="w-[40px] h-[40px] group-hover:hidden block "
              src={logo.src}
              alt=""
            />
            <img
              className="group-hover:block hidden mr-3 "
              src={fulllogo.src}
              alt=""
            />
          </div>

          <div className="px-3  justify-start mt-10">
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard" || router.asPath === "/"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                <img
                  src={dashboardActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard" || router.asPath === "/"
                      ? "block"
                      : "hidden"
                  } `}
                  alt=""
                />

                <img
                  src={dashboardlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard" || router.asPath === "/"
                      ? "hidden"
                      : "block"
                  }`}
                  alt=""
                />

                <p className={`group-hover:block hidden `}>Dashboard</p>
              </div>
            </Link>
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/online-courses"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("online-course")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={coursesActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("online-course") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={courseslogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("online-course") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Courses</p>
              </div>
            </Link>
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/merchant-live"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("merchant-live")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={liveActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("merchant-live") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={livelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("merchant-live") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Free Classes</p>
              </div>
            </Link>
            {/* <Link
              legacyBehavior
              prefetch={false}
              href=""
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/your-app"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={appActivelogo.src}
                  className="w-[24px] h-[24px] group-hover/item:block hidden "
                  alt=""
                />
                <img
                  src={applogo.src}
                  className="w-[24px] h-[24px] group-hover/item:hidden block"
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Your App</p>
              </div>
            </Link> */}
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/manage-students"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("manage-students")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={studentActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("manage-students")
                      ? "block"
                      : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={studentlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("manage-students")
                      ? "hidden"
                      : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Manage Students</p>
              </div>
            </Link>
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/wallet"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/wallet"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={walletActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("wallet") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={walletlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("wallet") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Wallet</p>
              </div>
            </Link>

            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/reels"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/reels"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={reelActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/reels" ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={reellogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/reels" ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Reels</p>
              </div>
            </Link>

            {/* <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/assessment"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("assessment")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={assessmentActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("assessment") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={assessmentlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("assessment") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Assessment</p>
              </div>
            </Link> */}
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/leads"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/leads"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={leadsActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/leads" ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={leadslogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/leads" ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Leads</p>
              </div>
            </Link>
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/join-requests"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/join-requests"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={batchesActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/join-requests"
                      ? "block"
                      : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={batcheslogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/join-requests"
                      ? "hidden"
                      : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Join Requests</p>
              </div>
            </Link>

            {/* <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/notifications"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/notifications"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={notificationActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/notifications"
                      ? "block"
                      : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={notificationlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/notifications"
                      ? "hidden"
                      : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Notification</p>
              </div>
            </Link> */}
            {/* //faculty url add */}
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/faculty"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("faculty")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={facultyActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("faculty") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={facultylogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("faculty") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Manage Faculty</p>
              </div>
            </Link>

            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/integration"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/integration"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={integrationActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/integration"
                      ? "block"
                      : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={integrationlogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/integration"
                      ? "hidden"
                      : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Integration</p>
              </div>
            </Link>

            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/store"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath.includes("store")
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={storeActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("store") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={storelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("store") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Store</p>
              </div>
            </Link>

            {/* <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/your-app"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/your-app"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={analyticsActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath.includes("app") ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={analyticslogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath.includes("app") ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Analytics</p>
              </div>
            </Link> */}
            <Link
              legacyBehavior
              prefetch={false}
              href="/dashboard/settings"
              activeClassName="active"
            >
              <div
                className={`${
                  router.asPath === "/dashboard/settings"
                    ? "bg-[#F4EBFF] shadow-left-purple text-[#7D23E0] font-semibold"
                    : "text-[#7D7D7D] font-medium"
                } hover:bg-[#F4EBFF]  text-[14px] group/item hover:shadow-left-purple hover:text-[#7D23E0] hover:font-semibold  rounded-[10px] w-full  p-2 w-fit cursor-pointer my-1 flex items-center gap-2`}
              >
                {" "}
                <img
                  src={settingActivelogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:block ${
                    router.asPath === "/dashboard/settings" ? "block" : "hidden"
                  } `}
                  alt=""
                />
                <img
                  src={settinglogo.src}
                  className={`w-[24px] h-[24px] group-hover/item:hidden ${
                    router.asPath === "/dashboard/settings" ? "hidden" : "block"
                  }`}
                  alt=""
                />
                <p className={`group-hover:block hidden `}>Setting</p>
              </div>
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}
