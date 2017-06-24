// work
// work contains an array of jobs. Each object in the jobs array should contain an employer, title, location, dates worked and description strings.

var work = {
    jobs: [
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
};

// projects
// projects contains an array of projects. Each object in the projects array should contain title, dates and description strings, and an images array with URL strings for project images.

var projects = {
    projects: [
        {
            title: "Meytap",
            dates: "2017-...",
            description: "",
            images: [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            title: "Airc2IS",
            dates: "2011-2016",
            description: "",
            images: [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            title: "Abone.NET",
            dates: "2007-2010",
            description: "",
            images: [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        },
        {
            title: "SMOTO",
            dates: "2006-2007",
            description: "",
            images: [
                "images/197x148.gif",
                "images/197x148.gif"
            ]
        }

    ]
};


// bio
// bio contains name, role, welcomeMessage, and biopic strings, contacts object and skills array of skill strings. The contacts object should contain a mobile number, email address, github username, twitter handle and location. The twitter property is optional.

var bio = {
    name: "Ozgur Tuzgen",
    role: "Leader Software Engineer",
    welcomeMsg: "Development freak welcomes you!",
    pictureUrl: "images/Capture.png",
    contacts: {
        email: "ozgurtuzgen@hotmail.com",
        mobile: "00905436225002",
        twitter: "zgr_tuzgen",
        github: "ozgurtuzgen",
        location: "Ankara"
    },

    skills: ["C#", "Javascript", "Typescript"]
};

// education
// education contains an array of schools. Each object in the schools array contains name, location, degree dates and url strings, and amajors array of major strings. 

// education also contains an onlineCourses array. Each object in the onlineCourses array should contain a title, school, dates and url strings.

var education = {
    schools: [
        {
            name: "Hacettepe University",
            location: "Ankara",
            degree: "PhD",
            majors: ["Business Administration"],
            dates: "2011-Suspended",
            url: "http://hacettepe.edu.tr",

        },
        {
            name: "Hacettepe University",
            location: "Ankara",
            degree: "Masters",
            majors: ["MBA"],
            dates: "2008-2010",
            url: "http://hacettepe.edu.tr"
        },
        {
            name: "Ege University",
            location: "Izmir",
            degree: "BA",
            majors: ["Computer Engineer"],
            dates: "2002-2006",
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
};

$("#header").append(HTMLbioPic.replace("%data%", bio.pictureUrl));

$("#header").append(HTMLheaderName.replace("%data%", bio.name));
$("#header").append(HTMLheaderRole.replace("%data%", bio.role));

$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));


$("#header").append(HTMLmobile.replace("%data%", bio.contacts["mobile"]));
$("#header").append(HTMLemail.replace("%data%", bio.contacts["email"]));

$("#footerContacts").append(HTMLgithub.replace("%data%", bio.contacts["github"]));
$("#footerContacts").append(HTMLtwitter.replace("%data%", bio.contacts["twitter"]));
$("#footerContacts").append(HTMLlocation.replace("%data%", bio.contacts["location"]));


if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);

    for (var i = 0; i < bio.skills.length; i++) {
        $("#header").append(HTMLskills.replace("%data%", bio.skills[i]));
    }
}

work.display = function () {
    $("#workExperience").append(HTMLworkStart);

    for (index in work.jobs) {
        $(".work-entry:last").append(HTMLworkEmployer.replace("%data%", work.jobs[index].employer) + HTMLworkTitle.replace("%data%", work.jobs[index].title));
        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[index].datesWorked));
        $(".work-entry:last").append(HTMLworkLocation.replace("%data%", work.jobs[index].location));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[index].description));

    }
}();

education.display = function () {
    $("#education").append(HTMLschoolStart);

    for (index in education.schools) {
        $(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[index].name) + HTMLschoolDegree.replace("%data%", education.schools[index].degree));
        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[index].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[index].location));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[index].majors[0]));
    }

    $(".education-entry:last").append(HTMLonlineClasses);
    for (index in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[index].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[index].school));
        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[index].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[index].url));
    }
}();


$(document).click(function (loc) {
    logClicks(loc.pageX, loc.pageY);
});


$("#main").append(internationalizeButton);
var inName = function (name) {
    var words = name.split(" ");
    words[0] = words[0].slice(0, 1).toUpperCase() + words[0].slice(1).toLowerCase();
    return words[0] + " " + words[1].toUpperCase();
}

projects.display = function () {
    $("#projects").append(HTMLprojectStart);

    for (var i = 0; i < projects.projects.length; i++) {
        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        for (var k = 0; k < projects.projects[i].images.length; k++) {
            var element = projects.projects[i].images[k];
            $(".project-entry:last").append(HTMLprojectImage.replace("%data%", element));
        }
    }
}();


$("#mapDiv").append(googleMap);