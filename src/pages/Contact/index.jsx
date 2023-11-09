import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Radio,
  RadioGroup,
  Text,
} from "components";
import ContactContact27 from "components/ContactContact27";
import ContactContact4 from "components/ContactContact4";
import ContactTeam1 from "components/ContactTeam1";
import Footer1 from "components/Footer1";
import Header1 from "components/Header1";

const ContactPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto w-auto sm:w-full md:w-full">
        <Header1 className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <ContactContact27 className="flex flex-col md:gap-10 gap-20 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <ContactTeam1 className="flex flex-col md:gap-10 gap-20 items-center justify-start px-10 sm:px-5 py-[30px] w-full" />
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
        <ContactContact4 className="flex flex-col gap-12 items-start justify-start px-10 sm:px-5 py-[30px] w-full" />
        <Footer1 className="flex gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default ContactPage;
