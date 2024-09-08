import axios from "axios"

export const HOST = "https://test.v5.pryaniky.com/"

const api = axios.create({
  baseURL: HOST,
})

export default api
