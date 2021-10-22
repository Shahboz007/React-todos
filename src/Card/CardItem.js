import React, {useContext} from "react";
import PropTypes from "prop-types";
import Context from "../context";

function CardItem({card, index, deleteCard}) {
  const {checkCard} = useContext(Context);
  const classes = ["card"];

  if(card.completed) {
    classes.push("checked");
  }

  return (
      <div className={classes.join(" ")}>
        <div className="card-header">{index + 1}</div>
        <div className="card-body">
          <span className="trash" onClick={deleteCard.bind(null, card.id)}>del</span>
          <span className="check" onClick={checkCard.bind(null, card.id)}>✔</span>
          <h3 className="mb-16">{card.cardTitle}</h3>
          <p className="mb-16">{card.cardText}</p>
          <button className="btn-primary">See Profile</button>
        </div>
      </div>
  )
}


CardItem.propTypes = {
  card: PropTypes.object.isRequired,
  index: PropTypes.number,
}

export default CardItem;