import React from "react"
import Card from "./components/Card"
import Navbar from "./components/Navbar"
import data from "./data"

export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key = {item.title}
                {...item}
            />
        )
    })
    return (
        <div>
            <Navbar />
            {cards}
        </div>
    )
}