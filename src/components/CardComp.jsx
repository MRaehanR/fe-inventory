import React from "react";
import { Card } from "react-bootstrap";

function CardComp(props) {
  return (
    <div className="container mt-5 d-flex justify-content-center flex-row">
      {props.data.map((d) => {
        return (
          <Card style={{ width: "18rem" }} className="shadow  me-4">
            <Card.Img variant="top" src={d.foto} />
            <Card.Body>
              <Card.Title>{d.nama}</Card.Title>
              <Card.Text>{d.asal}</Card.Text>
              <Card.Text>{d.absen}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
}

export default CardComp;
