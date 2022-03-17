import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {

    const cards = data.map((x) => {
        return <Card
            img = {x.coverImg}
            rating = {x.stats.rating}
            reviewCount = {"(" + x.stats.reviewCount + ")"}
            country = {x.location}
            title = {x.title}
            price = {"$" + x.price}
        />
    })

    return (
        <div>
            <Navbar />
            <Hero />
            <div className="cards" >
                { cards }
            </div>

        </div>
    )
}


{/* <Card 
img = { katie }
rating = "5.0"
reviewCount = "(6)"
country = "USA"
title = "Life Lessons with Katie Zaferes"
price = "$136"
/> */}