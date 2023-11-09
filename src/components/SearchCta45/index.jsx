import React from "react";

import { Button, Text } from "components";

const SearchCta45 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-20 items-center justify-start py-12 w-full">
          <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
            <Text
              className="leading-[120.00%] md:max-w-full max-w-screen-sm sm:text-4xl md:text-[38px] text-[40px] text-black-900"
              size="txtRobotoCondensedBold40Black900"
            >
              {props?.headingtext}
            </Text>
            <Text
              className="text-black-900 text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.contenttext}
            </Text>
          </div>
          <div className="flex flex-1 flex-row gap-4 items-start justify-start w-full">
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
    </>
  );
};

SearchCta45.defaultProps = {
  headingtext: "Unlock Advanced Search Features Today",
  contenttext: "Discover the Perfect Property for You",
  signupbuttontext: "Sign Up",
  learnmorebuttontext: "Learn More",
};

export default SearchCta45;
