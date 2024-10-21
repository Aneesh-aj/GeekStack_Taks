import LandingText from "./LandingText";
import React, { useState } from "react";
import ResponseConsole from "./ResponseConsole";
import {  getNearbyRestaurants} from "../api/api";
import toast, { Toaster } from "react-hot-toast";
import SkeletonLoading from "./SkeletonLoading";

const Content = () => {
   const [input, setInput] = useState("");
   const [submitText,setSubmitText]=useState("")
   const [restaurant,setRestaurant]=useState([])
   const [loading,setLoading]=useState(false)

   const handleKeyDown = async (e) => {
       if (e.key === 'Enter') { 
        const value = input.toLocaleLowerCase()  
        console.log(" input ",input)
        console.log(" value ",value)      
        if (value !== 'restaurant near me') {
            return toast.error('Wrong command! Only type: "restaurant near me"');
        }

           try {
            setLoading(true)
               const response = await getNearbyRestaurants(input);  
               await new Promise((resolve) => setTimeout(resolve, 2000));

               setSubmitText(input)
               setInput("")
               setLoading(false)

               setRestaurant(response)
           } catch (error) {
               console.error("Error:", error);
               consle.log(error)
           }
       }
   };

   return (
        <>
            <div className="bg-[#131314] w-full h-[80%] flex flex-col justify-center items-center">
                <Toaster/>
                <div className="w-[90%] lg:w-[50%] h-full">
                    {restaurant&&restaurant.length>0  || loading?<ResponseConsole loading={loading} submitText={submitText} restaurant={restaurant} />:<LandingText /> }
                </div>
                <div className="w-[90%] lg:w-[50%] fixed bottom-8 bg-[#1f1f1f] p-3 h-[3rem] lg:h-[4rem] rounded-full">
                    <input
                        type="text"
                        value={input} 
                        onChange={(e) => setInput(e.target.value)} 
                        onKeyDown={handleKeyDown}  
                        className="w-[80%] lg:w-[50%] text-white h-full rounded-full bg-[#1f1f1f] border-none ps-2 lg:ps-9 outline-none"
                        placeholder="Enter your prompt here"
                    />
                </div>
            </div>
        </>
   );
};

export default Content;
