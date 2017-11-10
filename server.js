//used this as a guide:  https://www.lusd.org/cms/lib6/CA01001399/Centricity/Domain/711/THE%20MYERS-BRIGGS.pdf
//used this for famous people: https://www.personalityclub.com/blog/famous-estj/
// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var port = process.env.PORT || 3000;

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Star Wars Characters (DATA)
// =============================================================
var characters = [
  {
    name: "Lyndon B. Johnson",
    personality: "ESTJ",
    scores: []
  },
  {
    name: "Jennifer Lopez",
    personality: "ESFJ",
    scores: []
  },
  {
    name: "Robert De Niro",
    personality: "ISTJ",
    scores: []
  },
  {
    name: "Mother Teresa",
    personality: "ISFJ",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Winston Churchill",
    personality: "ESTP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Ronald Reagan",
    personality: "ESFP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Willie Nelson",
    personality: "ISTP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Jimi Hendrix",
    personality: "ISFP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Steve Jobs",
    personality: "ENTJ",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Theodore Roosevelt",
    personality: "ENTP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Nikola Tesla",
    personality: "INTJ",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Albert Einstein",
    personality: "INTP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Barack Obama",
    personality: "ENFJ",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Ozzy Osbourne",
    personality: "ENFP",			//change this back to ISFJ
    scores: []
  },
  {
    name: "Taylor Swift",
    personality: "INFJ",			//change this back to ISFJ
    scores: []
  }
  ,
  {
    name: "William Shakespheare",
    personality: "INFP",			//change this back to ISFJ
    scores: []
  }



];

