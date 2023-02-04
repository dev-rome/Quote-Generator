import { ButtonContainer, QuoteContainer, QuoteWrapper } from "../styles/QuoteStyles";
import { Quotes } from "../types/TypeQuote";
import { FaTwitter } from "react-icons/fa";

const Quote = ({
  quoteText,
  quoteAuthor,
  onClickTwitter,
  onClickQuote,
}: Quotes) => {
  return (
    <QuoteContainer>
      <QuoteWrapper>
       <p><q>{quoteText}</q></p>
        <p>{quoteAuthor}</p>
        <ButtonContainer>
          <button onClick={onClickTwitter}><FaTwitter /></button>
          <button onClick={onClickQuote}>New Quote</button>
        </ButtonContainer>
      </QuoteWrapper>
    </QuoteContainer>
  );
};

export default Quote;
