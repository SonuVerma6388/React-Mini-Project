const tempMovieData = [
  {
    imdbID: "tt1375666",
    Title: "Inception",
    Year: "2010",
    Poster: "https://image.tmdb.org/t/p/w300/qmDpIHrmpJINaRKAfWQfftjCdyi.jpg",
    Runtime: "148 min",
    imdbRating: 8.8,
    userRating: 7,
    Actors: "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
    Summary: `
      Dom Cobb is a skilled thief with the rare ability to enter dreams and extract valuable secrets from deep within the subconscious. 
      His unique talent has made him a target of corporate espionage but has also cost him everything he loves, leaving him a fugitive 
      unable to return home. When offered a chance at redemption, Cobb must perform the impossible task of inception: planting an idea 
      into someone’s mind rather than stealing one. Joined by a team of experts, Cobb ventures into shifting dreamscapes where reality 
      blurs, enemies lurk, and his haunting past threatens to undo everything.
    `,
  },
  {
    imdbID: "tt0133093",
    Title: "The Matrix",
    Year: "1999",
    Poster: "https://image.tmdb.org/t/p/w300/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg",
    Runtime: "136 min",
    imdbRating: 8.7,
    userRating: 8,
    Actors: "Keanu Reeves, Laurence Fishburne, Carrie-Anne Moss, Hugo Weaving",
    Summary: `
      Thomas Anderson, a computer programmer living a double life as the hacker "Neo," discovers that reality as he knows it is a 
      simulated construct called the Matrix, controlled by machines to subdue humanity. Guided by Morpheus and Trinity, Neo learns 
      that he may be "The One," prophesied to free mankind from enslavement. As he trains to bend the rules of the simulated world, 
      Neo battles against the powerful Agents who enforce the Matrix’s control. His journey is one of awakening, self-belief, and 
      the discovery of how far the human mind can truly go.
    `,
  },
  {
    imdbID: "tt6751668",
    Title: "Parasite",
    Year: "2019",
    Poster: "https://image.tmdb.org/t/p/w300/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg",
    Runtime: "132 min",
    imdbRating: 8.6,
    userRating: 9,
    Actors: "Song Kang-ho, Lee Sun-kyun, Cho Yeo-jeong, Choi Woo-shik",
    Summary: `
      The Kim family, struggling to survive in poverty, seizes an opportunity when their son Ki-woo is hired as a tutor for the wealthy Park family. 
      One by one, the Kims infiltrate the household under false pretenses, posing as unrelated professionals. At first, their plan seems flawless, 
      offering them luxury and security they’ve never known. However, a shocking discovery in the Park home unravels their scheme and sparks a chain 
      of violent events. Parasite is a darkly satirical tale of class divide, human ambition, and the dangerous lengths people will go to escape poverty.
    `,
  },
  {
    imdbID: "tt0816692",
    Title: "Interstellar",
    Year: "2014",
    Poster: "https://image.tmdb.org/t/p/w300/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
    Runtime: "169 min",
    imdbRating: 8.6,
    userRating: 6,
    Actors:
      "Matthew McConaughey, Anne Hathaway, Jessica Chastain, Michael Caine",
    Summary: `
      In a near future where Earth is plagued by environmental disasters and dwindling resources, humanity faces extinction. 
      Former pilot Cooper joins a mission led by NASA to travel through a wormhole near Saturn in search of a habitable planet. 
      As the team ventures into distant galaxies, they encounter strange worlds, time dilation, and heartbreaking sacrifices. 
      Meanwhile, Cooper’s daughter Murphy grows up on Earth, desperately seeking to solve an equation that could save mankind. 
      Interstellar blends science, love, and survival in a breathtaking story of humanity’s resilience and the unbreakable bond between a father and daughter.
    `,
  },
  {
    imdbID: "tt0468569",
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "https://image.tmdb.org/t/p/w300/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
    Runtime: "152 min",
    imdbRating: 9.0,
    userRating: 9,
    Actors: "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
    Summary: `
      Gotham City faces chaos as the Joker, a sadistic mastermind, unleashes a wave of terror that challenges Batman’s moral code. 
      As crime escalates, Batman forms an uneasy alliance with Lieutenant Gordon and District Attorney Harvey Dent to bring the Joker to justice. 
      However, the Joker’s cunning plans turn their strengths into weaknesses, pushing Dent down a dark path. With the line between heroism 
      and vigilantism blurred, Batman is forced to make devastating sacrifices. The Dark Knight is a gripping tale of morality, chaos, 
      and the cost of justice, anchored by Heath Ledger’s unforgettable performance as the Joker.
    `,
  },
  {
    imdbID: "tt4154796",
    Title: "Avengers: Endgame",
    Year: "2019",
    Poster: "https://image.tmdb.org/t/p/w300/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
    Runtime: "181 min",
    imdbRating: 8.4,
    userRating: 8,
    Actors: "Robert Downey Jr., Chris Evans, Mark Ruffalo, Scarlett Johansson",
    Summary: `
      After Thanos wipes out half of all life in the universe with the Infinity Stones, the remaining Avengers are left broken and defeated. 
      Five years later, Ant-Man’s return provides a chance to undo the devastation through time travel. The team reunites, revisiting pivotal 
      moments of their past to collect the stones and create their own gauntlet. As they face their final battle against Thanos, sacrifices 
      are made and heroes rise to their greatest moments. Avengers: Endgame is an epic conclusion to the Infinity Saga, blending action, 
      emotion, and the legacy of Marvel’s beloved characters.
    `,
  },
  {
    imdbID: "tt0109830",
    Title: "Forrest Gump",
    Year: "1994",
    Poster: "https://image.tmdb.org/t/p/w300/saHP97rTPS5eLmrLQEcANmKrsFl.jpg",
    Runtime: "142 min",
    imdbRating: 8.8,
    userRating: 7,
    Actors: "Tom Hanks, Robin Wright, Gary Sinise, Sally Field",
    Summary: `
      Forrest Gump, a man with a low IQ but a kind heart, recounts his extraordinary life journey. From his childhood struggles with leg braces 
      to becoming a football star, a war hero in Vietnam, and even an accidental entrepreneur, Forrest influences historic moments without fully 
      realizing their significance. His deep love for Jenny, a troubled woman seeking her own path, remains the constant driving force of his life. 
      Through hardships and triumphs, Forrest’s simple wisdom teaches those around him that life is unpredictable, but love, kindness, and perseverance 
      can make it truly remarkable.
    `,
  },
  {
    imdbID: "tt0120737",
    Title: "The Lord of the Rings: The Fellowship of the Ring",
    Year: "2001",
    Poster: "https://image.tmdb.org/t/p/w300/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg",
    Runtime: "178 min",
    imdbRating: 8.8,
    userRating: 8,
    Actors: "Elijah Wood, Ian McKellen, Orlando Bloom, Viggo Mortensen",
    Summary: `
      In the peaceful land of the Shire, young hobbit Frodo Baggins inherits the One Ring, an artifact of immense power created by the Dark Lord Sauron. 
      Realizing its danger, Frodo sets out on a perilous journey to destroy it in the fires of Mount Doom. He is joined by a fellowship of companions, 
      including Aragorn, Legolas, Gimli, and Gandalf the wizard. Their quest is fraught with dangers—treacherous landscapes, relentless enemies, and 
      betrayal. The Fellowship of the Ring is the beginning of an epic saga about friendship, courage, and the unyielding battle between good and evil.
    `,
  },
  {
    imdbID: "tt0111161",
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster: "https://image.tmdb.org/t/p/w300/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg",
    Runtime: "142 min",
    imdbRating: 9.3,
    userRating: 10,
    Actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    Summary: `
      Banker Andy Dufresne is sentenced to life in Shawshank prison for the murder of his wife and her lover, a crime he insists he did not commit. 
      Amidst the brutality and despair of prison life, Andy befriends Ellis "Red" Redding, a fellow inmate who becomes his closest confidant. 
      Using patience, intelligence, and hope, Andy transforms Shawshank, improving life for his fellow prisoners while secretly planning his escape. 
      The Shawshank Redemption is a powerful story of resilience, friendship, and the enduring belief in freedom, reminding us that hope can flourish 
      even in the darkest places.
    `,
  },
  {
    imdbID: "tt0068646",
    Title: "The Godfather",
    Year: "1972",
    Poster: "https://image.tmdb.org/t/p/w300/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
    Runtime: "175 min",
    imdbRating: 9.2,
    userRating: 9,
    Actors: "Marlon Brando, Al Pacino, James Caan, Robert Duvall",
    Summary: `
      The aging patriarch Vito Corleone, head of the powerful Corleone crime family, oversees his empire with a mix of loyalty, tradition, and ruthless 
      authority. When an attempt on his life shakes the family, his reluctant son Michael is drawn into the world of organized crime. Initially 
      determined to remain outside the family business, Michael gradually transforms into a calculating and ruthless leader. The Godfather is a 
      sweeping epic about power, family loyalty, betrayal, and the corrupting influence of ambition, cementing its legacy as one of the greatest 
      films in cinematic history.
    `,
  },
];

export { tempMovieData };
