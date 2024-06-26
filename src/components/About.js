import React from "react";
import "./About.css";
import Footer from "./Footer";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className="font-poppins">
      <div
        className="flex items-center justify-center h-72 bg-fixed bg-top bg-contain font-poppins"
        style={{ backgroundImage: `url("../images/header.png")` }}
      >
        <div>
          <div className="p-5 font-bold text-center drop-shadow-3xl">
            <h1 className="tracking-widest text-8xl text-white">ABOUT US</h1>
            <p className="text-white text-2xl">
              <Link to="/">
                <span className="text-white/70">Home </span>
              </Link>
              {">"} About us
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#0A4251] py-24">
        <h1 className="text-[#fce6b9] text-center text-5xl font-extrabold">
          Our Story
        </h1>
        <p className="text-white text-center text-xl mt-2 mb-16">
          Get To Know Our Agency
        </p>
        <div className="flex justify-center flex-row-reverse mb-8 space-x-4 items-center">
          <div className="flex w-2/4 flex-wrap pl-10">
            <h2 className="text-5xl pb-5 text-[#fce6b9] font-bold">
              Loren Ipsum
            </h2>
            <p className="text-medium mb-4 text-white">
              At Double S Agency, we offer a comprehensive suite of services
              designed to elevate your brand's social media presence. we began
              our journey with a vision to revolutionize the way brands connect
              with their audience online.
            </p>
          </div>
          <div className="flex">
            <div className="mr-4">
              <img
                className="w-64 h-96 bg-gray-200 object-cover"
                src="./images/silvia1.png"
                alt="Sheren larger"
              />
            </div>
            <div className="flex-shrink-0 pt-24">
              <img
                className="w-64 h-94 bg-gray-200 object-cover"
                src="./images/silvia1.png"
                alt="Sheren"
              />
            </div>
          </div>
        </div>
      </div>

      {/* About Silvia */}
      <div className="mx-44 mt-32">
        <h1 className="text-5xl font-extrabold text-[#0A4251] text-center">
          Our Team
        </h1>
        <p className="text-xl text-[#0A4251] mt-2 mb-16 text-center">
          Get To Know Our Agency
        </p>
        <div className="flex mb-8 space-x-4 justify-between items-start mt-16">
          <div className="flex w-2/4 flex-wrap pr-10">
            <h2 className="text-5xl font-medium pb-5 text-[#0A4251]">
              SILVIA IRAWAN
            </h2>
            <p className="text-lg mb-4 text-[#0A4251]">
              My Name Is Silvia Irawan And I Specialize In Marketing
              Communications, Especially In Managing The Brand's Social Media
              For 3 Years.
            </p>
            <div className="flex space-x-4 text-[#0A4251] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </div>
          </div>
          <div className="flex">
            <div className="flex-shrink-0">
              <img
                className="w-64 h-64 bg-gray-200 object-cover"
                src="./images/silvia2.jpg"
                alt="Silvia"
              />
            </div>
            <div className="flex-shrink-0 ml-4">
              <img
                className="w-96 h-96 bg-gray-200 object-cover"
                src="./images/silvia1.png"
                alt="Silvia larger"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mt-20">
          <h2 className="text-5xl font-medium mb-4 text-[#0A4251]">
            MY PERSONAL CLIENTS
          </h2>
          <svg
            className="w-32 h-52 text-[#0A4251] -mt-5 animate-bounce"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
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

      <div className="bg-[#ff8c9254]">
        <div className="grid grid-cols-4 gap-10 mt-4 px-44 py-20">
          <div className="">
            <h1 class="text-6xl font-bold text-white">01</h1>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/via1.png"
                alt="Bricia Beute"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/bb.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                BRICIA BEUTE
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Skincare</p>
            </div>
          </div>

          <div className="mt-28">
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                WEAR YEONA
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Clothing</p>
            </div>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/via2.png"
                alt="Sample Image"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/yeona.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <h1 class="text-6xl font-bold text-white">02</h1>
          </div>

          <div className="">
            <h1 class="text-6xl font-bold text-white">03</h1>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/via3.png"
                alt="Sample Image"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/cof.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <h1 class="text-3xl font-bold text-[#0A4251] text-container">
                CITY OF ACTIVITY
              </h1>
              <p class="text-xl text-gray-500 -mt-2">News & Marketing</p>
            </div>
          </div>

          <div className="mt-28">
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                SHOP AT BLOW
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Footwear</p>
            </div>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/via4.png"
                alt="Sample Image"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/bl.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <h1 class="text-6xl font-bold text-white">04</h1>
          </div>
        </div>
      </div>
      {/* About Silvia */}

      {/* About Sheren */}
      <div className="mx-44 mt-32">
        <div className="flex flex-row-reverse mb-8 space-x-4 justify-between items-start">
          <div className="flex w-2/4 flex-wrap pl-10">
            <h2 className="text-5xl font-medium pb-5 text-[#0A4251]">
              SHEREN DAMAYANTI
            </h2>
            <p className="text-lg mb-4 text-[#0A4251]">
              My name is Sheren Damayanti, I have two years of working
              experience in the digital marketing field, especially in social
              media content creating.
            </p>
            <div className="flex space-x-4 text-[#0A4251] ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-instagram"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                fill="currentColor"
                class="bi bi-google"
                viewBox="0 0 16 16"
              >
                <path d="M15.545 6.558a9.4 9.4 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.352 2.082l-2.284 2.284A4.35 4.35 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.8 4.8 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.7 3.7 0 0 0 1.599-2.431H8v-3.08z" />
              </svg>
            </div>
          </div>
          <div className="flex">
            <div className="mr-4">
              <img
                className="w-96 h-96 bg-gray-200 object-cover"
                src="./images/sheren1.jpg"
                alt="Sheren larger"
              />
            </div>
            <div className="flex-shrink-0">
              <img
                className="w-64 h-64 bg-gray-200 object-cover"
                src="./images/sheren2.jpg"
                alt="Sheren"
              />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap -mt-20 justify-end">
          <svg
            className="w-32 h-52 text-[#0A4251] -mt-5 animate-bounce"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
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
          <h2 className="text-5xl font-medium mb-4 text-[#0A4251]">
            MY PERSONAL CLIENTS
          </h2>
        </div>
      </div>

      <div className="bg-[#fce6b9b6] mb-32">
        <div className="grid grid-cols-4 gap-10 mt-4 px-44 py-20">
          <div className="">
            <h1 class="text-6xl font-bold text-white">01</h1>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/sr1.png"
                alt="Saff & Co"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/snc.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                SAFF & Co.
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Perfumes</p>
            </div>
          </div>

          <div className="mt-28">
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                SEALOP
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Fashion Bags</p>
            </div>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/sr2.png"
                alt="Sealop"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/sea.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <h1 class="text-6xl font-bold text-white">02</h1>
          </div>

          <div className="">
            <h1 class="text-6xl font-bold text-white">03</h1>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/sr3.png"
                alt="Teazzi"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/tea.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                TEAZZI
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Beverages</p>
            </div>
          </div>

          <div className="mt-28">
            <div class="mb-5">
              <h1 class="text-4xl font-bold text-[#0A4251] text-container">
                MAZA GELATO
              </h1>
              <p class="text-xl text-gray-500 -mt-2">Dessert</p>
            </div>
            <div class="mt-5 mb-5 hover-container">
              <img
                src="./images/sr4.png"
                alt="Sample Image"
                class="w-full h-auto object-cover"
              />
              <div class="overlay">
                <div class="overlay-content">
                  <img
                    src="./images/clients/maza.png"
                    alt="Logo"
                    class="w-32 h-32"
                  />
                </div>
              </div>
            </div>
            <h1 class="text-6xl font-bold text-white">04</h1>
          </div>
        </div>
      </div>
      {/* About Sheren */}

      <Footer />
    </div>
  );
}

export default About;
