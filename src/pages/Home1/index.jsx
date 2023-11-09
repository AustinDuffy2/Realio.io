import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";
import HomeColumnfeaturedpropertOne from "components/HomeColumnfeaturedpropertOne";
import HomeColumnframe from "components/HomeColumnframe";
import HomeCta3 from "components/HomeCta3";
import HomeHeader26 from "components/HomeHeader26";
import HomeLayout1 from "components/HomeLayout1";
import HomeLayout219 from "components/HomeLayout219";
import HomeLayout228 from "components/HomeLayout228";
import HomeTestimonial4 from "components/HomeTestimonial4";

const Home1Page = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <HomeHeader26 className="flex md:flex-col flex-row font-robotocondensed md:gap-10 gap-[70px] items-center justify-center px-10 sm:px-5 py-[30px] w-full" />
        <HomeColumnframe className="flex flex-col gap-2 items-start justify-start px-10 sm:px-5 py-[50px] w-full" />
        <HomeColumnfeaturedpropertOne className="flex flex-col font-worksans gap-5 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <div className="flex flex-col font-roboto gap-[46.1px] items-center justify-start px-10 sm:px-5 py-[28.81px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-[53px] max-w-[1360px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <HomeTestimonial4 className="flex flex-col font-roboto gap-[76.83px] items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <HomeLayout219 className="flex md:flex-col flex-row font-roboto gap-[28.81px] items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <HomeLayout1 className="flex flex-col font-roboto gap-[30px] items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <HomeLayout228 className="flex flex-col font-roboto gap-[76.83px] items-center justify-start px-10 sm:px-5 py-[28.81px] w-full" />
        <HomeCta3 className="flex flex-col font-roboto gap-[76.83px] items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <Footer1 className="flex font-roboto gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default Home1Page;
