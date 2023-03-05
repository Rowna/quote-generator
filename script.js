const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");

let apiQuotes = [];

// show single Quote
function newQuote() {
  // pick a random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  // Checl if author field is blank and replace it with unknow
  if (!quote.author) {
    quoteAuthor.textContent = "Unknown";
  } else {
    quoteAuthor.textContent = quote.author;
  }
  if (quote.text.length > 50) {
    quoteText.classList.add("long-quote");
  } else {
    quoteText.classList.remove("long-quote");
  }
  quoteText.textContent = quote.text;
}

// Get Quotes from API
async function getQuotes() {
  const apiUrl = "https://type.fit/api/quotes";
  // for async I nedd to know if there is problems with fetching that needs try-catch
  try {
    // this will not be manipulated, untill I have the fetching
    const response = await fetch(apiUrl);
    // turn response into json-format
    apiQuotes = await response.json();
    // pull a single quote from local API quotes-Array
    newQuote();
  } catch (error) {
    // catch error
  }
}

// On Load
getQuotes();
