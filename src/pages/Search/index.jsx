import React from "react";

import { Button, Img, Line, List, Text } from "components";
import AIPlatformLayout121 from "components/AIPlatformLayout121";
import AIPlatformLayout27 from "components/AIPlatformLayout27";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";
import SearchCta45 from "components/SearchCta45";

const SearchPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <AIPlatformLayout121 className="flex flex-col gap-20 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
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
        <AIPlatformLayout27 className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <SearchCta45 className="flex flex-col gap-20 items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
        <Footer1 className="flex gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default SearchPage;
