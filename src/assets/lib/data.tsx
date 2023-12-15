import amazonlexicon from '../../assets/icons/amazonlexicon.svg';
import amazonsagemakericon from '../../assets/icons/amazonsagemakericon.svg';
import amazons3icon from '../../assets/icons/amazons3icon.svg';
import androidstudioicon from '../../assets/icons/androidstudioicon.svg';
import apachesparkicon from '../../assets/icons/apachesparkicon.svg';
import awslambdaicon from '../../assets/icons/awslambdaicon.svg';
import capicon from '../../assets/icons/capicon.svg';
import datacampicon from '../../assets/icons/datacampicon.svg';
import datacamporangeicon from '../../assets/icons/datacamporangeicon.svg';
import firebaseicon from '../../assets/icons/firebaseicon.svg';
import githubicon from '../../assets/icons/githubicon.svg';
import giticon from '../../assets/icons/giticon.svg';
import googleplayconsoleicon from '../../assets/icons/googleplayconsoleicon.svg';
import intellijicon from '../../assets/icons/intellijicon.svg';
import javaicon from '../../assets/icons/javaicon.svg';
import jupytericon from '../../assets/icons/jupytericon.svg';
import kerasicon from '../../assets/icons/kerasicon.svg';
import matplotlibicon from '../../assets/icons/matplotlibicon.svg';
import neuralnetworkicon from '../../assets/icons/neuralnetworkicon.svg';
import numpyicon from '../../assets/icons/numpyicon.svg';
import pandasicon from '../../assets/icons/pandas.svg';
import pythonicon from '../../assets/icons/python.svg';
import pysparkicon from '../../assets/icons/pysparkicon.svg';
import reacticon from '../../assets/icons/reacticon.svg';
import seabornicon from '../../assets/icons/seabornicon.svg';
import sklearnicon from '../../assets/icons/sklearnicon.svg';
import sqlicon from '../../assets/icons/sqlicon.svg';
import statsmodelsicon from '../../assets/icons/statsmodelicon.svg';
import tableauicon from '../../assets/icons/tableauicon.svg';
import tensorflowicon from '../../assets/icons/tensorflowicon.svg';

import bancodetiemposs from '../../assets/img/bancodetiemposs.webp';
import caseStudy from '../../assets/img/casestudy.webp';
import inegimock from '../../assets/img/inegireport.webp';
import profilepicture from "../img/yo_bellasartes.webp";

import { GoHome, GoPerson, GoMail, GoStack, GoProject } from "react-icons/go";
import { FiGithub, FiLink, FiLinkedin, FiMail } from "react-icons/fi";
import { FaProjectDiagram } from "react-icons/fa";
import { SiDatacamp } from "react-icons/si";

export const headerIntroData = {
  title: {
    en: "Hi, I'm Juan ",
    esp: "Hola, soy Juan ",
  },
  subtitle: {
    en: "Data Scientist",
    esp: "Científico de datos"
  },
  description: {
    en: "I'm Juan Varela, an aspiring data scientist with the goal of obtaining insights and generating values in inspiring and challenging projects. In this web page you will see some of my skills and projects. Let's change the world through data!",
    esp: "Soy Juan Varela, un aspirante a científico de datos con el objetivo de obtener información y así generar valor en proyectos inspiradores y retadores. En esta página web verá mis habilidades así como algunos proyectos. ¡Cambiemos el mundo a traves de los datos!",
  },
  buttons: [
    {
      name: "Contact",
      label: {
        en: "Contact me",
        esp: "Contáctame",
      },
      icon: FiMail,
      color: "main-btn",
    },
    {
      name: "Projects",
      label: {
        en: "My Projects",
        esp: "Mis Proyectos",
      },
      icon: FaProjectDiagram,
      color: "secondary-btn",
    },
  ],
  profilepicture: profilepicture,
} as const;

