import crow from '../images/crow.png';
import logo from '../images/meenstream-logo.png';
import wayfarer from '../images/sf.jpg';

const data  = [
  {
  title: "Crow Watch",
  desc: "An app for keeping an eye on my deck, in order to prevent crows from making it dirty!  As my final project I taught myself the basics of React Native and dove into AWS's Amplify CLI.",
  tech: ["React Native", "Expo", "AWS: Amplify", "AWS: Cognito", "AWS: S3", "AWS: IAM"],
  image: crow,
  repoLink: "https://github.com/EvanReinstein/crow-watch-front-end",
  date: "December 2018",
  featured: true,
  },
  {
    title: "Meenstream",
    desc: "An app built with Python and Django to experiment with the Spotify API.",
    tech: ["Python", "Django", "PostgresQL", "CSS3", "Heroku"],
    image: logo,
    repoLink: "https://github.com/EvanReinstein/meenstream",
    liveLink: "https://meenstream.herokuapp.com/",
    date: "October 2018",
    featured: true,
  },
  {
    title: "Check Your Rep",
    desc: "An app that allows you to search for your local elected representatives.  Using the Google Civics API this app can provide users with information on their elected representatives, with a future aim of contacting elected officials.  Check back soon for a refreshed version using React!",
    tech: ["jQuery", "CSS", "Node.js", "Express", "MongoDB"],
    image: "",
    repoLink: "https://github.com/EvanReinstein/find_rep_app",
    date: "September 2018",
    featured: false,
  },
  {
    title: "Wayfarer",
    desc: "An app for sharing travel tips.",
    tech: ["React", "Mongoose", "Express", "Node.js", "MongoDB", "Bootstrap", "JSON Web Token", "BCrypt"],
    image: wayfarer,
    repoLink: "https://git.generalassemb.ly/EvanReinstein/wayfarer-front-end",
    date: "November 2018",
    featured: false,
  },
  {
    title: "Alexa Experiment",
    desc: "A custom made Alexa command!",
    tech: ["AWS: Lambda functions"],
    image: "",
    repoLink: "",
    date: "February 2018",
    featured: false,
  }
]

export default data;
