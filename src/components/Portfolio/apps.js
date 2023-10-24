import images from './images';

const apps = [
    {
        "key":1,
        "name":"YardGems",
        "desc":"Discover YardGems, the ultimate online platform for garage and yard sale enthusiasts. Connect, post, find hidden gems, and embark on exciting sale adventures. Created using the MERN stack.",
        "pic":`${images.yardGems}`,
        "tech": ['nodeJs', 'JavaScript', 'css', 'html', 'graphQL', 'dotenv', 'jwt', 'reactRouter', 'reactJs', 'mongoose', 'express', 'bcrypt', 'googleMaps', 'apolloServerExpress', 'muiMaterial'],
        "website":"https://yardgems-15b0faee737f.herokuapp.com/",
        "github":"https://github.com/Rolyat512/YardGems"
    },
    {
        "key":2,
        "name":"MealMappr",
        "desc":"Meal Mappr is a meal planning website where you can view a calendar and create your very own meal plan from scratch.",
        "pic": `${images.mealMappr}`,
        "tech": ['nodeJs', 'JavaScript', 'mysql', 'css', 'html', 'api', 'express', 'bcrypt', 'nodeMailer', 'handlebars', 'fullCalendar', 'tailwindCss'],
        "website":"https://mealmappr.herokuapp.com",
        "github":"https://github.com/Rolyat512/MealMappr"
    },
    {
        "key":3,
        "name":"Employee Tracker",
        "desc":"An app where you can view all of the departments, roles, and employees in a company to help organize data",
        "pic":`${images.employeeTracker}`,
        "tech": ['JavaScript'],
        "website":"https://rolyat512.github.io/Employee-Tracker/",
        "github":"https://github.com/Rolyat512/Employee-Tracker"
    },
    {
         "key":4,
        "name":"Code Quiz ",
        "desc":"A timed quiz that test your knowledge on JavaScript",
        "pic":`${images.codeQuiz}`,
        "tech": ['JavaScript', 'css', 'html'],
        "website":"https://rolyat512.github.io/code-quiz/",
        "github":"https://github.com/Rolyat512/code-quiz"
    }
]

export default apps;
