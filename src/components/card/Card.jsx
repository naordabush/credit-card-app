import { useState } from "react";
import cardStyles from "./card.module.css";
import FrontCard from "./frontCard/FrontCard";
import RetroCard from "./retroCard/RetroCard";

function Card() {
  const [isFrontCard, setIsFrontCard] = useState(true);

  return (
    <div
      className={cardStyles.container}
      onMouseEnter={() => {
        setIsFrontCard(false);
      }}
      onMouseLeave={() => {
        setIsFrontCard(true);
      }}
    >
      {isFrontCard ? <FrontCard /> : <RetroCard />}
    </div>
  );
}

export default Card;
