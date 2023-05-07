import { Feedback } from "./Feedback";
import { Component } from "react";
export class App extends Component{

  render() {
    return (
      <div>
        <Feedback
        good={0}
        neutral={0}
        bad={0}
        total={0}
        positivePercentage={0}
        />
      </div>

    );
  }
}