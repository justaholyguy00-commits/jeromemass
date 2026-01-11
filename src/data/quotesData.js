// Quotes Data - Daily spiritual quotes
// Add new quotes to this array. The app will display a different quote each day.

export const quotesData = [
  { id: 1, text: "Our hearts are restless until they rest in You.", source: "St. Augustine", reference: "Confessions", category: "saints" },
  { id: 2, text: "The glory of God is man fully alive.", source: "St. Irenaeus of Lyon", reference: "Against Heresies", category: "saints" },
  { id: 3, text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", source: "Romans 8:38-39", reference: "New Testament", category: "scripture" },
  { id: 4, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", source: "Philippians 4:6", reference: "New Testament", category: "scripture" },
  { id: 5, text: "I can do all things through Christ who strengthens me.", source: "Philippians 4:13", reference: "New Testament", category: "scripture" },
  { id: 6, text: "Pray as though everything depended on God. Work as though everything depended on you.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 7, text: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 8, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", source: "John 3:16", reference: "New Testament", category: "scripture" },
  { id: 9, text: "Be who God meant you to be and you will set the world on fire.", source: "St. Catherine of Siena", reference: "", category: "saints" },
  { id: 10, text: "The Eucharist is the heart and the summit of the Church's life.", source: "Catechism of the Catholic Church", reference: "CCC 1407", category: "church" },
  { id: 11, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", source: "Romans 8:28", reference: "New Testament", category: "scripture" },
  { id: 12, text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", source: "Proverbs 3:5-6", reference: "Old Testament", category: "scripture" },
  { id: 13, text: "The measure of love is to love without measure.", source: "St. Bernard of Clairvaux", reference: "", category: "saints" },
  { id: 14, text: "Put out into the deep and let down your nets for a catch.", source: "Luke 5:4", reference: "New Testament", category: "scripture" },
  { id: 15, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", source: "1 Corinthians 13:4", reference: "New Testament", category: "scripture" },
  { id: 16, text: "The Lord is my shepherd, I lack nothing.", source: "Psalm 23:1", reference: "Old Testament", category: "scripture" },
  { id: 17, text: "Grace is nothing else but a certain beginning of glory in us.", source: "St. Thomas Aquinas", reference: "Summa Theologiae", category: "saints" },
  { id: 18, text: "Do small things with great love.", source: "St. Teresa of Calcutta", reference: "", category: "saints" },
  { id: 19, text: "If you want peace, work for justice.", source: "Pope Paul VI", reference: "World Day of Peace Message, 1972", category: "church" },
  { id: 20, text: "Be not afraid. I go before you always. Come, follow me, and I will give you rest.", source: "Based on Matthew 28:20, 11:28", reference: "New Testament", category: "scripture" },
  { id: 21, text: "The Christian does not think God will love us because we are good, but that God will make us good because He loves us.", source: "C.S. Lewis", reference: "Mere Christianity", category: "theologians" },
  { id: 22, text: "Joy is the infallible sign of the presence of God.", source: "Pierre Teilhard de Chardin", reference: "", category: "theologians" },
  { id: 23, text: "Preach the Gospel at all times. When necessary, use words.", source: "Often attributed to St. Francis of Assisi", reference: "", category: "saints" },
  { id: 24, text: "For where two or three gather in my name, there am I with them.", source: "Matthew 18:20", reference: "New Testament", category: "scripture" },
  { id: 25, text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", source: "St. Francis of Assisi", reference: "", category: "saints" },
  { id: 26, text: "The world offers you comfort. But you were not made for comfort. You were made for greatness.", source: "Pope Benedict XVI", reference: "", category: "church" },
  { id: 27, text: "I am the way and the truth and the life. No one comes to the Father except through me.", source: "John 14:6", reference: "New Testament", category: "scripture" },
  { id: 28, text: "Lord, make me an instrument of your peace.", source: "Prayer of St. Francis", reference: "", category: "saints" },
  { id: 29, text: "There is no fear in love. But perfect love drives out fear.", source: "1 John 4:18", reference: "New Testament", category: "scripture" },
  { id: 30, text: "To fall in love with God is the greatest romance; to seek him the greatest adventure; to find him, the greatest human achievement.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 31, text: "God does not ask for our ability or our inability. He asks for our availability.", source: "Author Unknown", reference: "", category: "wisdom" }
];

export function getQuoteOfTheDay() {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  return quotesData[dayOfYear % quotesData.length];
}

export function getRecentQuotes(count = 5) {
  const today = new Date();
  const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));
  const recentQuotes = [];
  for (let i = 1; i <= count; i++) {
    const index = (dayOfYear - i + quotesData.length) % quotesData.length;
    recentQuotes.push(quotesData[index]);
  }
  return recentQuotes;
}
