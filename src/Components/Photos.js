import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPhotos } from "../redux/actions";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Photos extends Component {
  componentDidMount = () => {
    const albumid = this.props.location.pathname;
    const mc = albumid.charAt(albumid.length - 1);
    this.props.getPhotos(mc);
  };
  render() {
    return (
      <React.Fragment>
        <Jumbotron
          className="text-white"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80)`,
          }}
        >
          <h1>Hello From Photos!!</h1>

          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="row">
          {this.props.photos.map((photo) => {
            return (
              <div className="mx-auto col-9 col-md-6 col-lg-3 my-3 text-capitalize">
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    className="photo"
                    variant="top"
                    src={photo.thumbnailUrl}
                  />
                  <Card.Body>
                    <Card.Title> {photo.title}</Card.Title>
                    <Card.Text>
                      <div className="text-muted">Description</div>
                      <b>{photo.title}</b>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  photos: state.data.photos,
});
const mapActionToProps = { getPhotos };

Photos.propTypes = {
  photos: PropTypes.array.isRequired,
  getPhotos: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Photos);
