import { Center } from "@mantine/core";
import { ToastContainer, Zoom } from "react-toastify";
import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "tabler-icons-react";
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
    <div style={{ background: "#bebb57" }}>
      <ToastContainer />
      {/* <Container> */}
      <Center
        style={{
          height: "100vh",
        }}
      >
        <Quotes
          author={quote ? quote.author : ""}
          content={quote ? quote.content : ""}
          getQuotes={getQuotes}
        />
      </Center>
      {/* </Container> */}
    </div>
  );
}

export default App;
