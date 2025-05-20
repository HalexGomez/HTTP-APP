/**
 * @returns {Object}
 */
const fetchQuote = async () => {
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    // console.log(res);
    // console.log(data[0]);

    return data[0];
}



/**
 * 
 * @param {HTMLDivElement} element 
 */
export const BreakingbadAPP = async (element) => {
    document.querySelector('#app-http').innerHTML = 'BreakingBad APP';
    element.innerHTML = 'Loading...'

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextquoteButton = document.createElement('button');
    nextquoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextquoteButton);
    }

    fetchQuote().then(renderQuote);

    nextquoteButton.addEventListener('click', () => {
        element.innerHTML = 'Loading...'
        fetchQuote().then(renderQuote);
    });

}