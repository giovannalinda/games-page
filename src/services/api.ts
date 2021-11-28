import axios from 'axios'

const api = axios.create({
  baseURL: 'https://free-to-play-games-database.p.rapidapi.com/api/',
  headers: {
    'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
    'x-rapidapi-key': '29d0b489b3mshf68d67a64d3d3d8p12945djsndfe0c3a0a06b',
  },
})

export default api
