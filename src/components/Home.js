import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../App.css";
import Footer from "./Footer";

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
          <div className="flex items-center justify-center absolute z-0 inset-x-0 bottom-10 text-center pt-10">
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
              <p className="text-xl text-white mt-2 mb-20">
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
              <p className="text-xl text-[#0A4251] mt-2 mb-20">
                Take A Look At Our Previous Work
              </p>
              <div className="grid grid-cols-4 gap-5">
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product1.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product2.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product3.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product4.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product5.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product6.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product7.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
                </div>
                <div className="relative w-full overflow-hidden bg-cover bg-no-repeat">
                  <img src="/images/product8.png" className="w-full" />
                  <div className="absolute z-0 bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-red-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-30"></div>
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
              <p className="text-xl text-[#0A4251] mt-2 mb-20">
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
                <img
                  src="/images/clients/greyhound.png"
                  alt="Logo"
                  className="w-full grayscale hover:grayscale-0 transition duration-500"
                />
              </div>
            </div>
          </div>
          {/* Our Client */}

          <Footer />

        </div>
      </div>
    </div>
    
  );
}

export default Home;
