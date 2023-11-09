import React from "react";

import { Img, Text } from "components";

const AIPlatformLayout27 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 h-[472px] md:h-auto object-cover rounded-[10px] w-full"
          src="images/img_frame3_472x675.png"
          alt="frameThree_One"
        />
        <div className="flex flex-1 flex-col items-start justify-center w-full">
          <div className="flex flex-col gap-8 items-start justify-start w-full">
            <div className="flex flex-col gap-6 items-start justify-start w-full">
              <Text
                className="sm:text-4xl md:text-[38px] text-[40px] text-black-900 w-full"
                size="txtRobotoCondensedBold40Black900"
              >
                {props?.headingFive}
              </Text>
              <Text
                className="leading-[150.00%] md:max-w-full max-w-screen-sm text-black-900 text-lg"
                size="txtRobotoRegular18"
              >
                {props?.textTwo}
              </Text>
            </div>
            <div className="flex md:flex-col flex-row gap-6 items-start justify-start py-2 w-full">
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberTwo}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[308px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.textThree}
                </Text>
              </div>
              <div className="flex flex-1 flex-col gap-2 items-start justify-start w-full">
                <Text
                  className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
                  size="txtRobotoCondensedBold48"
                >
                  {props?.numberThree}
                </Text>
                <Text
                  className="leading-[150.00%] max-w-[308px] md:max-w-full text-base text-black-900"
                  size="txtRobotoRegular16"
                >
                  {props?.textFour}
                </Text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

AIPlatformLayout27.defaultProps = {
  headingFive: "Discover the Power of Our Platform",
  textTwo:
    "With our highly trained AI platform, we have successfully found countless properties and satisfied users worldwide.",
  numberTwo: "50%",
  textThree: "Increase in Property Discoveries and User Satisfaction",
  numberThree: "50%",
  textFour: "Growth in Property Listings and User Engagement",
};

export default AIPlatformLayout27;
