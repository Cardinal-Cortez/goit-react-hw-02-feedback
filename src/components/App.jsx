import { Feedback } from "./Feedback";
import { Component } from "react";
import {Conteiner} from "./styled";

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       <Feedback/>
//     </div>
//   );
// };
export class App extends Component{

  render() {
    return (
      <Conteiner>
        <Feedback />
      </Conteiner>
    );
  }
}