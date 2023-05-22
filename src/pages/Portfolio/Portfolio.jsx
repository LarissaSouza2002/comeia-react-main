import React from "react";
import "./style-portfolio.css"
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio";
// import date from "./Portfolio.json"


function Portfolio({portfolio}) {
    return (
        <>
        <main>
            {/* <div class="container"> */}

                {portfolio.map((item, index) => 
                <ItemPortfolio
                    key = {index} 
                    link = {item.index} 
                    image = {item.image} 
                    descricao = {item.descricao} 
            ></ItemPortfolio>
                )}
                
            {/* </div> */}
        </main>
        </>
    )
}

export default Portfolio;