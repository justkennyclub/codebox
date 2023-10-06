/// <amd-module name="dev/AppStarter" />
import ReactDOM = require("react-dom");
import React = require("react");

export class AppStarter {
  static launch() {
    ReactDOM.render(
      React.createElement("p", {}, "Hello, AMD!"),
      document.getElementById("root")
    );
  }
}
