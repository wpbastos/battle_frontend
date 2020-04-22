import React, {useState} from "react";
import "./Home.css";

// function Home() {
//     return (
//         <h1>Home</h1>
//       );
// }
// export default Home;

// export default function() {
//     return (
//         <h1>Home</h1>
//       );
// }

export default (props) => {
  let [subtitle, setSubtitle] = useState("React (Hooks)")

  function resetSubtitle() {
    setSubtitle("React (Hooks)")
  }

  return (
    <div className="home">
      <h1>{ props.msg}</h1>
      <h2>{ subtitle }</h2>
      
      <input type="text" value={ subtitle } onChange={ e => setSubtitle(e.target.value) } />
      <button onClick={ resetSubtitle }>Reset subtitle</button>
    </div>
  );
};
