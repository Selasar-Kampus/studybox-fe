"use client";

import React, {useState, useEffect} from "react";
import CartToggle from "../component/CartToggle";
import {HeaderExplore} from "../component/header-explore";
import Menu from "../component/Menu";
import MobileMenu from "../component/MobileMenu";
import SearchToggle from "../component/SearchToggle";
import Image from "next/image";
import Socials from "@/components/common/Socials";
import Link from "next/link";

export default function HeaderEight() {
    const [activeMobileMenu, setActiveMobileMenu] = useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.scrollY;
            setScrollPosition(position);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header
            data-add-bg="bg-white"
            className={`header -type-5 js-header ${
                scrollPosition > 50 ? "bg-white" : ""
            }`}
        >
            <div className="header__container py-10">
                <div className="row justify-between items-center">
                    <div className="col-auto">
                        <div className="header-left d-flex items-center">
                            <div className="header__logo ">
                                <Link data-barba href="/">
                                    <Image
                                        width={140}
                                        height={50}
                                        src="/assets/img/general/logo-dark.svg"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                        </div>
                    </div>

                    <div className="col-auto">
                        <Menu
                            allClasses={"menu__nav text-dark-1 ml-50 xl:ml-30 -is-active"}
                        />
                        <MobileMenu
                            setActiveMobileMenu={setActiveMobileMenu}
                            activeMobileMenu={activeMobileMenu}
                        />
                    </div>

                    <div className="col-auto">
                        <div className="header-right d-flex items-center">
                            <div className="header-right__icons text-white d-flex items-center">
                                <div className="d-none xl:d-block ml-20">
                                    <button
                                        className="text-dark-1 items-center"
                                        onClick={() => setActiveMobileMenu(true)}
                                        data-el-toggle=".js-mobile-menu-toggle"
                                    >
                                        <i className="text-11 icon icon-mobile-menu"></i>
                                    </button>
                                </div>
                            </div>

                            <div className="header-right__buttons d-flex items-center ml-30 xl:ml-20 lg:d-none">
                                <Link href="/login" className="button -underline text-dark-1">
                                    Log in
                                </Link>
                                <Link
                                    href="/signup"
                                    className="button px-25 h-50 -dark-1 text-white ml-20"
                                >
                                    Sign up
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
