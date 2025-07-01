import React from "react";
import { Spotlight } from "../ui/spotlight";
import MovingBorderDemo from "../moving-border/page";

function SpotlightPreview() {
    return (
        <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased md:items-center md:justify-center">


            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />
            <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 md:pt-0">
                <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
                    Hi I am Sainath
                </h1>
                <h1 className="mt-3 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-5xl">
                    Full Stack Web Developer
                </h1>
                <p className="mx-auto mt-6 max-w-lg text-lg text-center text-base font-normal text-neutral-300">
                   Passionate about building good and comprehensive web applications that aren&apos;t just functional, but delightful to use.
                </p>
                <div  className="mt-8 flex justify-center items-center">
                    <a className="cursor-pointer " href="https://drive.google.com/file/d/1nVIkgoqbDcrt4egHT_Oq-OyQxAB-jMyX/view?usp=sharing">
                    <MovingBorderDemo />
                    </a>
                    
                </div>

            </div>
        </div>
    );
}

export default SpotlightPreview;