var personalities = [
  {
    type: "ESFJ",
    name: "Supporter",
    idealCareers: [
    "Accountant",
    "Auditor",
    "Banker",
	"Administrator",
	"Business Analyst",
	"Computer Specialist",
	"Detective",
	"Economist",
	"Editor",
	"Engineer",
	"Financial Officer",
	"Government Worker",
	"Insurance Agent",
	"Judge",
	"Lecturer",
	"Librarian",
	"Manager",
	"Marketer",
	"Military Leader",
	"Police",
	"Researcher",
	"Sales",
	"Scientist",
	"Senior Manager",
	"Teacher",
	"Teacher/Professor",
	"Technical Specialist",
	"Underwriter",
	"Writer"
    ],
    others: ["Jennifer Lopez","Hugh Jackman", "Larry King"]
  },
  {
    type: "ISTJ",
    name: "Examiner",
    idealCareers: [	
	"Accountant",
	"Administrator",
	"Auditor",
	"Computer Programmer",
	"Computer Specialist",
	"Dentist",
	"Detective",
	"Doctor",
	"Electrician",
	"Executive",
	"Financial Officer",
	"Judge",
	"Lawyer/Attorney",
	"Librarian",
	"Manager",
	"Marketer",
	"Math Teacher",
	"Mechanical Engineer",
	"Military Leader",
	"Police",
	"Scientist",
	"Steelworker",
	"Systems Analyst",
	"Technical Specialist",
	"Technician"
    ],
    others: ["George Washington","Robert De Niro", "George Strait"]
  },
  {
    type: "ISFJ",
    name: "Defender",
    idealCareers: [
	"Accountant",
	"Actor",
	"Administrative Assistant",
	"Administrator",
	"Artist",
	"Auditor",
	"Banker",
	"Bookkeeper",
	"Business Analyst",
	"Career Counselor",
	"Child Care",
	"Church Worker",
	"Clerical Supervisor",
	"Counselor",
	"Designer",
	"Doctor",
	"Early Childhood Development",
	"Economist",
	"Editor",
	"Entrepreneur",
	"Gardener",
	"Health Service",
	"Homemaker",
	"Human Resources",
	"Interior Decorator",
	"Librarian",
	"Marketer",
	"Medical Technologist",
	"Military",
	"Nurse",
	"Office Manager",
	"Paralegal",
	"Police",
	"Psychologist/Counselor",
	"Researcher",
	"Scientist",
	"Senior Manager",
	"Shopkeeper",
	"Social Worker",
	"Trainer",
	"Typist",
	"Writer"
    ],
    others: ["Jimmy Carter","Mother Teresa", "Holle Berry"]
  },
  {
    type: "ESTP",
    name: "Persuader",
    idealCareers: [
	"under construction..."
    ],
    others: ["John Wayne","Winston Churchill", "Mike Tyson"]
  },
  {
    type: "ESFP",
    name: "Entertainer",
    idealCareers: [
	"under construction..."
    ],
    others: ["Ronald Reagan","Katy Perry", "Mark Cuban"]
  },
  {
    type: "ISTP",
    name: "Craftsman",
    idealCareers: [
	"under construction..."
    ],
    others: ["Clint Eastwood","The Dalai Lama", "Willie Nelson"]
  },
  {
    type: "ISFP",
    name: "Artist",
    idealCareers: [
	"under construction..."
    ],
    others: ["Jimi Hendrix","Ulysses S. Grant", "Marilyn Monroe"]
  },
  {
    type: "ENTJ",
    name: "Chief",
    idealCareers: [
	"under construction..."
    ],
    others: ["Franklin D. Roosevelt","Steve Jobs", "Harrison Ford"]
  },
  {
    type: "ENTP",
    name: "Originator",
    idealCareers: [
	"under construction..."
    ],
    others: ["Thomas Edison","Socrates", "Theodore Roosevelt"]
  },
  {
    type: "INTJ",
    name: "Strategist",
    idealCareers: [
	"under construction..."
    ],
    others: ["Dwight D. Eisenhower","Lance Armstrong", "Nikola Tesla"]
  },
  {
    type: "INTP",
    name: "Engineer",
    idealCareers: [
	"under construction..."
    ],
    others: ["Albert Einstein","Tina Fey", "Dustin Hoffman"]
  },
  {
    type: "ENFJ",
    name: "Mentor",
    idealCareers: [
	"under construction..."
    ],
    others: ["Barack Obama","Jennifer Lawrence", "Oprah Winfrey"]
  },
  {
    type: "ENFP",
    name: "Advocate",
    idealCareers: [
	"under construction..."
    ],
    others: ["George Carlin","Ozzy Osbourne", "Julian Assange"]
  },
  {
    type: "INFJ",
    name: "Confidant",
    idealCareers: [
	"under construction..."
    ],
    others: ["Taylor Swift","Plato", "Adolf Hitler"]
  },
  {
    type: "INFP",
    name: "Dreamer",
    idealCareers: [
	"under construction..."
    ],
    others: ["William Shakespheare","Vincent Van Gogh", "John Mayer"]
  }


];



// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

// Shows all the personalities
app.get("/all", function(req, res) {
  res.json(personalities);
});

// Shows all the personalities
app.get("/characters/:type?", function(req, res) {
	var personType = req.params.type;				//takes the type off the end of the link
	
	var data = {			//this is used to pass data from the server to the express handlebars
    	anims: []
  	};

  for (var i = 0; i < characters.length; i ++) {
    // Get the current animal.
    var currentCharacter = characters[i];

    // Check if this particular character is the personality type we're looking for
    if (currentCharacter.personality === personType) {
      // If so, push it into our data.anims array.
      data.anims.push(currentCharacter);
    }
  }

  res.render("index", data);
});

app.get("/personalities/:type?", function(req, res) {
	var personType = req.params.type;				//takes the type off the end of the link
	console.log("Its' getting here");
	var data = {			//this is used to pass data from the server to the express handlebars
    	anims: []
  	};

  for (var i = 0; i < personalities.length; i ++) {
    // Get the current animal.
    var currentCharacter = personalities[i];

    // Check if this particular character is the personality type we're looking for
    if (currentCharacter.type === personType) {
      // If so, push it into our data.anims array.
      console.log("It's figured out it's the same");
      data.anims.push(currentCharacter);
    }
  }

  res.render("dog", data);
});

// Create New Characters - takes in JSON input
app.post("/post", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newcharacter = req.body;

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});

// Starts the server to begin listening
// =============================================================
app.listen(port, function() {
  console.log("App listening on PORT " + port);
});
