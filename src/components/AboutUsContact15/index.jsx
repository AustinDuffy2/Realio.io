import React from "react";

import { Img, List, Text } from "components";

const AboutUsContact15 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 h-[436px] md:h-auto object-cover rounded-[10px] w-full"
          src="images/img_frame9.png"
          alt="framenine"
        />
        <div className="flex flex-1 flex-col gap-4 items-start justify-center w-full">
          <Text
            className="text-base text-black-900 text-center w-auto"
            size="txtRobotoSemiBold16"
          >
            {props?.tagline}
          </Text>
          <div className="flex flex-col gap-6 items-center justify-center w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingtwo}
            </Text>
            <Text
              className="leading-[150.00%] max-w-[665px] md:max-w-full text-black-900 text-center text-lg"
              size="txtRobotoRegular18"
            >
              {props?.description}
            </Text>
          </div>
          <List
            className="flex flex-col gap-6 items-center py-2 w-full"
            orientation="vertical"
          >
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconenvelope.svg"
                alt="iconenvelope"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.email}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconphone.svg"
                alt="iconphone"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading1}
                </Text>
                <Text
                  className="text-base text-black-900 underline w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.phone}
                </Text>
              </div>
            </div>
            <div className="flex flex-1 md:flex-col flex-row gap-4 items-start justify-start my-0 w-full">
              <Img
                className="h-6 w-6"
                src="images/img_iconmap.svg"
                alt="iconmap"
              />
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-black-900 text-xl w-full"
                  size="txtRobotoBold20"
                >
                  {props?.heading2}
                </Text>
                <Text
                  className="text-base text-black-900 w-full"
                  size="txtRobotoRegular16"
                >
                  {props?.address}
                </Text>
              </div>
            </div>
          </List>
        </div>
      </div>
    </>
  );
};

AboutUsContact15.defaultProps = {
  tagline: "Tagline",
  headingtwo: "Contact us",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
  heading: "Email",
  email: "hello@relume.io",
  heading1: "Phone",
  phone: "+1 (555) 000-0000",
  heading2: "Office",
  address: "123 Sample St, Sydney NSW 2000 AU",
};

export default AboutUsContact15;
