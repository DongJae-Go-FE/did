"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathName = usePathname();

  if (pathName === "/introduction/priest") return null;

  const footerStyle = `w-[100dvw]-[45px] flex tablet:h-[296px] justify-between ${
    pathName.includes("/introduction/nave") ? "bg-black" : "bg-[#292A30]"
  }  tablet:px-[60px] mobile:px-[8vw] py-[30px] text-white mobile:flex-col tablet:flex-row mobile:h-auto mobile:gap-y-6 tablet:gap-y-0`;
  const addressContainer =
    "mobile:w-full tablet:w-auto tablet:flex-1 desktop:flex-none flex flex-col";
  const pStyle = "body02r text-gray-300";
  const linkStyle = "body02r underline underline-offset-4";

  return (
    <footer className={footerStyle}>
      <div className={addressContainer}>
        <h3 className="mb-6">
          <Link href="/" className="flex items-center gap-x-1">
            <span className="text-2xl font-bold">DID</span>
          </Link>
        </h3>
        <address className="not-italic">
          <ul className={`flex flex-col gap-y-2 ${pStyle}`}>
            <li>도로명 주소 : 본부 주소</li>
            <li>지번 주소 : 본부 주소(우편번호 14922)</li>
            <li>이메일 : masterforce999@naver.com</li>
          </ul>
        </address>
      </div>
      <hr className="mobile:block tablet:hidden h-[1px] bg-white" />
      <div className="mobile:w-full tablet:w-auto tablet:flex-1 desktop:flex-none">
        <h3 className="heading03b">030-333-1111</h3>
        <p className={pStyle}>운영시간: 10:00 ~ 18:00</p>
        <ul className="mt-4 mb-12 flex gap-x-4">
          <li>
            <Link
              href="http://www.caincheon.or.kr/"
              className={linkStyle}
              target="_blank"
            >
              교구 주소
            </Link>
          </li>
          <li>
            <Link
              href="https://youth.caincheon.or.kr/"
              className={linkStyle}
              target="_blank"
            >
              청소년 사목국
            </Link>
          </li>
        </ul>
        <p className={pStyle}>
          Copyright ⓒ 교구청 주소 All rights reserved
        </p>
      </div>
    </footer>
  );
}
