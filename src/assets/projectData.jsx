import avoDBImage from './images/avodb.png'
import novelNoteImage from './images/NovelNote.jpg'
import comp1531Image from './images/comp1531Test.jpg'
import httpProxyImage from './images/proxy.jpg'
import vmImage from './images/vm.jpg'
import fileImage from './images/file.jpg'
import slackrImage from './images/slackr.jpg'
import airbrbImage from './images/airbrb.jpg'
import huffmanImage from './images/huffman.jpg'
import trainsImage from './images/trains.jpeg'
import dungeonManiaImage from './images/dungeonmania.jpg'
import flightsCollectorImage from './images/flightscollector.jpg'
import fileSyncImage from './images/filesync.jpg'
import breakoutImage from './images/breakout.jpg' 
import salesAggregatorImage from './images/salesaggregator.png'
import avoshellImage from './images/avoshell.jpg'
import odePortfolioImage from './images/odeportfolio.png'
import avoEngine from './images/avoengine.png'
import skunum from './images/skunum.png'
import malh from './images/malh.png'
import compiler from './images/compiler.png'

export const projects = [
  {
    src: avoDBImage,
    language: 'Python | PostgreSQL',
    tags: 'fullstack, backend',
    link: "https://github.com/WillGaston/avoDB",
    title: 'E2E Encrypted DBaaS',
    color: 'text-lime-700',
    description: 'End-to-end encrypted database-as-a-service and messanger - cli based with an emphasis on security'
  },
  {
    src: avoEngine,
    language: 'C++', 
    tags: 'backend',
    link: "https://github.com/WillGaston/avoEngine",
    title: 'Relational Database Engine',
    color: 'text-blue-700',
    description: 'A toy relational database (inc. page/tuple/relation/buffer management, btree)'
  },
  {
    src: malh,
    language: 'C', 
    tags: 'backend',
    link: "",
    title: 'Multi-Attribute Linear Hashing for Database',
    color: 'text-blue-700',
    description: 'MALH implementation for database file/tuple management'
  },
  {
    src: skunum,
    language: 'C | PostgreSQL', 
    tags: 'backend',
    link: "",
    title: 'PostgreSQL Custom Data Type',
    color: 'text-blue-700',
    description: 'SKU Number custom data type added to PostgreSQL source code'
  },
  {
    src: compiler,
    language: 'Java', 
    tags: 'backend',
    link: "",
    title: 'VC Compiler',
    color: 'text-orange-400',
    description: 'Compiler for VC (C subset) to Jasmin bytecode (lexical/syntactial/semantic analysis + bytecode)'
  },
  {
    src: odePortfolioImage,
    language: 'JavaScript | React', 
    tags: 'fullstack',
    link: "https://github.com/WillGaston/OdePortfolio",
    title: 'Photography Portfolio Website',
    color: 'text-yellow-500',
    description: 'Photography portfolio website written in react fro @avosfilm'
  },
  {
    src: novelNoteImage,
    language: 'Python | Pandas', 
    tags: 'fullstack',
    link: "https://github.com/WillGaston/NovelNote",
    title: 'NovelNote',
    color: 'text-lime-700',
    description: 'Python program featuring robust novel and quote recording capabilities, data querying and graphical statistics'
  },
  {
    src: comp1531Image,
    language: 'TypeScript',
    tags: 'backend',
    link: "",
    color: 'text-blue-400',
    title: 'Toohak - Quiz Game Backend',
    description: 'Quiz Game Backend using RESTful API, with integration testing of HTTP endpoints: made during COMP1531 24T3'
  },
  {
    src: httpProxyImage,
    language: 'Python',
    tags: 'backend',
    link: "",
    color: 'text-lime-700',
    title: 'HTTP Web Proxy', 
    description: 'HTTP Web Proxy featuring LRU cache, concurrency, and persistence. Supports GET, POST, HEAD, CONNECT requests '
  },
  {
    src: vmImage,
    language: 'C', 
    tags: 'backend',
    link: "",
    title: 'Virtual Memory & Paging',
    color: 'text-blue-700',
    description: 'Virtual memory and a paging management system built on top of OS/161 educational operating system'
  },
  {
    src: fileImage,
    language: 'C', 
    tags: 'backend',
    link: "",
    title: 'Virtual File System Abstractions',
    color: 'text-blue-700',
    description: 'Designed a set of file system abstractions including open file tables and per-process file descriptors for OS/161 OS'
  },
  {
    src: slackrImage, 
    language: 'JavaScript',
    tags: 'frontend',
    link: "",
    title: 'Frontend Slack Clone',
    color: 'text-yellow-500',
    description: 'Frontend slack clone messaging app written in vanilla javascript'
  },
  {
    src: airbrbImage, 
    language: 'JavaScript | React', 
    tags: 'frontend',
    link: "",
    title: 'Frontend Airbnb Clone',
    color: 'text-yellow-500',
    description: 'Frontend airbnb clone written in react'
  },
  {
    src: huffmanImage, 
    language: 'C',
    tags: 'backend',
    link: "",
    color: 'text-blue-700',
    title: 'Huffman Tree Encoder/Decoder', 
    description: 'CLI program which can encode and decode a huffman tree: made during COMP2521 24T2 Ass1'
  },
  {
    src: trainsImage,
    language: 'Java',
    tags: 'backend',
    link: "",
    color: 'text-orange-400',
    title: 'Train Network',
    description: 'Train Network made using OOP principles: made during COMP2511 25T1'
  },
  {
    src: dungeonManiaImage,
    language: 'Java',
    tags: 'backend',
    link: "",
    color: 'text-orange-400',
    title: 'Dungeon Crawler Game',
    description: 'Refactored and extended a given dungeon crawler game: made during COMP2511 25T1'
  },
  {
    src: flightsCollectorImage,
    language: 'C++',
    tags: 'fullstack',
    link: "https://github.com/WillGaston/FlightsCollector",
    color: 'text-blue-700',
    title: 'Flights Collector',
    description: 'Collects cheapest flights data using web scraping'
  },
  {
    src: fileSyncImage, 
    language: 'C',
    tags: 'backend',
    link: "",
    color: 'text-blue-700',
    title: 'File Synchroniser',
    description: 'CLI program which acts as a simplified rsync: made during COMP1521 24T2 Ass2'
  }
];
