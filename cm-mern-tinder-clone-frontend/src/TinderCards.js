import React, { useState } from "react";
import "./TinderCards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
function TinderCards() {
    // need some state to keep track and store who these people are
    // intializing useState with an empty array
    // this is how you write a variable in react
    const [people, setPeople] = useState([]);

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
                        <div style={{ backgroundImage: `url(${person.url})` }}
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