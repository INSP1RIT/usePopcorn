import React, {useState} from "react";
import ReactDOM from "react-dom/client";
// import './index.css';
// import App from './App';
import StarRating from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));

function Test() {
    const [movieRating, setMovieRating] = useState()
  return (
    <div>
      <StarRating color={"blue"} maxRating={10} onSetRating={setMovieRating}></StarRating>
      <p> This movie was rated {movieRating} stars</p>
    </div>
  );
}

root.render(
  <React.StrictMode>
    {/*<App />*/}
    <StarRating
      maxRating={5}
      messages={["Terrible", "Bad", "Ok", "Good", "Amazing"]}
    />
    <StarRating
      maxRating={10}
      color={"cyan"}
      size={24}
      className={"test"}
      defaultRating={3}
    />
    <Test />
  </React.StrictMode>,
);
