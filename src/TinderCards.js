import React, { useState } from "react";
import "./TinderCards.css";

function TinderCards() {
    // need some state to keep track and store who these people are
    // intializing useState with an empty array
    // this is how you write a variable in react
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: "data:image/jpeg;base64,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"
        },
        {
            name: "Nicky Minaj",
            url: "https://i.pinimg.com/236x/ba/a4/9c/baa49ce089fe28e8c03560661f5a39bf.jpg"
        }
    ]);
    return (
        <div className="tinderCards">
            {/* with jsx squigly bracket{} can say people.map */}
            {people.map((person) => (
                <h1>{person.name}</h1>
            ))}
        </div>
    );
}

export default TinderCards;