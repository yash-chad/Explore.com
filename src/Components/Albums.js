import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAlbums } from "../redux/actions";
import { Jumbotron, Button, Card } from "react-bootstrap";
import { ButtonContainer } from "./Button";
import { Link } from "react-router-dom";

class Albums extends Component {
  componentDidMount = () => {
    this.props.getAlbums();
  };
  render() {
    // console.log(this.props.ablums);
    return (
      <React.Fragment>
        <Jumbotron
          className="text-white"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1587731556938-38755b4803a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1057&q=80)`,
          }}
        >
          <h1>Hello From Albums!!</h1>

          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <div className="row">
          {this.props.albums.map((album) => {
            const photoUrl = "/photos/" + album.id;
            return (
              <div
                className="mx-auto col-9 col-md-6 col-lg-3 my-3 text-capitalize"
                key={album.id}
              >
                <Card style={{ width: "18rem" }}>
                  {/* <Card.Img
                    className="photo"
                    variant="top"
                    src={item.urls.thumb}
                  /> */}
                  <Card.Body>
                    <Card.Title> {album.title}</Card.Title>
                    <Card.Text>
                      <div className="text-muted">Album Id:</div>
                      <b>{album.id}</b>
                    </Card.Text>
                    <Link to={photoUrl}>
                      <ButtonContainer>Explore!</ButtonContainer>
                    </Link>
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
  albums: state.data.albums,
});
const mapActionToProps = { getAlbums };

Albums.propTypes = {
  albums: PropTypes.array.isRequired,
  getAlbums: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Albums);
