import { GlobalStyle } from "./styles/GlobalStyles";
import Quote from "./components/Quote";
import { FaTwitter } from "react-icons/fa";

function App() {
  const handleOnClickTwitter = () => {};

  const handleOnClickQuote = () => {};

  return (
    <>
      <GlobalStyle />
        <Quote
          quoteText={
            "What you are is what you have been. What you'll be is what you do now Buddha"
          }
          quoteAuthor={"Buddha"}
          onClickTwitter={handleOnClickTwitter}
          iconTwitter={<FaTwitter />}
          onClickQuote={handleOnClickQuote}
          buttonText={"New Quote"}
        />
    </>
  );
}

export default App;
