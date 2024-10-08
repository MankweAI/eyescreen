import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdCheckCircle } from "react-icons/md";
import BasicForm from "@/components/GoogleForm";
import ImageSlider from "@/components/ImageSlider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import ChatPopup from "@/components/ChatPopUp";
import Members from "@/components/Members";


export default function Home() {

  return (
    <>
      <GoogleAnalytics />
      <div className=" w-full flex flex-col justify-center items-center">
        <main className="w-full h-auto  flex flex-col justify-center items-center gap-0">
          <section className="flex flex-col sm:flex-row justify-between  p-2 sm:p-4 md:p-6 lg:p-8 items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 bg-sky-200">
            <div className="flex flex-col justify-between items-center sm:w-full md:w-1/2 gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 mt-5 sm:mt-7 md:mt-10 lg:mt-12 xl:mt-15">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-6xl text-center font-black text-gray-700">
                Simple, fun and non-diagnostic
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-start text-gray-700 font-medium">
                We encourage users to undergo comprehensive eye screenings,
                increasing bookings for your practice
              </p>
              <div className="sm:w-1/2 lg:w-1/2 w-3/4 mt-8 ">
                <h1 className="bg-[#C60D69] px-2 py-1 text-center rounded-xl text-white sm:px-3 sm:py-2  md:px-4 md:py-2  lg:px-4  text-2xl font-bold">
                  Launching Soon
                </h1>
              </div>
            </div>

            <div className="flex justify-center items-start w-full md:w-1/2 gap-4 mt-10">
              <Image
                src="/images/eye-test-image.png"
                width={500}
                height={200}
                alt="Logo"
                className="w-full object-contain"
              />
            </div>
          </section>

          <section className="flex flex-col sm:flex-row justify-between  p-2 sm:p-4 md:p-6 lg:p-8 items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 sm:mt-7 md:mt-10 lg:mt-12 ">
            <div className="flex flex-col justify-between items-center sm:w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 2xl:gap-7 mt-5 sm:mt-7 md:mt-10 lg:mt-12 xl:mt-15">
              <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-black text-gray-700 p-2 flex justify-center gap-4">
                About{" "}
                <span className="text-[#C60D69] border-2 border-[#C60D69] px-2 rounded-2xl text-2xl sm:text-3xl md:text-4xl text-center inline-block w-full">
                  EyeScreen
                </span>
              </h1>

              <div className="flex justify-center items-center bg-transparent w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 gap-2 p-0 rounded-xl">
                <MdCheckCircle
                  style={{ color: "#C60D69" }}
                  className="h-6 w-6"
                />
                <div className="flex justify-center items-center bg-transparent w-full gap-2 p-2 border-2 rounded-xl">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start text-gray-700 font-medium whitespace-pre-line w-full">
                    A platform designed to drive eye health awareness and to
                    encourage users to undergo comprehensive eye tests
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-transparent w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 gap-2 p-0 rounded-xl">
                <MdCheckCircle
                  style={{ color: "#C60D69" }}
                  className="h-6 w-6"
                />
                <div className="flex justify-center items-center bg-transparent w-full gap-2 p-2 border-2 rounded-xl">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start text-gray-700 font-medium whitespace-pre-line w-full">
                    We achieve this by offering fun quizzes and simple, basic
                    and non-diagnostic eye pre-screens
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-transparent w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 gap-2 p-0 rounded-xl">
                <MdCheckCircle
                  style={{ color: "#C60D69" }}
                  className="h-6 w-6"
                />
                <div className="flex justify-center items-center bg-transparent w-full gap-2 p-2 border-2 rounded-xl">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start text-gray-700 font-medium whitespace-pre-line w-full">
                    We send the user`s score to you and ask them to book a
                    follow-up
                  </p>
                </div>
              </div>

              <div className="flex justify-center items-center bg-transparent w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 gap-2 p-0 rounded-xl">
                <MdCheckCircle
                  style={{ color: "#C60D69" }}
                  className="h-6 w-6"
                />
                <div className="flex justify-center items-center bg-transparent w-full gap-2 p-2 border-2 rounded-xl">
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start text-gray-700 font-medium whitespace-pre-line w-full">
                    We send weekly eye care tips in your name (optional)
                  </p>
                </div>
              </div>
              <div className="flex justify-center items-center bg-transparent w-full sm:w-3/4 lg:w-3/4 xl:w-1/2 gap-2 p-0 rounded-xl">
                <MdCheckCircle
                  style={{ color: "#C60D69" }}
                  className="h-6 w-6"
                />
                <div className="flex justify-start items-center bg-transparent w-full gap-2 p-2 border-2 rounded-xl">
                  <div className="flex justify-between items-center bg-transparent w-full gap-2">
                    {" "}
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-start text-gray-700 font-medium whitespace-pre-line">
                      We reach your users anywhere
                    </p>
                    <Image
                      src="/images/facebook-icon.svg"
                      alt="Logo"
                      width={40}
                      height={10}
                      className="inline-block cursor-pointer"
                    />
                    <Image
                      src="/images/whatsapp_icon.svg"
                      alt="Logo"
                      width={40}
                      height={10}
                      className="inline-block cursor-pointer"
                    />
                    <Image
                      src="/images/instagram-icon.svg"
                      alt="Logo"
                      width={40}
                      height={10}
                      className="inline-block cursor-pointer"
                    />
                    <Image
                      src="/images/web-icon.svg"
                      alt="Logo"
                      width={40}
                      height={10}
                      className="inline-block cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col sm:flex-col justify-between  p-2 sm:p-4 md:p-6 lg:p-8 items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 sm:mt-7 md:mt-10 lg:mt-12 bg-sky-100">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-black text-gray-700">
              Quizzes & Tests
            </h1>
            <ImageSlider />
          </section>

          <section className="flex flex-col sm:flex-col justify-between p-2  items-center w-full gap-2 mt-12 ">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-black text-gray-700">
              Our Volunteers
            </h1>
            <p className="text-sm sm:text-base md:text-sm lg:text-lg text-center text-gray-700 font-medium whitespace-pre-line w-full md:w-1/2">
              Click for website
            </p>
            <Members />
          </section>
          <section className="flex flex-col sm:flex-col justify-between  p-2 sm:p-4 md:p-6 lg:p-8 items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-5 sm:mt-7 md:mt-10 lg:mt-12">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-black text-gray-700">
              Register for a two-month trial
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-center text-gray-700 font-medium whitespace-pre-line w-full md:w-1/2">
              Try us, give us feedback, and cancel anytime
              <br />
              <br />
              If we made a difference, keep us for R600/month
            </p>
            <BasicForm />
          </section>

          <section className="flex flex-col sm:flex-col justify-between p-2  items-center w-full gap-2 sm:gap-3 md:gap-4 lg:gap-5 xl:gap-6 mt-0  ">
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl text-center font-black text-gray-700">
              10+
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl text-center text-gray-700 font-medium whitespace-pre-line w-full md:w-1/2">
              Registered participants <br />
              Goal: 100
            </p>
          </section>
          <ChatPopup />
        </main>

        <section className="flex flex-col sm:flex-col justify-between p-2 items-center w-full gap-2 mt-4">
          <div className="inline-block cursor-pointer">
            <Image
              src="/images/motto.png"
              alt="Logo"
              width={500}
              height={10}
              className="w-full sm:w-[300px] md:w-[400px] lg:w-[500px] h-auto"
            />
          </div>
        </section>
      </div>
    </>
  );
}
