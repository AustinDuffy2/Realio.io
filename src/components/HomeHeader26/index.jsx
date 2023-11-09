import React from "react";

import { Button, Img, Text } from "components";

const HomeHeader26 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-1 flex-col gap-[23.05px] items-center justify-center w-full">
          <Text
            className="leading-[120.00%] max-w-[645px] md:max-w-full md:text-5xl sm:text-[42px] text-[56px] text-black-900 text-center"
            size="txtRobotoCondensedBold56"
          >
            {props?.usertext}
          </Text>
          <div className="flex flex-col items-center justify-start w-full">
            <Text
              className="max-w-[645px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
              size="txtWorkSansRegular13"
            >
              {props?.userdescription}
            </Text>
          </div>
          <div className="flex flex-row gap-[15.37px] items-center justify-center pt-[15.37px] w-full">
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[94px] outline outline-[1px] outline-white-A700 rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              {props?.usersearch}
            </Button>
            <Button
              className="cursor-pointer font-roboto h-[42px] min-w-[99px] rounded-[9px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              {props?.usersignup}
            </Button>
          </div>
        </div>
        <Img
          className="flex-1 h-[784px] md:h-auto object-cover rounded-[9px] w-full"
          src="images/img_frame6.png"
          alt="framesix"
        />
      </div>
    </>
  );
};

HomeHeader26.defaultProps = {
  usertext: "Find the perfect property for your needs today",
  userdescription:
    "Discover a wide range of commercial real estate, multi-family, industrial sites, and rental properties around the world with our AI-powered platform.",
  usersearch: "Search",
  usersignup: "Sign Up",
};

export default HomeHeader26;
