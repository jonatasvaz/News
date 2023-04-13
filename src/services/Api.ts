import axios from 'axios'


export const Api= axios.create({
    baseURL:'https://newsapi.org/v2/everything?q=tesla&from=2023-03-12&sortBy=publishedAt&apiKey=f0ea21ebaa074e0daae0548fd1f06da7'
})