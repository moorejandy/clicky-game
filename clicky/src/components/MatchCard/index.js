import React from "react";
import "./style.css";

function MatchCard(props) {
  return (
    <div className="card">
      <div onClick={() => props.setClicked(props.id)} className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Band:</strong> {props.name}
          </li>
          </ul>

      </div>
    </div>
  );
}

export default MatchCard;
