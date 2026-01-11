// Reflections Data - Your personal reflections
// Add new reflections by adding objects to this array

export const reflectionsData = [
  {
    id: 1,
    date: "2026-01-12",
    title: "Finding God in the Ordinary",
    excerpt: "In the hustle of our daily lives, we often overlook the extraordinary presence of God in ordinary moments.",
    content: `In the hustle of our daily lives, we often overlook the extraordinary presence of God in ordinary moments. Yet it is precisely in these moments that He speaks most clearly to our hearts.

This morning, as I watched the sunrise paint the sky in shades of gold and rose, I was reminded of God's faithfulness. Every new day is a gift, a fresh start, a new opportunity to encounter His grace.

St. Thérèse of Lisieux taught us about the "Little Way" – doing small things with great love. When we wash dishes, we can offer that work to God. When we listen to a friend, we become Christ's ears. When we share a meal, we participate in the great communion of saints.

The Eucharist itself transforms the ordinary – simple bread and wine – into the extraordinary Body and Blood of Christ. This is the pattern of God's work in our lives: taking what seems mundane and making it holy.`,
    scripture: { text: "The heavens declare the glory of God; the skies proclaim the work of his hands.", reference: "Psalm 19:1" },
    tags: ["spirituality", "daily life", "presence of God"]
  },
  {
    id: 2,
    date: "2026-01-05",
    title: "The Gift of the Eucharist",
    excerpt: "At the heart of our Catholic faith lies the most profound mystery – the Real Presence of Christ in the Eucharist.",
    content: `At the heart of our Catholic faith lies the most profound mystery – the Real Presence of Christ in the Eucharist. This gift, given to us at the Last Supper, continues to nourish us today.

When I attend Mass, I am often struck by the profound reality of what is happening on the altar. The priest, acting in persona Christi, speaks the words of consecration, and bread and wine become the Body and Blood of our Lord.

The early Church Fathers understood this well. St. Ignatius of Antioch, writing in the first century, called the Eucharist "the medicine of immortality." St. Augustine encouraged the faithful: "Become what you receive."

As we approach the altar to receive Communion, let us do so with awe and gratitude. We are receiving the Creator of the universe, who humbles Himself to enter our hearts.`,
    scripture: { text: "I am the bread of life. Whoever comes to me will never go hungry.", reference: "John 6:35" },
    tags: ["eucharist", "mass", "sacraments"]
  },
  {
    id: 3,
    date: "2025-12-28",
    title: "A Year of Grace",
    excerpt: "As one year ends and another begins, we have an opportunity to reflect on God's faithfulness.",
    content: `As one year ends and another begins, we have an opportunity to reflect on God's faithfulness and to look forward with hope to the graces that await us.

Looking back over the past year, I see so many moments of grace – some recognized in the moment, others only visible in hindsight. The challenges we faced were not obstacles to God's plan but opportunities for growth.

The Church, in her wisdom, begins the liturgical year with Advent – a season of waiting and preparation. This reminds us that our entire lives are a kind of Advent, a preparation for the eternal joy of heaven.

As we enter this new year, let us bring with us the lessons of the past and the hope of the future. May we be open to the graces God wishes to pour out upon us.`,
    scripture: { text: "See, I am doing a new thing! Now it springs up; do you not perceive it?", reference: "Isaiah 43:19" },
    tags: ["new year", "reflection", "hope"]
  }
];

export function getAllReflections() {
  return [...reflectionsData].sort((a, b) => new Date(b.date) - new Date(a.date));
}

export function formatReflectionDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}
