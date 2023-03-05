const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const quoteAuthor = document.getElementById("author");
const twitterBtn = document.getElementById("twitter");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

let apiQuotes = [];

// Show Loading
function loadingLoader() {
  loader.hidden = false;
  quoteContainer.hidden = true;
}

// hide Loading
function completeLoader() {
  quoteContainer.hidden = false;
  loader.hidden = true;
}

// show single Quote
function newQuote() {
  loadingLoader();
  // pick a random quote from apiQuote array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  // console.log(quote);
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
  // Set Quote and hide loader
  quoteText.textContent = quote.text;
  completeLoader();
}

// Get Quotes from API
async function getQuotes() {
  loadingLoader();
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

// Tweet Quote
// request to the link ? where text = quote.text ..
function tweetQuote() {
  const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${quoteAuthor.textContent}`;
  // "_blank" to open in a new tab
  Window.open(twitterUrl, "_blank");
}

// Event Listener
twitterBtn.addEventListener("click", tweetQuote);
newQuoteBtn.addEventListener("click", newQuote);



// On Load
getQuotes();
// loadingLoader()
