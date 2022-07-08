const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// Get quotes from API
async function getQuotes() {
    const apiUrl = "https://type.fit/api/quotes";
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {
        console.log(error);
        // Catch Error Here
    }
}

// Show New Quote
const newQuote = () => {
    // pick a random quote from apiQuotes array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if authorfield is blank and replace it with 'unknown'
    if (!quote.author) {
        authorText.textContent = 'unknown'
    } else {
        authorText.textContent = quote.author;
    };

    // Check Quote Length to determine styling

    if (quote.text.length > 50) {
        quoteText.classList.add('long-quote')
    } else (
        quoteText.classList.remove('long-quote')
    )

    quoteText.textContent = quote.text;
}


//tweet quote 
const tweetQuote = () => {
    const twitterUrl = `https://twitter.com/intent/tweet/?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

//Event Listener 
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);



// On Load

getQuotes();
// newQuote();

