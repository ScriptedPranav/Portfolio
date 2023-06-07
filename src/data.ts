import SeeYou from "./assets/images/seeyou.png";
import Konnekkt from "./assets/images/konnekkt.png";
import Bento from "./assets/images/carbon.png";

const data = {
  linkedin: "https://www.linkedin.com/in/pranav-sinha-6b2792256/",
  github: "https://github.com/ScriptedPranav",
  email: "scriptedpranav@gmail.com",
  currentCompany: "N/A",
  reposUrl: "https://github.com/ScriptedPranav?tab=repositories",
  projects: [
    {
      id: 0,
      status: "Personal Project",
      title: "SeeYou",
      achievements: [
        "Built a Video Sharing Platform using Next 12",
        "Implemented advanced features such as personalized account suggestions and tailored search results, leading to a 30% increase in user engagement",
        "Incorporated the latest Google OAuth 2.0 Authentication and Authorization mechanisms, ensuring secure access to the platform"
      ],
      technologies: ["TypeScript", "TailwindCSS", "Sanity.io", "NextJS"],
      repo: "https://github.com/ScriptedPranav/See-you",
      online: "https://see-you-stb6.vercel.app/",
      img: SeeYou
    },
    {
      id: 1,
      status: "Production Project",
      title: "Bento",
      achievements: [
        "React Native application for booking appointment and ordering food",
        "Streamlined the user experience by implementing features such as dynamic queue calculation, estimated waiting time, and user notification functionalities resulting in a 40% reduction in booking time",
        "Optimized the path for business users, enhancing their ability to reach their required destinations efficiently",
        "Implemented Cloud Trigger Functions and Cron JOBs for efficient scheduling and seamless automation"
      ],
      technologies: ["React-Native", "Expo", "Firebase", "NativeWind"],
      repo: "https://github.com/ScriptedPranav/bento-cloudFunctions/tree/development",
      online: "https://play.google.com/store/apps/details?id=com.devesh16.bento&pli=1",
      img: Bento
    },
    {
      id: 2,
      status: "Personal Project",
      title: "Konnekt",
      achievements: [
        "Built a social media application using ReactJs and Node",
        "Scalable NodeJs Server handling upto 40k requests per cycle",
        "Realtime chatting feature built with socket.io",
      ],
      technologies: ["ReactJs", "NodeJs", "MongoDB", "Socket.io"],
      repo: "https://github.com/ScriptedPranav/mern_konnekt_api-client",
      online: "https://konnekt-social.onrender.com/",
      img: Konnekkt
    }
  ],
  repos: [
    {
      id: 0,
      title: "SeeYou",
      repo: "https://github.com/ScriptedPranav/See-you",
      online: "https://see-you-stb6.vercel.app/",
      description: "Discover, create, and connect with a feature-rich video sharing platform that empowers you to capture life's extraordinary moments and engage with a vibrant community of content creators.",
      technologies: ["TypeScript", "Tailwind", "Sanity", "NextJS"]
    },
    {
      id: 1,
      title: "Bento",
      repo: "https://github.com/ScriptedPranav/bento-cloudFunctions/tree/development",
      online: "https://play.google.com/store/apps/details?id=com.devesh16.bento&pli=1",
      description: "Get a fresh cut with ease and satisfy your cravings effortlessly with a convenient mobile app that lets you book barber appointments and order delicious snacks, all at your fingertips.",
      technologies: ["ReactNative", "Expo", "Firebase", "NativeWind"],
    },
    {
      id: 2,
      title: "Konnekt",
      repo: "https://github.com/ScriptedPranav/mern_konnekt_api-client",
      online: "https://konnekt-social.onrender.com/",
      description: "Stay connected in real-time and unleash your social side with a dynamic social media app that brings people together through seamless chatting, sparking conversations that transcend boundaries.",
      technologies: ["ReactJs", "NodeJs", "MongoDB", "Socket.io"],
    },
    {
      id: 3,
      title: "Progressive Weather App",
      repo: "https://github.com/ScriptedPranav/WeatherApp",
      online: "https://weather-app-sepia-nu.vercel.app/",
      description: "Experience weather like never before with a progressive app that delivers accurate forecasts, stunning visuals, and personalized insights, ensuring you're always prepared for whatever Mother Nature has in store.",
      technologies: ["ReactJS","Serviceworker","PWA"]
    },
    {
      id: 4,
      title: "Sound Tracker",
      repo: "https://github.com/ScriptedPranav/sound-detection",
      online: "https://sound-detection.vercel.app/",
      description: "Dive into the rhythm of life with a cutting-edge sound tracker app that captures and maps the beats of your surroundings, transforming your everyday moments into a mesmerizing auditory journey.",
      technologies: ["ReactJS","Typescript","Vite","WebAudioAPI"]
    },
    {
      id: 5,
      title: "Image Identification",
      repo: "https://github.com/ScriptedPranav/Image_Identification",
      online: "https://image-identification.vercel.app/",
      description: "Unlock the power of visual intelligence with an image identification app fueled by state-of-the-art machine learning algorithms, empowering you to effortlessly recognize and categorize the world around you with remarkable precision.",
      technologies: ["ReactJS","SCSS","TensorflowJS"]
    }
  ]
}

export { data }