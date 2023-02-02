import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Quote from "./components/Quote";
import { FaTwitter } from "react-icons/fa";

function App() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
    const getQuote = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        setQuotes(data);
      } catch (err) {
        console.log(err);
      }
    };
    getQuote();
  }, []);

  const handleOnClickTwitter = () => {};

  const handleOnClickQuote = () => {
    // const quote = quotes[Math.floor(Math.random() * quotes.length)];
    // console.log(quote);
  };

  return (
    <>
      <GlobalStyle />
      <Quote
        quoteText={"Hello"}
        quoteAuthor={"Hello"}
        onClickTwitter={handleOnClickTwitter}
        iconTwitter={<FaTwitter />}
        onClickQuote={handleOnClickQuote}
      />
    </>
  );
}

export default App;
