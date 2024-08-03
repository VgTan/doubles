import React from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Slider from "react-slick";
import "../App.css";
import { Reveal } from "./Reveal.tsx";
import { Helmet } from "react-helmet-async";

function Package() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
  };

  const handleRedirect = () => {
    const userConfirmed = window.confirm(
      "Message Us about your chosen package"
    );
    if (userConfirmed) {
      window.open("https://ig.me/m/doublesagency", "_blank");
    }
  };

  return (
    <>
      <Helmet>
        <title>Package</title>
        <meta
          name="description"
          content=""
        />
        <link rel="canonical" href="/about" />
      </Helmet>
      <div className="font-poppins">
        <div className="">
          <div
            className="flex items-center justify-center h-72 bg-fixed bg-left bg-cover font-poppins"
            style={{ backgroundImage: `url("../images/header.png")` }}
          >
            <div>
              <div className="p-5 font-bold text-center drop-shadow-3xl">
                <h1 className="tracking-widest text-4xl sm:text-6xl md:text-8xl text-white">
                  OUR PACKAGES
                </h1>
                <p className="text-white text-sm sm:text-xl">
                  <Link to="/">
                    <span className="text-white/70">Home </span>
                  </Link>
                  {">"} Our Package
                </p>
              </div>
            </div>
          </div>
          <div className="bg-[#fce6b9] py-12 md:py-24">
            <Reveal>
              <h1 className="text-[#0A4251] text-center text-3xl sm:text-4xl md:text-5xl font-extrabold">
                Our Packages
              </h1>

              <p className="text-[#0A4251] text-center text-base sm:text-lg mt-2 mb-8 sm:mb-16">
                Pick A Pack Best-Suited For Your Brand
              </p>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 justify-items-center px-8 md:px-56">
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <div className="relative">
                    <img
                      src="/images/package/instagram.png"
                      class="shadow rounded-lg overflow-hidden border"
                    />
                    <div class="absolute top-0 right-0">
                      <div class="w-32 h-8 absolute top-4 -right-8">
                        <div class="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                          BEST DEAL
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Tiktok & Instagram Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>8 Reels</li>
                      <li>7 Graphic Design</li>
                      <li>Story (every other day)</li>
                      <li>15 Post/month (adjustable)</li>
                      <li>Talent 2-3 Person</li>
                      <li>Content Writing</li>
                      <li>Research</li>
                      <li>Monthly Report</li>
                      <li>
                        Production Session (concept, shooting, and editing)
                      </li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">5 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <div className="relative">
                    <img
                      src="/images/package/brand.png"
                      class="shadow rounded-lg overflow-hidden border"
                    />
                    <div class="absolute top-0 right-0">
                      <div class="w-32 h-8 absolute top-4 -right-8">
                        <div class="h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45">
                          MOST BENEFIT
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Branding & Campaign Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>Branding Concept</li>
                      <li>Campaign/month</li>
                      <li>15-30 Post/month (adjustable)</li>
                      <li>Talent 2-3 Person</li>
                      <li>Content Writing</li>
                      <li>Research</li>
                      <li>Monthly Report</li>
                      <li>
                        Production Session (concept, shooting, and editing)
                      </li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">10 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <img
                    src="/images/package/tiktok.png"
                    class="shadow rounded-lg overflow-hidden border"
                  />
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Tiktok Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>15 Post/month (adjustable)</li>
                      <li>Talent 2-3 Person</li>
                      <li>Content Writing</li>
                      <li>Research</li>
                      <li>Monthly Report</li>
                      <li>
                        Production Session (concept, shooting, and editing)
                      </li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">3 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg  rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <img
                    src="/images/package/insta.png"
                    class="shadow rounded-lg overflow-hidden border"
                  />
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Instagram Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>8 Reels</li>
                      <li>7 Graphic Design</li>
                      <li>Story (every other day)</li>
                      <li>Talent 2-3 Person</li>
                      <li>Content Writing</li>
                      <li>Research</li>
                      <li>Monthly Report</li>
                      <li>
                        Production Session (concept, shooting, and editing)
                      </li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">3 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg  rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <img
                    src="/images/package/photograph.png"
                    class="shadow rounded-lg overflow-hidden border"
                  />
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Photography Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>1 Photographer</li>
                      <li>Studio</li>
                      <li>20 Photos</li>
                      <li>Talent</li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">3 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
              <Reveal>
                <div
                  class="bg-white p-8 max-w-lg  rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col"
                  href="#"
                >
                  <img
                    src="/images/package/instagram.png"
                    class="shadow rounded-lg overflow-hidden border"
                  />
                  <div class="mt-6 sm:mt-8">
                    <h1 className="text-xl sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                      Graphic Design Package
                    </h1>
                    <ul className="list-disc list-outside pl-5 text-sm text-[#0A4251]">
                      <li>Content Writing</li>
                      <li>Basic Design</li>
                      <li>20 Photos</li>
                      <li>20 Designs</li>
                    </ul>
                    <div class="mt-5 flex justify-between">
                      <button
                        onClick={handleRedirect}
                        class="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                      >
                        Start Creating
                      </button>
                      <p className="text-2xl self-center font-bold">4 Mio.</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="bg-white grid grid-cols-1 lg:grid-cols-2 p-8 sm:p-12 lg:p-20 lg:px-32 lg:px-44">
            <Reveal>
              <div className="mt-10 lg:mt-0 mb-8 lg:mb-0 pr-0 lg:pr-32">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#0A4251]">
                  Timeline Project
                </h1>
                <p className="text-base sm:text-lg pt-1 lg:pt-3 font-normal text-[#0A4251]">
                  See the Milestone and Deadlines
                </p>
                <div className="flex flex-wrap space-x-3 pt-5">
                  <div class="w-4 h-4 lg:w-6 lg:h-6 bg-[#0A4251] rounded-full"></div>
                  <div class="w-4 h-4 lg:w-6 lg:h-6 bg-[#0A4251] rounded-full"></div>
                  <div class="w-4 h-4 lg:w-6 lg:h-6 bg-[#0A4251] rounded-full"></div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="lg:mb-0 mb-20">
                <Slider {...settings}>
                  <div className="flex align-middle border-0 border-l-8 border-[#0A4251] h-80">
                    <div className="flex items-center">
                      <div className="text-wrap">
                        <h1 className="pt-4 lg:pt-0 pl-4 lg:pl-10 text-2xl lg:text-4xl font-semibold text-[#0A4251]">
                          1. Dealing
                        </h1>
                        <p className="pt-2 pl-4 lg:pl-10 text-md lg:text-lg font-base text-[#0A4251]">
                          MateS offers flexible payment options based on your
                          selected package, with a minimum commitment of{" "}
                          <span className="font-semibold underline-offset-3 underline">
                            3 months
                          </span>
                          . Our tailored plans ensure that you can enjoy our
                          services
                          <span className="font-semibold">
                            {" "}
                            without long-term obligations
                          </span>
                          , giving you the freedom to choose the duration that
                          best suits your needs.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-middle border-0 border-l-8 border-[#0A4251] h-80">
                    <div className="flex items-center">
                      <div className="text-wrap">
                        <h1 className="pt-4 lg:pt-0 pl-4 lg:pl-10 text-2xl lg:text-4xl font-semibold text-[#0A4251]">
                          2. Concept Meeting
                        </h1>
                        <p className="pt-2 pl-4 lg:pl-10 text-md lg:text-lg font-base text-[#0A4251]">
                          The Team and MateS{" "}
                          <span className="font-semibold">
                            collaborate closely to discuss and plan the project
                            concept
                          </span>
                          . This partnership ensures that every aspect of the
                          project is{" "}
                          <span className="font-semibold">
                            meticulously thought out and aligned
                          </span>{" "}
                          with your vision. By combining our expertise and
                          innovative ideas, we create a comprehensive plan that
                          sets the foundation for a successful project.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-middle border-0 border-l-8 border-[#0A4251] h-80">
                    <div className="flex items-center">
                      <div className="text-wrap">
                        <h1 className="pt-4 lg:pt-0 pl-4 lg:pl-10 text-2xl lg:text-4xl font-semibold text-[#0A4251]">
                          3. Excecutions
                        </h1>
                        <p className="pt-2 pl-4 lg:pl-10 text-md lg:text-lg font-base text-[#0A4251]">
                          The Team transforms the planned concept into{" "}
                          <span className="font-semibold">
                            engaging and creative content
                          </span>
                          . By leveraging their expertise and innovative
                          approaches, they bring ideas to life, ensuring that
                          the final output{" "}
                          <span className="font-semibold">
                            resonates with the target audience
                          </span>{" "}
                          and meets project objectives. Every detail is
                          carefully crafted to create impactful and memorable
                          content.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex align-middle border-0 border-l-8 border-[#0A4251] h-80">
                    <div className="flex items-center">
                      <div className="text-wrap">
                        <h1 className="pt-4 lg:pt-0 pl-4 lg:pl-10 text-2xl lg:text-4xl font-semibold text-[#0A4251]">
                          4. Evaluation
                        </h1>
                        <p className="pt-2 pl-4 lg:pl-10 text-md lg:text-lg font-base text-[#0A4251]">
                          Conduct{" "}
                          <span className="font-semibold">
                            monthly evaluations
                          </span>{" "}
                          and generate comprehensive reports to monitor
                          progress. These evaluations provide valuable insights
                          into the project's performance, enabling{" "}
                          <span className="font-semibold">
                            timely adjustments and informed decision-making
                          </span>{" "}
                          to ensure continuous improvement and successful
                          outcomes.
                        </p>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </Reveal>
          </div>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default Package;
