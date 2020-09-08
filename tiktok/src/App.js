import React, { Component } from "react";
import Video from "./Video";
import "./App.css";
class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app__videos">
          <Video
            channel="vivek"
            description="wow Epic MERN stack TIK TOK"
            song="99 problems but React aint one"
            likes={111}
            shares={222}
            messages={333}
          />
          <Video />
        </div>
      </div>
    );
  }
}
export default App;
