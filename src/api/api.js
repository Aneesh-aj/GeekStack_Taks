// utils/api.js (or wherever you manage API calls)

import axios from "axios";

export async function getNearbyRestaurants() {
  try {
    const location = await getCurrentLocation();
           console.log(location)
    if (location) {
        const response = await axios.get(`/getNearbyRestaurants`, {
        params: {
          latitude: location.latitude,
          longitude: location.longitude,
        },
      });

       console.log(" eee ",response)

      return response.data; // Return the data received from the serverless function
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
