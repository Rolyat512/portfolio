import mealPic from './images/mealMappr.png'
import yardPic from './images/yardGems.png'
import codePic from './images/codeQuiz.png'
import employeePic from './images/employeeTracker.gif'
import constructionPic from './images/Construction.avif'

const apps = [
    {
        "key":1,
        "name":"YardGems",
        "desc":"Garage sale listing app",
        "pic":`${yardPic}`,
        "website":"https://yardgems-15b0faee737f.herokuapp.com/",
        "github":"https://github.com/Rolyat512/YardGems"
    },
    {
        "key":2,
        "name":"MealMappr",
        "desc":"Meal planner with calendar",
        "pic": `${mealPic}`,
        "website":"https://mealmappr.herokuapp.com",
        "github":"https://github.com/Rolyat512/MealMappr"
    },
    {
        "key":3,
        "name":"Employee Tracker",
        "desc":"Tracks information about employee's",
        "pic":`${employeePic}`,
        "website":"https://rolyat512.github.io/Employee-Tracker/",
        "github":"https://github.com/Rolyat512/Employee-Tracker"
    },
    {
        "key":4,
        "name":"Code Quiz ",
        "desc":"Coding quiz with timer",
        "pic":`${codePic}`,
        "website":"https://rolyat512.github.io/code-quiz/",
        "github":"https://github.com/Rolyat512/code-quiz"
    },
    {
        "key":5,
        "name":"Kingdom Wars ",
        "desc":"On going personal project",
        "pic":`${constructionPic}`,
        "website":"https://rolyat512.github.io/note-taker/",
        "github":"https://github.com/Rolyat512/kingdom-wars"
    }
]

export default apps;
