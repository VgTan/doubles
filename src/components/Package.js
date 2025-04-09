import React, { useEffect, useRef, useState } from "react";
import { getDatabase, ref, onValue, remove } from "firebase/database";
import { app } from "../firebaseConfig";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Slider from "react-slick";
import "../App.css";
import { Reveal } from "./Reveal.tsx";

function Package() {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    const db = getDatabase(app);
    const packagesRef = ref(db, "our_packages");

    onValue(packagesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const packagesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setPackages(packagesArray);
      } else {
        setPackages([]);
      }
    });
  }, []);

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
      window.open(
        "https://wa.me/6281218051574?text=Hello%20Double%20S%20Agency%20😊!%20I'm%20interested%20in%20your%20service,%20can%20we%20discuss%20about%20it%20more?",
        "_blank"
      );
    }
  };

  return (
    <div className="font-poppins">
      <div className="">
        <div
          className="flex items-center justify-center h-72 bg-fixed bg-left bg-cover font-poppins"
          style={{ backgroundImage: `url("../images/header.webp")` }}
        >
          <div>
            <div className="p-5 font-bold text-center drop-shadow-3xl">
              <h1 className="tracking-widest text-4xl sm:text-6xl lg:text-8xl text-white">
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

        <div className="bg-[#fce6b9] py-12 md:py-24 px-10 md:px-24">
          <h1 className="text-[#0A4251] text-center text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            Our Packages
          </h1>
          <p className="text-[#0A4251] text-center text-base sm:text-lg mt-2 lg:mb-8 mb-6 md:mb-10">
            Pick A Pack Best-Suited For Your Brand
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10 px-4 md:px-8">
            {packages && packages.length > 0 ? (
              packages
                .slice()
                .reverse()
                .map((pckg, index) => (
                  <Reveal key={index}>
                    <div className="bg-white p-4 md:p-8 w-full rounded-2xl hover:shadow-xl hover:shadow-[#0a42515f] flex flex-col relative">
                      <div className="relative">
                        <img
                          src={pckg.packageImage}
                          className="w-full h-40 md:h-96 shadow rounded-lg overflow-hidden border object-cover"
                        />
                        {(pckg.packageStyle === "Best Deal" ||
                          pckg.packageStyle === "Most Benefit") && (
                          <div className="absolute top-0 right-0">
                            <div className="w-32 h-8 absolute top-4 -right-8">
                              <div className="text-sm md:text-md h-full w-full bg-red-500 text-white text-center leading-8 font-semibold transform rotate-45 uppercase">
                                {pckg.packageStyle}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                      <div className="mt-6 sm:mt-8 flex flex-col justify-between flex-grow">
                        <h1 className="text-md sm:text-2xl font-semibold pb-3 text-[#0A4251]">
                          {pckg.packageName}
                        </h1>
                        <ul className="list-disc list-outside pl-5 text-xs md:text-sm text-[#0A4251] mb-6">
                          {pckg.packageContent.map((item, index) => (
                            <li key={index}>{item}</li>
                          ))}
                        </ul>
                        <div className="mt-auto flex justify-between px-2 md:px-4">
                          <button
                            onClick={handleRedirect}
                            className="inline-flex items-center rounded-md border border-transparent bg-[#0A4251] px-3 py-2 text-xs md:text-sm font-medium leading-4 text-white shadow-sm hover:bg-[#1b363e]"
                          >
                            Start Creating
                          </button>
                          <p className="text-md md:text-2xl self-center font-bold capitalize">
                            {pckg.packagePrice}.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Reveal>
                ))
            ) : (
              <p className="col-span-full text-center">
                No testimonials found.
              </p>
            )}
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
                        approaches, they bring ideas to life, ensuring that the
                        final output{" "}
                        <span className="font-semibold">
                          resonates with the target audience
                        </span>{" "}
                        and meets project objectives. Every detail is carefully
                        crafted to create impactful and memorable content.
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
                        and generate comprehensive reports to monitor progress.
                        These evaluations provide valuable insights into the
                        project's performance, enabling{" "}
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
  );
}

export default Package;
