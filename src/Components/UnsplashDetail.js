import React from "react";
import { Card } from "react-bootstrap";
import { ButtonContainer } from "./Button";

export default function UnsplashDetail({ item }) {
  const igUrl = "http://instagram.com/" + item.user.instagram_username;
  return (
    <div className="mx-auto col-9 col-md-6 col-lg-3 my-3 text-capitalize">
      <Card style={{ width: "18rem" }}>
        <Card.Img className="photo" variant="top" src={item.urls.thumb} />
        <Card.Body>
          <Card.Title> {item.alt_description}</Card.Title>
          <Card.Text>
            <div className="text-muted">Clicked by :</div>
            <b>{item.user.name}</b>
          </Card.Text>
          <ButtonContainer>
            <a href={igUrl}>More from User</a>
          </ButtonContainer>
        </Card.Body>
      </Card>
    </div>
  );
}
