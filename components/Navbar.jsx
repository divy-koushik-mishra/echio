"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { echio } from "@/public/index";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "./others/Button";

const Navbar = () => {
  const [activeTag, setActiveTag] = useState("Home");
  const router = useRouter();

  useEffect(() => {
    const currentPath = router.asPath;
    const initialActiveTag =
      navbarItems.find((item) => item.href === currentPath)?.tag || "Home";
    setActiveTag(initialActiveTag);
  }, []);

  const handleTagClick = (tag) => {
    setActiveTag(tag);
  };

  const navbarItems = [
    { id: 0, href: "/", tag: "Home" },
    { id: 1, href: "/brand", tag: "Brands" },
    { id: 2, href: "/influencer", tag: "Influencers" },
    { id: 3, href: "/agency", tag: "Agency" },
    { id: 4, href: "/service", tag: "Services" },
    { id: 5, href: "/studio", tag: "Studio" },
    { id: 6, href: "/team", tag: "Team" },
    { id: 7, href: "/contact", tag: "Contact Us" },
  ];

  return (
    <div className="flex justify-evenly items-center h-8 mx-[5rem] p-2 mt-[2rem] mb-14">
      <span className="md:px-2 px-7 py-3 mx-3">
        <Image src={echio} alt="logo" />
      </span>
      <ul className="hidden md:flex lg:text-[1.25rem] font-inter">
        {navbarItems.map((item) => (
          <li
            key={item.id}
            className={`p-4 cursor-pointer ${
              activeTag === item.tag ? "text-[#5AEBFF]" : "hover:text-[#5AEBFF]"
            }`}
            onClick={() => handleTagClick(item.tag)}
          >
            <Link href={item.href}>{item.tag}</Link>
          </li>
        ))}
      </ul>
      <Button
        button="default"
        className="![border-image:unset] !bg-white !text-black"
        rectangleClassName="!bg-neutral-white-lite"
        text="Login Now"
      />
    </div>
  );
};

export default Navbar;
