import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-none",
  round: "rounded-[10px]",
};
const variants = {
  fill: {
    light_blue_500: "bg-light_blue-500",
    white_A700: "bg-white-A700 shadow-bs",
    gray_100: "bg-gray-100",
    light_blue_500_7f: "bg-light_blue-500_7f text-white-A700",
  },
  outline: { black_900: "border border-black-900 border-solid" },
};
const sizes = { xs: "pl-px py-px", sm: "p-1.5", md: "p-2.5", lg: "p-3.5" };

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "",
  size = "",
  variant = "",
  color = "",
  ...restProps
}) => {
  return (
    <button
      className={`${className} ${(shape && shapes[shape]) || ""} ${
        (size && sizes[size]) || ""
      } ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf([
    "light_blue_500",
    "white_A700",
    "gray_100",
    "light_blue_500_7f",
    "black_900",
  ]),
};

export { Button };
