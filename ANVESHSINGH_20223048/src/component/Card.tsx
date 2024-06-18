//@ts-nocheck
import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TinderCard from "react-tinder-card";

let score=0;
export const Card = ({db,topic}) => {
  const navigate=useNavigate();
  const [currentIndex, setCurrentIndex] = useState(db.length - 1);
  const [lastDirection, setLastDirection] = useState();
  const currentIndexRef = useRef(currentIndex);
  const childRefs = useMemo(
    () =>
      Array(db.length)
        .fill(0)
        .map((i) => React.createRef()),
    []
  );

  const updateCurrentIndex = (val) => {
    setCurrentIndex(val);
    currentIndexRef.current = val;
  };

  const canGoBack = currentIndex < db.length - 1;

  const canSwipe = currentIndex >= 0;

  const swiped = (direction, nameToDelete, index) => {
    if(index!=db.length&&direction=="left"&&db[index].ans==false){
      score=score+1;
  }
  else if(index!=db.length&&direction=="right"&&db[index].ans==true){
      score=score+1;
  }
    setLastDirection(direction);
    updateCurrentIndex(index - 1);
  };

  const outOfFrame = (name, idx) => {

    if(lastDirection!=undefined){
    }
    currentIndexRef.current >= idx && childRefs[idx].current.restoreCard();
  };

  if(!canSwipe){
    navigate(`/${topic}/${score}`);
  }



  const swipe = async (dir) => {
    if (canSwipe && currentIndex < db.length) {
      await childRefs[currentIndex].current.swipe(dir); 
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="flex justify-center cardContainer">
        {db.map((character, index) => (
          <TinderCard
            preventSwipe={["up", "down"]}
            ref={childRefs[index]}
            className="swipe"
            key={character.ques}
            onSwipe={(dir) => swiped(dir, character.ques, index)}
            onCardLeftScreen={() => outOfFrame(character.name, index)}
          >
            <div className="card font-mono">{character.ques}</div>
          </TinderCard>
        ))}
      </div>
      <div className="buttons">
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("left")}
        >
          Swipe left!
        </button>
        <button
          style={{ backgroundColor: !canSwipe && "#c3c4d3" }}
          onClick={() => swipe("right")}
        >
          Swipe right!
        </button>
      </div>
    </div>
  );
};
