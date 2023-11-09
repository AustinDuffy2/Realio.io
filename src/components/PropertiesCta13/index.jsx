import React from "react";

import { Button, Text } from "components";

const PropertiesCta13 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-start justify-start w-full">
          <Text
            className="flex-1 text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-auto"
            size="txtRobotoCondensedBold48"
          >
            {props?.headingthree}
          </Text>
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[150.00%] md:max-w-full max-w-screen-sm text-black-900 text-lg"
              size="txtRobotoRegular18"
            >
              {props?.text}
            </Text>
            <div className="flex flex-row gap-4 items-start justify-start pt-4 w-auto">
              <Button
                className="!text-white-A700 cursor-pointer font-roboto min-w-[103px] outline outline-[1px] outline-white-A700 text-base text-center"
                shape="round"
                color="light_blue_500"
                size="lg"
                variant="fill"
              >
                {props?.signupbuttontext}
              </Button>
              <Button
                className="cursor-pointer font-roboto h-11 min-w-[129px] text-base text-center"
                shape="round"
                color="light_blue_500_7f"
                size="lg"
                variant="fill"
              >
                {props?.learnmorebuttontext}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertiesCta13.defaultProps = {
  headingthree: "Find Your Dream Property Today",
  text: "Discover a personalized property search experience and gain access to exclusive listings.",
  signupbuttontext: "Sign Up",
  learnmorebuttontext: "Learn More",
};

export default PropertiesCta13;
