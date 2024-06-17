import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import { Link } from "react-router-dom";

function Home() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <section
        className="flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover"
        style={{ backgroundImage: `url("../images/homepage.png")` }}
      >
        <div>
          <div className="p-5 text-9xl text-white tracking-wider font-black font-bungee">
            DOUBLE S
          </div>
          <div className="text-center text-4xl text-white tracking-widest font-bold font-poppins">
            CREATIVE AGENCY
          </div>
          <div className="flex items-center justify-center absolute inset-x-0 bottom-10 text-center pt-10">
            <svg
              className="w-10 h-10 text-white animate-bounce"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 19V5m0 14-4-4m4 4 4-4"
              />
            </svg>
          </div>
        </div>
      </section>

      <div className="font-poppins">
        <div>
          {/* Experience */}
          <div className="m-20 mx-44 flex justify-between">
            <div className="flex pr-10 w-3/4">
              <div className="flex">
                <div className="pr-5">
                  <p className="text-7xl font-extrabold text-[#FF8C92]">03</p>
                </div>
                <div>
                  <p className="text-[#0A4251] text-3xl font-bold">
                    Years Experience
                  </p>
                  <p className="text-[#0A4251] text-3xl font-bold">In Field</p>
                  <p className="text-[#0A4251] pt-4">
                    At Double S Agency, we offer a comprehensive suite of
                    services designed to elevate your brand's social media
                    presence. we began our journey with a vision to
                    revolutionize the way brands connect with their audience
                    online.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex w-2/6">
              <ul className="list-outside text-[#0A4251] tracking-wider pr-5 space-y-5 text-left">
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="w-5 h-5 text-[#FF8C92]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>SOCIAL MEDIA MANAGEMENT</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="w-5 h-5 text-[#FF8C92]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>PHOTOGRAPHY</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="w-5 h-5 text-[#FF8C92]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>GRAPHIC DESIGN</span>
                </li>
                <li className="flex items-center space-x-3 rtl:space-x-reverse">
                  <svg
                    className="w-5 h-5 text-[#FF8C92]"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M3 4a1 1 0 0 0-.822 1.57L6.632 12l-4.454 6.43A1 1 0 0 0 3 20h13.153a1 1 0 0 0 .822-.43l4.847-7a1 1 0 0 0 0-1.14l-4.847-7a1 1 0 0 0-.822-.43H3Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  <span>LIVE STREAMING</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Experience */}

          {/* Parallax Border */}
          <div
            className="flex items-center justify-center h-72 bg-fixed bg-top bg-cover"
            style={{ backgroundImage: `url("../images/border1.png")` }}
          >
            <div>
              <div className="p-5 text-9xl text-transparent tracking-wider font-black font-bungee">
                DOUBLE S
              </div>
            </div>
          </div>
          {/* Parallax Border */}

          {/* Why Choose Us */}
          <div className="bg-[#0A4251] text-center py-12">
            <div className="mx-20 mt-10 mb-10">
              <h2 className="text-5xl font-extrabold text-[#fce6b9]">
                Why Choose Us?
              </h2>
              <p className="text-xl text-white mt-2 mb-16">
                Enhance Your Brand Using Our Service
              </p>
              <div className="flex justify-evenly space-x-12 mt-8">
                <div className="flex flex-col items-center">
                  <img
                    src="./images/videocont.svg"
                    alt="Video Content"
                    className="w-28 h-28"
                  />
                  <p className="text-white font-semibold mt-4 text-xl">
                    Video Content
                  </p>
                  <p className="text-white mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="./images/graphiccont.svg"
                    alt="Graphic Content"
                    className="w-28 h-28"
                  />
                  <p className="text-white font-semibold mt-4 text-xl">
                    Graphic Content
                  </p>
                  <p className="text-white mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
                <div className="flex flex-col items-center">
                  <img
                    src="./images/writecont.svg"
                    alt="Video Content"
                    className="w-28 h-28"
                  />
                  <p className="text-white font-semibold mt-4 text-xl">
                    Written Content
                  </p>
                  <p className="text-white mt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Why Choose Us */}

          {/* Our Work */}
          <div className="text-center py-12">
            <div className="mt-10 mb-10">
              <h2 className="text-5xl font-extrabold text-[#0A4251]">
                Our Work
              </h2>
              <p className="text-xl text-[#0A4251] mt-2 mb-16">
                Take A Look At Our Previous Work
              </p>
              <div className="grid grid-cols-4 gap-5">
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product1.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product2.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product3.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product4.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product5.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product6.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product7.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product8.png" className="w-full" />
                  <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Our Work */}

          {/* Our Packages */}
          <div className="text-center py-12 font-poppins">
            <div className="mx-36 mb-10">
              <h2 className="text-5xl font-extrabold text-[#0A4251]">
                Our Packages
              </h2>
              <p className="text-xl text-[#0A4251] mt-2 mb-16">
                Pick A Pack Best-Suited For Your Brand
              </p>
              <div className="flex flex-col">
                <div className="bg-[#fce6b9d2] h-30 p-8">
                  <div className="flex text-wrap items-center pl-8">
                    <svg
                      className="w-8 h-8 text-[#0A4251]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-tiktok"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3z" />
                    </svg>
                    <p className="text-4xl text-[#0A4251] font-semibold pl-3 pr-32">
                      Tiktok
                    </p>
                    <p className="text-sm text-[#0A4251] text-left w-3/4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, seddo eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="bg-[#ff8c9295] h-30 p-8 w-11/12">
                  <div className="flex text-wrap items-center pl-8">
                    <svg
                      className="w-9 h-9 text-[#0A4251]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
                    </svg>
                    <p className="text-4xl text-[#0A4251] font-semibold pl-3 pr-32">
                      Instagram
                    </p>
                    <p className="text-sm text-[#0A4251] text-left w-3/4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, seddo eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="bg-[#0a425158] h-30 p-8 w-10/12">
                  <div className="flex text-wrap items-center pl-8">
                    <svg
                      className="w-12 h-12 text-[#0A4251]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-images"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                      <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z" />
                    </svg>
                    <p className="text-4xl text-[#0A4251] font-semibold pl-3 pr-32 text-nowrap">
                      Graphic Design
                    </p>
                    <p className="text-sm text-[#0A4251] text-left w-3/4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, seddo eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="bg-[#ffd87485] h-30 p-8 w-11/12">
                  <div className="flex text-wrap items-center pl-8">
                    <svg
                      className="w-14 h-14 text-[#0A4251]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      class="bi bi-camera2"
                      viewBox="0 0 16 16"
                    >
                      <path d="M5 8c0-1.657 2.343-3 4-3V4a4 4 0 0 0-4 4" />
                      <path d="M12.318 3h2.015C15.253 3 16 3.746 16 4.667v6.666c0 .92-.746 1.667-1.667 1.667h-2.015A5.97 5.97 0 0 1 9 14a5.97 5.97 0 0 1-3.318-1H1.667C.747 13 0 12.254 0 11.333V4.667C0 3.747.746 3 1.667 3H2a1 1 0 0 1 1-1h1a1 1 0 0 1 1 1h.682A5.97 5.97 0 0 1 9 2c1.227 0 2.367.368 3.318 1M2 4.5a.5.5 0 1 0-1 0 .5.5 0 0 0 1 0M14 8A5 5 0 1 0 4 8a5 5 0 0 0 10 0" />
                    </svg>
                    <p className="text-4xl text-[#0A4251] font-semibold pl-3 pr-32 text-nowrap">
                      Photography
                    </p>
                    <p className="text-sm text-[#0A4251] text-left w-3/4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, seddo eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
                <div className="bg-[#e87171c4] h-30 p-8">
                  <div className="flex text-wrap items-center pl-8">
                    <svg
                      className="w-14 h-14 text-[#0A4251]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-megaphone-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 2.5a1.5 1.5 0 0 1 3 0v11a1.5 1.5 0 0 1-3 0zm-1 .724c-2.067.95-4.539 1.481-7 1.656v6.237a25 25 0 0 1 1.088.085c2.053.204 4.038.668 5.912 1.56zm-8 7.841V4.934c-.68.027-1.399.043-2.008.053A2.02 2.02 0 0 0 0 7v2c0 1.106.896 1.996 1.994 2.009l.496.008a64 64 0 0 1 1.51.048m1.39 1.081q.428.032.85.078l.253 1.69a1 1 0 0 1-.983 1.187h-.548a1 1 0 0 1-.916-.599l-1.314-2.48a66 66 0 0 1 1.692.064q.491.026.966.06" />
                    </svg>
                    <p className="text-4xl text-[#0A4251] font-semibold pl-3 pr-32 text-nowrap">
                      Branding & Campaign
                    </p>
                    <p className="text-sm text-[#0A4251] text-left w-3/4">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit, seddo eiusmod tempor incididunt ut labore et dolore
                      magna aliqua.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="flex justify-center mt-20 bg-[#0A4251] rounded-full p-5 px-8 hover:bg-[#0a4251ee] cursor-pointer">
                  <h1 className="text-2xl text-[#fce6b9] font-bold tracking-normal">
                    Learn More
                  </h1>
                </div>
              </div>
            </div>
          </div>
          {/* Our Packages */}

          {/* Our Testimonial */}
          <div className="bg-[#fce6b992] p-16">
            <div className="w-full">
              <div className="grid grid-cols-5 justify-center p-7">
                <div className="flex flex-col col-start-1 col-span-2">
                  <h2 className="text-5xl font-bold text-[#0A4251] mb-4">
                    Our Testimonials
                  </h2>
                  <p className="text-2xl text-[#0A4251]">They Trust Us</p>
                </div>
                <div className="flex justify-start col-start-3 col-span-5">
                  <div className="flex flex-col">
                    <div className="mb-10">
                      <p className="text-2xl text-[#0A4251]">
                        Discover what our clients have to say about working with
                        us.
                      </p>
                    </div>
                    <div className="flex flex-row gap-8 text-center justify-between">
                      <div>
                        <span className="text-6xl text-[#0A4251] font-bold">
                          48+
                        </span>
                        <p className="text-2xl text-[#0A4251]">Working Hours</p>
                      </div>
                      <div>
                        <span className="text-6xl text-[#0A4251] font-bold">
                          10+
                        </span>
                        <p className="text-2xl text-[#0A4251]">Brands</p>
                      </div>
                      <div>
                        <span className="text-6xl text-[#0A4251] font-bold">
                          100+
                        </span>
                        <p className="text-2xl text-[#0A4251]">
                          Customer Engaged
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Slider {...settings} className="-mt-14">
                <div className="">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="flex flex-col justify-start col-start-1 col-end-2">
                      <img
                        src="/images/clients/sushi.png"
                        alt="Logo"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start col-start-3 col-span-5">
                      <p className="text-2xl text-[#0A4251] mb-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p className="text-[#0A4251]">- Silvia Irawan, Manager</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="flex flex-col justify-start col-start-1 col-end-2">
                      <img
                        src="/images/clients/nooma.png"
                        alt="Logo"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start col-start-3 col-span-5">
                      <p className="text-2xl text-[#0A4251] mb-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p className="text-[#0A4251]">- Silvia Irawan, Manager</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="flex flex-col justify-start col-start-1 col-end-2">
                      <img
                        src="/images/clients/uspizza.png"
                        alt="Logo"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start col-start-3 col-span-5">
                      <p className="text-2xl text-[#0A4251] mb-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p className="text-[#0A4251]">- Silvia Irawan, Manager</p>
                    </div>
                  </div>
                </div>
                <div className="">
                  <div className="grid grid-cols-5 gap-4 items-center">
                    <div className="flex flex-col justify-start col-start-1 col-end-2">
                      <img
                        src="/images/clients/hongtang.png"
                        alt="Logo"
                        className="w-full"
                      />
                    </div>
                    <div className="flex flex-col justify-start col-start-3 col-span-5">
                      <p className="text-2xl text-[#0A4251] mb-5">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit. Sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua."
                      </p>
                      <p className="text-[#0A4251]">- Silvia Irawan, Manager</p>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
          {/* Our Testimonial */}

          {/* Our Client */}
          <div className="text-center py-12 font-poppins mt-16 mb-10">
            <div className="mx-32 mb-10">
              <h2 className="text-5xl font-extrabold text-[#0A4251]">
                Our Client
              </h2>
              <p className="text-xl text-[#0A4251] mt-2 mb-16">
                Proud To Partner With These Amazing Brand
              </p>
              <div className="grid grid-cols-5">
                <img
                  src="/images/clients/sushi.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/bakmie.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/bakso.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/eleanor.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/goodhouse.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/hongtang.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/madja.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/mpok.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/nooma.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/ot.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/sugoi.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
                <img
                  src="/images/clients/uspizza.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>
          {/* Our Client */}

          {/* Contact Us */}
          <div class="w-full min-h-screen flex items-center justify-center bg-[#e87171c4]">
            <div class="md:w-2/3 w-full px-4 text-white flex flex-col">
              <div class="w-full text-7xl font-bold">
                <h1 class="w-full md:w-2/3">
                  How can we help you. get in touch
                </h1>
              </div>
              <div class="flex mt-8 flex-col md:flex-row md:justify-between">
                <p class="w-full md:w-2/3 text-white">
                  Let's Start Your New Journey To A Bright Future in Social
                  Media{" "}
                </p>
                <div class="w-44 pt-6 md:pt-0">
                  <a class="bg-[#0A4251] justify-center text-center rounded-xl shadow px-10 py-3 flex items-center tracking-wide font-bold hover:bg-[#0a4251ee] cursor-pointer">
                    Contact US
                  </a>
                </div>
              </div>
              <div class="flex flex-col">
                <div class="flex mt-24 mb-12 flex-row justify-between items-center">
                  <div class="-mt-16">
                    <img
                      src="/images/mainlogo.png"
                      className="w-24 rounded-full"
                    />
                  </div>
                  <Link
                    to="/about"
                    className="hidden md:block cursor-pointer text-white hover:text-[#0A4251] uppercase"
                  >
                    About
                  </Link>
                  <a class="hidden md:block cursor-pointer text-white hover:text-[#0A4251] uppercase">
                    Services
                  </a>
                  <a class="hidden md:block cursor-pointer text-white hover:text-[#0A4251] uppercase">
                    Why us
                  </a>7
                  <a class="hidden md:block cursor-pointer text-white hover:text-[#0A4251] uppercase">
                    Contact
                  </a>
                  <div class="flex flex-row space-x-8 items-center justify-between">
                    <a>
                      <svg
                        width="6"
                        height="12"
                        viewBox="0 0 6 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3.89782 12V6.53514H5.67481L5.93895 4.39547H3.89782V3.03259C3.89782 2.41516 4.06363 1.99243 4.91774 1.99243H6V0.0847928C5.47342 0.0262443 4.94412 -0.00202566 4.41453 0.000112795C2.84383 0.000112795 1.76542 0.994936 1.76542 2.82122V4.39147H0V6.53114H1.76928V12H3.89782Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a>
                      <svg
                        width="12"
                        height="13"
                        viewBox="0 0 12 13"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.99536 2.91345C5.17815 2.91345 4.39441 3.23809 3.81655 3.81594C3.2387 4.3938 2.91406 5.17754 2.91406 5.99475C2.91406 6.81196 3.2387 7.5957 3.81655 8.17356C4.39441 8.75141 5.17815 9.07605 5.99536 9.07605C6.81257 9.07605 7.59631 8.75141 8.17417 8.17356C8.75202 7.5957 9.07666 6.81196 9.07666 5.99475C9.07666 5.17754 8.75202 4.3938 8.17417 3.81594C7.59631 3.23809 6.81257 2.91345 5.99536 2.91345ZM5.99536 7.99586C5.46446 7.99586 4.9553 7.78496 4.57989 7.40955C4.20448 7.03415 3.99358 6.52499 3.99358 5.99408C3.99358 5.46318 4.20448 4.95402 4.57989 4.57861C4.9553 4.20321 5.46446 3.99231 5.99536 3.99231C6.52626 3.99231 7.03542 4.20321 7.41083 4.57861C7.78624 4.95402 7.99714 5.46318 7.99714 5.99408C7.99714 6.52499 7.78624 7.03415 7.41083 7.40955C7.03542 7.78496 6.52626 7.99586 5.99536 7.99586Z"
                          fill="white"
                        />
                        <path
                          d="M9.19863 3.51848C9.59537 3.51848 9.91698 3.19687 9.91698 2.80013C9.91698 2.4034 9.59537 2.08179 9.19863 2.08179C8.8019 2.08179 8.48029 2.4034 8.48029 2.80013C8.48029 3.19687 8.8019 3.51848 9.19863 3.51848Z"
                          fill="white"
                        />
                        <path
                          d="M11.6821 2.06975C11.5279 1.67138 11.2921 1.30961 10.99 1.00759C10.6879 0.705576 10.326 0.469972 9.92759 0.31586C9.46135 0.140842 8.9688 0.0462069 8.4709 0.0359839C7.82919 0.00799638 7.62594 0 5.99867 0C4.37139 0 4.16282 -6.70254e-08 3.52643 0.0359839C3.02891 0.0456842 2.53671 0.140339 2.07108 0.31586C1.67255 0.469792 1.31059 0.705333 1.00844 1.00737C0.706289 1.30941 0.47061 1.67127 0.316526 2.06975C0.141474 2.53595 0.0470554 3.02855 0.0373167 3.52643C0.00866281 4.16748 0 4.37072 0 5.99867C0 7.62594 -4.96485e-09 7.83319 0.0373167 8.4709C0.0473123 8.96935 0.14127 9.46113 0.316526 9.92825C0.471042 10.3266 0.70695 10.6883 1.00918 10.9903C1.3114 11.2923 1.6733 11.5279 2.07175 11.6821C2.5365 11.8642 3.0289 11.9656 3.52777 11.982C4.16948 12.01 4.37272 12.0187 6 12.0187C7.62728 12.0187 7.83585 12.0187 8.47223 11.982C8.97008 11.9719 9.46262 11.8775 9.92892 11.7028C10.3272 11.5483 10.689 11.3125 10.9911 11.0104C11.2932 10.7083 11.529 10.3466 11.6835 9.94825C11.8587 9.48179 11.9527 8.99 11.9627 8.49156C11.9913 7.85051 12 7.64727 12 6.01932C12 4.39138 12 4.18481 11.9627 3.54709C11.9549 3.04216 11.86 2.54237 11.6821 2.06975ZM10.8705 8.42159C10.8662 8.80562 10.7961 9.18608 10.6633 9.54642C10.5632 9.80555 10.41 10.0409 10.2135 10.2372C10.017 10.4336 9.78162 10.5867 9.52243 10.6866C9.16608 10.8188 8.78967 10.8889 8.4096 10.8938C7.77654 10.9231 7.59796 10.9305 5.97468 10.9305C4.35007 10.9305 4.18414 10.9305 3.53909 10.8938C3.15921 10.8892 2.78298 10.8191 2.42692 10.6866C2.16683 10.5873 1.93048 10.4345 1.73316 10.2381C1.53584 10.0417 1.38194 9.80605 1.28143 9.54642C1.15045 9.18995 1.08039 8.81398 1.07419 8.43425C1.04554 7.8012 1.03887 7.62261 1.03887 5.99933C1.03887 4.37539 1.03887 4.20946 1.07419 3.56375C1.0785 3.17993 1.14859 2.7997 1.28143 2.43958C1.48467 1.91382 1.90116 1.5 2.42692 1.29876C2.78316 1.16691 3.15928 1.09682 3.53909 1.09151C4.17281 1.06286 4.35073 1.05486 5.97468 1.05486C7.59862 1.05486 7.76522 1.05486 8.4096 1.09151C8.7897 1.09609 9.16617 1.1662 9.52243 1.29876C9.7816 1.39889 10.017 1.55211 10.2134 1.74858C10.4099 1.94504 10.5631 2.18041 10.6633 2.43958C10.7942 2.79606 10.8643 3.17203 10.8705 3.55175C10.8992 4.18547 10.9065 4.36339 10.9065 5.98734C10.9065 7.61062 10.9065 7.78521 10.8778 8.42226H10.8705V8.42159Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/channel/UCjtCbnkIaiCJgj13sEZ9iqw">
                      <svg
                        width="13"
                        height="9"
                        viewBox="0 0 13 9"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12.7355 1.415C12.6616 1.14357 12.517 0.896024 12.3162 0.697014C12.1154 0.498004 11.8654 0.354468 11.5911 0.280692C10.5739 0.00450089 6.5045 4.87928e-06 6.5045 4.87928e-06C6.5045 4.87928e-06 2.43578 -0.00449139 1.41795 0.259496C1.14379 0.336667 0.894302 0.482233 0.693428 0.68222C0.492554 0.882207 0.347041 1.1299 0.270859 1.40152C0.00259923 2.40737 9.51671e-07 4.49358 9.51671e-07 4.49358C9.51671e-07 4.49358 -0.0025972 6.59006 0.263714 7.58564C0.413109 8.13609 0.851549 8.57094 1.40885 8.71931C2.43643 8.9955 6.49476 9 6.49476 9C6.49476 9 10.5641 9.00449 11.5813 8.74115C11.8557 8.6675 12.106 8.52429 12.3073 8.32569C12.5086 8.12709 12.6539 7.87996 12.729 7.60876C12.998 6.60355 12.9999 4.51798 12.9999 4.51798C12.9999 4.51798 13.0129 2.42086 12.7355 1.415ZM5.20282 6.42628L5.20607 2.57244L8.58823 4.50257L5.20282 6.42628Z"
                          fill="white"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <hr class="border-[#0A4251] -mt-6" />
                <p class="w-full text-center my-10 text-[#0A4251]">
                  Copyright © 2024 Double S Agency
                </p>
              </div>
            </div>
          </div>
          {/* Contact Us */}
        </div>
      </div>
    </div>
  );
}

export default Home;
