// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from 'axios';

export default async function handler(req, res) {

  try {
    const response = await axios.get('https://ohmanda.com/api/horoscope/taurus')
    res.status(200).json(response.data)
  } catch (error) {
    console.error("Horoscope error: ", error.message)
    res.status(500).json({ error: "Horoscope was not fetched" })
  }

}