export const projectsData = [
  {
    title: "Case Study - Tasty Bytes",
    description:
      "A case study for the DataCamp Data Scientist Professional Certification. Tasty Bytes is a fictional web application that offers recipes easy to make and highly nutritious. However, the Product Manager manually chooses a recipe for the home page every day. We are asked for the automation of this process.",
    description_ESP:
      "Un caso de estudio para la certificación de Científico de Datos Profesional de DataCamp. Tasty Bytes es una aplicación web ficticia que ofrece recetas balanceadas y fáciles de hacer. Sin embargo, el Administrador de Productos escoge manualmente una receta todos los dias para la página principal. Se me asignó automatizar este proceso.",
    technologies: [
      { name: "Python", icon: pythonicon },
      { name: "Pandas", icon: pandasicon },
      { name: "Numpy", icon: numpyicon },
      { name: "Matplotlib", icon: matplotlibicon },
      { name: "Seaborn", icon: seabornicon },
      { name: "Scikit Learn", icon: sklearnicon },
      { name: "Jupyter", icon: jupytericon },
      { name: "DataCamp", icon: datacampicon },
    ],
    image: caseStudy,
    deploymenturl: "https://app.datacamp.com/workspace/w/12cd18fb-4c0b-4c84-ba74-865cfd6751ff",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#70B9BE",
    },
  },
  {
    title: 'INEGI - Graph Generating Chatbot',
    description:
        'Development of a web application together with INEGI for the automatic generation of graphs using Natural Language Processing (NLP) and cloud computing. This project involved the investigation of different NLP strategies and cloud computing architectures.',
    description_ESP:
        'Desarrollo de una aplicación web en conjunto con el INEGI para la generación de gráficas utilizando Procesamiento de Lenguaje Natural (NLP) y computación en la nube. Este proyecto consistió de la investigación de diferentes estrategias de NLP y arquitecturas en la nube.',
    technologies: [
      { name: 'Apache Spark', icon: apachesparkicon},
      { name: "PySpark", icon: pysparkicon},
      { name: "Python", icon: pythonicon },
      { name: 'TensowFlow', icon: tensorflowicon},
      { name: 'Jupyter', icon: jupytericon},
      { name: 'Amazon Lex', icon: amazonlexicon},
      { name: 'AWS Lambda', icon: awslambdaicon},
      { name: 'Amazon S3', icon: amazons3icon},
      { name: 'Tableau', icon: tableauicon},
      { name: 'React', icon: reacticon}
    ],
    image: inegimock,
    deploymenturl: 'https://www.youtube.com/watch?v=4s1FentY7a8',
    deploymenticon: FiLink,
    githuburl: 'https://github.com/retoINEGI',
    githubicon: FiGithub,
    colors: {
      main: 'main-btn',
      second: 'secondary-btn',
      icon: 'white',
      projectcolor: '#E3964A'
    }
  },
  {
    title: "Banco de Tiempo - A social initiative",
    description:
      "Banco de Tiempo is a Mobile app that allows for the hiring of different services without the use of money, but of time credits. In collaboration with ICATI, governmental dependency.",
    description_ESP:
      "Banco de Tiempo es una aplicación móvil que permite la contratación de diferentes servicios sin el uso de dinero, sino con la alternativa de usar tiempo. En colaboración con el ICATI, dependencia gubernamental.",
    technologies: [
      { name: "Android Studio", icon: androidstudioicon },
      { name: "Java", icon: javaicon },
      { name: "IntelliJ", icon: intellijicon },
      { name: "Firebase", icon: firebaseicon },
      { name: "Google Play Console", icon: googleplayconsoleicon },
      { name: "Git", icon: giticon },
      { name: "GitHub", icon: githubicon },
    ],
    image: bancodetiemposs,
    deploymenturl: "https://play.google.com/store/apps/details?id=com.bancodetiempo.bancodetiempodeluxe&hl=es_PE&gl=US",
    deploymenticon: FiLink,
    colors: {
      main: "main-btn",
      second: "secondary-btn",
      icon: "white",
      projectcolor: "#E3964A",
    },
  },
] as const;

export const liveTickerData = {
  content: {
    en: "Check out my LinkedIn!",
    esp: "¡Visita mi LinkedIn!",
  },
} as const;

export const skillsDataDataScience = [
  {
    skillsTitle: "Data Science",
    skills: [
      {
        title: "Python",
        hash: "#Python",
        icon: pythonicon,
        color: "#fadb51",
      },
      {
        title: "Pandas",
        hash: "#Pandas",
        icon: pandasicon,
        color: '#262335'
      },
      {
        title: "Matplotlib",
        hash: "#Matplotlib",
        icon: matplotlibicon,
        color: "#e3ae5b",
      },
      {
        title: "Numpy",
        hash: "#Numpy",
        icon: numpyicon,
        color: "#4c76cd",
      },
      {
        title: "Seaborn",
        hash: "#Seaborn",
        icon: seabornicon,
        color: "#5b7ca1",
      },
      {
        title: "Scikit Learn",
        hash: "#ScikitLearn",
        icon: sklearnicon,
        color: "#f69936",
      },
      {
        title: "Statsmodels",
        hash: "#Statsmodels",
        icon: statsmodelsicon,
        color: "#3f50b4",
      },
      {
        title: "SQL",
        hash: "#SQL",
        icon: sqlicon,
        color: "#157df9",
      },
      {
        title: "Git",
        hash: "#Git",
        icon: giticon,
        color: "#ee4f30",
      },
    ],
  },
] as const;

export const skillsDataMachineLearning = [
  {
    skillsTitle: "Machine Learning",
    skills: [
      {
        title: "TensorFlow",
        hash: "#TensorFlow",
        icon: tensorflowicon,
        color: "#ff7700",
      },
      {
        title: "Keras",
        hash: "#Keras",
        icon: kerasicon,
        color: "#ce0000",
      },
    ],
  },
] as const;

