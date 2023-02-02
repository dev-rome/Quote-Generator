import { ButtonContainer, QuoteContainer, QuoteWrapper } from "../styles/QuoteStyles";
import { Quotes } from "../types/TypeQuote";

const Quote = ({
  quoteText,
  quoteAuthor,
  iconTwitter,
  onClickTwitter,
  onClickQuote,
}: Quotes) => {
  return (
    <QuoteContainer>
      <QuoteWrapper>
       <p><q>{quoteText}</q></p>
        <p>{quoteAuthor}</p>
        <ButtonContainer>
          <button onClick={onClickTwitter}>{iconTwitter}</button>
          <button onClick={onClickQuote}>New Quote</button>
        </ButtonContainer>
      </QuoteWrapper>
    </QuoteContainer>
  );
};

export default Quote;
