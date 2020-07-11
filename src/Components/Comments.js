import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getComments } from "../redux/actions";
import { Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Comments extends Component {
  componentDidMount = () => {
    this.props.getComments();
  };
  render() {
    // console.log(this.props.comments);
    return (
      <div>
        {this.props.comments.map((comment) => {
          return (
            <div className="container my-3 list-group-item" key={comment.id}>
              <h2 className="">{comment.name}</h2>
              <p className="">{comment.body}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  comments: state.data.comments,
});
const mapActionToProps = { getComments };

Comments.propTypes = {
  comments: PropTypes.array.isRequired,
  getComments: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Comments);
