import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StarRating from "./StarRating";
import { useState } from "react";
// function Test() {
//   const [movieRate, setMovieRate] = useState(0);
//   return (
//     <div>
//       <StarRating maxRating={10} color="blue" onMovieRate={setMovieRate} />
//       <p>This Movie was rating {movieRate}</p>
//     </div>
//   );
// }
createRoot(document.getElementById("root")).render(
  <>
    <App />
  </>
);
