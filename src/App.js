import React from "react";
import { connect } from "react-redux";
import { updateUser } from "./actions/user-actions.js";

class App extends React.Component {
  //Handlers

  onUpdateUser = e => {
    this.props.onUpdateUser(e.target.value);
  };
  // Rendering
  render() {
    console.log(this.props);
    return (
      <div className="App">
        <h1>Redux Workshop</h1>
        <input onChange={this.onUpdateUser} type="text"></input>
        <h2>{this.props.user}</h2>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.user
});

const mapActionsToProps = {
  onUpdateUser: updateUser
};

export default connect(mapStateToProps, mapActionsToProps)(App);
