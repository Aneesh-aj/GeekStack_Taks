// api/getNearbyRestaurants.js

import axios from "axios";

export default async function handler(req, res) {
  // Get latitude and longitude from query parameters
  const { latitude, longitude } = req.query; 
  const apiKey = process.env.VITE_API_KEY; // Ensure this is set in Vercel environment variables

  if (!latitude || !longitude) {
    return res.status(400).json({ error: "Latitude and longitude are required." });
  }

  try {
    // Make a request to the Google Maps API
    const response = await axios.get("https://maps.googleapis.com/maps/api/place/nearbysearch/json", {
      params: {
        location: `${latitude},${longitude}`,
        radius: 1000,
        type: "restaurant",
        key: apiKey,
      },
    });

    // Return the results back to the client
    return res.status(200).json(response.data.results);
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    return res.status(500).json({ error: "An error occurred. Please try again later." });
  }
}
