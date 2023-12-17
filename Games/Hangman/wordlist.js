const wordList = [
  {
    word: "dog",
    hint: "A furry animal that barks.",
  },
  {
    word: "banana",
    hint: "A yellow fruit that you can peel.",
  },
  {
    word: "Mickey Mouse",
    hint: "A famous cartoon character with big ears.",
  },
  {
    word: "Cocomelon",
    hint: "A popular children's YouTube channel with nursery rhymes.",
  },
  {
    word: "guitar",
    hint: "A musical instrument with strings.",
  },
  {
    word: "oxygen",
    hint: "A colorless, odorless gas essential for life.",
  },
  {
    word: "mountain",
    hint: "A large natural elevation of the Earth's surface.",
  },
  {
    word: "painting",
    hint: "An art form using colors on a surface to create images or expression.",
  },
  {
    word: "astronomy",
    hint: "The scientific study of celestial objects and phenomena.",
  },
  {
    word: "football",
    hint: "A popular sport played with a spherical ball.",
  },
  {
    word: "chocolate",
    hint: "A sweet treat made from cocoa beans.",
  },
  {
    word: "butterfly",
    hint: "An insect with colorful wings and a slender body.",
  },
  {
    word: "history",
    hint: "The study of past events and human civilization.",
  },
  {
    word: "pizza",
    hint: "A savory dish consisting of a round, flattened base with toppings.",
  },
  {
    word: "jazz",
    hint: "A genre of music characterized by improvisation and syncopation.",
  },
  {
    word: "camera",
    hint: "A device used to capture and record images or videos.",
  },
  {
    word: "diamond",
    hint: "A precious gemstone known for its brilliance and hardness.",
  },
  {
    word: "adventure",
    hint: "An exciting or daring experience.",
  },
  {
    word: "science",
    hint: "The systematic study of the structure and behavior of the physical and natural world.",
  },
  {
    word: "bicycle",
    hint: "A human-powered vehicle with two wheels.",
  },
  {
    word: "sunset",
    hint: "The daily disappearance of the sun below the horizon.",
  },
  {
    word: "coffee",
    hint: "A popular caffeinated beverage made from roasted coffee beans.",
  },
  {
    word: "dance",
    hint: "A rhythmic movement of the body often performed to music.",
  },
  {
    word: "galaxy",
    hint: "A vast system of stars, gas, and dust held together by gravity.",
  },
  {
    word: "orchestra",
    hint: "A large ensemble of musicians playing various instruments.",
  },
  {
    word: "volcano",
    hint: "A mountain or hill with a vent through which lava, rock fragments, hot vapor, and gas are ejected.",
  },
  {
    word: "novel",
    hint: "A long work of fiction, typically with a complex plot and characters.",
  },
  {
    word: "sculpture",
    hint: "A three-dimensional art form created by shaping or combining materials.",
  },
  {
    word: "symphony",
    hint: "A long musical composition for a full orchestra, typically in multiple movements.",
  },
  {
    word: "architecture",
    hint: "The art and science of designing and constructing buildings.",
  },
  {
    word: "ballet",
    hint: "A classical dance form characterized by precise and graceful movements.",
  },
  {
    word: "astronaut",
    hint: "A person trained to travel and work in space.",
  },
  {
    word: "waterfall",
    hint: "A cascade of water falling from a height.",
  },
  {
    word: "technology",
    hint: "The application of scientific knowledge for practical purposes.",
  },
  {
    word: "rainbow",
    hint: "A meteorological phenomenon that is caused by reflection, refraction, and dispersion of light.",
  },
  {
    word: "universe",
    hint: "All existing matter, space, and time as a whole.",
  },
  {
    word: "piano",
    hint: "A musical instrument played by pressing keys that cause hammers to strike strings.",
  },
  {
    word: "vacation",
    hint: "A period of time devoted to pleasure, rest, or relaxation.",
  },
  {
    word: "rainforest",
    hint: "A dense forest characterized by high rainfall and biodiversity.",
  },
  {
    word: "theater",
    hint: "A building or outdoor area in which plays, movies, or other performances are staged.",
  },
  {
    word: "telephone",
    hint: "A device used to transmit sound over long distances.",
  },
  {
    word: "language",
    hint: "A system of communication consisting of words, gestures, and syntax.",
  },
  {
    word: "desert",
    hint: "A barren or arid land with little or no precipitation.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a large yellow flower head.",
  },
  {
    word: "fantasy",
    hint: "A genre of imaginative fiction involving magic and supernatural elements.",
  },
  {
    word: "telescope",
    hint: "An optical instrument used to view distant objects in space.",
  },
  {
    word: "breeze",
    hint: "A gentle wind.",
  },
  {
    word: "oasis",
    hint: "A fertile spot in a desert where water is found.",
  },
  {
    word: "photography",
    hint: "The art, process, or practice of creating images by recording light or other electromagnetic radiation.",
  },
  {
    word: "safari",
    hint: "An expedition or journey, typically to observe wildlife in their natural habitat.",
  },
  {
    word: "planet",
    hint: "A celestial body that orbits a star and does not produce light of its own.",
  },
  {
    word: "river",
    hint: "A large natural stream of water flowing in a channel to the sea, a lake, or another such stream.",
  },
  {
    word: "tropical",
    hint: "Relating to or situated in the region between the Tropic of Cancer and the Tropic of Capricorn.",
  },
  {
    word: "mysterious",
    hint: "Difficult or impossible to understand, explain, or identify.",
  },
  {
    word: "enigma",
    hint: "Something that is mysterious, puzzling, or difficult to understand.",
  },
  {
    word: "paradox",
    hint: "A statement or situation that contradicts itself or defies intuition.",
  },
  {
    word: "puzzle",
    hint: "A game, toy, or problem designed to test ingenuity or knowledge.",
  },
  {
    word: "whisper",
    hint: "To speak very softly or quietly, often in a secretive manner.",
  },
  {
    word: "shadow",
    hint: "A dark area or shape produced by an object blocking the light.",
  },
  {
    word: "secret",
    hint: "Something kept hidden or unknown to others.",
  },
  {
    word: "curiosity",
    hint: "A strong desire to know or learn something.",
  },
  {
    word: "unpredictable",
    hint: "Not able to be foreseen or known beforehand; uncertain.",
  },
  {
    word: "obfuscate",
    hint: "To confuse or bewilder someone; to make something unclear or difficult to understand.",
  },
  {
    word: "unveil",
    hint: "To make known or reveal something previously secret or unknown.",
  },
  {
    word: "illusion",
    hint: "A false perception or belief; a deceptive appearance or impression.",
  },
  {
    word: "moonlight",
    hint: "The light from the moon.",
  },
  {
    word: "vibrant",
    hint: "Full of energy, brightness, and life.",
  },
  {
    word: "nostalgia",
    hint: "A sentimental longing or wistful affection for the past.",
  },
  {
    word: "brilliant",
    hint: "Exceptionally clever, talented, or impressive.",
  },
  {
    word: "elephant",
    hint: "A big animal with a long trunk.",
  },
  {
    word: "apple",
    hint: "A red or green fruit that is crunchy and sweet.",
  },
  {
    word: "Winnie the Pooh",
    hint: "A friendly bear from a Disney cartoon.",
  },
  {
    word: "car",
    hint: "A vehicle with four wheels that you can drive.",
  },
  {
    word: "peppa pig",
    hint: "A cartoon pig who loves to jump in muddy puddles.",
  },
  {
    word: "dinosaur",
    hint: "A large, extinct reptile that lived millions of years ago.",
  },
  {
    word: "teddy bear",
    hint: "A soft and cuddly stuffed animal.",
  },
  {
    word: "fish",
    hint: "A creature that lives in water and swims.",
  },
  {
    word: "butterfly",
    hint: "A colorful insect with wings.",
  },
  {
    word: "ice cream",
    hint: "A sweet frozen treat that comes in many flavors.",
  },
  {
    word: "duck",
    hint: "A bird that quacks and loves to swim in ponds.",
  },
  {
    word: "train",
    hint: "A long vehicle that travels on tracks and carries people or goods.",
  },
  {
    word: "lion",
    hint: "A big cat with a mane, known as the 'king of the jungle.'",
  },
  {
    word: "cookie",
    hint: "A delicious baked treat that comes in various shapes and flavors.",
  },
  {
    word: "penguin",
    hint: "A bird that cannot fly, but loves to swim in icy waters.",
  },
  {
    word: "teddy bear",
    hint: "A soft and cuddly stuffed animal.",
  },
  {
    word: "rocket",
    hint: "A vehicle that travels into space.",
  },
  {
    word: "sunflower",
    hint: "A tall plant with a big yellow flower.",
  },
  {
    word: "ballet",
    hint: "A form of dance that is graceful and expressive.",
  },
  {
    word: "unicorn",
    hint: "A mythical horse with a single horn on its forehead.",
  },
  {
    word: "rainbow",
    hint: "A colorful arc in the sky after rain.",
  },
  {
    word: "candy",
    hint: "A sweet treat that comes in various colors and flavors.",
  },
  {
    word: "teddy bear",
    hint: "A soft and cuddly stuffed animal.",
  },
  {
    word: "fire truck",
    hint: "A vehicle that firefighters use to put out fires.",
  },
  {
    word: "frog",
    hint: "A small, jumping amphibian with long legs.",
  },
  {
    word: "airplane",
    hint: "A flying vehicle that carries people through the sky.",
  },
  {
    word: "beach",
    hint: "A sandy shore by the sea where you can play in the sun.",
  },
  {
    word: "giraffe",
    hint: "A tall animal with a long neck and spots.",
  },
  {
    word: "baby shark",
    hint: "A popular song about a family of sharks.",
  },
  {
    word: "flower",
    hint: "A colorful and fragrant bloom that grows in gardens.",
  },
  {
    word: "bunny",
    hint: "A cute, hopping animal with long ears.",
  },
  {
    word: "toy truck",
    hint: "A small vehicle for play, often with wheels.",
  },
  {
    word: "kangaroo",
    hint: "A marsupial with a pouch that carries its young.",
  },
  {
    word: "balloon",
    hint: "A colorful inflatable object that floats in the air.",
  },
  {
    word: "monkey",
    hint: "A playful primate with a long tail.",
  },
  {
    word: "robot",
    hint: "A mechanical device that can perform tasks automatically.",
  },
  {
    princess: "Cinderella",
    hint: "Lost her glass slipper at the royal ball.",
  },
  {
    princess: "Snow White",
    hint: "Fairest of them all, with a love for dwarfs.",
  },
  {
    princess: "Aurora",
    hint: "Also known as Briar Rose, pricked her finger on a spinning wheel.",
  },
  {
    princess: "Ariel",
    hint: "A curious mermaid who dreams of life on land.",
  },
  {
    princess: "Belle",
    hint: "A lover of books and the Beast's enchanted castle.",
  },
  {
    princess: "Jasmine",
    hint: "A princess in the city of Agrabah with a magical carpet.",
  },
  {
    princess: "Pocahontas",
    hint: "A Native American princess who connects with nature.",
  },
  {
    princess: "Mulan",
    hint: "A brave warrior who disguises herself as a man to save her father.",
  },
  {
    princess: "Tiana",
    hint: "A hardworking waitress with dreams of opening her own restaurant.",
  },
  {
    princess: "Rapunzel",
    hint: "A princess with long magical hair, locked in a tower.",
  },
  {
    princess: "Merida",
    hint: "A skilled archer and princess of the Scottish clan Dunbroch.",
  },
  {
    princess: "Moana",
    hint: "A spirited and adventurous Polynesian princess.",
  },
  {
    princess: "Elsa",
    hint: "Queen with ice powers from the kingdom of Arendelle.",
  },
  {
    princess: "Anna",
    hint: "Elsa's optimistic and adventurous younger sister.",
  },
  {
    princess: "Raya",
    hint: "A warrior princess on a quest to save her kingdom.",
  },
  {
    princess: "Ariel",
    hint: "A curious mermaid who dreams of life on land.",
  },
  {
    princess: "Belle",
    hint: "A lover of books and the Beast's enchanted castle.",
  },
  {
    princess: "Cinderella",
    hint: "Lost her glass slipper at the royal ball.",
  },
  {
    princess: "Aurora",
    hint: "Also known as Briar Rose, pricked her finger on a spinning wheel.",
  },
  {
    princess: "Elsa",
    hint: "Queen with ice powers from the kingdom of Arendelle.",
  },
  {
    princess: "Jasmine",
    hint: "A princess in the city of Agrabah with a magical carpet.",
  },
  {
    princess: "Moana",
    hint: "A spirited and adventurous Polynesian princess.",
  },
  {
    princess: "Mulan",
    hint: "A brave warrior who disguises herself as a man to save her father.",
  },
  {
    princess: "Pocahontas",
    hint: "A Native American princess who connects with nature.",
  },
  {
    princess: "Rapunzel",
    hint: "A princess with long magical hair, locked in a tower.",
  },
  {
    princess: "Snow White",
    hint: "Fairest of them all, with a love for dwarfs.",
  },
  {
    princess: "Tiana",
    hint: "A hardworking waitress with dreams of opening her own restaurant.",
  },
  {
    character: "Lightning McQueen",
    hint: "The red race car and main protagonist.",
  },
  {
    character: "Mater",
    hint: "A tow truck and Lightning's best friend.",
  },
  {
    character: "Sally Carrera",
    hint: "A blue Porsche and the town attorney.",
  },
  {
    character: "Doc Hudson",
    hint: "A wise and gruff retired race car, also known as the Fabulous Hudson Hornet.",
  },
  {
    character: "Ramone",
    hint: "A purple lowrider and owner of Ramone's House of Body Art.",
  },
  {
    character: "Flo",
    hint: "A show car and owner of Flo's V8 Cafe.",
  },
  {
    character: "Sheriff",
    hint: "The police car and the town's local law enforcement.",
  },
  {
    character: "Guido",
    hint: "A forklift and Luigi's best friend, known for tire changes.",
  },
  {
    character: "Luigi",
    hint: "A small Italian tire shop owner and Guido's best friend.",
  },
  {
    character: "Fillmore",
    hint: "A hippie Volkswagen van and owner of Fillmore's Taste-In.",
  },
  {
    character: "Sarge",
    hint: "A military Jeep and owner of Sarge's Surplus Hut.",
  },
  {
    character: "Red",
    hint: "A fire truck and the shy assistant of Red's Fire and Rescue.",
  },
  {
    character: "Mack",
    hint: "A big rig and Lightning McQueen's transporter.",
  },
  {
    character: "Chick Hicks",
    hint: "The green race car and Lightning's rival in the Piston Cup.",
  },
  {
    character: "The King (Strip Weathers)",
    hint: "The blue race car and legendary Piston Cup champion.",
  },
  {
    character: "Finn McMissile",
    hint: "A British spy car in the sequel 'Cars 2.'",
  },
  {
    character: "Holley Shiftwell",
    hint: "A secret agent and Finn McMissile's partner in 'Cars 2.'",
  },
  {
    character: "Francesco Bernoulli",
    hint: "An Italian race car and Lightning McQueen's competitor in 'Cars 2.'",
  },
  {
    character: "Cruz Ramirez",
    hint: "A yellow race car and Lightning McQueen's trainer in 'Cars 3.'",
  },
  {
    character: "Jackson Storm",
    hint: "A high-tech racer and Lightning McQueen's rival in 'Cars 3.'",
  },
  {
    character: "Sterling",
    hint: "A wealthy business car and owner of Rust-eze Racing Center in 'Cars 3.'",
  },
  {
    character: "Miss Fritter",
    hint: "A menacing school bus and demolition derby champion in 'Cars 3.'",
  },
  {
    character: "Smoky",
    hint: "A pickup truck and Doc Hudson's mentor in 'Cars 3.'",
  },
  {
    character: "Louise Nash",
    hint: "A yellow race car and one of Lightning McQueen's competitors in 'Cars 3.'",
  },
];