export const skillsDataCloudComputing = [
  {
    skillsTitle: "Cloud Computing",
    skills: [
      {
        title: "AWS Lambda",
        hash: "#AWS Lambda",
        icon: awslambdaicon,
        color: "#f97d14",
      },
      {
        title: "Amazon S3",
        hash: "#Amazon S3",
        icon: amazons3icon,
        color: "#e15241",
      },
      {
        title: "Amazon Sagemaker",
        hash: "#Amazon Sagemaker",
        icon: amazonsagemakericon,
        color: "#4353FF",
      },
    ],
  },
] as const;

export const navLinks = [
  { en: "Home", esp: "Home", hash: "#home", icon: GoHome },
  { en: "Skills", esp: "Habilidades", hash: "#skills", icon: GoStack },
  { en: "Projects", esp: "Proyectos", hash: "#projects", icon: GoProject },
  { en: "Academic", esp: "Académico", hash: "#academic", icon: GoPerson },
  { en: "Contact", esp: "Contacto", hash: "#contact", icon: GoMail },
] as const;

export const sideBarRightMail = {
  link: "mailto:jcvate2013@hotmail.com",
  text: "jcvate2013",
} as const;

export const sideBarLeftSocials = [
  {
    link: "https://www.linkedin.com/in/juanvate/",
    icon: FiLinkedin,
    altimgname: "linkedin",
  },
  {
    link: "https://www.datacamp.com/portfolio/JuanVaTe?view=true",
    icon: SiDatacamp,
    altimgname: "github",
  },
  {
    link: "mailto:jcvate2013@hotmail.com",
    icon: FiMail,
    altimgname: "mail",
  },
] as const;

export const quotesData = [
  {
    en: '"What is not defined cannot be measured. What is not measured, cannot be improved. What is not improved, is always degraded."',
    esp: `"Lo que no se define no se puede medir. Lo que no se mide, no se puede mejorar. Lo que no se mejora, se degrada siempre."`,
    author: "William Thompson Kelvin",
  },
  {
    en: '"Visualization gives you answers to questions you didn’t know you had."',
    esp: `"La visualización te da respuestas a preguntas que no sabías que tenías."`,
  },
] as const;

export const academicData = {
  title: "Academic",
  title_ESP: "Académico",
  description: "Highlights of my academic career.",
  description_ESP: "Hitos de mi carrera académica.",
  paragraphs_EN: [
    {
      title: "My Alma Mater",
      description:
        "I'm a graduate of the prestigious university of Tec de Monterrey, with a Bachelor's Degree on Computer Science and an specialization in Data Science. Every day in my university was incredible and I keep my alma mater at heart.",
      icon: capicon,
    },
    {
      title: "Deep Learning",
      description:
        "I have numerous certifications issued by DeepLearningAI, leading company in machine learning teaching. Some of these certifications are Structuring Machine Learning Projects and Improving Deep Neural Networks.",
      icon: neuralnetworkicon,
    },
    {
      title: "Data Science Professional",
      description:
        "Data Science is my passion. Since I graduated, I dedicated my time to prepare myself to be competitive in the Data Science area. After months of studying, I completed the Professional Data Science Track of DataCamp.",
      icon: datacamporangeicon,
    },
  ],
  paragraphs_ESP: [
    {
      title: "Mi Alma Mater",
      description:
        "Soy egresado de la prestigiosa universidad del Tec de Monterrey, graduado de una Ingeniería en Tecnologías Computacionales y una especialización en Ciencia de Datos. Cada día en mi universidad fue increíble y siempre tengo a mi alma mater presente.",
      icon: capicon,
    },
    {
      title: "Aprendizaje Profundo",
      description:
        "Tengo distintas certificaciones emitidas por DeepLearningAI, compañía lider en enseñar Aprendizaje Automático. Algunas de estas certificaciones son Estructuración de Proyectos de Aprendizaje Automático y Mejorando Redes Neuronales Profundas.",
      icon: neuralnetworkicon,
    },
    {
      title: "Profesional como Científico de Datos",
      description:
        "La Ciencia de Datos es mi pasión. Desde que me gradué, he dedicado mi tiempo para preparame y ser competitivo en el área de Ciencia de Datos. Después de meses de estudio, completé el Temario Profesional de Ciencia de Datos, emitido por DataCamp.",
      icon: datacamporangeicon,
    },
  ],
};

