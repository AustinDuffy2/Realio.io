import React from "react";

import { Button, Img, Text } from "components";

const AIPlatformLayout89 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-center w-full">
          <div className="flex flex-1 flex-col gap-4 items-start justify-start w-full">
            <Text
              className="text-base text-black-900 w-full"
              size="txtRobotoSemiBold16"
            >
              {props?.subheading}
            </Text>
            <Text
              className="leading-[120.00%] md:max-w-full max-w-screen-sm text-5xl sm:text-[38px] md:text-[44px] text-black-900"
              size="txtRobotoCondensedBold48"
            >
              {props?.heading}
            </Text>
          </div>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[150.00%] md:max-w-full max-w-screen-sm text-black-900 text-lg"
              size="txtRobotoRegular18"
            >
              {props?.description}
            </Text>
            <div className="flex flex-row gap-6 items-center justify-start pt-4 w-auto">
              <Button
                className="cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="lg"
                variant="fill"
              >
                {props?.learnmorelabel}
              </Button>
              <div className="flex flex-row gap-2 items-center justify-center rounded-[10px] w-auto">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  {props?.signupbuttonlabel}
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
        <Img
          className="md:h-auto h-full object-cover rounded-[10px] w-full"
          src="images/img_frame3_472x675.png"
          alt="frameFour"
        />
      </div>
    </>
  );
};

AIPlatformLayout89.defaultProps = {
  subheading: "Revolutionizing",
  heading: "Unleashing the Power of AI in Real Estate in 2024",
  description:
    "Our AI platform is at the forefront of technological innovation, transforming the way we search for commercial real estate, multi-family properties, industrial sites, and rental properties around the world. With our highly trained AI platform, you can easily access comprehensive real estate data and find the perfect properties that meet your needs.",
  learnmorelabel: "Learn More",
  signupbuttonlabel: "Sign Up",
};

export default AIPlatformLayout89;
