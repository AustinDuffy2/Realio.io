import React from "react";

import { useNavigate } from "react-router-dom";

import { Button, Img, Text } from "components";

const Header1 = (props) => {
  const navigate = useNavigate();

  return (
    <>
      <header className={props.className}>
        <div className="border-b border-black-900 border-solid flex flex-row items-center justify-start py-5 w-full">
          <ul className="flex flex-1 sm:flex-col flex-row gap-8 md:hidden items-center justify-start w-full common-row-list">
            <li>
              <Text
                className="common-pointer flex-1 text-base text-black-900"
                size="txtRobotoRegular16"
                onClick={() => navigate("/")}
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
                className="common-pointer flex-1 text-base text-black-900"
                size="txtRobotoRegular16"
                onClick={() => navigate("/properties")}
              >
                Link Three
              </Text>
            </li>
            <li>
              <Button
                className="common-pointer bg-transparent cursor-pointer flex flex-1 items-center justify-center pr-[35px]"
                onClick={() => navigate("/propertydetails")}
                rightIcon={
                  <li>
                    <Img
                      className="h-6 ml-1"
                      src="images/img_arrowdown.svg"
                      alt="arrow_down"
                    />
                  </li>
                }
              >
                <div className="font-roboto sm:pr-5 text-base text-black-900 text-left">
                  Property Detail
                </div>
              </Button>
            </li>
          </ul>
          <div className="flex flex-row gap-5 items-center justify-end py-5 w-auto">
            <Button
              className="common-pointer cursor-pointer font-roboto min-w-[89px] text-base text-center"
              onClick={() => navigate("/loginscreen")}
              shape="round"
              color="light_blue_500_7f"
              size="md"
              variant="fill"
            >
              Sign In
            </Button>
            <Button
              className="common-pointer !text-white-A700 cursor-pointer font-roboto min-w-[150px] outline outline-[1px] outline-white-A700 text-base text-center"
              onClick={() => navigate("/signupscreen")}
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

Header1.defaultProps = {};

export default Header1;
