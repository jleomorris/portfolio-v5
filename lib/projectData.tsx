import { selectRandom } from '../utils';

export const projectData = () => [
  {
    link: 'LDR_Generator',
    description:
      'Love Death and Robots is an American adult animated anthology series on Netflix. There are 18 episodes in the first season and this random episode generator app allows for random selection of one. You can roll for a random episode, or sort and select from all episodes.',
    subTitle: 'LDR Generator',
    challenge: {
      title: 'A clean simple tool',
      description: [
        'Ever since watching the series I wanted to created a little functional tool where the unique slot animations from the series could be expressed, as well as the typography and style.',
        'I wanted those with little time to be able to filter by rating, name and duration to ensure they could identify episodes quickly.',
        ,
      ],
    },
    title: 'Some Love Death & Robots Randomness',
    backgroundColor: '#D62742',
    textColor: 'text-white',
    headerTextColor: 'text-white',
    headerImgURL: selectRandom([
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/1.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/2.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/3.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/4.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/5.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/6.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/7.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/8.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/9.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/10.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/11.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/12.jpg',
    ]),
    descriptionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636763556/Portfolio-v5/Projects/LDR/header_background.jpg',
    challengeImgURL: selectRandom([
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/1.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/2.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/3.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/4.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/5.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/6.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/7.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/8.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/9.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/10.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/11.jpg',
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637863327/Portfolio-v5/Projects/LDR/header/12.jpg',
    ]),
    sectionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636320699/Portfolio-v5/Projects/kharnivore.jpg',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jleomorris/love-death-robots-slots',
      },
      {
        title: 'Demo',
        href: 'https://love-death-robots-slots.herokuapp.com/',
      },
    ],
    features: [
      {
        title: 'Randomness',
        description: ['Roll for a random episode from all 18 of season 1.'],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637275032/Portfolio-v5/Projects/LDR/random.jpg',
      },
      {
        title: 'Slot animation',
        description: [
          'The classic slot animation from the series is used throughout the app to mimic a similar feel.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637274690/Portfolio-v5/Projects/LDR/slots.jpg',
      },
      {
        title: 'Filters',
        description: [
          'Sort episodes by number, rating or duration to quickly identify an episode.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637274416/Portfolio-v5/Projects/LDR/filters.jpg',
      },
    ],
    services: [
      'ReactJS',
      'Redux',
      'Styled Components',
      'SCSS',
      'Framer Motion',
    ],
    team: [
      {
        name: 'James Morris',
        role: ['Designer, Developer'],
      },
    ],
    attributions: [
      {
        name: 'Michael Chernayk',
        role: ['Custom Fonts'],
      },
      {
        name: 'Ofer Ariel',
        role: ['Custom Fonts'],
      },
      {
        name: 'GeorgeArtman',
        role: ['Card Illustrations'],
      },
    ],
  },
  {
    link: 'Poke_Price',
    description:
      'Over the last two years the Pokemon card market has boomed and the worth of some cards has increased significantly. You can use this app to check the worth of your raw cards to see if you might have a surprise collection worth hundreds of dollars!',
    subTitle: 'Poke Price',
    challenge: {
      title: 'Easy to use with clean UI',
      description: [
        'For those who collect Pokemon cards I wanted to create a tool that they could use to price their raw cards. This tool had to have a clean user interface, useful features like search via name and set and had to display prices clearly.',
        ,
      ],
    },
    title: 'Get the prices of your childhood favourites',
    backgroundColor: '#dfa63e',
    textColor: 'text-black',
    headerTextColor: 'text-white',
    headerImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1633172502/Pokemon-tcg-price-guide/home-background.jpg',
    descriptionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637886594/Portfolio-v5/Projects/poke-price/header/1.jpg',
    challengeImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637887085/Portfolio-v5/Projects/poke-price/collage.jpg',
    sectionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636328176/Portfolio-v5/Projects/Charizard.png',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jleomorris/poke-price',
      },
      {
        title: 'Demo',
        href: 'https://poke-price.vercel.app/',
      },
    ],
    features: [
      {
        title: 'Search options & history',
        description: [
          "Search by card name or set to find the card you're looking for. Previous searches are also stored to make it easier to find a past result.",
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637277998/Portfolio-v5/Projects/poke-price/search-options-history.jpg',
      },
      {
        title: 'Varied price data',
        description: [
          'View market, low, mid and high prices - all from TCGPlayer.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637277803/Portfolio-v5/Projects/poke-price/price-data.jpg',
      },
      {
        title: 'PokemonTCG API',
        description: [
          'Developed using one of the most comprehensive datasets for Pokemon cards - PokemonTCG API.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637277673/Portfolio-v5/Projects/poke-price/pokemontcg.jpg',
      },
    ],
    services: [
      'ReactJS',
      'Redux',
      'REST API',
      'Styled Components',
      'SCSS',
      'Framer Motion',
    ],
    team: [
      {
        name: 'James Morris',
        role: ['Designer, Developer'],
      },
    ],
    attributions: [
      {
        name: 'Price Data',
        role: ['PokemonTCG API'],
      },
      {
        name: 'Pokemon Illustrations',
        role: ['FanPop'],
      },
    ],
  },
  {
    link: 'Modern_Pokedex',
    description:
      'The original 151 Pokemon hold a special place in many peoples hearts, including my own. With this app you can view every related detail of each of them - users can view sprites & pokemon data, filter by type/max stat and search by name.',
    subTitle: 'Modern Pokedex',
    challenge: {
      title: 'Modern look, rich with details',
      description: [
        'After seeing examples of some simplistic pokedex apps I wanted to create my own that surpassed them. I wanted the tool to have a vast amount of data relating to the first 151 Pokemon of gen1, and a clean, modern look',
        ,
      ],
    },
    title: 'A Modern Twist On The First Gen Pokedex',
    backgroundColor: '#8ea4df',
    textColor: 'text-black',
    headerTextColor: 'text-white',
    headerImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636768639/Portfolio-v5/Projects/modern-pokedex/header_background.jpg',
    descriptionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637887418/Portfolio-v5/Projects/modern-pokedex/description.jpg',
    challengeImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637891142/Portfolio-v5/Projects/modern-pokedex/challenge.jpg',
    sectionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636324383/Portfolio-v5/Projects/gyarados.png',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jleomorris/modern-pokedex',
      },
      {
        title: 'Demo',
        href: 'https://jleomorris.github.io/modern-pokedex',
      },
    ],
    features: [
      {
        title: 'Custom Sprite Options',
        description: [
          'Choose between 7 different sprite styles - from official to 3D.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637272356/Portfolio-v5/Projects/modern-pokedex/sprites.jpg',
      },
      {
        title: 'Filters',
        description: [
          '3 different filters have been added to aid in quickly identifying specific Pokemon.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637201358/Portfolio-v5/Projects/modern-pokedex/filters.jpg',
      },
      {
        title: 'Extensive Details',
        description: [
          "View a Pokemon' stats, abilities, damage type, where to find, evolution chart and more.",
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637894665/Portfolio-v5/Projects/modern-pokedex/details.jpg',
      },
      {
        title: 'PokeAPI',
        description: [
          'Data pulled from one of the largest and most reliable Pokemon REST API.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637273079/Portfolio-v5/Projects/modern-pokedex/poke-api.jpg',
      },
    ],
    services: [
      'ReactJS',
      'Redux',
      'REST API',
      'Styled Components',
      'SCSS',
      'Framer Motion',
    ],
    team: [
      {
        name: 'James Morris',
        role: ['Designer, Developer'],
      },
    ],
    attributions: [
      {
        name: 'PokeAPI',
        role: ['Pokemon data'],
      },
      {
        name: 'Eocen - Fanpop',
        role: ['Home Wallpaper'],
      },
      {
        name: 'Icons8',
        role: ['Type Icons'],
      },
      {
        name: 'github.com/PokeAPI/sprites',
        role: ['Black/White Shiny Animations'],
      },
      {
        name: 'projectpokemon.org/',
        role: ['3D Sprite Animations'],
      },
      {
        name: 'github.com/athanstancss',
        role: ['Pokeball CSS animation'],
      },
      {
        name: 'brfa98 - instagram.com/bplayingcards/',
        role: ['Pokemon Series Custom Logos'],
      },
      {
        name: 'Pexels',
        role: ['Tile backgrounds'],
      },
      {
        name: 'Bulbapedia',
        role: ['Move, Category & First Edition Icons'],
      },
      {
        name: 'sweetyhigh, factcity, softschools, factinate, thefactsite',
        role: ['Pokemon facts'],
      },
    ],
  },
  {
    link: 'Last_Life',
    description:
      "It's always nice to stay on top of the most popular games and with this app you can. Users can view popular/new/upcoming games and search for a game by name. Card size(S/M/L) and the amount of games viewable for each section can also be adjusted.",
    subTitle: 'Last Life',
    challenge: {
      title: 'Clean look, easy to use',
      description: [
        'I wanted to create a tool that would allow a user to customise what news they see for the games they like, whether that be popular, new or upcoming. I also wanted users to be able to search by name to locate results.',
        ,
      ],
    },
    title: 'Get The Latest News On Your Favourite Games',
    backgroundColor: '#1e2438',
    textColor: 'text-white',
    headerTextColor: 'text-white',
    headerImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636772097/Portfolio-v5/Projects/last-life/header-background.jpg',
    descriptionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637891980/Portfolio-v5/Projects/last-life/description.jpg',
    challengeImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637894005/Portfolio-v5/Projects/last-life/mobile.jpg',
    sectionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636325505/Portfolio-v5/Projects/jin_sakai.png',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jleomorris/last-life',
      },
      {
        title: 'Demo',
        href: 'https://jleomorris.github.io/last-life',
      },
    ],
    features: [
      {
        title: 'Variety of game types',
        description: ['View popular, new, upcoming games, and search by name'],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637278930/Portfolio-v5/Projects/last-life/types.jpg',
      },
      {
        title: 'Extensive details',
        description: [
          'View Metacritic rating, URLs, tags, description, platforms, screenshots, video for any game',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637278931/Portfolio-v5/Projects/last-life/details.jpg',
      },
      {
        title: 'RAWG API',
        description: [
          'Data pulled from the same comprehensive REST API used for Discord',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637279183/Portfolio-v5/Projects/last-life/rawg.jpg',
      },
    ],
    services: [
      'ReactJS',
      'Redux',
      'Styled Components',
      'SCSS',
      'Framer Motion',
    ],
    team: [
      {
        name: 'James Morris',
        role: ['Designer, Developer'],
      },
    ],
    attributions: [
      {
        name: 'RAWG API',
        role: ['Game data'],
      },
      {
        name: 'Pexels',
        role: ['Background Images'],
      },
    ],
  },
  {
    link: 'Bolt_Music_Player',
    description:
      'Nothing beats carrying out some development whilst listening to your favourite tracks. With this music player app you can - users can play a song from the library, sort via artist and title and enable dark mode.',
    subTitle: 'Bolt Music Player',
    challenge: {
      title: 'Easy access to modern tracks',
      description: [
        'The aim of this project was to create a free, easy to use tool that would allow users quick access to some modern tracks, to listen to while on the move.',
        ,
      ],
    },
    title: 'Code to some chill tracks',
    backgroundColor: '#5C6285',
    textColor: 'text-white',
    headerTextColor: 'text-white',
    headerImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636772390/Portfolio-v5/Projects/bolt-music-player/header-background.jpg',
    descriptionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637893738/Portfolio-v5/Projects/bolt-music-player/description.jpg',
    challengeImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637280195/Portfolio-v5/Projects/bolt-music-player/mobile.jpg',
    sectionImgURL:
      'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1636326862/Portfolio-v5/Projects/bolt.png',
    links: [
      {
        title: 'Github',
        href: 'https://github.com/jleomorris/bolt-music-player',
      },
      {
        title: 'Demo',
        href: 'https://jleomorris.github.io/bolt-music-player/',
      },
    ],
    features: [
      {
        title: 'Library',
        description: [
          'The latest chilled beats from chillhop.com, library view can be toggled on and off.',
        ],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637280131/Portfolio-v5/Projects/bolt-music-player/library.jpg',
      },
      {
        title: 'Dark Mode',
        description: ['Dark mode toggle available.'],
        imgURL:
          'https://res.cloudinary.com/jleomorris/image/upload/f_auto,q_auto/v1637280195/Portfolio-v5/Projects/bolt-music-player/dark-mode.jpg',
      },
    ],
    services: [
      'ReactJS',
      'Redux',
      'Styled Components',
      'SCSS',
      'Framer Motion',
    ],
    team: [
      {
        name: 'James Morris',
        role: ['Designer, Developer'],
      },
    ],
    attributions: [
      {
        name: 'Chillhop.com',
        role: ['Music tracks'],
      },
      {
        name: 'Pexels',
        role: ['Background Images'],
      },
    ],
  },
];
