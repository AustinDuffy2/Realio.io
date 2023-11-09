import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AboutUsContact15 from "components/AboutUsContact15";
import AboutUsLayout4 from "components/AboutUsLayout4";
import AboutUsTeam8 from "components/AboutUsTeam8";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";
import HomeLayout228 from "components/HomeLayout228";

const AboutUsPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <AboutUsLayout4 className="flex md:flex-col flex-row gap-[30px] items-start justify-center px-10 sm:px-5 w-full" />
        <HomeLayout228 className="flex flex-col gap-20 items-center justify-start md:px-10 sm:px-5 px-[41.65px] py-[30px] w-full" />
        <div className="flex flex-col gap-12 items-center justify-start md:px-10 sm:px-5 px-[41.65px] py-[30px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts1 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 max-w-[1356px] mx-auto w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <AboutUsContact15 className="flex md:flex-col flex-row gap-[30px] items-start justify-center px-10 sm:px-5 py-[30px] w-full" />
        <AboutUsTeam8 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <div className="flex flex-col gap-6 items-center justify-start w-full">
          <div className="flex flex-col gap-4 items-center justify-start w-full">
            <Text
              className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
              size="txtRobotoBold32"
            >
              Join Us!
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              Exciting opportunities to be part of our team
            </Text>
          </div>
          <Button
            className="cursor-pointer h-12 text-base text-center w-[155px]"
            shape="round"
            color="light_blue_500_7f"
            size="lg"
            variant="fill"
          >
            Button
          </Button>
        </div>
        <Footer1 className="flex gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default AboutUsPage;
