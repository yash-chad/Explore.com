import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import { connect } from "react-redux";
import { loginUser } from "../redux/actions";
import PropTypes from "prop-types";

class Facebook extends Component {
  responseFacebook = (response) => {
    this.props.loginUser({
      name: response.name,
      isLoggedIn: true,
      picture: response.picture.data.url,
    });
    localStorage.setItem("loggedIn", true);
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;

    if (this.props.isLoggedIn) {
      fbContent = (
        <div
          className="my-3"
          style={{
            width: "400px",
            margin: "auto",
            background: "#f4f4f4",
            padding: "20px",
          }}
        >
          <img src={this.props.picture} alt={this.props.name} />
          <h2>Welcome {this.props.name}</h2>
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="699253127319409"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          className="my-5"
        />
      );
    }

    return <div>{fbContent}</div>;
  }
}

const mapActionToProps = { loginUser };

const mapStateToProps = (state) => ({
  isLoggedIn: state.data.isLoggedIn,
  name: state.data.name,
  picture: state.data.picture,
});

Facebook.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Facebook);
