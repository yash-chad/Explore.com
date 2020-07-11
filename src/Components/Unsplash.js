import React, { Component } from "react";
import { getUnsplash, searchUnsplash } from "../redux/actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import UnsplashDetail from "./UnsplashDetail";
import { Jumbotron } from "react-bootstrap";

class Unsplash extends Component {
  componentDidMount() {
    this.props.getUnsplash();
  }
  handleSubmit = (e) => {
    e.preventDefault();
    // console.log(e.target.search.value);

    this.props.searchUnsplash(e.target.search.value);
  };

  render() {
    const data = this.props.unsplash;
    const imgUrl =
      "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?ixlib=rb-1.2.1&auto=format&fit=crop&w=2013&q=80";
    // console.log(data);
    return (
      <div>
        <Jumbotron
          style={{ backgroundImage: `url(${imgUrl})`, color: "black" }}
        >
          <h1>Hello From Unsplash!!</h1>
          <form onSubmit={this.handleSubmit}>
            <div class="form-group">
              {/* <label for="exampleInputEmail1">Enter search term!</label> */}
              <input
                type="text"
                className="form-control"
                id="search"
                aria-describedby="emailHelp"
                placeholder="Enter search term!"
              />
              <br />
              <button type="submit" class="btn btn-primary">
                Submit
              </button>
            </div>
          </form>
        </Jumbotron>
        <div className="row">
          {this.props.unsplash.map((item) => {
            return <UnsplashDetail item={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  unsplash: state.data.unsplash,
});
const mapActionToProps = { searchUnsplash, getUnsplash };

Unsplash.propTypes = {
  unsplash: PropTypes.array.isRequired,
  getUnsplash: PropTypes.func.isRequired,
  searchUnsplash: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Unsplash);
