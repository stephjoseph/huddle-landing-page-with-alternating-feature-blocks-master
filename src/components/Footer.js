import React from "react";
import logo from "../images/logo-footer.svg";
import iconLocation from "../images/icon-location.svg";
import iconPhone from "../images/icon-phone.svg";
import iconEmail from "../images/icon-email.svg";

const Footer = () => {
  return (
    <footer className="mt-[-4.188rem] flex w-full max-w-[26.75rem] flex-col bg-[#00252E] px-4 pt-[8.688rem] pb-[2.875rem] xl:mt-[-6rem] xl:max-w-[90rem] xl:flex-row xl:pt-[9rem] xl:pl-[7.5rem] xl:pr-[4.875rem] xl:pb-16">
      <div className="mb-[2.563rem] flex flex-col gap-6 xl:mb-0 xl:mr-[8.125rem] xl:gap-0">
        <a className="xl:mb-8" href="#" aria-label="home-link">
          <img className="h-[1.625rem]" src={logo} alt="" />
        </a>
        <div className="flex w-[21.125rem] gap-4 xl:mb-4">
          <div className="flex h-6 w-6 items-center ">
            <img className="" src={iconLocation} alt="" />
          </div>
          <p className="w-[18.625rem] text-[0.875rem] font-normal leading-6 tracking-normal text-white">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="flex w-[21.125rem] gap-4 xl:mb-4">
          <div className="flex h-6 w-6 items-center ">
            <img className="" src={iconPhone} alt="" />
          </div>
          <p className="w-[18.625rem] text-[0.875rem] font-normal leading-6 tracking-normal text-white">
            +1-543-123-4567
          </p>
        </div>
        <div className="flex w-[21.125rem] gap-4 xl:mb-4">
          <div className="flex h-6 w-6 items-center ">
            <img className="" src={iconEmail} alt="" />
          </div>
          <p className="w-[18.625rem] text-[0.875rem] font-normal leading-6 tracking-normal text-white">
            example@huddle.com
          </p>
        </div>
      </div>
      <nav className="mb-6 xl:mb-0 xl:mr-[12.625rem] xl:mt-14" id="footer-nav">
        <ul className="grid gap-4 xl:grid-cols-2 xl:gap-x-[8.938rem] xl:gap-y-[0.75rem]">
          <li className="xl:order-1">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              About Us
            </a>
          </li>
          <li className="xl:order-3">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              What We Do
            </a>
          </li>
          <li className="xl:order-5">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              FAQ
            </a>
          </li>
          <li className="xl:order-2">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              Career
            </a>
          </li>
          <li className="xl:order-4">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              Blog
            </a>
          </li>
          <li className="xl:order-6">
            <a
              className="text-[0.875rem] font-normal leading-[1.688rem] tracking-normal text-white hover:underline"
              href="#"
            >
              Contact Us
            </a>
          </li>
        </ul>
      </nav>
      <div className="flex flex-col items-center gap-6 self-center text-center xl:mt-[3.438rem] xl:gap-[6.688rem] xl:self-start">
        <div className="flex items-center gap-[0.75rem] self-center xl:self-start">
          <a
            className="group flex h-[1.938rem] w-[1.951rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#FF52C1]"
            href="#"
          >
            <svg
              width="9"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 320 512"
            >
              <path
                className="group-hover:fill-[#FF52C1] group-active:fill-[#FF52C1]"
                fill="white"
                d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
              />
            </svg>
          </a>
          <a
            className="group flex h-[1.938rem] w-[1.951rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#FF52C1]"
            href="#"
          >
            <svg
              width="15"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                className="group-hover:fill-[#FF52C1] group-active:fill-[#FF52C1]"
                fill="white"
                d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
              />
            </svg>
          </a>
          <a
            className="group flex h-[1.938rem] w-[1.951rem] items-center justify-center rounded-full border border-solid border-[#DFE4F0] hover:border-[#FF52C1]"
            href="#"
          >
            <svg
              width="14.69"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                className="group-hover:fill-[#FF52C1] group-active:fill-[#FF52C1]"
                fill="white"
                d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
              />
            </svg>
          </a>
        </div>
        <p className="font-['Poppins'] text-[0.696rem] font-normal leading-[1.063rem] tracking-normal text-white">
          &copy; Copyright 2018 Huddle. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
