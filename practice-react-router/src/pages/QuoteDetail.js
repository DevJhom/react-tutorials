import React, { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from '../components/comments/Comments'

const QuoteDetail = () => {
  const quote = useParams();

  return (
    <Fragment>
      <h1>Quote Detail</h1>
      <h2>{quote.quoteId}</h2>
      <Route path={`/quotes/:${quote.quoteId}/comments`}>
        <Comments/>
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
