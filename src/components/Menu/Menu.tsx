"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { useEffect } from "react";
import { createPortal } from "react-dom";

import IconButton from "../IconButton";
import Accordion from "../Accordion/Accordion";

type MenuType = {
  handleTransitionEnd: () => void;
  isTriggerAnimation: boolean;
  onClose: () => void;
};

export default function Menu({
  handleTransitionEnd,
  isTriggerAnimation,
  onClose,
}: MenuType) {
  const pathName = usePathname();

  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  const menuStyle = `duration-300 fixed right-0 top-0 z-3000 h-[100dvh] bg-white transition-transform mobile:w-[100dvw] tablet:w-[80dvw] desktop:hidden ${
    isTriggerAnimation
      ? "translate-x-0"
      : "mobile:translate-x-[100dvw] tablet:translate-x-[80dvw]"
  } overflow-y-auto`;
  const menuLiStyle = "block h-12 py-2.5 body01m";

  const menuLiTextStyle = "text-gray-500";
  const menuLiTextOnStyle = "text-black";

  const bgStyle =
    "fixed left-0 top-0 z-2001 h-[100dvh] w-[100dvw] cursor-pointer bg-dimmedEffectBlack70D desktop:hidden";

  return (
    <div>
      <div
        aria-label="mobile-side-menu"
        className={menuStyle}
        onTransitionEnd={handleTransitionEnd}
      >
        <div className="sticky top-0 z-10 flex w-full flex-col">
          <div className="flex h-14 items-center bg-white px-3">
            <IconButton
              className="cursor-pointer"
              icons={
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
                    d="M6.29289 6.29289C6.68342 5.90237 7.31658 5.90237 7.70711 6.29289L17.7071 16.2929C18.0976 16.6834 18.0976 17.3166 17.7071 17.7071C17.3166 18.0976 16.6834 18.0976 16.2929 17.7071L6.29289 7.70711C5.90237 7.31658 5.90237 6.68342 6.29289 6.29289Z"
                    fill="#111111"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z"
                    fill="#111111"
                  />
                </svg>
              }
              onClick={onClose}
            />
          </div>
          <hr className="h-1.5 w-full border-none bg-gray-100" />
        </div>
        <ul>
          <li>
            <Accordion title="메뉴1" isOpen={pathName.includes("send")}>
              <ul>
                <li>
                  <Link
                    href="/send"
                    className={`${menuLiStyle} ${
                      pathName === "/send" ? menuLiTextOnStyle : menuLiTextStyle
                    }`}
                    onClick={onClose}
                  >
                    등록
                  </Link>
                </li>
              </ul>
            </Accordion>
          </li>
        </ul>
      </div>
      {createPortal(
        <div className={bgStyle} onClick={onClose} />,
        document.body
      )}
    </div>
  );
}
