const WORK_EXPERIENCE = [
        {
            id: 0,
            name: "Aldebaran Robotics",
            shortDesc: "Robot usecase test app",
            jobs: ["UX design", "Full stack developement"],
            languages: ["Python","Shell","Javascript"],
            thumbnailPath: "Pepper.jpg",
            fullImgPath: "pepper-details-1.jpg",
            fullDesc:["Pepper is a 1.20m (4ft) humanoid robot created by Aldebaran Robotics (now Softbank Robotics) for B2B purposes. I built a software allowing us to test if Pepper would still work in a B2C environment.",
            "I came up with a game based app: Pepper would randomly interact with anyone she encounters (employees, visitors, clients, children...) and record data relevant to our test during the game. Those data would then be stored in an excel spreadsheet and sent to the team for analysis on a weekly basis.",
            "This project was a real full stack job as I went through all the steps from user research and specification to development and testing of the app with multiples iterations and finally training the team on how to use and parameter the app."],
            link:{
                name:"About Pepper and Nao",
                address:"https://www.softbankrobotics.com/emea/en/index"
            }
                
        },
        {
            id: 1,
            name: "GE Digital Foundry Europe",
            shortDesc: "Engineering workflow",
            jobs: ["Full stack development", "Testing", "CI/CD","Scrum", "Graphic facilitation"],
            languages: ["Javascript", "Python"],
            thumbnailPath: "wind-park-2.jpg",
            fullImgPath: "GE-digital-foundry-Paris.jpg",
            fullDesc:["GE Digital Foundry Europe helps industrials on their digital transformation journey by creating tailored applications on Predix – a cloud-based IIoT platform from GE.",
            "As the engineering team was relatively new, we decided to create a “boilerplate app” that would be used as base application for every project. Such a project is a big time saver for future developments. It allows us to fully focus on creating something of great value for our clients.",
            "I developed the testing infrastructure for this boilerplate app (technologies : Node - Mocha - Chai and automation with Jenkins) and implemented it on our firsts MVPs. I also created a web page for users to easily upload a large amount of data to the cloud (Python – Flask – JavaScript)."],
            link:{
                name:"about GE Digital Foundries",
                address:"https://www.ge.com/digital/services/ge-digital-industrial-foundries"
            }
                
        },
        {
            id: 2,
            name: "Ministry of the Armed Forces",
            shortDesc: "Official records publishing platform",
            jobs: ["Frontend developement","Web accessibility", "Remote team"],
            languages: ["Javascript"],
            thumbnailPath: "french-flag.jpg",
            fullImgPath: "ecole-militaire.jpg",
            fullDesc:["Together with a team of developers working remote, we built a platform to ease and partially automate the tedious and time consuming process of publishing official records.",
            "As this is a government platform the challenges were to build a fully secured system and to implement accessibility.",
            "We also revamped the old public website to match the design of the platform."],
            link:{
                name:"public website",
                address:"https://www.bo.sga.defense.gouv.fr/"
            }
                
        },{
            id: 3,
            name: "GE Digital Foundry Europe",
            shortDesc: "Portfolio",
            jobs: ["Frontend developement"],
            languages: ["Javascript"],
            thumbnailPath: "ge-portfolio.jpg",
            fullImgPath: "ge-portfolio.jpg",
            fullDesc:["GE Digital Foundry Europe helps industrials on their digital transformation journey by creating tailored applications on Predix – a cloud-based IIoT platform from GE. ",
            "This portfolio is used as a demo launcher in our showroom to help clients and visitors see what we do and what we could create with them."],
            link:{
                name:"Featured in LeMagIT",
                address:"https://www.lemagit.fr/actualites/450425806/GE-Digital-ce-discret-mastodonte-a-lambition-devorante"
            }
                
        },{
            id: 4,
            name: "SANEF - Highway company",
            shortDesc: "Journey price calculator",
            jobs: ["Frontend developement"],
            languages: ["Javascript"],
            thumbnailPath: "highway.jpg",
            fullImgPath: "sanef-details-1.png",
            fullDesc:["User friendly journey price calculator using Michelin's API for SANEF’s new website."],
            link:{
                name:"Go to website",
                address:"https://www.sanef.com/fr/tarifs-peage"
            }
                
        },{
            id: 5,
            name: "Camille Robic",
            shortDesc: "UX Designer portfolio website",
            jobs: ["Frontend developement"],
            languages: [],
            thumbnailPath: "camille-robic.png",
            fullImgPath: "camille-robic.png",
            fullDesc:["One page portfolio website for Camille Robic."],
            link:{
                name:"Go to website",
                address:"http://www.camille-robic.fr/"
            }
                
        }
        
]

// modele
// {
//     id: 0,
//     name: "",
//     shortDesc: "",
//     jobs: [],
//     languages: [],
//     thumbnailPath: "",
//     fullImgPath: "",
//     fullDesc:"",
//     link:{
//         name:"",
//         address:""
//     }
        
// },

export default WORK_EXPERIENCE;