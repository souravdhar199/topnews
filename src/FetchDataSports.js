import React from "react";
import { useState, useEffect } from "react";
import './App.css';
function FetchDataSports({ value }) {
    const [sports, Setsports] = useState([]);
    //This will fetch data from the NewYork times API
    useEffect(() => {
        fetch(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${value}&api-key=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => Setsports([...data.response.docs]))
            .catch(error => console.log(error));

    }, [value]); // [value] --> Refresh again if the state updates

    return (
        <div className="parent">
            {sports.map((item) => (
                <div className="children">
                    <h1>{item.headline.main}</h1>
                    <p>{item.lead_paragraph}</p>
                    <button><a href={item.web_url}> See the News</a></button>
                </div>
            ))}

        </div>

    );
}


export default FetchDataSports