import BMMPhoto from "./assets/ttp-bmm.png"
import EPPhoto from "./assets/ttp-ep.png"
import CFPhoto from "./assets/ttp-cf.png"
import PSPhoto from "./assets/ttp-ps.png"
import STPhoto from "./assets/ttp-st.png"

const projects = [
  {
    title: "Buy My Mousse",
    description:
      "A full-stack ecommerce app that lets users create an account, buy, and sell items.  I built this as a way to use GraphQL for the first time.",
    builtUsing: ["React", "Apollo", "GraphQL", "Express (Yoga)", "Next.js"],
    type: "full-stack",
    feGithub: "https://github.com/tctrautman/buymymousse-frontend",
    beGithub: "https://github.com/tctrautman/buymymousse-backend",
    publicLink: null,
    picSrc: BMMPhoto,
    teamEffort: false,
    flipped: false,
  },
  {
    title: "Event Planner",
    description:
      "This project was a fun way to get familiar with CSS grid and think about packing algorithms.",
    builtUsing: [
      "React",
      "Gatsby.js",
      "Styled Components",
      "CSS grid",
      "Netlify",
    ],
    type: "front-end",
    feGithub: "https://github.com/tctrautman/event-planner",
    beGithub: null,
    publicLink: "https://romantic-shannon-fd95da.netlify.com/",
    picSrc: EPPhoto,
    teamEffort: false,
    flipped: false,
  },
  {
    title: "Curve Fitting",
    description:
      "This is a front-end application used to demonstrate core concepts of probabilistic programming.  I was part of the engineering team that built this at MIT.",
    builtUsing: ["ClojureScript", "Quil", "Metaprob"],
    type: "front-end",
    feGithub: "https://github.com/probcomp/curve-fitting",
    beGithub: null,
    publicLink: null,
    picSrc: CFPhoto,
    teamEffort: true,
    flipped: false,
  },
  {
    title: "Portfolio Site",
    description:
      "This is the source code for the site you're on right now.  I built it from scratch using Gatsby.js.",
    builtUsing: ["React", "Gatsby.js", "Styled Components", "Netlify"],
    type: "front-end",
    feGithub: "https://github.com/tctrautman/timtrautman-portfolio",
    beGithub: null,
    publicLink: null,
    picSrc: PSPhoto,
    teamEffort: false,
    flipped: false,
  },
  {
    title: "Serverless Todos",
    description:
      "This is a 'serverless' todo app, maintaining state without a backend.",
    builtUsing: [
      "React",
      "Gatsby.js",
      "Netlify",
      "FaunaDB",
      "AWS Lambda (via Netlify)",
    ],
    type: "full-stack",
    feGithub: "https://github.com/tctrautman/netlify-faunadb-todo",
    beGithub: null,
    publicLink: "https://priceless-wiles-72922d.netlify.com/",
    picSrc: STPhoto,
    teamEffort: false,
    flipped: false,
  },
]

export default projects
