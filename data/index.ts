export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Experience", link: "#experience" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "My portfolio reflects a blend of creativity and logic, showcasing projects that demonstrate my commitment to crafting elegant solutions",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "Always ready to learn and adapt to new technologies",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building an Angular UI library",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Want to build a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [

  {
    id: 1,
    title: "Grilling.ai (aka Rap.ai)",
    description: "You ever wondered who would win a rap battle between a plate and a bowl? Me neither, but my 'brainrot hackathon' project Grilling.ai has the answer. If that wasn't enough, we added the Roast Room, add a photo and be ready to get demolished by our AI fueled by pure hate.",
    images: [ {src: "/RAP_Ai_Roast_Screen.png" , alt:"Roast Screen"}, {src: "/RAP_Ai_HomeScreen.png", alt:"Home Screen"}, {src:"/RAP_Ai_Roasted.png", alt:"Roasted"}, {src:"/Rap_Ai_Bike.png", alt:"Bike"}, {src:"/Rap_Ai_Car.png", alt:"Car"}  ],
    techStackIcons: [{icon: "/openai.png", name: "Open AI"},{icon: "/aws-svgrepo-com.svg", name: "Amazon Web Services"},{icon: "/next.svg", name: "NextJs"}, { icon: "/re.svg", name: "React"}, {icon:"/ts.svg", name: "TypeScript"}, { icon: "/tail.svg", name: "Tailwind CSS"}],
    sourceUrl: "https://github.com/JashanjotP/rap.ai",
    liveUrl: "https://grilling-ai.jashanjotpanjrath.com/",
    devpostUrl: "https://devpost.com/software/rap-ai"
  },
  {
    id: 2,
    title: "Intelligent Tutor",
    description: "IntelligentTutor is a personalized AI-powered learning assistant designed for students. It helps you upload course materials, ask questions, and generate custom quizzes. Built with Next.js, TailwindCSS, LangChain, ChromaDB, and Cohere, it offers instant, course-specific support to boost confidence and efficiency.",
    images: [{src:"/IntelligentTutorMain.png", alt:"Intelligent Tutor"}, {src:"/IntelligentTutorLogin.png", alt:"Intelligent Tutor Login"}, {src:"/IntelligentTutorCreate.png", alt:"Intelligent Tutor Popup"}, {src:"/IntelligentTutorCreated.png", alt:"Intelligent Tutor Popup"}, {src:"/IntelligentTutorClass.png", alt:"Intelligent Tutor Class"}, {src:"/IntelligentTutorQuestion.png", alt:"Intelligent Tutor Quiz Question"}, {src:"/IntelligentTutorAnswer.png", alt:"Intelligent Tutor Answer"}],
    techStackIcons: [{icon: "/next.svg", name: "NextJs"},{icon: "/cohere.png", name: "Cohere"},{icon: "/prisma.png", name: "Prisma"}, { icon: "/sqlite.png", name: "SQLite"} ,{icon: "/openai.png", name: "Open AI"}, ,{icon: "/chroma.png", name: "Chroma"}, ,{icon: "/langchain.png", name: "Langchain"}, ,{icon: "/c.svg", name: "Clerk"},{icon:"/ts.svg", name: "TypeScript"}, ],
    sourceUrl: "https://github.com/JashanjotP/Intelligent-tutor",
    liveUrl: "",
    devpostUrl: "https://devpost.com/software/intelligenttutor"
  },
  {
    id: 3,
    title: "RouteWise",
    description: "RouteWise is a sustainability-focused app developed for Brampton commuters using Angular, Firebase, OpenAI, and Google Maps. It tracks carbon footprints 🌍, suggests carpool options 🚗, optimizes routes 💡, and offers accessibility 🎤🔊, in-app chat, payments, and a dashboard.",
    images: [{src:"/RoutewiseMain.jpg", alt:"RouteWise Main"}, {src:"/RouteWiseLogin.jpg", alt:"RouteWise Login"}, {src:"/RouteWiseDashboard.jpg", alt:"RouteWise Dashboard"}, {src:"/RoutewiseChat.jpg", alt:"RouteWise Chat"}],
    techStackIcons: [ {icon: "/openai.png", name: "Open AI"}, {icon:"/googlemaps.png", name:"Google Maps API"}, {icon: "/angular.jpg", name:"Angular"}, {icon:"/node.png", name:"Node.js"}, {icon: "/firebase.png", name:"Firebase"}, {icon:"/ts.svg", name: "TypeScript"}],
    sourceUrl: "https://github.com/JashanjotP/RouteWise-BramHack",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 4,
    title: "Discord Clone",
    description: "An end-to-end fullstack, real-time Discord clone featuring servers, channels, video/audio calls, message editing/deleting, and member roles. Built with Socket.io, UploadThing, and Prisma using Planetscale for MySQL. It offers a stunning UI with TailwindCSS, light/dark modes, and mobile responsiveness.",
    images: [{src:"/DiscordMain.png", alt:"Discord Main"}],
    techStackIcons: [{icon: "/next.svg", name: "Nextjs"}, {icon:"/c.svg", name:"Clerk"}, {icon:"/Socket-io.png", name: "Socket.io"}, {icon:"/mysql.jpg", name: "MySQL"}, {icon: "/prisma.png", name: "Prisma"}, {icon: "/ts.svg", name: "TypeScript"},  {icon: "/tail.svg", name: "Tailwind CSS"}],
    sourceUrl: "https://github.com/JashanjotP/Discord-Clone",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 5,
    title: "Spotify Clone",
    description: "A music streaming platform built with Next.js, Supabase, Stripe API, and TailwindCSS. It includes secure authentication, subscription management, and media uploads. Users can explore music, manage playlists, and enjoy a seamless, responsive UI with advanced playback controls. Test credentials: Email: demo07213@gmail.com, Password: Thisisademo",
    images: [{src:"/SpotifyMain.png", alt:"Spotify Main"},{src:"/SpotifyLogin.png", alt:"Spotify Login"}, {src:"/SpotifyLiked.png", alt:"Spotify Liked Page"}, {src:"/SpotifyAccountSettings.png", alt:"Spotify Account Settings"}, {src:"/SpotifySearch.png", alt:"Spotify Search"}, {src:"/SpotifySong.png", alt:"Spotify Song"}, {src:"/SpotifySongUpload.png", alt:"Spotify Song Upload"},  {src:"/SpotifyStripeScreen.png", alt:"Spotify Stripe Screen"}],
    techStackIcons: [{icon: "/next.svg", name: "Nextjs"}, {icon:"/supabase.jpg", name:"Supabase"}, {icon:"/stripe.jpeg", name:"Stripe API"}, {icon:"/Postgresql.png", name:"PostgreSQL"}, {icon: "/ts.svg", name: "TypeScript"}, {icon: "/tail.svg", name: "Tailwind CSS"}],
    sourceUrl: "https://github.com/JashanjotP/spotify-clone",
    liveUrl: "https://spotify.jashanjotpanjrath.com",
    devpostUrl: ""
  },
  {
    id: 6,
    title: "8Ball Pool Simulation",
    description: "8BallPool is a full-stack web application that simulates a pool game with realistic physics and engaging gameplay. Featuring a seamless user experience, it combines backend and frontend technologies to deliver an interactive and entertaining digital pool game experience.",
    images: [{src:"/8ballhome.png", alt:"8Ball Pool Main"},{src:"/8ballpoolintial.png", alt:"8Ball Pool intial"}, {src:"/8ballpoolturns.png", alt:"8Ball turns"}, {src:"/8ballpoolend.png", alt:"8Ball Pool End"}],
    techStackIcons: [{icon: "/dock.svg", name: "Docker"}, {icon: "/python.png", name: "Python"}, {icon: "/C_Logo.png", name: "C Lang"} ,{icon: "/sqlite.png", name: "SQLite"}, {icon: "/jquery.svg", name: "JQuery"} ,{icon: "/javascript.png", name: "JavaScript"}, { icon: "/html.png", name: "HTML"}, {icon:"/css.svg", name: "CSS"}],
    sourceUrl: "https://github.com/JashanjotP/8BallPool",
    liveUrl: "https://8ballpool.jashanjotpanjrath.com/",
    devpostUrl: ""
  },
  {
    id: 7,
    title: "RESTful API",
    description: "A feature-rich REST API built with Node.js, Express, TypeScript, and MongoDB. API provides full CRUD functionality, secured with cookie-based authentication. Designed with controllers and middleware for clean, modular architecture, ensuring scalability and maintainability.",
    images: [{src:"/rest.jpg", alt:"Restful API"}],
    techStackIcons: [{icon: "/mongo.png", name: "MongoDB"}, {icon: "/node.png", name: "Node.js"}, {icon:"/express.png", name:"Express"}, {icon:"/ts.svg", name: "TypeScript"} ],
    sourceUrl: "https://github.com/JashanjotP/RESTful-API",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 8,
    title: "Shell",
    description: "A custom Java-based shell with built-in commands like cd, echo, and ls, external command execution, tab completion, command history, and piping support. Leveraging JLine for robust terminal handling, it offers a seamless command-line interface for efficient task execution.",
    images: [{src:"/ShellMain.png", alt:"Custom Shell Main"},{src:"/ShellPipe.png", alt:"Custom Shell Pipe Command"}, {src:"/ShellGit.png", alt:"Custom Shell Git Command"}, {src:"/ShellTab.png", alt:"Custom Shell Tab Command"}],
    techStackIcons: [{icon: "/java.png", name: "Java"}, {icon: "/maven.png", name: "Maven"}],
    sourceUrl: "https://github.com/JashanjotP/Shell",
    liveUrl: "",
    devpostUrl: ""
  },
  {
    id: 9,
    title: "Legacy Portfolio Website",
    description: "My initial portfolio website was built using Vite, React, TailwindCSS, and TypeScript, emphasizing speed, efficiency, and clean design. It effectively showcased my projects, skills, and professional journey in a structured and visually appealing manner. While it served as a strong foundation for my online presence, it lacked certain features and modern enhancements.",
    images: [{src:"/PortfolioMain.png", alt:"Portfolio Main"},{src:"/PortfolioAbout.png", alt:"Portfolio About Section"}, {src:"/PortfolioSkills.png", alt:"Portfolio Skills"} ,{src:"/PortfolioProjects.png", alt:"Portfolio Projects"}, {src:"/PortfolioContact.png", alt:"Portfolio Contact"}],
    techStackIcons: [{icon: "/re.svg", name: "React"}, { icon: "/tail.svg", name: "Tailwind CSS"}, {icon:"/ts.svg", name: "TypeScript"}, {icon: "/vite.svg", name: "Vite"}],
    sourceUrl: "https://github.com/JashanjotP/Portfolio-Website",
    liveUrl: "https://jashanjotp.github.io/Portfolio-Website/",
    devpostUrl: ""
  },
  {
    id: 10,
    title: "Weather Application",
    description: "A responsive weather app built with HTML, CSS, and JS using the OpenWeather API. It shows weather for the current or searched location with autocomplete. Features include detailed metrics like temperature, wind speed/direction, air quality, pressure, and visibility for accurate insights.",
    images: [{src:"/WeatherAppMain.png", alt:"Weather App Main"},{src:"/WeatherAppSearch.png", alt:"Weather App Search"}, {src:"/WeatherAppLA.png", alt:"Weather App Los Angeles"}, {src:"/WeatherApp404.png", alt:"Weather App Not Found"}],
    techStackIcons: [{icon: "/openweather.png", name: "Open Weather API"},{icon: "/javascript.png", name: "JavaScript"}, { icon: "/html.png", name: "HTML"}, {icon:"/css.svg", name: "CSS"}],
    sourceUrl: "https://github.com/JashanjotP/Weather-App",
    liveUrl: "https://jashanjotp.github.io/Weather-App/",
    devpostUrl: ""
  },
  {
    id: 11,
    title: "Sorting Visualizer",
    description: "This project was built using React.js and Tailwind CSS. It allows you to visualize the sorting process of various algorithms such as Bubble Sort, Merge Sort, Quick Sort, and many more. The project was built to help students understand the sorting process better.",
    images: [ {src:"/SortingVisualizer.svg", alt: "Sorting Visualizer HomeScreen"}],
    techStackIcons: [{icon: "/re.svg", name: "React"}, { icon: "/tail.svg", name: "Tailwind CSS"}, {icon:"/ts.svg", name: "TypeScript"}, {icon: "/vite.svg", name: "Vite"}],
    sourceUrl: "https://github.com/JashanjotP/Sorting-Visualizer",
    liveUrl: "https://jashanjotp.github.io/Sorting-Visualizer/",
    devpostUrl: ""
  },
  {
    id: 12,
    title: "To-Do Application",
    description: "The To-Do List App lets users create, update, delete, and mark tasks as complete. It saves data using local storage for persistence. This project highlights CRUD functionality, dynamic UI updates, and responsive design using React, Vite, and TypeScript.",
    images: [{src:"/ToDoListMain.png", alt:"ToDo List Page"},{src:"/ToDoListUpdate.png", alt:"ToDo List Update"}, {src:"/ToDoListLocal.png", alt:"ToDo List Local Storage"}],
    techStackIcons: [{icon: "/re.svg", name: "React"}, { icon: "/tail.svg", name: "Tailwind CSS"}, {icon:"/ts.svg", name: "TypeScript"}, {icon: "/vite.svg", name: "Vite"}],
    sourceUrl: "https://github.com/JashanjotP/ToDo-App",
    liveUrl: "https://jashanjotp.github.io/ToDo-App/",
    devpostUrl: ""
  },

  {
    id: 13,
    title: "Calculator",
    description: "A simple and intuitive calculator app built with HTML, CSS, and JavaScript. Perform basic arithmetic operations like addition, subtraction, multiplication, and division. Features a sleek, responsive design for seamless usability on both desktop and mobile devices.",
    images: [{src:"/calculator.png", alt:"Calculator App"}],
    techStackIcons: [{icon: "/javascript.png", name: "JavaScript"}, { icon: "/css.svg", name: "CSS"}, {icon:"/html.png", name: "HTML"}],
    sourceUrl: "https://github.com/JashanjotP/Calculator",
    liveUrl: "https://jashanjotp.github.io/Calculator/",
    devpostUrl: ""
  },
  
  
];


export const workExperience = [
  {
    id: 1,
    title: "Software Engineer Coop",
    desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 2,
    title: "Teaching Assistant",
    desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/JashanjotP"
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/jashanjot-panjrath/"
  },
];
