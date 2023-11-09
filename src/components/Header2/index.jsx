import React from "react";

import { Button, Img, Text } from "components";

const Header2 = (props) => {
  return (
    <>
      <header className={props.className}>
        <div className="border-b border-black-900 border-solid flex flex-row items-center justify-start py-5 w-full">
          <ul className="flex flex-1 sm:flex-col flex-row gap-8 md:hidden items-center justify-start w-full common-row-list">
            <li>
              <Text
                className="flex-1 text-base text-black-900"
                size="txtRobotoRegular16"
              >
                Link One
              </Text>
            </li>
            <li>
              <Text
                className="flex-1 text-base text-black-900"
                size="txtRobotoRegular16"
              >
                Link Two
              </Text>
            </li>
            <li>
              <Text
                className="flex-1 text-base text-black-900"
                size="txtRobotoRegular16"
              >
                Link Three
              </Text>
            </li>
            <li>
              <div className="flex flex-1 md:flex-1 flex-row gap-1 items-center justify-start md:w-full">
                <Text
                  className="text-base text-black-900 w-auto"
                  size="txtRobotoRegular16"
                >
                  Property Detail
                </Text>
                <Img
                  className="h-6 w-6"
                  src="images/img_arrowdown.svg"
                  alt="arrowdown"
                />
              </div>
            </li>
          </ul>
          <div className="flex flex-row gap-5 items-center justify-end py-5 w-auto">
            <Button
              className="cursor-pointer font-roboto min-w-[89px] text-base text-center"
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              Sign In
            </Button>
            <Button
              className="!text-white-A700 cursor-pointer font-roboto min-w-[150px] outline outline-[1px] outline-white-A700 text-base text-center"
              shape="round"
              color="light_blue_500"
              size="md"
              variant="fill"
            >
              Create Account
            </Button>
            <div className="flex flex-col items-start justify-start p-3 w-12">
              <Img
                className="h-6 w-6"
                src="images/img_iconmenu.svg"
                alt="iconmenu"
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

Header2.defaultProps = {};

export default Header2;
