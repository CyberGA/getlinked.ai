"use client"

import Link from "next/link"
import Button from "./button"
import Menu from "./harmburger"

const navs = [
    {text: "Timeline", link: "#", active: "timeline"},
    {text: "Overview", link: "#", active: "overview"},
    {text: "FAQs", link: "#", active: "faqs"},
    {text: "Contact", link: "#", active: "contact"},
]

export default function Header(): JSX.Element {

    function onRegisterClicked() {
        console.log("Register")
    }
    
    return (
        <div className="h-[71px] sm:h-[120px] lg:h-[141px] flex flex-row items-center lg:items-end pl-[54px] pr-12 xl:px-32 pb-0 sm:pb-4 lg:pb-[25px] duration-500 ease-in-out border-b border-c-border bg-transparent absolute z-10 top-0 right-0 left-0">
            <div className="w-full flex flex-row items-center justify-between">
                <Link href="/"><p className="font-clash font-bold text-[36px]">get<span className="text-c-pink">linked</span></p></Link>
                <nav className="hidden lg:flex flex-row items-center gap-14">
                    {
                        navs.map((nav, index) => (
                            <Link key={index} href={nav.link} className="font-base c-text-gradient">{nav.text}</Link>
                        ))
                    }
                    <Link href="#" className="pl-0 lg:pl-[35px] xl:pl-[65px] duration-500 ease-in-out">
                        <Button text="Register" sx="hover:shadow-lg hover:shadow-c-pink/5 duration-500" />
                    </Link>
                </nav>
                <div className="w-fit block scale-100 lg:hidden lg:scale-0 cursor-pointer duration-500">
                    <Menu />
                </div>
            </div>
        </div>
    )
}