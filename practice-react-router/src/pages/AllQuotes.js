import QuoteList from '../components/quotes/QuoteList';

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Frank', text: 'Learning is great!'},
    {id: 'q2', author: 'Jhom', text: 'Learning gets you better places.'},
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>;
};

export default AllQuotes;