import React from "react";

import { Button, Img, List, Text } from "components";

const PropertiesPortfolio8 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-4 items-center justify-start w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.subheading}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.userheading}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.userlanguage}
            </Text>
          </div>
        </div>
        <div className="flex flex-col md:gap-10 gap-16 items-center justify-start w-full">
          <div className="flex flex-col items-start justify-center w-full">
            <List
              className="sm:flex-col flex-row gap-12 grid md:grid-cols-1 grid-cols-2 justify-center w-full"
              orientation="horizontal"
            >
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                <Img
                  className="h-[392px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_frame9.png"
                  alt="framethree"
                />
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.heading}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[608px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.text}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagone}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagtwo}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagthree}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-[120px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.userbutton}
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-1 flex-col gap-[30px] items-center justify-start w-full">
                <Img
                  className="h-[392px] md:h-auto object-cover rounded-bl-[10px] rounded-br-[10px] w-full"
                  src="images/img_frame9.png"
                  alt="framethree"
                />
                <div className="flex flex-col gap-5 items-start justify-start p-6 sm:px-5 w-full">
                  <div className="flex flex-col gap-2 items-start justify-start w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-black-900 sm:text-xl w-full"
                      size="txtRobotoBold24"
                    >
                      {props?.userheadingtwo}
                    </Text>
                    <Text
                      className="leading-[150.00%] max-w-[608px] md:max-w-full text-base text-black-900"
                      size="txtRobotoRegular16"
                    >
                      {props?.userlanguagetwo}
                    </Text>
                  </div>
                  <div className="flex flex-row gap-2 items-start justify-start pt-4 w-full">
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagonetwo}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[66px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagtwotwo}
                    </Button>
                    <Button
                      className="!text-black-900 cursor-pointer font-roboto font-semibold min-w-[76px] text-center text-sm"
                      shape="square"
                      color="gray_100"
                      size="sm"
                      variant="fill"
                    >
                      {props?.usertagthreetwo}
                    </Button>
                  </div>
                  <div className="flex flex-col items-start justify-start pt-6 w-full">
                    <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-[120px]">
                      <Text
                        className="text-base text-black-900 w-auto"
                        size="txtRobotoRegular16"
                      >
                        {props?.userbuttontwo}
                      </Text>
                      <Img
                        className="h-6 w-6"
                        src="images/img_folder.svg"
                        alt="folder"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </List>
          </div>
          <Button
            className="cursor-pointer font-roboto h-12 text-base text-center w-[104px]"
            shape="round"
            color="light_blue_500_7f"
            size="lg"
            variant="fill"
          >
            {props?.userbutton1}
          </Button>
        </div>
      </div>
    </>
  );
};

PropertiesPortfolio8.defaultProps = {
  subheading: "Portfolio",
  userheading: "Short heading goes here",
  userlanguage: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
  heading: "Project name here",
  text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  usertagone: "Tag one",
  usertagtwo: "Tag two",
  usertagthree: "Tag three",
  userbutton: "Button",
  userheadingtwo: "Project name here",
  userlanguagetwo:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
  usertagonetwo: "Tag one",
  usertagtwotwo: "Tag two",
  usertagthreetwo: "Tag three",
  userbuttontwo: "Button",
  userbutton1: "Button",
};

export default PropertiesPortfolio8;
