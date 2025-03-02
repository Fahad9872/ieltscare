import image1 from "../../assets/aboutus/image1.jpg";
import image11 from "../../assets/aboutus/image11.jpg";
import image2 from "../../assets/aboutus/image2.png";
import image22 from "../../assets/aboutus/image22.png";
import image3 from "../../assets/aboutus/image3.png";
import image33 from "../../assets/aboutus/image33.png";


const Vision = () => {
    return (
        <section className=" px-6 py-10 lg:pt-16 md:max-w-[1100px] mx-auto">
          <h1 className="text-[#FE0000] md:text-center font-bold text-4xl  lg:text-5xl mb-6">
            Our Vision
          </h1>
          <h2 className=" font-normal text-xl text-[#787878] text-center">
          We aim to empower individuals to excel in the IELTS exam and achieve their global aspirations.
          </h2>

          <div className="grid grid-cols-6 md:gap-x-8">
            <div className="md:col-span-2  my-8 col-span-6 relative  group cursor-pointer">
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.78) 4.11%, rgba(28, 28, 28, 0.0312) 40.88%) , url(${image3.src})`,
                }}
                className="md:block hidden   bg-no-repeat bg-cover bg-center min-h-[500px] object-fill  w-full mx-auto rounded-3xl relative"
              >
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="">
                  <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-white">
                    <div className="px-5">
                      <p className="text-white  text-center font-semibold text-4xl">
                           Expert IELTS Training
                      </p>
                      <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                      Gain access to top-tier IELTS coaching, strategies, and resources to achieve your desired band score.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FE0000] py-[5px] w-3/4  absolute -bottom-1 left-0 right-0 mx-auto rounded-2xl"></div>
              </div>
              <div
                style={{
                  background: `linear-gradient(0deg, rgba(0, 0, 0, 0.78) 4.11%, rgba(28, 28, 28, 0.0312) 40.88%) , url(${image33.src})`,
                }}
                className="h-[300px] md:hidden block  bg-no-repeat bg-cover bg-center rounded-3xl "
              >
                <div className="border-[#FE0000] absolute  px-5  border-l-8 mt-auto mb-auto top-0 bottom-0 -left-1 rounded h-[250px]"></div>
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="absolute ml-auto mr-auto group-hover:top-[35%]  left-0 right-0 bottom-10 text-center text-white my-auto">
                  <div className="px-5">
                    <p className="text-white  text-center font-semibold text-4xl">
                         Expert IELTS Training
                    </p>
                    <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                    Gain access to top-tier IELTS coaching, strategies, and resources to achieve your desired band score.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 col-span-6  my-8 relative group cursor-pointer">
              <div
                style={{ backgroundImage: `url(${image2.src})` }}
                className="md:block hidden   bg-no-repeat bg-cover bg-center min-h-[500px] object-fill  w-full mx-auto rounded-3xl relative"
              >
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="">
                  <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-white">
                    <div className="px-5">
                      <p className="text-white  text-center font-semibold text-4xl">
                          Personalized Study Plans
                      </p>
                      <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                         Customized IELTS study plans tailored to your strengths and weaknesses for maximum improvement.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FE0000] py-[5px] w-3/4  absolute -bottom-1 left-0 right-0 mx-auto rounded-2xl"></div>
              </div>
              <div
                style={{ backgroundImage: `url(${image22.src})` }}
                className="h-[300px] md:hidden block  bg-no-repeat bg-cover bg-center rounded-3xl "
              >
                <div className="border-[#FE0000] absolute  px-5  border-l-8 mt-auto mb-auto top-0 bottom-0 -left-1 rounded h-[250px]"></div>
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="absolute ml-auto mr-auto group-hover:top-[35%]  left-0 right-0 bottom-10 text-center text-white my-auto">
                  <div className="px-5">
                    <p className="text-white  text-center font-semibold text-4xl">
                        Personalized Study Plans
                    </p>
                    <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                    Customized IELTS study plans tailored to your strengths and weaknesses for maximum improvement.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-span-2 col-span-6 relative  my-8 group cursor-pointer">
              <div
                style={{ backgroundImage: `url(${image1.src})` }}
                className="md:block hidden   bg-no-repeat bg-cover bg-center min-h-[500px] object-fill  w-full mx-auto rounded-3xl relative"
              >
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="">
                  <div className="absolute ml-auto mr-auto left-0 right-0 bottom-10 text-center text-white">
                    <div className="px-5">
                      <p className="text-white  text-center font-semibold text-4xl">
                      Achieve Global Success
                      </p>
                      <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                      IELTS success can unlock opportunities for studying, working, and settling abroad—let’s make it happen!
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-[#FE0000] py-[5px] w-3/4 mx-auto absolute -bottom-1 left-0 right-0 mx-auto rounded-2xl"></div>
              </div>

              <div
                style={{ backgroundImage: `url(${image11.src})` }}
                className="h-[300px] md:hidden block  bg-no-repeat bg-cover bg-center rounded-3xl "
              >
                <div className="border-[#FE0000] absolute px-5  border-l-8 mt-auto mb-auto top-0 bottom-0 -left-1 rounded h-[250px]"></div>
                <div
                  style={{
                    content: "",
                    display: "block",
                    position: "absolute",
                    height: " 0%",
                    width: "100%",
                    bottom: "0",
                    transition: "height 0.5s ease-out",
                    background:
                      "linear-gradient(0deg, #FE0000 21.35%, rgba(254, 0, 0, 0) 136.54%)",
                  }}
                  className="group-hover:h-full rounded-3xl"
                ></div>
                <div className="absolute ml-auto mr-auto group-hover:top-[35%]  left-0 right-0 bottom-10 text-center text-white my-auto">
                  <div className="px-5">
                    <p className="text-white  text-center font-semibold text-4xl">
                    Achieve Global Success
                    </p>
                    <p className="text-center text-lg hidden group-hover:block  mt-5 ">
                    IELTS success can unlock opportunities for studying, working, and settling abroad—let’s make it happen!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>)
}

export default Vision