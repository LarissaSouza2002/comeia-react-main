import React from "react";
import "./style-portfolio.css"
// import date from "./Portfolio.json"


function Portfolio() {
    return (
        <>
        <main>
            <div class="container">

                {date.Portfolio.map((item, index) => (
                    <div key = {index} className="info-portfolio">
                        <a href= {item.link} target="_blank">
                            <img id="image" src={item.image}></img>
                        </a>
                        <p id="information">
                            {item.title}
                        </p>

                    </div>

                ))}
                
            </div>
        </main>
        </>
    )
}

export default Portfolio;