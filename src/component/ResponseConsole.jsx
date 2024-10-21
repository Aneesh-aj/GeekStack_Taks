import React from "react"
import Card from "./Card"
import SkeletonLoading from "./SkeletonLoading"
const ResponseConsole = ({loading,submitText,restaurant}) => {
    return (
        <>
        {
            loading ? <SkeletonLoading/>:
            <div className=" h-[560px] w-full  overflow-y-scroll scrollbar-hide pb-[4rem]  ">
                <div className="">
                    <h5 className="text-white">{submitText}</h5>
                    <div className="w-full h-10 p-2 flex gap-4 mb-3">
                        <div className="h-full w-6 bg-slate-300 rounded-full"></div>
                        <p className="text-white">Showing the result for your query</p>
                    </div>

                    <Card restaurant={restaurant} />
                </div>
            </div>
            }
        </>
    )
}

export default ResponseConsole