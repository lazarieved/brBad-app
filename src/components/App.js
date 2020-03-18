import React from "react";
import MainMenu from "./MainMenu";

class App extends React.Component {
  render() {
    console.log(this.props, 'App props');
    return (
      <div>
        <MainMenu />
      </div>
    );
  }
}

export default App;
