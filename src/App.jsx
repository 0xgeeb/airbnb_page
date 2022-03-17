import React from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.js"

export default function App() {

    const cards = data.map((x) => {
        return <Card
            key = {x.id}
            x = {x}
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