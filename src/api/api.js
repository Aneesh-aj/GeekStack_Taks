import axios from "axios";

const api_key = import.meta.env.VITE_API_KEY; 

const GoogleMapsApi = axios.create({
    
  headers: {
    "Content-Type": "application/json",
  },
});



export async function getNearbyRestaurants() {
  try {
    console.log(" not comiing")
    const location = await getCurrentLocation();
   
    if(location){
      const response = await GoogleMapsApi.get("/api/maps/place/nearbysearch/json", {
          params: {
            location: `${location.latitude},${location.longitude}`,
            radius: 1000, 
            type: "restaurant", 
            key: api_key,
          },
        });
        console.log(' resss 1',response.data)
            
      return response.data.results;
    }else{
       return "There is a Issue with location !! close the tab and reuse it again"
    }
   

  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    return "An error occurred. Please try again later.";
  }
}

async function getCurrentLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      return reject(new Error("Geolocation is not supported by this browser."));
    }

    navigator.geolocation.getCurrentPosition(
      ({ coords: { latitude, longitude } }) => resolve({ latitude, longitude }),
      reject
    );
  });
}

