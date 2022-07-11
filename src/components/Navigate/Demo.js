import React from 'react'
import axios from 'axios'
import Timeline from './Timeline';
import { useState } from "react";

export default function Demo() {

const [articles, getArticles] = useState(``);
//const url = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=84ea95ca5e0a41feac30150c5eea8411';
const url = 'https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=84ea95ca5e0a41feac30150c5eea8411';

{React.useEffect(() => {
    setTimeout(() => {
        getAllArticles();
    }, 5000)
    
}, []);}

React.useEffect(() => {
    getAllArticles();
}, [])

const getAllArticles = () =>
{
    axios.get(`${url}`)
    .then((response) => {
        const allArticles = response.data.articles;
        getArticles(allArticles);
    })
    .catch(error => console.error(`Error: ${error}`));
}

    return (
        <div>
            <Timeline articles={articles}/>
        </div>
    )
}
