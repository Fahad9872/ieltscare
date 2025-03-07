import React, { useEffect, useState } from "react";
import Carousel from "react-elastic-carousel";
import ReactPlayer from "react-player";
import useScreenWidth from "../hooks/useScreenWidth";
const data = [
  {
    id: 1,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Ravi",
    subject: "Mechanical Engineering",
    link: "",
  },
  {
    id: 2,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Pulok",
    subject: "Mechanical Engineering",
    link: "",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Kibria",
    subject: "Mechanical Engineering",
    link: "",
  },
  {
    id: 4,
    image:
      "https://media.istockphoto.com/id/1447889800/photo/two-college-student-female-friends-smiling-ready-for-classes-at-the-university-campus.jpg?s=612x612&w=0&k=20&c=IIxWOgexUu8DHDq_jPNMgPeoqsy77w9da_-9dUZeQD4=",
    name: "Fahad",
    subject: "Mechanical Engineering",
    link: "",
  },
];
const SuccessStory = () => {
  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3 },
  ];
  const { screenWidth } = useScreenWidth();

  return (
    <div>
      {data?.length ? (
        <>
          <div className="py-5 ">
            <p className="px-5 text-[35px] text-[#414141]  font-bold">
              NOT JUST MORE SUCCESS STORIES THAN ANY OTHER IELTS SCHOOL, 10X
              MORE!
            </p>
            <p className="px-5 md:w-3/4 my-5  text-[18px] text-[#888888]">
              Find out why from our success stories below.
            </p>

            <div className={"px-5"}>
              <div className=" md:py-5 ">
                <Carousel
                  renderPagination={({ pages, activePage, onClick }) => {
                    return (
                      <div className="flex items-center space-x-2 mt-3 ">
                        {pages?.map((page, i) => {
                          const isActivePage = activePage === page;
                          return (
                            <div
                              className={`cursor-pointer  h-2 rounded-md my-5 transition-all duration-500 ease-in-out ${
                                isActivePage
                                  ? "bg-[#f2496a] md:w-28 w-16 "
                                  : "bg-gray/20 md:w-6 w-2"
                              }`}
                              key={i}
                              onClick={() => onClick(page)}
                              // active={isActivePage}
                            />
                          );
                        })}
                      </div>
                    );
                  }}
                  breakPoints={breakPoints}
                  showArrows={
                    screenWidth > 768 && data?.length > 3 ? true : false
                  }
                  // enableAutoPlay
                  autoPlaySpeed={1500}
                  pagination={
                    screenWidth > 768 && data?.length > 3 ? true : false
                  }
                >
                  {data?.map((item, i) => (
                    <div key={i} className="  ">
                      <div
                        key={item.id}
                        style={{
                          border: "1px solid #D0D5DD",
                          boxShadow: "0px 1px 10px rgba(85, 85, 85, 0.14)",
                        }}
                        className="   w-full  lg:w-[380px] h-fit    lg:mx-5 my-5  rounded-[15px]  "
                      >
                        <div className="mb-3 ">
                          {/* <img
                                          className="  
                                          w-full min-h-[240px] max-h-[244px]  rounded-t-xl mb-2"
                                          src={item.image}
                                          alt=""
                                      /> */}

                          {/* <video
                            controls
                            className="w-full rounded-t-md"
                            key={i}
                            src={item?.video?.video[0]?.url}
                            alt=""
                          /> */}

                          {item?.video?.video?.length ? (
                            // <VideoPlayer
                            //   thumbnailURL={`https://cdn.ostello.co.in/${item?.video?.thumbnail[0]?.key}`}
                            //   videoURL={`https://cdn.ostello.co.in/${item?.video?.video[0]?.key}`}
                            //   playing={false}
                            //   loop={false}
                            // />
                            <ReactPlayer
                              onPlay={() => setPlay(item?.video?.video[0]?.key)}
                              onClickPreview={() =>
                                setPlay(item?.video?.video[0]?.key)
                              }
                              id={`video-${item?.video?.video[0]?.key}`}
                              controlsList="nodownload"
                              playing={play === item?.video?.video[0]?.key}
                              light={
                                item?.video?.thumbnail?.length
                                  ? `https://cdn.ostello.co.in/${item?.video?.thumbnail[0]?.key}`
                                  : ""
                              }
                              controls
                              className="rounded-t-[15px] md:h-[250px] h-[200px] min-w-[320px] w-full "
                              url={`https://cdn.ostello.co.in/${item?.video?.video[0]?.key}`}
                            />
                          ) : (
                            <img
                              className="  
                          w-full min-h-[230px] max-h-[244px]  rounded-xl mb-2"
                              src={item?.image}
                              alt=""
                            />
                          )}

                          <div className=" px-5  my-4 ">
                            <p className="font-bold md:text-[22px] text-[16px]">
                              {item.name}
                            </p>

                            <p className="text-base text-[#A4A4A4]">
                              {item?.subject}
                            </p>
                            <p className="text-base text-[#A4A4A4]">
                              {item?.rank?.length ? `Rank : ${item?.rank}` : ""}
                            </p>
                            <p className="text-base text-[#A4A4A4]">
                              {item?.percentage?.length
                                ? `Percentage : ${item?.percentage}`
                                : ""}
                            </p>

                            <p className="text-base text-[#A4A4A4]">
                              {item?.description?.slice(0, 100)}
                            </p>

                            {/* <p
                            onClick={async (e) => {
                              if (!isAuthenticated) {
                                setOpen(true);
                                dispatch(setAuthModalState(2));
                              } else {
                                router.push("/scheduleSession");
                                dispatch(setSingleTopper(item));
                              }
                            }}
                            // onClick={() => {
                            //     router.push('/scheduleSession')
                            // }}
                            className={`font-medium text-sm xl:text-base w-max  p-1 px-2 text-[#f2496a] border-2 rounded  border-[#f2496a] transition-transform duration-500 ease-in-out hover:shadow-3xl hover:scale-[1.1] mt-7`}
                          >
                            Schedule a session
                          </p> */}
                          </div>
                        </div>

                        {/* <p className="text-lg text-center md:w-full  w-3/4 mx-auto">
                                      {item.description}
                                  </p> */}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
};

export default SuccessStory;
