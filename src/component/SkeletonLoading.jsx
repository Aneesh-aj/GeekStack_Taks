import React from "react";

const SkeletonLoading = ({ cardCount = 5 }) => {
    return (
        <div className="h-[560px] w-full overflow-y-scroll scrollbar-hide pb-[4rem]">
            <div className="">
                <div className="w-[40%] h-[1rem] bg-gray-600 rounded-md animate-pulse "></div>
                <div className="w-full h-10 p-2 flex gap-4 mb-3 items-center">
                    <div className="h-full w-6 bg-slate-300 rounded-full animate-pulse"></div>
                    <div className="w-[30%] h-[70%]  bg-gray-600 rounded-md animate-pulse"></div>
                </div>
                {Array.from({ length: cardCount }).map((_, index) => (
                    <div key={index} className="w-full card h-[12rem] bg-gray-700 p-2 rounded-lg flex mb-4 animate-pulse">
                        <div className="w-[30%] lg:w-[20%] h-full p-2">
                            <div className="w-full h-full bg-gray-500 rounded-lg animate-pulse"></div>
                        </div>
                        <div className="w-[70%] lg:w-[80%] h-full p-2 flex flex-col justify-between">
                            <div className="w-[40%] h-[1rem] bg-gray-500 rounded-md"></div>
                            <div className="w-full flex h-8 items-center gap-2">
                                <div className="h-[1.2rem] rounded-md w-[3rem] animate-pulse bg-gray-500"></div>
                                <div className="h-[1.2rem] rounded-md w-[3rem] animate-pulse bg-gray-500"></div>
                            </div>
                            <div className="w-[40%] h-[1rem] rounded-md bg-gray-500 animate-pulse"></div>
                            <div className="w-full flex gap-2 mt-1">
                                <div className="bg-gray-500 w-[10%] h-[0.5rem] animate-pulse"></div>
                                <div className="bg-gray-500 w-[10%] h-[0.5rem] animate-pulse"></div>
                                <div className="bg-gray-500 w-[10%] h-[0.5rem] animate-pulse"></div>
                            </div>
                            <div className="w-[80%] rounded-md h-[1rem] bg-gray-500 animate-pulse"></div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SkeletonLoading;
