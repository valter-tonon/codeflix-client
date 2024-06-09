import Image from "next/image";
import {Header} from "@/app/components/Header";
import {InformationCircleIcon} from "@heroicons/react/24/outline";
import {PlayIcon} from "@heroicons/react/16/solid";

export default function Home() {
    return (
        <div className="relative h-screen overflow-hidden bg-gradient-to-t from-black from-30% lg:h-[140vh] ">
            <Header/>
            <main className="relative pb-24 pl-4 lg:pl-16">
                <div className="flex flex-col space-y-2 py-16 md:space-y-4 lg:h-[65vh] lg:justify-end lg:pb-12">
                <div className="absolute left-0 top-0 -z-10 flex h-[95vh] w-screen flex-col  bg-black">
                    <Image
                        src='/banner.png'
                        alt='The Witcher'
                        fill={true}
                        className="absolute left-0 top-0 w-screen h-[95vh] object-cover object-top"
                    />
                </div>
                    <h1 className="text-2xl font-bold md:text-4xl lg:text-7xl">Maid</h1>
                    <p className="text-shadow-md max-w-xs text-xs md:max-w-lg md:text-lg lg:max-w-2xl">
                        After fleeing an abusive relationship, a young mother finds a job cleaning houses as she fights to provide for her child and build them a better future.
                    </p>
                </div>
                <div className="flex space-x-3">
                    <button
                        className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-white px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
                        <PlayIcon className="text-black h6"/> Play
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"/>
                        </svg>

                    </button>
                    <button
                        className="md:text-xl flex cursor-pointer items-center gap-x-2 rounded bg-gray-600 px-5 py-1.5 text-sm font-semibold text-black transition hover:opacity-75 md:px-8 md:py-2.5">
                        <InformationCircleIcon className="h6"/>More Info
                    </button>
                </div>
            </main>
        </div>
    );
}
