import { AiOutlineCalendar } from "react-icons/ai"
import { TfiRulerPencil } from "react-icons/tfi"
import { VscFileSubmodule } from "react-icons/vsc"
import { BiUser } from "react-icons/bi"

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "Participer à des Réunions Virtuelles et Webinaires",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Technologies uniques et approche moderne",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "Explorer une Carte des Projets Durables ",
  },
  {
    icon: <BiUser size={25} />,
    title: "Forum Communautaire ",
  },
]
export const expertise = [
  {
    id: 1,
    title: "Conseils Personnalisés",
    cover: "../images/conseil-personnalise.jpg",
    desc: [{ text: "Analyse des Besoins" }, { text: "Suivi et Évaluation" }, { text: "Ressources et Outils" }, { text: "Partenariats Locaux" }, { text: "Financement et Subventions" }],
  },
  {
    id: 2,
    title: "Formations En Ligne",
    cover: "../images/slider-ecole.jpg",
    desc: [{ text: "Certifications" }, { text: "Intervenants Experts" }, { text: "Webinaires et Événements" }, { text: "Thématiques Variées" }],
  },
  {
    id: 3,
    title: "Ateliers Interactifs",
    cover: "../images/agriculture.jpg",
    desc: [{ text: "Expérience Pratique" }, { text: "Collaborations Dynamiques" }, { text: "Création de Projets" }, { text: "Feedback Constructif" }],
  },
  {
    id: 4,
    title: "Community Forums",
    cover: "../images/Community-Center.png",
    desc: [{ text: "Espace d'Échange" }, { text: "Support Collaboratif" }, { text: "Partage de Ressources" }],
  },
]
export const testimonial = [
  {
    id: 1,
    name: "Diana Green",
    cover: "../images/diana-green.jpg",
    post: "Spécialiste en Communication Environnementale",
    desc: "Communiquer sur des projets de développement durable est crucial pour sensibiliser le public. Travailler avec le parti a révélé à quel point l'engagement communautaire est vital pour le succès de ces initiatives. Ensemble, nous avons la possibilité de toucher un large public et d'encourager chacun à adopter des comportements plus responsables.",
  },
  {
    id: 2,
    name: "Jason Polom",
    cover: "../images/jason-polom.jpg",
    post: "Agronome",
    desc: "La collaboration avec Développement Durable m'a permis de partager des pratiques agricoles qui respectent l'écosystème. Leur vision de l'agriculture durable, qui favorise la biodiversité et la sécurité alimentaire, est essentielle pour l'avenir. Je suis convaincu que ces initiatives transformeront notre rapport à l'agriculture.",
  },
  {
    id: 3,
    name: "Emiley Yi",
    cover: "../images/emiley-yi.jpg",
    post: "Ingénieur en Énergies Renouvelables",
    desc: "Les projets soutenus par ce parti démontrent l'importance de l'innovation dans le domaine des énergies renouvelables. En intégrant des solutions durables dans nos vies quotidiennes, nous pouvons réduire notre empreinte carbone et créer des environnements plus sains. Je suis fier de contribuer à cette mission.",
  },
  {
    id: 4,
    name: "Mathiew Fretz",
    cover: "../images/mathiew-fretz.jpg",
    post: "Expert en Environnement",
    desc: "Travailler avec le parti Développement Durable a été une expérience inspirante. Leur engagement envers la préservation de l'environnement et leur volonté d'impliquer la communauté dans des projets éco-responsables montrent qu'un changement positif est possible. Ensemble, nous pouvons bâtir un avenir où la nature et l'humain coexistent en harmonie.",
  },
]


