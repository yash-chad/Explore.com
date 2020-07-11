import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getPosts } from "../redux/actions";
import { Jumbotron, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount = () => {
    this.props.getPosts();
  };
  render() {
    // console.log(this.props.comments);

    return (
      <div>
        <h2 className="my-3">Posts : </h2>
        {this.props.posts.map((post) => {
          return (
            <div className="container my-3 list-group-item" key={post.id}>
              <h2 className="">{post.title}</h2>
              <p className="">{post.body}</p>

              <Dropdown>
                <Link to="/comments">
                  <Button variant="success">Comments!</Button>
                </Link>
                <Dropdown.Toggle
                  split
                  variant="success"
                  id="dropdown-split-basic"
                />

                <Dropdown.Menu>
                  <Dropdown.Item>
                    <h4>et nam sapiente</h4>
                    laudantium enim quasi est quidem magnam voluptate …utem
                    quasi↵reiciendis et nam sapiente accusantium
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <h4>reprehenderit quasi</h4>
                    quia molestiae reprehenderit quasi aspernatur↵aut expedita
                    occaecati aliquam eveniet laudantium↵omnis quibusdam
                    delectus saepe quia accusamus maiores nam est↵cum et ducimus
                    et vero voluptat
                  </Dropdown.Item>
                  <Dropdown.Item>
                    <h4>et ducimus</h4>
                    non et atque↵occaecati deserunt quas accusantium unde odit
                    nobis qui voluptatem↵quia voluptas consequuntur itaque
                    dolor↵et qui rerum deleniti ut occaecati
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  posts: state.data.posts,
});
const mapActionToProps = { getPosts };

Posts.propTypes = {
  posts: PropTypes.array.isRequired,
  getPosts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Posts);
