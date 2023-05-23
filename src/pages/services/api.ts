
import axios from "axios"
import md5 from 'md5'

const publicKey = "7d7835fbcabb579fc6fd297f422ef7b4"
const privateKey = "954de1cdb92a5a98233862bd7346d75393d86a0c"

const ts = Number(new Date()) 
const hash = md5(ts + privateKey + publicKey)
const dateRange = '2020-01-01,2022-01-01';


const api = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
  params: {
    ts,
    apikey: publicKey,
    hash,
    dateRange
  }
})

export default api;