export const showcase = [
  {
    id: 1,
    title: "Projet de panneaux solaires",
    cover: "../images/solar pannels desert.jpg",
    catgeory: "Énergie",
    description: "Ce projet de panneaux solaires vise à exploiter l'énergie solaire dans les régions désertiques, où les rayonnements solaires sont les plus intenses. Il a pour objectif de produire de l'électricité propre et durable, tout en réduisant la dépendance aux combustibles fossiles. L'installation de milliers de panneaux permettrait de générer une capacité suffisante pour alimenter des milliers de foyers et contribuer à la transition énergétique mondiale.",
    goal: 50000,
    raised: 20000,
    topDonors: [
      { name: "Alice", amount: 5000 },
      { name: "Bob", amount: 3000 },
      { name: "Charlie", amount: 1500 },
    ]
  },
  {
    id: 2,
    title: "Stations de recharge électrique",
    catgeory: "Futuriste",
    cover: "../images/electric charging stations.jpg",
    description: "Les stations de recharge électrique sont une composante essentielle des infrastructures pour véhicules électriques. Ce projet propose un réseau de stations modernes, rapides et faciles d'accès, permettant aux propriétaires de véhicules électriques de recharger leurs batteries en toute tranquillité. En soutenant le passage à la mobilité durable, ce projet vise à réduire les émissions de gaz à effet de serre et à promouvoir l'adoption des véhicules propres dans les grandes agglomérations.",
    goal: 100000,
    raised: 45000,
    topDonors: [
      { name: "David", amount: 10000 },
      { name: "Emily", amount: 7500 },
      { name: "Frank", amount: 5000 },
    ]
  },
  {
    id: 3,
    title: "Projet de barrage hydraulique",
    cover: "../images/home_image.jpg",
    catgeory: "Agriculture",
    description: "Ce projet de barrage hydraulique est conçu pour fournir une gestion efficace des ressources en eau dans les zones agricoles. Il permettra non seulement de stocker de l'eau pour l'irrigation, mais aussi de produire de l'énergie hydroélectrique. Ce type d'infrastructure est crucial pour soutenir les besoins croissants en agriculture tout en offrant une solution durable face à la variabilité climatique et à la rareté des ressources en eau.",
    goal: 75000,
    raised: 30000,
    topDonors: [
      { name: "George", amount: 12000 },
      { name: "Hannah", amount: 8000 },
      { name: "Ian", amount: 3000 },
    ]
  },
  {
    id: 4,
    title: "Projets agricoles",
    cover: "../images/agriculture tn.jpg",
    catgeory: "Agriculture",
    description: "Les projets agricoles mis en œuvre dans cette initiative visent à moderniser les méthodes agricoles traditionnelles à travers l'introduction de technologies innovantes. Cela inclut des systèmes d'irrigation intelligents, l'usage de drones pour la surveillance des cultures, ainsi que la promotion de l'agriculture biologique. Le but est d'augmenter la productivité tout en respectant les principes de durabilité et de protection de l'environnement.",
    goal: 60000,
    raised: 25000,
    topDonors: [
      { name: "John", amount: 10000 },
      { name: "Karen", amount: 7000 },
      { name: "Liam", amount: 5000 },
    ]
  },
  {
    id: 5,
    title: "Agriculture urbaine",
    cover: "../images/urban agriculture.jpg",
    catgeory: "Agriculture",
    description: "Le projet d'agriculture urbaine se concentre sur l'intégration des pratiques agricoles dans les villes. Il propose de transformer les toits et les espaces vacants en jardins potagers et fermes verticales. En produisant des aliments localement, cette initiative réduit la dépendance aux transports alimentaires longue distance, diminue l'empreinte carbone, et améliore la résilience des communautés urbaines face aux défis environnementaux.",
    goal: 40000,
    raised: 20000,
    topDonors: [
      { name: "Mike", amount: 9000 },
      { name: "Nina", amount: 6000 },
      { name: "Oscar", amount: 2000 },
    ]
  },
  {
    id: 6,
    title: "Vie intelligente et durable",
    cover: "../images/sustainable homes.jpg",
    catgeory: "Futuriste",
    description: "Ce projet propose une approche holistique de la construction de maisons intelligentes et durables, en intégrant les dernières innovations en matière d'efficacité énergétique et de technologie connectée. Chaque maison est conçue pour minimiser son impact environnemental en utilisant des matériaux écologiques, des systèmes de gestion énergétique optimisés et des solutions de gestion de l'eau. Le concept vise à créer un mode de vie durable qui s'adapte aux besoins futurs des villes intelligentes.",
    goal: 120000,
    raised: 60000,
    topDonors: [
      { name: "Paul", amount: 20000 },
      { name: "Quinn", amount: 15000 },
      { name: "Rachel", amount: 12000 },
    ]
  }
];


export const brand = [
  {
    id: 1,
    cover: "../images/l1.svg",
  },
  {
    id: 2,
    cover: "../images/l2.svg",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/l4.svg",
  },
  {
    id: 5,
    cover: "../images/l5.svg",
  },
  {
    id: 6,
    cover: "../images/l6.svg",
  },
]

export const blogdata = [
  {
    id: 1,
    title: "Les panneaux solaires : une solution durable pour l'avenir",
    cover: "../images/b1.webp",
    category: "ÉNERGIE RENOUVELABLE",
    date: "JANVIER 12, 2023",
  },
  {
    id: 2,
    title: "Ne sous-estimez pas l'impact des éoliennes",
    cover: "../images/b2.jpg",
    category: "CONSEILS & ASTUCES",
    date: "OCTOBRE 20, 2023",
  },
  {
    id: 3,
    title: "Construire un réseau d'énergie verte à partir de zéro",
    cover: "../images/b3.jpg",
    category: "CONSEILS & ASTUCES",
    date: "OCTOBRE 9, 2023",
  },
  {
    id: 4,
    title: "Les événements qui façonnent l'avenir de l'énergie propre",
    cover: "../images/b4.jpg",
    category: "ÉVÉNEMENTS",
    date: "OCTOBRE 8, 2023",
  },
];


export const teamdata = [
  {
    id: 1,
    title: "Nesrine Issaoui",
    cover: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1729075009~exp=1729078609~hmac=87f5791b3f931ec72a26c01820abb2d71a8dbdb58d985ab442134443dac5c59f&w=740",
    post: "Présidente",
  },
  {
    id: 2,
    title: "Mohamed Aziz Nairi",
    cover: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-159414.jpg?w=740",
    post: "Vice Président",
  },
  {
    id: 3,
    title: "Firas Aguech",
    cover: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-159414.jpg?w=740",
    post: "Responsable des programmes",
  },
  {
    id: 4,
    title: "Hadil Boussama",
    cover: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1729075009~exp=1729078609~hmac=87f5791b3f931ec72a26c01820abb2d71a8dbdb58d985ab442134443dac5c59f&w=740",
    post: "Responsable des finances",
  },
  {
    id: 5,
    title: "Ines Slimane",
    cover: "https://img.freepik.com/free-vector/young-redhead-woman_24877-82290.jpg?t=st=1729075009~exp=1729078609~hmac=87f5791b3f931ec72a26c01820abb2d71a8dbdb58d985ab442134443dac5c59f&w=740",
    post: "Responsable des communications",
  },
  {
    id: 6,
    title: "Mohamed Larguech",
    cover: "https://img.freepik.com/premium-photo/profile-icon-white-background_941097-159414.jpg?w=740",
    post: "Responsable des relations",
  },
  // {
  //   id: 7,
  //   title: "Anna Red",
  //   cover: "../images/anne.jpg",
  //   post: "Architecte Durable",
  // },
  // {
  //   id: 8,
  //   title: "Join our team!",
  //   cover: "../images/t8.jpg",
  //   post: "",
  // },
]
