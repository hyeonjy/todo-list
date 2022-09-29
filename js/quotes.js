const quotes = [
  {
    quote: "Nothing great in the world has been accomplished without passion.",
    author: "Georg Wilhelm",
  },
  {
    quote: "God doesn't require us to succeed; he only requires that you try.",
    author: "Mother Teresa",
  },
  {
    quote: "Everything comes to him who hustles while he waits.",
    author: "Thomas A. Edison",
  },
  {
    quote:
      "You have to have confidence in your ability, and then be tough enough to follow through.",
    author: "Rosalynn Carter",
  },
  {
    quote: "The future depends on what we do in the present.",
    author: "Mahatma Gandhi",
  },
  {
    quote: "The way to get started is to quit talking and begin doing.",
    author: "Walt Disney",
  },
  {
    quote:
      "We find no real satisfaction or happiness in life without obstacles to conquer and goals to achieve.",
    author: "Maxwell Maltz",
  },
  {
    quote:
      "Develop success from failures. Discouragement and failure are two of the surest stepping stones to success.",
    author: "Dale Carnegie",
  },
  {
    quote: "In order to succeed, we must first believe that we can.",
    author: "Nikos Kazantzakis",
  },
  {
    quote:
      "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
    author: "Kamal Ravikant",
  },
];
const quoteIcon = document.querySelector(".main-icons i:nth-child(2)");

function setQuote() {
  const quote = document.querySelector("#quote h1:first-child");
  const author = document.querySelector("#quote h1:last-child");

  const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

  quote.innerText = todaysQuote.quote;
  author.innerText = todaysQuote.author;
}

setQuote();
quoteIcon.addEventListener("click", setQuote);