export const contactData = {
  title: {
    en: "Contact",
    esp: "Contacto",
  },
  description: {
    en: "Write me a message and I will get back to you.",
    esp: "Envíame un mensaje y me contactaré contigo.",
  },
  inputfields: [
    {
      name: "name",
      placeholder: {
        en: "Your Name",
        esp: "Tu Nombre",
      },
      type: "text",
      validation: {
        en: "Please fill in your name",
        esp: "Por favor ingresa tu nombre",
      },
      pattern: "{2}",
    },
    {
      name: "email",
      placeholder: {
        en: "Your E-Mail",
        esp: "Tu Correo Electrónico",
      },
      type: "email",
      validation: {
        en: "Please fill in your email",
        esp: "Por favor ingresa tu correo electrónico",
      },
      pattern: "[@]{4}",
    },
    {
      name: "subject",
      placeholder: {
        en: "Your Subject",
        esp: "Tu Asunto",
      },
      type: "text",
      validation: {
        en: "Please fill in your subject",
        esp: "Por favor ingresa tu asunto",
      },
      pattern: "{10}",
    },
  ],
  textarea: {
    placeholder: {
      en: "Your Message",
      esp: "Tu Mensaje",
    },
    name: "message",
    rows: 10,
    validation: {
      en: "Please fill in your message",
      esp: "Por favor ingresa tu mensaje",
    },
    pattern: "{10}",
  },
  button: {
    value: {
      en: "Send",
      esp: "Enviar",
    },
  },
  icon: FiMail,
  iconcolor: "#FFFFFF",
  colors: {
    main: "main-btn",
    second: "secondary-btn",
    icon: "white",
  },
  privacyOptIn: {
    checkbox: {
      en: "I agree that Juan Varela may use my personal data (name and e-mail address) to contact me.",
      esp: "Acepto que Juan Varela puede usar mi información personal (nombre y correo electrónico) para contactarme.",
    },
    description: {
      en: "By submitting this request, you acknowledge that you have read the Private Policy",
      esp: "Al entregar esta solicitud, reconoces que has leído la Política de Privacidad",
    },
  },
} as const;

export const toastMessages = {
  loadingProject: {
    en: "The project will open shortly.",
    esp: "El proyecto va a cargar pronto.",
  },
  successEmailSent: {
    en: "Thank you for your email. I will get back to you as soon as possible",
    esp: "Gracias por tu correo. Me contactaré tan pronto como me sea posible",
  },
  failedEmailSent: {
    en: "Unfortunately the sending of your email did not work. Please try again later",
    esp: "Desafortunada el envío de su correo no funcionó. Por favor intenta otra vez",
  },
  failedValidationName: {
    en: "Please fill in your name",
    esp: "Por favor ingresa tu nombre",
  },
} as const;

export const buttonLabels = {
  language: {
    en: "EN",
    esp: "ESP",
  },
} as const;

export const directionStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginRight: "4rem",
  },
  "outer-left-to-inner-right": {
    marginLeft: "4rem",
    transform: "scaleX(-1)",
  },
  "inner-right-to-middle": {
    width: "100%",
    transform: "scaleY(1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  "inner-left-to-middle": {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  "middle-to-inner-right": {
    width: "100%",
    transform: "scale(1,-1)",
  },
  "middle-to-inner-left": {
    width: "100%",
    transform: "scale(-1,-1)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  middle: {
    width: "100%",
    transform: "scaleX(-1)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

export const heightStyles: Record<string, { heights: [string, string] }> = {
  small: {
    heights: ["25rem", "15rem"],
  },
  middle: {
    heights: ["35rem", "25rem"],
  },
  large: {
    heights: ["45rem", "35rem"],
  },
  extraLarge: {
    heights: ["55rem", "45rem"],
  },
};

export const spaceStyles: Record<string, React.CSSProperties> = {
  "outer-right-to-inner-left": {
    marginTop: "-6rem",
    width: "100%",
  },
  "outer-left-to-inner-right": {
    marginTop: "-6rem",
    width: "100%",
  },
  "inner-right-to-middle": {
    marginTop: "-20rem",
    width: "50%",
    zIndex: "-10",
  },
  "inner-left-to-middle": {
    marginTop: "-10rem",
    width: "50%",
    zIndex: "-10",
  },
  "middle-to-inner-right": {
    width: "75%",
  },
  "middle-to-inner-left": {
    marginTop: "-2.5rem",
    width: "50%",
  },
  middle: {
    marginTop: "-2.5rem",
    width: "0%",
    display: "none",
  },
};

export const widthStyles: Record<string, { widths: [string, string] }> = {
  "outer-right-to-inner-left": {
    widths: ["74.45%", "74.45%"],
  },
  "outer-left-to-inner-right": {
    widths: ["75%", "75%"],
  },
  "inner-right-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "inner-left-to-middle": {
    widths: ["50.1%", "49%"],
  },
  "middle-to-inner-right": {
    widths: ["33.4%", "50.03%"],
  },
  "middle-to-inner-left": {
    widths: ["50.1%", "49%"],
  },
  middle: {
    widths: ["0%", "0%"],
  },
};
