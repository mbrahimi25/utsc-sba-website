// data/articles.ts

export interface Article {
  title: string;
  image: string;
  description: string;
  author: string;
  date: string; // Format: "Month YYYY"
  publishedAt: string; // Format: "YYYY-MM-DD"
  link: string;
}

export const articles: Article[] = [
    {
        title: "The Jalen Duren Gamble",
        image: "/articles/jalen-duren-gamble-2026.png",
        description: "The Cost of Betting on a Breakout",
        author: "Aiden Loh",
        date: "October 2026",
        publishedAt: "2026-10-01",
        link: "/articles/jalen-duren-gamble-2026",
    },

    {
        title:"Manchester City: 114 Charges",
        image:"/articles/man-city-charges-2026.jpg",
        description:"One Verdict That Could Change English Football",
        author:"Mohamed Brahimi",
        date:"September 2026",
        publishedAt: "2026-09-30",
        link:"/articles/man-city-charges-2026",
    },

    {
        title:"Kawhi to Toronto",
        image:"/articles/kawhi-leonard-scandal-2026.jpg",
        description:"The Clippers Salary Cap Scandal",
        author:"Mohamed Brahimi",
        date:"September 2026",
        publishedAt: "2026-09-15",
        link:"/articles/kawhi-leonard-scandal-2026",
    },

    {
        title:"Beyond the Trophy",
        image:"/articles/fifa-wc-revenue-2026.jpg",
        description:"The Business Behind the 2026 FIFA World Cup",
        author:"Mohamed Brahimi",
        date:"July 2026",
        publishedAt: "2026-07-01",
        link:"/articles/fifa-wc-revenue-2026",
    },

    {
        title:"From Contenders to Crisis",
        image:"/articles/tottenham-crisis-2026.png",
        description:"The Story of Tottenham Hotspur",
        author:"Mohamed Brahimi",
        date:"March 2026",
        publishedAt: "2026-03-15",
        link:"/articles/tottenham-crisis-2026",
    },

    {
        title:"NCAA vs OUA",
        image:"/articles/ncaa-oua-2026.png",
        description:"What Ontario (and Canada) Can Learn from the NIL Era",
        author:"Mohamed Brahimi",
        date:"March 2026",
        publishedAt: "2026-03-01",
        link:"/articles/ncaa-oua-2026",
    },

    {
        title:"Seahawks Win Second Super Bowl",
        image:"/articles/super-bowl-2026.jpg",
        description:"What went down in Santa Clara",
        author:"Mohamed Brahimi",
        date:"February 2026",
        publishedAt: "2026-02-01",
        link:"/articles/super-bowl-2026",
    },

    {
        title:"The Josh Sargent Drama",
        image:"/articles/josh-sargent-drama.jpg",
        description:"The story behind TFC's offer",
        author:"Mohamed Brahimi",
        date:"January 2026",
        publishedAt: "2026-01-01",
        link:"/articles/josh-sargent-drama",
    },

    {
        title:"Qualifying Fever",
        image:"/articles/wc-qualification-2026.jpg",
        description:"The Race to the 2026 World Cup",
        author:"Mohamed Brahimi",
        date:"October 2025",
        publishedAt: "2025-10-15",
        link:"/articles/wc-qualification-2026",
    },

    {
        title:"Tension to Victory",
        image:"/articles/mclaren-constructors-2025.jpg",
        description:"McLaren's Constructors' Dominance",
        author:"Mohamed Brahimi",
        date:"October 2025",
        publishedAt: "2025-10-01",
        link:"/articles/mclaren-constructors-2025",
    },

    {
        title:"Beyond the Salary Cap",
        image:"/articles/miami-tfc-2025.jpg",
        description:"How Designated Players shaped TFC vs. Miami",
        author:"Mohamed Brahimi",
        date:"September 2025",
        publishedAt: "2025-09-30",
        link:"/articles/miami-tfc-2025",
    },
  
];