import React from "react";

import { Button, Img, Input, Line, Text } from "components";
import Footer from "components/Footer";
import Header from "components/Header";
import LoginScreenLogin from "components/LoginScreenLogin";

const LoginScreenPage = () => {
  return (
    <>
      <div className="bg-white-A700 flex flex-col font-roboto sm:gap-10 md:gap-10 gap-28 items-start justify-start mx-auto px-2.5 py-[30px] w-auto sm:w-full md:w-full">
        <Header className="flex flex-col items-center justify-center px-10 md:px-5 py-5 w-full" />
        <LoginScreenLogin className="flex flex-col items-center justify-start max-w-[1420px] mx-auto md:px-5 w-full" />
        <div className="flex flex-col gap-12 items-center justify-start max-w-[1420px] mx-auto md:px-5 py-[30px] w-full">
          <Text
            className="text-black-900 text-lg text-shadow-ts1 w-full"
            size="txtRobotoBold18"
          >
            Trusted by industry-leading companies worldwide
          </Text>
          <Img
            className="h-14 w-full"
            src="images/img_content.svg"
            alt="content"
          />
        </div>
        <Footer className="flex gap-[76.83px] items-center justify-center px-10 md:px-5 py-28 w-full" />
      </div>
    </>
  );
};

export default LoginScreenPage;
