import React from "react";

import { Button, Img, Line, List, Text } from "components";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";
import HomeHeader26 from "components/HomeHeader26";
import PropertiesCta13 from "components/PropertiesCta13";
import PropertiesLayout237 from "components/PropertiesLayout237";
import PropertiesPortfolio8 from "components/PropertiesPortfolio8";

const PropertiesPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <PropertiesPortfolio8 className="flex flex-col md:gap-10 gap-20 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
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
        <PropertiesLayout237 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <HomeHeader26 className="flex md:flex-col flex-row font-robotocondensed md:gap-10 gap-[70px] items-center justify-center px-10 sm:px-5 py-[30px] w-full" />
        <PropertiesCta13 className="flex flex-col font-robotocondensed gap-20 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <Footer1 className="flex font-roboto gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default PropertiesPage;
