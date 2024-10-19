import axios from "axios";

export default async function handler(req, res) {
  const { latitude, longitude } = req.query; 
  const api_key = process.env.VITE_API_KEY;

  try {

    console.log("serverless")
    const response = await axios.get(
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json",
      {
        params: {
          location: `${latitude},${longitude}`,
          radius: 1000,
          type: "restaurant",
          key: api_key,
        },
      }
    );


    console.log(" jtjjt",response)

    // Send the results back to the client
    res.status(200).json(response.data.results);
  } catch (error) {
    console.error("Error fetching nearby restaurants:", error);
    res.status(500).json({ error: "Error fetching nearby restaurants" });
  }
}
