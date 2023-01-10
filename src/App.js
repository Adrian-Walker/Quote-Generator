import axios from "axios";
import { useEffect, useState } from "react";
// import Quote  from "tabler-icons-react";

import Quotes from "./Quotes";

function App() {
  const [quote, setQuote] = useState(null);

  const getQuotes = () => {
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
    getQuotes();
  }, []);

  return (
    <div>
      <Quotes
        author={quote ? quote.author : ""}
        content={quote ? quote.content : ""}
        getQuotes={getQuotes}
      />
    </div>
  );
}

export default App;
