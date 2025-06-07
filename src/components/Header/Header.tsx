"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState } from "react";
import { createPortal } from "react-dom";

import IconButton from "../IconButton";
import Menu from "../Menu";

import useAnimation from "@/hooks/useAnimation";

export default function Header() {
  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const [hasDrawer, handleTransitionEnd, triggerAnimation] =
    useAnimation(isDrawerOpen);

  const headerStyle = `fixed top-0 z-1001 w-full border-b border-[#46464B] transition-[height, background-color] text-white bg-[#292A30] duration-200 ${
    isOpen ? "h-[300px]" : "h-[64px]"
  }`;

  const liStyle = "h-full w-32";
  const LinkStyle = "flex h-full w-full items-center justify-center";

  const liSpanAfterStyle =
    " after:content-[''] after:absolute after:w-0 after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-white after:transition-[width] after:duration-200";
  const liSpanStyle = `flex items-center h-full text-white relative hover:body01b hover:after:w-full ${liSpanAfterStyle}`;

  const depthStyle = `${
    isOpen ? "grid grid-rows-[1fr]" : "grid grid-rows-[0fr]"
  } transition-[grid-template-rows] duration-300`;
  const depthUlStyle = "overflow-hidden";
  const depthLiStyle = "w-full h-[64px]";
  const depthLinkStyle = `flex w-full h-full items-center justify-center text-white`;

  const oneDepthStyle = "body01r";
  const oneDepthOnStyle = "body01b after:w-full";

  const depthSpanAfterStyle =
    "after:content-[''] after:absolute after:w-0 after:-bottom-1 after:left-1/2 after:-translate-x-1/2 after:h-0.5 after:bg-white after:transition-[width] after:duration-200";
  const depthSpanStyle = `relative hover:after:w-full hover:body02b ${depthSpanAfterStyle}`;

  const twoDepthStyle = "body02r after:w-0";
  const twoDepthOnStyle = "body02b after:w-full";

  const handleDrawer = () => {
    setIsDrawerOpen(true);
  };

  return (
    <header className={headerStyle}>
      <div className="flex h-[64px] w-full items-center border-b border-[#46464B] pl-5">
        <h1>
          <Link href="/" className="flex items-center gap-x-1">
            <span className="font-bold text-[18px]">DID</span>
          </Link>
        </h1>
        <div className="desktop:block hidden h-full">
          <nav className="h-full">
            <ul className="flex h-full items-center">
              <li
                className={liStyle}
                onMouseEnter={() => {
                  setIsOpen(true);
                }}
                onMouseLeave={() => {
                  setIsOpen(false);
                }}
              >
                <Link href="/introduction/nave" className={LinkStyle}>
                  <span
                    className={`${
                      pathName.includes("introduction")
                        ? oneDepthOnStyle
                        : oneDepthStyle
                    } ${liSpanStyle}`}
                  >
                    메뉴1
                  </span>
                </Link>
                <div className={depthStyle}>
                  <ul className={depthUlStyle}>
                    <li className={depthLiStyle}>
                      <Link
                        className={depthLinkStyle}
                        href="/introduction/nave"
                      >
                        <span
                          className={`${depthSpanStyle} ${
                            pathName === "/introduction/nave"
                              ? twoDepthOnStyle
                              : twoDepthStyle
                          }`}
                        >
                          메뉴2
                        </span>
                      </Link>
                    </li>
                    <li className={depthLiStyle}>
                      <Link
                        className={depthLinkStyle}
                        href="/introduction/priest"
                      >
                        <span
                          className={`${depthSpanStyle} ${
                            pathName === "/introduction/priest"
                              ? twoDepthOnStyle
                              : twoDepthStyle
                          }`}
                        >
                          메뉴
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </nav>
        </div>
        <IconButton
          type="button"
          className="mobile:flex tablet:flex desktop:hidden ml-auto h-full w-16 cursor-pointer"
          title="모바일 메뉴 아이콘"
          onClick={handleDrawer}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 5.9751C2.97485 5.42281 3.42257 4.9751 3.97485 4.9751L19.9749 4.9751C20.5271 4.9751 20.9749 5.42281 20.9749 5.9751C20.9749 6.52738 20.5271 6.9751 19.9749 6.9751L3.97485 6.9751C3.42257 6.9751 2.97485 6.52738 2.97485 5.9751Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 11.9751C2.97485 11.4228 3.42257 10.9751 3.97485 10.9751L19.9749 10.9751C20.5271 10.9751 20.9749 11.4228 20.9749 11.9751C20.9749 12.5274 20.5271 12.9751 19.9749 12.9751L3.97485 12.9751C3.42257 12.9751 2.97485 12.5274 2.97485 11.9751Z"
              fill="#fff"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2.97485 17.9751C2.97485 17.4228 3.42257 16.9751 3.97485 16.9751L19.9749 16.9751C20.5271 16.9751 20.9749 17.4228 20.9749 17.9751C20.9749 18.5274 20.5271 18.9751 19.9749 18.9751L3.97485 18.9751C3.42257 18.9751 2.97485 18.5274 2.97485 17.9751Z"
              fill="#fff"
            />
          </svg>
        </IconButton>
      </div>
      {hasDrawer &&
        createPortal(
          <Menu
            handleTransitionEnd={handleTransitionEnd}
            isTriggerAnimation={triggerAnimation}
            onClose={() => setIsDrawerOpen(false)}
          />,
          document.body
        )}
    </header>
  );
}
