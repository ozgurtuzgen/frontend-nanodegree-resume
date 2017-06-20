// work
// work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

var work = {
    jobs:[
        {
            employer: "STM",
            title: "Leader Software Engineer",
            location: "Ankara",
            datesWorked: "2010-...",
            description: ""
        },
        {
            employer: "Meteksan Sistem",
            title: "Senior Software Engineer",
            location: "Ankara",
            datesWorked: "2006-2010",
            description: ""
        }
    ]
}

// projects
// projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

var projects = {
    projects = [
        {
            title: "Meytap",
            dates: "2017-...",
            description: "",
            images: [
                "images/p1-1.png",
                "images/p1-2.png"
            ]
        },
        {
            title: "Airc2IS",
            dates: "2011-2016",
            description: "",
            images: [
                "images/p2-1.png",
                "images/p2-2.png"
            ]
        },
        {
            title: "Abone.NET",
            dates: "2007-2010",
            description: "",
            images: [
                "images/p3-1.png",
                "images/p3-2.png"
            ]
        },
        {
            title: "SMOTO",
            dates: "2006-2007",
            description: "",
            images: [
                "images/p4-1.png",
                "images/p4-2.png"
            ]
        }

    ]
}


// bio
// bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional.

var bio = {
    name: "Ozgur Tuzgen",
    role: "Leader Software Engineer",
    welcomeMsg: "Welcome to Hell!",
    pictureUrl: "images/Capture.png",
    contacts: {
        email: "ozgurtuzgen@hotmail.com",
        mobile: "00905436225002",
        twitter: "zgr_tuzgen",
        github: "ozgurtuzgen",
        location: "Ankara"
    },
    
    skills: ["C#","Javascript","Typescript" ]
};

// education
// education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings. 

// education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.

var education = {
    schools : [
        {
            name: "Hacettepe University",
            location: "Ankara",
            degree: "PhD",
            majors: ["Business Administration"],
            dates: "2012",
            url: "http://hacettepe.edu.tr"

        },
         {
            name: "Hacettepe University",
            location: "Ankara",
            degree: "Masters",
            majors: ["MBA"],
            dates: "2010",
            url: "http://hacettepe.edu.tr"
        },
         {
            name: "Ege University",
            location: "Izmir",
            degree: "BA",
            majors: ["Computer Engineer"],
            dates: "2006",
            url: "http://ege.edu.tr"
        }

    ],
    onlineCourses: [
        {
            title: "Front-end Developer Nanodegree",
            school: "Udacity",
            dates: 2017,
            url: "http://www.udacity.com"

        },
        {
            title: "Big Data Specialization",
            school: "Coursera",
            dates: 2016,
            url: "http://www.coursera.com"

        }
    ]
}


// /*
// This is empty on purpose! Your code to build the resume will go here.
//  */

// // $("#main").append("Ozgur Tuzgen");

// // var awesomeThougths = "I am Ozgur and I am AWESOME!"

// // console.log(awesomeThougths);

// // var funThougths = awesomeThougths.replace("AWESOME","FUN");

// // $("#main").append(funThougths);


// // var formattedName = HTMLheaderName.replace("%data%","Ozgur Tuzgen");

// // var formmatedRole = HTMLheaderRole.replace("%data%","Leader Software Engineer");

// // $("#header").append(formattedName);

// // $("#header").append(formmatedRole);


// var bio = {
//     name: "Ozgur",
//     role: "Leader Software Engineer",
//     contacts: {
//         email: "ozgurtuzgen@hotmail.com",
//         mobile: "ozgurtuzgen@hotmail.com",
//         twitter: "",
//         github: "ozgurtuzgen",
//         location: "Ankara"
//     },
//     pictureUrl: "images/Capture.png",
//     welcomeMsg: "Welcome to Hell!",
//     skills: ["C#","Javascript","Typescript" ]
// };


// // var formattedName = HTMLheaderName.replace("%data%",bio.name);
// // var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
// // var formattedContactInfo = HTMLcontactGeneric.replace("%data%",bio.contactInfo);
// // formattedContactInfo = formattedContactInfo.replace("%contact%","mail");

// // var formattedWelcomeMsg = HTMLwelcomeMsg.replace("%data%",bio.welcomeMsg);
// // var formattedSkills = HTMLskills.replace("%data%",bio.skills);

// // var formattedPicture = HTMLbioPic.replace("%data%",bio.pictureUrl);


// // $("#header").append(formattedName);
// // $("#header").append(formattedRole);
// // $("#header").append(formattedContactInfo);
// // $("#header").append(formattedSkills);
// // $("#header").append(formattedWelcomeMsg);
// // $("#header").append(formattedPicture);

// var work = {};

// work.currentJobPosition = "Leader Software Engineer";
// work.employer = "STM";
// work.yearsWorked = "2010-...";
// work.city = "Ankara";

// var education = {};
// education["lastSchool"] = "Hacettepe Universtiy";
// education["yearsAttended"] = "2010-2012";
// education["city"] = "Ankara";



// // $("#header").append(work.currentJobPosition);
// // $("#header").append(work.employer);
// // $("#header").append(work.yearsWorked);
// // $("#header").append(work.city);
// // $("#header").append(education["lastSchool"]);
// // $("#header").append(education["yearsAttended"]);
// // $("#header").append(education["city"]);


// var education = {
//     schools : [
//         {
//             name: "Hacettepe University",
//             location: "Ankara",
//             degree: "PhD",
//             majors: ["Business Administration"],
//             minors: [
//                 {},
//                 {}
//             ],
//             dates: "2012",
//             url: "http://hacettepe.edu.tr"

//         }
//     ],
//     onlineCourses: [
//         {
//             title: "Udacity FEND",
//             school: "Udacity",
//             dates: 2017,
//             url: "http://www.udacity.com"

//         }
//     ]
// }