import React from "react";
import { Card } from "../card/card.component";
import "./card-list.styles.css";

export const CardList = props => {
  return (
    <div className="card-list">
      {props.monsters.map(monster => (
        //* Unique key is required because React needs to know which element it needs to update *
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
