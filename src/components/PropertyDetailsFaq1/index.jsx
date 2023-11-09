import React from "react";

import { Button, Text } from "components";

const PropertyDetailsFaq1 = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col md:gap-10 gap-20 items-center justify-start w-full">
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <Text
              className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 text-center w-full"
              size="txtRobotoCondensedBold48"
            >
              {props?.headingsix}
            </Text>
            <Text
              className="text-black-900 text-center text-lg w-full"
              size="txtRobotoRegular18"
            >
              {props?.descriptionthree}
            </Text>
          </div>
          <div className="flex flex-col gap-6 items-center justify-start w-full">
            <div className="flex flex-col gap-4 items-center justify-start w-full">
              <Text
                className="md:text-3xl sm:text-[28px] text-[32px] text-black-900 text-center w-full"
                size="txtRobotoBold32"
              >
                {props?.headingseven}
              </Text>
              <Text
                className="text-black-900 text-center text-lg w-full"
                size="txtRobotoRegular18"
              >
                {props?.textthree}
              </Text>
            </div>
            <Button
              className="cursor-pointer font-roboto h-12 text-base text-center w-[104px]"
              shape="round"
              color="light_blue_500_7f"
              size="lg"
              variant="fill"
            >
              {props?.buttontwo}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsFaq1.defaultProps = {
  headingsix: "FAQs",
  descriptionthree:
    "Find answers to commonly asked questions about the property, including financing options, zoning regulations, and maintenance responsibilities.",
  headingseven: "Still have questions?",
  textthree: "Contact us for more information.",
  buttontwo: "Button",
};

export default PropertyDetailsFaq1;
