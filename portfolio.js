/* Personal portfolio configuration for Ayush Pandey. */
import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 1500
};

const illustration = {animated: true};

const greeting = {
  username: "Ayush Pandey",
  title: "Hi, I'm Ayush Pandey",
  subTitle: emoji(
    "BSc IT student and aspiring software developer. I enjoy building practical projects, solving problems with C, and learning web development. Currently exploring Python, HTML, CSS, JavaScript and modern development tools. 🚀"
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/Ayushpandey-coder4",
  linkedin: "https://lnkd.in/p/d5knb6NK",
  gmail: "ayushp1283@gmail.com",
  display: true
};

const skillsSection = {
  title: "What I Do",
  subTitle: "LEARNING BY BUILDING, ONE PROJECT AT A TIME",
  skills: [
    emoji("⚡ Build console-based applications and problem-solving projects using C"),
    emoji("⚡ Create responsive web pages with HTML, CSS and Bootstrap"),
    emoji("⚡ Explore Python, Git, GitHub and modern software development")
  ],
  softwareSkills: [
    {skillName: "C", fontAwesomeClassname: "fas fa-code"},
    {skillName: "HTML5", fontAwesomeClassname: "fab fa-html5"},
    {skillName: "CSS3", fontAwesomeClassname: "fab fa-css3-alt"},
    {skillName: "Bootstrap", fontAwesomeClassname: "fab fa-bootstrap"},
    {skillName: "JavaScript", fontAwesomeClassname: "fab fa-js"},
    {skillName: "Python", fontAwesomeClassname: "fab fa-python"},
    {skillName: "Git", fontAwesomeClassname: "fab fa-git-alt"},
    {skillName: "GitHub", fontAwesomeClassname: "fab fa-github"}
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "BSc Information Technology",
      logo: require("./assets/images/skill.svg"),
      subHeader: "Undergraduate Student",
      duration: "Currently pursuing",
      desc: "Focused on programming fundamentals, software development and building practical projects.",
      descBullets: ["Learning C programming and web development", "Developing problem-solving and project-building skills"]
    }
  ]
};

const techStack = {
  viewSkillBars: false,
  experience: [],
  displayCodersrank: false
};

const workExperiences = {display: false, experience: []};

const openSource = {showGithubProfile: "false", display: false};

const bigProjects = {
  title: "Featured Project",
  subtitle: "A PROJECT BUILT WHILE PRACTICING PROGRAMMING IN C",
  projects: [
    {
      image: require("./assets/images/codeInLogo.webp"),
      projectName: "Student Record Management System",
      projectDesc: "A console-based C project for managing student records, with add, view, search, update and delete functionality.",
      footerLink: [
        {name: "GitHub Profile", url: "https://github.com/Ayushpandey-coder4"}
      ]
    }
  ],
  display: true
};

const achievementSection = {
  title: emoji("Learning & Growth 📚"),
  subtitle: "Currently focused on strengthening fundamentals and creating projects.",
  achievementsCards: [],
  display: false
};

const blogSection = {title: "Blogs", subtitle: "Articles and notes coming soon.", displayMediumBlogs: "false", blogs: [], display: false};
const talkSection = {title: "Talks", subtitle: "Coming soon.", talks: [], display: false};
const podcastSection = {title: "Podcast", subtitle: "Coming soon.", podcast: [], display: false};
const resumeSection = {title: "Resume", subtitle: "Resume will be added soon.", display: false};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Have an opportunity, idea or project to discuss? Feel free to reach out.",
  number: "",
  email_address: "ayushp1283@gmail.com"
};

const twitterDetails = {userName: "", display: false};
const isHireable = true;

export {
  illustration, greeting, socialMediaLinks, splashScreen, skillsSection,
  educationInfo, techStack, workExperiences, openSource, bigProjects,
  achievementSection, blogSection, talkSection, podcastSection, contactInfo,
  twitterDetails, isHireable, resumeSection
};
