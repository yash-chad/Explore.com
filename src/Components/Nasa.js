import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getNasa } from "../redux/actions";
import { Jumbotron, Button } from "react-bootstrap";
import styled from "styled-components";

class Nasa extends Component {
  componentDidMount = () => {
    this.props.getNasa();
  };
  render() {
    // console.log(this.props.nasa);
    return (
      <NasaWrapper>
        <Jumbotron style={{ backgroundImage: `url(${this.props.nasa.url})` }}>
          <h1>Hello From Nasa!!</h1>
          <p>{this.props.nasa.explanation}</p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>
        <h4 className="text-secondary">*Inserts Random Content Here*</h4>
      </NasaWrapper>
    );
  }
}

const mapStateToProps = (state) => ({
  nasa: state.data.nasa,
});
const mapActionToProps = { getNasa };

Nasa.propTypes = {
  nasa: PropTypes.object.isRequired,
  getNasa: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapActionToProps)(Nasa);

const NasaWrapper = styled.div`
  color: white;
  width: 100%;
`;
