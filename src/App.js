import axios from "axios";
import { useEffect, useState } from "react";
// import Quote  from "tabler-icons-react";

import Quotes from "./Quotes";

function App() {
  const [quote, setQuote] = useState(null);

  const quotes = () => {
    axios
      .get("https://api.quotable.io/random")
      .then((res) => {
        setQuote(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };

  useEffect(() => {
    quotes();
  }, []);

  return (
    <div>
      <Quotes
        author={quote ? quote.author : ""}
        content={quote ? quote.content : ""}
      />
    </div>
  );
}

export default App;
