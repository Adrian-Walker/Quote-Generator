import axios from "axios";
import { useEffect } from "react";

function App() {
  const quotes = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        alert(res.data.content);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    quotes();
  }, []);

  return <div className="App">Hi This is my App</div>;
}

export default App;
