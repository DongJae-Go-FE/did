import Link from "next/link";
import { FC, ButtonHTMLAttributes } from "react";

import type { UrlObject } from "url";

type Url = string | UrlObject;
type BtnSize = "xs" | "sm" | "md" | "lg" | "xlg";

interface ButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "color"> {
  color?: "black" | "white" | "blue";
  href?: Url | string;
  size?: BtnSize;
}

const Button: FC<ButtonProps> = ({
  children,
  href,
  className,
  color = "black",
  size = "md",
  ...props
}) => {
  const btnStyle =
    "inline-flex items-center rounded-sm whitespace-nowrap border disabled:bg-gray-300 disabled:cursor-auto cursor-pointer disabled:border-gray-300";

  const classList = [btnStyle];

  let colorStyle;
  let sizeStyle;

  switch (color) {
    case "black": {
      colorStyle = "bg-black text-white border-black";
      break;
    }
    case "white": {
      colorStyle = "bg-white text-black border-gray-200";
      break;
    }
    case "blue": {
      colorStyle = "bg-blue-700 text-white border-blue-700";
      break;
    }
  }

  switch (size) {
    case "xs": {
      sizeStyle = "h-6 px-2 body03r";
      break;
    }
    case "sm": {
      sizeStyle = "h-8 px-4 body02m";
      break;
    }
    case "md": {
      sizeStyle = "h-10 px-6 body02m";
      break;
    }
    case "lg": {
      sizeStyle = "h-12 px-8 body01m";
      break;
    }
    case "xlg": {
      sizeStyle = "h-14 px-10 body01b";
      break;
    }
  }

  if (color) {
    classList.push(colorStyle);
  }

  if (size) {
    classList.push(sizeStyle);
  }

  if (className) {
    classList.push(className);
  }

  if (href) {
    return (
      <Link className={classList.join(" ")} href={href}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classList.join(" ")} {...props}>
      {children}
    </button>
  );
};

export default Button;
