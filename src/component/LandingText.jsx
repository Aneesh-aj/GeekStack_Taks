import React from "react";
const LandingText = () => {
    return (
        <>
            <div className="flex items-center flex-col justify-center  gap-10 mt-5">
                <div className="flex flex-col gap-2 ">
                    <h2 className="text-gray-400 text-3xl md:text-5xl lg:text-5xl font-light">
                        Vanakkam, this is
                        <span className="text-white ml-2">coimbatore</span>
                        <span className="text-yellow-400">.ai</span>
                    </h2>
                    <p className="text-gray-400 text-3xl md:text-5xl lg:text-5xl font-light">
                        How can I help you today?
                    </p>
                </div>
                <div className="w-full flex gap-3 h-full overflow-x-scroll lg:overflow-x-hidden">
                    <div className="w-[80%] lg:w-[30%] flex-shrink-0 rounded-md bg-[#1f1f1f] h-[15rem] p-6 ">
                        <p className="text-white">Find restaurants near me</p>
                    </div>
                    <div className="w-[80%] lg:w-[30%] flex-shrink-0 rounded-md bg-[#1f1f1f] h-[15rem] p-6">
                        <p className="text-white">Find carpenter in saravanampatti</p>
                    </div>
                    <div className="w-[80%] lg:w-[30%] flex-shrink-0 rounded-md bg-[#1f1f1f] h-[15rem] p-6">
                        <p className="text-white">Show me the top pubs in coimbatore</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LandingText;
