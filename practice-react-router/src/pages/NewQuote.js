import { Fragment } from 'react';
import { useHistory } from 'react-router-dom';

import QuoteForm from '../components/quotes/QuoteForm';

const NewQuote = () => {
    const history = useHistory();

    const addQuoteHandler = quoteData => {
        history.push('/quotes') //use can go back with <- arrow
    };

    return (
        <Fragment>
            <h1>New Quote</h1>
            <QuoteForm onAddQuote={addQuoteHandler}/>
        </Fragment>
    );
};

export default NewQuote;