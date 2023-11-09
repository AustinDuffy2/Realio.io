import React from "react";

import { Img, Text } from "components";

const PropertyDetailsContent2 = (props) => {
  return (
    <>
      <div className={props.className}>
        <Img
          className="flex-1 h-[580px] md:h-auto object-cover rounded-[10px] w-full"
          src="images/img_frame3_472x675.png"
          alt="framethreeone"
        />
        <div className="flex flex-1 flex-col gap-6 items-start justify-start w-full">
          <Text
            className="text-5xl sm:text-[38px] md:text-[44px] text-black-900 w-full"
            size="txtRobotoCondensedBold48"
          >
            {props?.headingtext}
          </Text>
          <div className="flex flex-col items-start justify-start w-full">
            <div className="flex flex-col items-start justify-start pb-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[665px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontext}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start pb-4 w-full">
              <Text
                className="leading-[150.00%] max-w-[665px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiononetext}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-full">
              <Text
                className="leading-[150.00%] max-w-[665px] md:max-w-full text-base text-black-900"
                size="txtRobotoRegular16"
              >
                {props?.descriptiontwotext}
              </Text>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

PropertyDetailsContent2.defaultProps = {
  headingtext: "Property Overview",
  descriptiontext:
    "Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.",
  descriptiononetext:
    "Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.",
  descriptiontwotext:
    "Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nulla adipiscing erat a erat. Condimentum lorem posuere gravida enim posuere cursus diam.",
};

export default PropertyDetailsContent2;
