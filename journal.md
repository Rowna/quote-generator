# Journal

## TODO


- [ ] Quotes Buttons with loader between quotes
- [ ] Twitter- button to link the quote with twitter
- [ ] Make it Mobile resonsive
- [ ] Get Quotes from API "fn getQuotes"
- [ ] trigger the fn everytime I press the Button "New Quote"
- [ ] newQuote() for picking a random quote
- [ ] twitterBtn fn()
- [ ] loader animation from w3schools
- [ ] Das Projekt alleine nachmachen


## 2023-03-03 15:46

Habe das Projekt begonnen.

- [x] projekt erstellen und mit Git initialisieren
Erledigt. War einfach.
- [x] Adding a hero Patterns vector background with google fonts    "Montserrat"


## 2023-03-03 18:46

const = value never changing 
    const apiURL = "https://type.fit/api/quotes";
let = to be able to change the value in a block

- [x] Videso das erste Mal in Abschnitten schauen und mitdenken.
Heropatterns ist eine Webseite für SVGs Backgrounds


## 2023-03-05 15:30

- [x] get Quotes from the API "fn getQuotes()"
- [x] fn getQoutes() muss be async because I had to pull a request and to wait for a response in a try-catch()
- [x] I need to show only one single quote form apiQuotes-Array with newQuote()
- [x] newQuote show mo only one random quote from the list apiQuotes[Math.random]
- [x] Math.random needs the Math.floor() to give me the largest number less or equal to the given number. The given number is: 
```javascript
Math.random() * apiQuotes.length
```
- [x] populate the UI with dynamic html 
- [x] target the elements to take the user inputs getElementById()
- [x] replace the html textContent with the quote.text and quote.author
- [x] if-condition for the unkown quote.author 
- [x] on longer quotes the font-size will be smaller with .long-quote with quote.text.length
- [x] Twitter-Button start working with a fn tweetQuote() and window.open()
- [x] add Eventlisteners for both Buttons
- [ ] animation loader from w3school by creating a loading-fn and a complete-fn

