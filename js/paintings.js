/**
 * PAINTINGS DATA
 *
 * To add a new painting:
 * 1. Drop your image file into images/paintings/
 * 2. Add a new object to the BEGINNING of this array (newest first)
 * 3. Commit and push to GitHub
 *
 * Fields:
 *   id    - Unique identifier (use slug format, e.g. "sunset-over-harbor")
 *   title - Painting title
 *   date  - When you made it (e.g. "March 2026")
 *   image - Filename in images/paintings/ OR a full URL
 *   alt   - Describe the painting for screen readers
 *   blurb - Short paragraph about inspiration
 */
var PAINTINGS = [
  {
    id: "crimson-tide",
    title: "Crimson Tide",
    date: "January 2026",
    image: "https://placehold.co/800x1067/D72638/FAF9F6?text=Crimson+Tide",
    alt: "Placeholder for Crimson Tide painting",
    blurb: "Inspired by a winter sunset over the harbor. I wanted to capture that fleeting moment when the sky looks like it's on fire and everything turns to gold and red."
  },
  {
    id: "blue-period",
    title: "Blue Period",
    date: "November 2025",
    image: "https://placehold.co/800x1067/1B3A8C/FAF9F6?text=Blue+Period",
    alt: "Placeholder for Blue Period painting",
    blurb: "A meditation on solitude. The blue palette reflects the quiet intensity of those long November evenings when the world feels both vast and intimate."
  },
  {
    id: "electric-jungle",
    title: "Electric Jungle",
    date: "September 2025",
    image: "https://placehold.co/800x1067/2D8C3C/FAF9F6?text=Electric+Jungle",
    alt: "Placeholder for Electric Jungle painting",
    blurb: "Spent a week in the Pacific Northwest and couldn't stop thinking about how the forest felt alive — humming, electric. This is that energy on canvas."
  },
  {
    id: "golden-hour",
    title: "Golden Hour",
    date: "July 2025",
    image: "https://placehold.co/800x1067/F5C542/1A1A1A?text=Golden+Hour",
    alt: "Placeholder for Golden Hour painting",
    blurb: "That magic 20 minutes before the sun dips below the horizon. Everything glows. I painted this one fast, trying to keep up with the light."
  },
  {
    id: "concrete-dreams",
    title: "Concrete Dreams",
    date: "May 2025",
    image: "https://placehold.co/800x1067/666666/FAF9F6?text=Concrete+Dreams",
    alt: "Placeholder for Concrete Dreams painting",
    blurb: "Urban landscapes have their own kind of beauty — the geometry of buildings, the way light bounces off glass and steel. This one started as a sketch on the subway."
  },
  {
    id: "fire-dance",
    title: "Fire Dance",
    date: "March 2025",
    image: "https://placehold.co/800x1067/E8752A/FAF9F6?text=Fire+Dance",
    alt: "Placeholder for Fire Dance painting",
    blurb: "Movement and heat. I was watching a bonfire and the way the flames seemed to dance with intention. The brushwork here is deliberately wild and uncontrolled."
  },
  {
    id: "midnight-blues",
    title: "Midnight Blues",
    date: "January 2025",
    image: "https://placehold.co/800x1067/1A1A4E/FAF9F6?text=Midnight+Blues",
    alt: "Placeholder for Midnight Blues painting",
    blurb: "Late nights in the studio, just me and the paint. There's a clarity that comes at 2 AM when the rest of the world is asleep. This piece captures that stillness."
  },
  {
    id: "spring-riot",
    title: "Spring Riot",
    date: "April 2024",
    image: "https://placehold.co/800x1067/D72638/F5C542?text=Spring+Riot",
    alt: "Placeholder for Spring Riot painting",
    blurb: "After a long gray winter, the first burst of spring color felt overwhelming — almost violent in its beauty. I wanted the canvas to feel that same jolt of aliveness."
  }
];
