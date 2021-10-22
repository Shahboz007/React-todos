import React from "react";
import CardItem from "./CardItem";
import PropTypes from "prop-types";
import "./Card.css";

function CardList(props) {
  return (
    <div className="wrapper">
      {props.cards.map((card, index) => {
        return (
          <CardItem card={card} key={card.id} index={index} deleteCard={props.delCard}/>
        )
      })}
    </div>
  )
}

CardList.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.object).isRequired,
  delCard: PropTypes.func.isRequired,
};

export default CardList;