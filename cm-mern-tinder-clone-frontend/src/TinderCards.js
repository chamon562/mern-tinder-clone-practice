import React, { useState, useEffect } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "./axios";

function TinderCards() {
    // need some state to keep track and store who these people are
    // intializing useState with an empty array
    // this is how you write a variable in react
    const [people, setPeople] = useState([]);

    useEffect(() => {
        // the comma and [] helps when the TinderCards load it will only run it once and not repeatedly
        // if you put [name] in it whenever the variable name changes it will refire this code
        // useEffect is a hook so we have to import it from react

        // adding async function
        async function fetchData() {
            // call in our endpoint /tinder/cards 
            // thats because baseURL was made in axios.js
            const req = await axios.get("/tinder/cards")

            // request the data
            setPeople(req.data);
        }
        // call the set people with fetch data
        fetchData();
    }, [])
    console.log(people)
    const swiped = (direction, nameToDelete) => {
        console.log("removing: " + nameToDelete);
        // will help later on to understand whats going on
        // setLastDirection(direction);
    }

    const outOfFrame = (name) => {
        console.log(name + "Left the screen")
    };

    return (
        <div className="tinderCards">
            <div className="tinderCards_cardsContainer">
                {/* with jsx squigly bracket{} can say people.map */}
                {people.map((person) => (
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir) => swiped(dir, person.name)}
                        onCardLeftScreen={() => outOfFrame(person.name)}
                    >
                        <div style={{ backgroundImage: `url(${person.imgUrl})` }}
                            className="card"
                        >
                            <h3>{person.name}</h3>
                        </div>

                    </TinderCard>
                ))}
            </div>
        </div>
    );
}

export default TinderCards;