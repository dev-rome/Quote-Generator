import { useState, useEffect } from "react";
import { GlobalStyle } from "./styles/GlobalStyles";
import Quote from "./components/Quote";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const url = "https://jacintodesign.github.io/quotes-api/data/quotes.json";

  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Please check url");
        }
        return res.json();
      })
      .then((data) => {
        const quote = data[Math.floor(Math.random() * data.length)];
        setQuotes(data);
        setText(quote["text"]);
        setAuthor(quote["author"]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleOnClickTwitter = () => {};

  const handleOnClickQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    setText(quote["text"]);
    setAuthor(quote["author"]);
  };

  return (
    <>
      <GlobalStyle />
      <Quote
        quoteText={text}
        quoteAuthor={author}
        onClickTwitter={handleOnClickTwitter}
        onClickQuote={handleOnClickQuote}
      />
    </>
  );
}

export default App;
