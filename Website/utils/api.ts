import axios from "axios"

export const api = axios.create({
    baseURL: "https://hack-25-backend.vercel.app/api/v1",
    withCredentials: true 
})