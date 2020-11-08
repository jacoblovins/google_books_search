import React from "react";
import "./style.css";

function Book(props) {
  return (
    <li className="list-group-item">
      <h3 className="font-italic">{props.title}</h3>
      <h5 className="font-italic">{props.subtitle}</h5>
      <img className="inline-block" src={props.image} alt={props.title} />
      <p className="font-italic small">Written by {props.authors}</p>
      <p className="inline-block" id="description">{props.description}</p>
      <a className="btn btn-light" target="_blank" rel="noopener noreferrer" href={props.link}>View</a>
      <props.Button />
    </li>
  );
}

export default Book;

