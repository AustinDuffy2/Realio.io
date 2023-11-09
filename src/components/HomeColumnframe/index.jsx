import React from "react";

import { Button, Img, Text } from "components";

const HomeColumnframe = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex md:flex-col flex-row md:gap-10 gap-[100px] items-center justify-center w-full">
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start outline outline-[3px] outline-white-A700 p-2.5 rounded-[20px] w-full">
            <Button
              className="flex h-[60px] items-center justify-center w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img className="h-8" src="images/img_frame.svg" alt="frame" />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.price}
              </Text>
              <Text
                className="max-w-[245px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
                size="txtWorkSansRegular13"
              >
                {props?.ownedfromproperOne}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start outline outline-[3px] outline-white-A700 p-2.5 rounded-[20px] w-full">
            <Button
              className="flex h-[60px] items-center justify-center w-[60px]"
              shape="circle"
              color="white_A700"
              size="lg"
              variant="fill"
            >
              <Img
                className="h-8"
                src="images/img_frame_orange_a700.svg"
                alt="frameone"
              />
            </Button>
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.p25k}
              </Text>
              <Text
                className="text-[13px] text-black-900 text-center tracking-[-0.26px] w-full"
                size="txtWorkSansRegular13"
              >
                {props?.propertysforbuy}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start outline outline-[3px] outline-white-A700 p-2.5 rounded-[20px] w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_file.svg"
              alt="file"
            />
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.fivehundred}
              </Text>
              <Text
                className="max-w-[245px] md:max-w-full text-[13px] text-black-900 text-center tracking-[-0.26px]"
                size="txtWorkSansRegular13"
              >
                {props?.dailycompleted}
              </Text>
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[18px] items-center justify-start outline outline-[3px] outline-white-A700 p-2.5 rounded-[20px] w-full">
            <Img
              className="h-[60px] w-[60px]"
              src="images/img_file_white_a700.svg"
              alt="fileone"
            />
            <div className="flex flex-col gap-3.5 items-start justify-start w-full">
              <Text
                className="md:text-5xl sm:text-[42px] text-[56px] text-black-900 w-full"
                size="txtRobotoCondensedBold56"
              >
                {props?.sixhundred}
              </Text>
              <Text
                className="text-[13px] text-black-900 text-center tracking-[-0.26px] w-full"
                size="txtWorkSansRegular13"
              >
                {props?.reagularclientsOne}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

HomeColumnframe.defaultProps = {
  price: "$15.4M",
  ownedfromproperOne: (
    <>
      Owned from
      <br />
      Properties transactions
    </>
  ),
  p25k: "25K+",
  propertysforbuy: "Properties for Buy & sell Successfully",
  fivehundred: "500",
  dailycompleted: (
    <>
      Daily completed <br />
      transactions
    </>
  ),
  sixhundred: "600+",
  reagularclientsOne: "Reagular Clients",
};

export default HomeColumnframe;
