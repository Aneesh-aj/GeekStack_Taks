import axios from "axios";

const isDevelopment = import.meta.env.DEV;
const api_key = import.meta.env.VITE_API_KEY;


const baseURL = isDevelopment ? "/api/maps/place/nearbysearch/json" : "/api/getNearbyRestaurants";
console.log( baseURL)
const GoogleMapsApi = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export async function getNearbyRestaurants() {
  try {
    const location = await getCurrentLocation();
    
    console.log(location)

    if (location) {
      const response = await GoogleMapsApi.get("", {
        params: {
          location: `${location.latitude},${location.longitude}`,
          radius:1000,
          type: "restaurant",
          key:api_key
        },
      });

      console.log("Response:", response);
      return response.data.results; // Return the data received from the serverless function
    } else {
      return "There is an issue with the location! Close the tab and try again.";
    }
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    return "An error occurred. Please try again later.";
  }
}

async function getCurrentLocation() {
  console.log("Fetching current location...");
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
