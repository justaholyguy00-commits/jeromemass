// Quotes Data - Daily spiritual quotes
// The app displays a random quote each day, refreshing at 12am Singapore time (UTC+8)

export const quotesData = [
  // Saints
  { id: 1, text: "Our hearts are restless until they rest in You.", source: "St. Augustine", reference: "Confessions", category: "saints" },
  { id: 2, text: "The glory of God is man fully alive.", source: "St. Irenaeus of Lyon", reference: "Against Heresies", category: "saints" },
  { id: 6, text: "Pray as though everything depended on God. Work as though everything depended on you.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 7, text: "Faith is to believe what you do not see; the reward of this faith is to see what you believe.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 9, text: "Be who God meant you to be and you will set the world on fire.", source: "St. Catherine of Siena", reference: "", category: "saints" },
  { id: 13, text: "The measure of love is to love without measure.", source: "St. Bernard of Clairvaux", reference: "", category: "saints" },
  { id: 17, text: "Grace is nothing else but a certain beginning of glory in us.", source: "St. Thomas Aquinas", reference: "Summa Theologiae", category: "saints" },
  { id: 18, text: "Do small things with great love.", source: "St. Teresa of Calcutta", reference: "", category: "saints" },
  { id: 23, text: "Preach the Gospel at all times. When necessary, use words.", source: "Often attributed to St. Francis of Assisi", reference: "", category: "saints" },
  { id: 25, text: "Start by doing what's necessary; then do what's possible; and suddenly you are doing the impossible.", source: "St. Francis of Assisi", reference: "", category: "saints" },
  { id: 28, text: "Lord, make me an instrument of your peace.", source: "Prayer of St. Francis", reference: "", category: "saints" },
  { id: 30, text: "To fall in love with God is the greatest romance; to seek him the greatest adventure; to find him, the greatest human achievement.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 32, text: "You must accept your cross; if you bear it courageously it will carry you to Heaven.", source: "St. John Vianney", reference: "", category: "saints" },
  { id: 33, text: "The soul of one who serves God always swims in joy, always keeps holiday, is always in her palace of jubilation.", source: "St. John of the Cross", reference: "", category: "saints" },
  { id: 34, text: "Have patience with all things, but chiefly have patience with yourself.", source: "St. Francis de Sales", reference: "", category: "saints" },
  { id: 35, text: "We are not the sum of our weaknesses and failures; we are the sum of the Father's love for us.", source: "St. John Paul II", reference: "", category: "saints" },
  { id: 36, text: "Never be afraid of loving the Blessed Virgin too much. You can never love her more than Jesus did.", source: "St. Maximilian Kolbe", reference: "", category: "saints" },
  { id: 37, text: "Let nothing disturb you, let nothing frighten you. All things pass away: God never changes.", source: "St. Teresa of Avila", reference: "", category: "saints" },
  { id: 38, text: "God loves each of us as if there were only one of us.", source: "St. Augustine", reference: "", category: "saints" },
  { id: 39, text: "The greatest honor we can give Almighty God is to live gladly because of the knowledge of His love.", source: "Julian of Norwich", reference: "", category: "saints" },
  { id: 40, text: "You don't have to be perfect to be a saint.", source: "St. Thérèse of Lisieux", reference: "", category: "saints" },
  { id: 41, text: "Miss no single opportunity of making some small sacrifice, here by a smiling look, there by a kindly word.", source: "St. Thérèse of Lisieux", reference: "", category: "saints" },
  { id: 42, text: "If you are humble nothing will touch you, neither praise nor disgrace, because you know what you are.", source: "St. Teresa of Calcutta", reference: "", category: "saints" },
  { id: 43, text: "The only way to make rapid progress along the path of divine love is to remain very little and put all our trust in Almighty God.", source: "St. Thérèse of Lisieux", reference: "", category: "saints" },
  { id: 44, text: "We must pray without tiring, for the salvation of mankind does not depend on material success but on Jesus alone.", source: "St. Frances Xavier Cabrini", reference: "", category: "saints" },
  { id: 45, text: "I am a little pencil in the hand of a writing God who is sending a love letter to the world.", source: "St. Teresa of Calcutta", reference: "", category: "saints" },
  { id: 46, text: "Charity is the cement which binds Communities to God and persons to one another.", source: "St. Vincent de Paul", reference: "", category: "saints" },
  { id: 47, text: "Where there is no love, put love – and you will find love.", source: "St. John of the Cross", reference: "", category: "saints" },
  { id: 48, text: "Do not fear what may happen tomorrow; the same understanding Father who cares for you today will take care of you then and every day.", source: "St. Francis de Sales", reference: "", category: "saints" },
  { id: 49, text: "We are all called to be saints. Do not be afraid to aim for holiness.", source: "St. John Paul II", reference: "", category: "saints" },
  { id: 50, text: "God has created me to do Him some definite service. He has committed some work to me which He has not committed to another.", source: "St. John Henry Newman", reference: "", category: "saints" },

  // Scripture
  { id: 3, text: "For I am convinced that neither death nor life, neither angels nor demons, neither the present nor the future, nor any powers, neither height nor depth, nor anything else in all creation, will be able to separate us from the love of God that is in Christ Jesus our Lord.", source: "Romans 8:38-39", reference: "New Testament", category: "scripture" },
  { id: 4, text: "Do not be anxious about anything, but in every situation, by prayer and petition, with thanksgiving, present your requests to God.", source: "Philippians 4:6", reference: "New Testament", category: "scripture" },
  { id: 5, text: "I can do all things through Christ who strengthens me.", source: "Philippians 4:13", reference: "New Testament", category: "scripture" },
  { id: 8, text: "For God so loved the world that he gave his one and only Son, that whoever believes in him shall not perish but have eternal life.", source: "John 3:16", reference: "New Testament", category: "scripture" },
  { id: 11, text: "And we know that in all things God works for the good of those who love him, who have been called according to his purpose.", source: "Romans 8:28", reference: "New Testament", category: "scripture" },
  { id: 12, text: "Trust in the Lord with all your heart and lean not on your own understanding; in all your ways submit to him, and he will make your paths straight.", source: "Proverbs 3:5-6", reference: "Old Testament", category: "scripture" },
  { id: 14, text: "Put out into the deep and let down your nets for a catch.", source: "Luke 5:4", reference: "New Testament", category: "scripture" },
  { id: 15, text: "Love is patient, love is kind. It does not envy, it does not boast, it is not proud.", source: "1 Corinthians 13:4", reference: "New Testament", category: "scripture" },
  { id: 16, text: "The Lord is my shepherd, I lack nothing.", source: "Psalm 23:1", reference: "Old Testament", category: "scripture" },
  { id: 20, text: "Be not afraid. I go before you always. Come, follow me, and I will give you rest.", source: "Based on Matthew 28:20, 11:28", reference: "New Testament", category: "scripture" },
  { id: 24, text: "For where two or three gather in my name, there am I with them.", source: "Matthew 18:20", reference: "New Testament", category: "scripture" },
  { id: 27, text: "I am the way and the truth and the life. No one comes to the Father except through me.", source: "John 14:6", reference: "New Testament", category: "scripture" },
  { id: 29, text: "There is no fear in love. But perfect love drives out fear.", source: "1 John 4:18", reference: "New Testament", category: "scripture" },
  { id: 51, text: "Be still, and know that I am God.", source: "Psalm 46:10", reference: "Old Testament", category: "scripture" },
  { id: 52, text: "Come to me, all you who are weary and burdened, and I will give you rest.", source: "Matthew 11:28", reference: "New Testament", category: "scripture" },
  { id: 53, text: "The Lord is close to the brokenhearted and saves those who are crushed in spirit.", source: "Psalm 34:18", reference: "Old Testament", category: "scripture" },
  { id: 54, text: "For I know the plans I have for you, declares the Lord, plans to prosper you and not to harm you, plans to give you hope and a future.", source: "Jeremiah 29:11", reference: "Old Testament", category: "scripture" },
  { id: 55, text: "But those who hope in the Lord will renew their strength. They will soar on wings like eagles.", source: "Isaiah 40:31", reference: "Old Testament", category: "scripture" },
  { id: 56, text: "My grace is sufficient for you, for my power is made perfect in weakness.", source: "2 Corinthians 12:9", reference: "New Testament", category: "scripture" },
  { id: 57, text: "Cast all your anxiety on him because he cares for you.", source: "1 Peter 5:7", reference: "New Testament", category: "scripture" },
  { id: 58, text: "The fruit of the Spirit is love, joy, peace, forbearance, kindness, goodness, faithfulness, gentleness and self-control.", source: "Galatians 5:22-23", reference: "New Testament", category: "scripture" },
  { id: 59, text: "Blessed are the pure in heart, for they will see God.", source: "Matthew 5:8", reference: "New Testament", category: "scripture" },
  { id: 60, text: "Ask and it will be given to you; seek and you will find; knock and the door will be opened to you.", source: "Matthew 7:7", reference: "New Testament", category: "scripture" },
  { id: 61, text: "He has shown you, O mortal, what is good. And what does the Lord require of you? To act justly and to love mercy and to walk humbly with your God.", source: "Micah 6:8", reference: "Old Testament", category: "scripture" },
  { id: 62, text: "Create in me a pure heart, O God, and renew a steadfast spirit within me.", source: "Psalm 51:10", reference: "Old Testament", category: "scripture" },
  { id: 63, text: "I have told you these things, so that in me you may have peace. In this world you will have trouble. But take heart! I have overcome the world.", source: "John 16:33", reference: "New Testament", category: "scripture" },
  { id: 64, text: "Be strong and courageous. Do not be afraid; do not be discouraged, for the Lord your God will be with you wherever you go.", source: "Joshua 1:9", reference: "Old Testament", category: "scripture" },
  { id: 65, text: "Delight yourself in the Lord, and he will give you the desires of your heart.", source: "Psalm 37:4", reference: "Old Testament", category: "scripture" },
  { id: 66, text: "This is the day the Lord has made; let us rejoice and be glad in it.", source: "Psalm 118:24", reference: "Old Testament", category: "scripture" },
  { id: 67, text: "Your word is a lamp for my feet, a light on my path.", source: "Psalm 119:105", reference: "Old Testament", category: "scripture" },
  { id: 68, text: "Peace I leave with you; my peace I give you. I do not give to you as the world gives. Do not let your hearts be troubled and do not be afraid.", source: "John 14:27", reference: "New Testament", category: "scripture" },

  // Church Teaching
  { id: 10, text: "The Eucharist is the heart and the summit of the Church's life.", source: "Catechism of the Catholic Church", reference: "CCC 1407", category: "church" },
  { id: 19, text: "If you want peace, work for justice.", source: "Pope Paul VI", reference: "World Day of Peace Message, 1972", category: "church" },
  { id: 26, text: "The world offers you comfort. But you were not made for comfort. You were made for greatness.", source: "Pope Benedict XVI", reference: "", category: "church" },
  { id: 69, text: "Faith and reason are like two wings on which the human spirit rises to the contemplation of truth.", source: "Pope St. John Paul II", reference: "Fides et Ratio", category: "church" },
  { id: 70, text: "The Church does not have a mission, the Church is mission.", source: "Pope Francis", reference: "", category: "church" },
  { id: 71, text: "Prayer is the raising of one's mind and heart to God or the requesting of good things from God.", source: "Catechism of the Catholic Church", reference: "CCC 2559", category: "church" },
  { id: 72, text: "An authentic faith always involves a deep desire to change the world.", source: "Pope Francis", reference: "Evangelii Gaudium", category: "church" },
  { id: 73, text: "We are not some casual and meaningless product of evolution. Each of us is the result of a thought of God.", source: "Pope Benedict XVI", reference: "", category: "church" },

  // Theologians
  { id: 21, text: "The Christian does not think God will love us because we are good, but that God will make us good because He loves us.", source: "C.S. Lewis", reference: "Mere Christianity", category: "theologians" },
  { id: 22, text: "Joy is the infallible sign of the presence of God.", source: "Pierre Teilhard de Chardin", reference: "", category: "theologians" },
  { id: 74, text: "To be a Christian means to forgive the inexcusable because God has forgiven the inexcusable in you.", source: "C.S. Lewis", reference: "", category: "theologians" },
  { id: 75, text: "God cannot give us happiness and peace apart from Himself, because it is not there. There is no such thing.", source: "C.S. Lewis", reference: "", category: "theologians" },
  { id: 76, text: "A man can no more diminish God's glory by refusing to worship Him than a lunatic can put out the sun by scribbling the word 'darkness' on the walls of his cell.", source: "C.S. Lewis", reference: "", category: "theologians" },

  // Wisdom
  { id: 31, text: "God does not ask for our ability or our inability. He asks for our availability.", source: "Author Unknown", reference: "", category: "wisdom" },
  { id: 77, text: "Every saint has a past, and every sinner has a future.", source: "Oscar Wilde", reference: "", category: "wisdom" },
  { id: 78, text: "The best time to plant a tree was twenty years ago. The second best time is now.", source: "Chinese Proverb", reference: "", category: "wisdom" },
  { id: 79, text: "What we do for ourselves dies with us. What we do for others and the world remains and is immortal.", source: "Albert Pike", reference: "", category: "wisdom" },
  { id: 80, text: "In the end, it's not the years in your life that count. It's the life in your years.", source: "Abraham Lincoln", reference: "", category: "wisdom" }
];

/**
 * Gets the current date in Singapore timezone (UTC+8)
 * Returns the date as YYYY-MM-DD string
 */
function getSingaporeDate() {
  const now = new Date();
  // Convert to Singapore timezone (UTC+8)
  const singaporeTime = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Singapore' }));
  const year = singaporeTime.getFullYear();
  const month = String(singaporeTime.getMonth() + 1).padStart(2, '0');
  const day = String(singaporeTime.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Simple seeded random number generator
 * Uses a hash of the date string to get a deterministic "random" number
 */
function seededRandom(seed) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Use the hash to generate a pseudo-random number between 0 and 1
  const x = Math.sin(hash) * 10000;
  return x - Math.floor(x);
}

/**
 * Gets the quote of the day based on Singapore timezone
 * The quote changes at 12am Singapore time (UTC+8)
 * Uses a seeded random to ensure the same quote is shown all day
 * but different quotes each day
 */
export function getQuoteOfTheDay() {
  const dateStr = getSingaporeDate();
  const randomIndex = Math.floor(seededRandom(dateStr) * quotesData.length);
  return quotesData[randomIndex];
}

/**
 * Gets the current Singapore date string for display
 */
export function getSingaporeDateDisplay() {
  const now = new Date();
  return now.toLocaleDateString('en-US', {
    timeZone: 'Asia/Singapore',
    month: 'long',
    day: 'numeric'
  });
}
