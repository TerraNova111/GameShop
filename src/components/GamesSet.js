const gamesSet = [
    {
        id: 1,
        title: 'Call of Duty MW3 (2023)',
        img: 'CodMW3.jpg',
        category: 'shooters',
        price: '49.99$',
        description: 'Call of Duty: Modern Warfare 3 (MW3) is a first-person shooter video game released in 2011. Developed by Infinity Ward and Sledgehammer Games and published by Activision, it is the eighth installment in the Call of Duty series. The game is known for its intense and cinematic single-player campaign that continues the story from its predecessor, Call of Duty: Modern Warfare 2. MW3 also features a robust multiplayer mode with various maps and game modes, offering a diverse and action-packed gaming experience.'
    },
    {
        id: 2,
        title: 'Cities: Skylines',
        img: 'CS.jpg',
        category: 'city simulation',
        price: '24.99$',
        description: 'Cities: Skylines is a city-building simulation game developed by Colossal Order and published by Paradox Interactive. Released in 2015, it allows players to design and manage their own city, balancing aspects such as infrastructure, zoning, and services to create a thriving urban environment. Known for its expansive and detailed city-building mechanics, extensive modding support, and realistic simulation features, Cities: Skylines has become a popular title among fans of the genre.'
    },
    {
        id: 3,
        title: 'Red dead: Redemption 2',
        img: 'rdr2.jpg',
        category: 'open world',
        price: '59.99$',
        description: 'Red Dead Redemption 2 is an action-adventure game developed and published by Rockstar Games. Released in 2018, it is the prequel to the 2010 game Red Dead Redemption. Set in the late 1800s, the game follows Arthur Morgan, an outlaw and member of the Van der Linde gang, as they navigate the decline of the Wild West. Known for its vast open-world, immersive storytelling, and attention to detail, Red Dead Redemption 2 received acclaim for its rich narrative, realistic graphics, and engaging gameplay, including both the main storyline and various side activities in the fictional American frontier.'
    },
    {
        id: 4,
        title: 'CS2',
        img: 'cs2.jpg',
        category: 'shooters',
        price: '19.99$',
        description: 'Counter-Strike: Global Offensive (CS: GO) is a highly popular first-person shooter video game developed by Valve and Hidden Path Entertainment. Released in 2012, it is the fourth game in the Counter-Strike series. CS: GO is known for its competitive multiplayer gameplay, where two teams, terrorists and counter-terrorists, compete in various objective-based game modes. The game emphasizes tactical gameplay, teamwork, and precise shooting mechanics. CS: GO has a robust esports scene and is celebrated for its longevity and ongoing support through updates and tournaments.'
    },
    {
        id: 5,
        title: 'Diablo 4',
        img: 'd4.jpg',
        category: 'hack and slash',
        price: '89.99$',
        description: 'Diablo IV is an action role-playing game developed and published by Blizzard Entertainment, serving as the fourth installment in the popular Diablo series. Announced at BlizzCon 2019, the game continues the dark and immersive world of Sanctuary, introducing a new storyline and new playable characters. Diablo IV retains the series iconic hack-and-slash gameplay, featuring both a single-player campaign and online multiplayer elements. The game is known for its dark fantasy setting, intense combat, and cooperative gameplay, as players battle against demonic forces and explore the treacherous landscapes of the Diablo universe.'
    },
    {
        id: 6,
        title: 'Titanfall 2',
        img: 'titanfall.jpg',
        category: 'shooters',
        price: '25.00$',
        description: 'Titanfall 2 is a first-person shooter video game developed by Respawn Entertainment and published by Electronic Arts. Released in 2016, it features a unique blend of fast-paced infantry combat and giant mech warfare. The game includes a compelling single-player campaign with a strong emphasis on the bond between the player character and a Titan, a massive combat exoskeleton. Titanfall 2 is praised for its fluid movement mechanics, engaging multiplayer modes, and the dynamic interplay between pilots and Titans.'
    },
    {
        id: 7,
        title: 'Battlefield 5',
        img: 'b5.jpg',
        category: 'shooters',
        price: '59.99$',
        description: 'Battlefield V, released in 2018, is a first-person shooter video game developed by DICE and published by Electronic Arts. Set during World War II, the game features a single-player campaign that explores untold stories of the war and a multiplayer mode with large-scale battles and a focus on squad-based gameplay. Battlefield V is known for its realistic graphics, destructible environments, and the Grand Operations mode, which offers dynamic and multi-day battles. The game also introduced the Tides of War live service, providing ongoing content updates and events for players.'
    },
    {
        id: 8,
        title: 'SimCity 5',
        img: 'sc5.jpg',
        category: 'city simulation',
        price: '29.99$',
        description: 'SimCity (2013), often referred to as SimCity 5, is a city-building simulation game developed by Maxis and published by Electronic Arts. Released in 2013, it is the sixth major installment in the SimCity series. The game introduced a new engine and featured both single-player and multiplayer modes. SimCity (2013) emphasized a more detailed simulation of individual citizens, along with the challenge of managing resources and balancing various aspects of city development. Despite some positive aspects, the game faced criticism for its initial always-online requirement and server issues at launch.'
    },
    {
        id: 9,
        title: 'Blade & Soul: Reborn',
        img: 'bsr.jpg',
        category: 'hack and slash',
        price: '49.99$',
        description: 'Blade & Soul is a martial arts-themed massively multiplayer online role-playing game (MMORPG) developed by NCSOFT. Released in 2012 in South Korea and later internationally, the game features a dynamic combat system, a rich storyline, and a visually striking world inspired by Asian mythology. Players can choose from various classes, engage in PvE and PvP activities, and participate in quests and dungeons. Blade & Soul has gained recognition for its action-oriented combat, character customization options, and a focus on both player versus environment (PvE) and player versus player (PvP) gameplay.'
    },
    {
        id: 10,
        title: 'The Elder Scrolls V: Skyrim',
        img: 'tes5.jpg',
        category: 'open world',
        price: '69.99$',
        description: 'The Elder Scrolls V: Skyrim is an open-world action role-playing game developed by Bethesda Game Studios and published by Bethesda Softworks. Released in 2011, it is the fifth installment in The Elder Scrolls series. Set in the fantasy world of Tamriel, Skyrim offers a vast open-world environment with a rich and immersive narrative. Players can explore a diverse landscape, engage in quests, develop their character, and experience a dynamic system where choices impact the game world. Skyrim is acclaimed for its expansive open-world design, modding community, and the freedom it provides to players in shaping their in-game adventures.'
    },
    {
        id: 11,
        title: 'Dark Souls III',
        img: 'DarkSouls3.jpg',
        category: 'action RPG',
        price: '59.99$',
        description: 'Dark Souls III is an action role- playing game developed by FromSoftware and published by Bandai Namco Entertainment.Released in 2016, it is the third installment in the Dark Souls series.Known for its challenging and precise combat mechanics, interconnected world design, and dark fantasy atmosphere, Dark Souls III follows the players journey through a decaying world filled with formidable enemies and powerful bosses. The game emphasizes deliberate and strategic gameplay, with a focus on exploration, character customization, and overcoming intense difficulty.'
    },
    {
        id: 12,
        title: 'Street Fighter VI',
        img: 'StreetFighter6.jpg',
        category: 'fighting',
        price: '39.99$',
        description: 'Street Fighter V is a fighting game developed and published by Capcom, released in 2016. It is the fifth main installment in the Street Fighter series. Known for its iconic characters, 2D fighting mechanics, and competitive multiplayer, Street Fighter V introduces new gameplay elements like the V-Gauge and V-Trigger systems. The game features a diverse roster of fighters and has been continually updated with additional characters and content through seasons. Street Fighter V is a prominent title in the competitive fighting game community with a focus on tournaments and esports events.'
    },
    {
        id: 13,
        title: 'The Lost Wild',
        img: 'tlw.jpg',
        category: 'survival',
        price: '34.99$',
        description: 'The Lost Wild is a thrilling dinosaur game that captures the majesty and ferocity of natures most impressive creatures with cinematic authenticity. You will meet dinosaurs that behave like wild animals, not monsters.Explore a prehistoric world where you find yourself only somewhere in the middle of the food chain. Crouch, stay alert, and hide! If that doesnt work, run or try to scare off the beast with a non-lethal weapon. A tense game of cat and mouse awaits!'
    },
    {
        id: 14,
        title: 'Resident Evil 4: Remake',
        img: 're4.jpg',
        category: 'survival horror',
        price: '54.99$',
        description: 'Reimagined for 2023 to bring state-of-the-art survival horror. Resident Evil 4 preserves the essence of the original game, while introducing modernized gameplay, a reimagined storyline, and vividly detailed graphics to make this the latest survival horror game where life and death, terror and catharsis intersect.'

    },
    {
        id: 15,
        title: 'Cyberpunk 2077',
        img: 'Cyberpunk2077.jpg',
        category: 'open world',
        price: '79.99$',
        description: 'Cyberpunk 2077 is an action role-playing video game developed by CD Projekt. Released in 2020, it is set in a dystopian future where players assume the role of V, a mercenary navigating the futuristic city of Night City. Known for its open-world design, branching narrative, and cyberpunk aesthetic, the game faced initial criticism for technical issues but received praise for its storytelling, world-building, and character depth.'
    },
    {
        id: 16,
        title: 'Assassin\'s Creed: Unity',
        img: 'asU.jpg',
        category: 'action RPG',
        price: '49.99$',
        description: 'Assassin\'s Creed: Unity is an action-adventure video game developed by Ubisoft. Released in 2014, it is the eighth major installment in the Assassin\'s Creed series. Set during the French Revolution, the game follows Arno Dorian, an Assassin, as he uncovers a conspiracy. Unity is known for its detailed recreation of 18th-century Paris, cooperative multiplayer mode, and a focus on parkour-based movement. Despite positive aspects, it faced criticism for technical issues at launch.'
    },
    {
        id: 17,
        title: 'Ghost of Tsushima',
        img: 'GhostOfTsushima.png',
        category: 'action RPG',
        price: '44.99$',
        description: 'Ghost of Tsushima is an action-adventure game developed by Sucker Punch Productions and published by Sony Interactive Entertainment. Released in 2020, the game is set in feudal Japan and follows Jin Sakai, a samurai, as he adapts unconventional tactics to protect the island of Tsushima from Mongol invaders. Known for its stunning visuals, open-world exploration, and engaging combat, Ghost of Tsushima received acclaim for its narrative, aesthetics, and the ability to immerse players in Japanese culture and history.'
    },
    {
        id: 18,
        title: 'Super Smash Bros. Ultimate: Battle Royale',
        img: 'SuperSmashBrosUltimate.jpg',
        category: 'fighting',
        price: '59.99$',
        description: 'Super Smash Bros. is a Nintendo-developed crossover fighting game series featuring characters from various franchises engaging in multiplayer battles on dynamic stages, known for its accessible yet deep gameplay and fostering a community around diverse character rosters and crossover appeal.'
    },
    {
        id: 19,
        title: 'The Forest',
        img: 'TheForest.png',
        category: 'survival',
        price: '29.99$',
        description: '"The Forest" is a survival horror video game developed and published by Endnight Games. Released in 2014, it combines elements of open-world exploration, crafting, and horror. Players find themselves stranded on a mysterious island after a plane crash and must navigate the environment, gather resources, build shelter, and survive against hostile mutant inhabitants. The game also features a strong emphasis on narrative, with players uncovering the island\'s secrets and unraveling a dark story as they progress.'
    },
    {
        id: 20,
        title: 'Dead Space Remake',
        img: 'DeadSpace.png',
        category: 'survival horror',
        price: '49.99$',
        description: '"Dead Space" is a survival horror video game released in 2008, developed by EA Redwood Shores (later known as Visceral Games) and published by Electronic Arts. Set in a futuristic space mining colony, players control Isaac Clarke, an engineer who must navigate a derelict spaceship overrun by grotesque and reanimated alien creatures known as Necromorphs. The game is known for its atmospheric tension, strategic dismemberment gameplay, and a compelling sci-fi horror narrative.'
    },
    {
        id: 21,
        title: 'Destiny 2',
        img: 'Destiny.jpg',
        category: 'shooters',
        price: '69.99$',
        description: '"Destiny 2" is a multiplayer online first-person shooter (FPS) game developed by Bungie and published by Activision (now self-published by Bungie). Released in 2017, it is a sequel to the original Destiny game. Destiny 2 combines elements of FPS gameplay with role-playing and MMO (Massively Multiplayer Online) features. Players assume the role of Guardians, defenders of the Last City on Earth, and embark on various missions and activities across different planets to combat alien threats and other enemies. The game also features cooperative and competitive multiplayer modes, as well as a strong focus on loot and character customization.'
    },
    {
        id: 22,
        title: 'Cities: Skylines 2',
        img: 'CitiesSkylines2.jpg',
        category: 'city simulation',
        price: '39.99$',
        description: 'Cities: Skylines II is an incredibly realistic and detailed city-building simulator that gives you even more room for creativity. Excellent high-resolution graphics further inspire you to build the city of your dreams.Start building a city from scratch and turn it into a thriving metropolis. There has never been a construction simulator like this before! Cities: Skylines II is a living economic system that allows you to create an entire world.'
    },
    {
        id: 23,
        title: 'Gta 5',
        img: 'Gta5.jpg',
        category: 'open world',
        price: '79.99$',
        description: '"Grand Theft Auto V" (GTA 5) is an action-adventure video game developed by Rockstar North and published by Rockstar Games. Released in 2013, it is the fifth main installment in the Grand Theft Auto series. Set in the fictional state of San Andreas, the game follows three criminals—Michael, Trevor, and Franklin—as they plan and execute a series of heists while navigating a dynamic open-world environment. GTA 5 is known for its engaging narrative, expansive open-world, diverse activities, and a robust online multiplayer mode called Grand Theft Auto Online.'
    },
    {
        id: 24,
        title: 'The Witcher 3',
        img: 'TheWitcher3.jpg',
        category: 'action RPG',
        price: '59.99$',
        description: '"The Witcher 3: Wild Hunt" is an action role-playing game developed by CD Projekt. Released in 2015, it is the third installment in The Witcher series, based on the book series by Andrzej Sapkowski. Players control Geralt of Rivia, a monster hunter for hire, as he searches for his adopted daughter. Set in a vast open world, the game features a rich narrative, complex characters, and morally ambiguous choices that affect the story. Known for its detailed world, engaging quests, and exceptional storytelling, The Witcher 3 is widely regarded as one of the greatest role-playing games of its time.'
    },
]

export default gamesSet;