var mongoose    = require("mongoose")
var databaseUrl = 'mongodb://localhost:27017/yearbook';
mongoose.connect(databaseUrl);

var Project = require("../models/project");
var User = require("../models/user");

var project1 = new Project({
  title: "Prep",
  description: "A new take on homework.",
  github: "https://github.com/benlayer291/wdi-project-2",
  website: "https://freeprep.herokuapp.com"
})

project1.save(function(err, project){
  if (err) return console.log(err);
  console.log(project)
})

var user1 = new User({
  name: "Ben Layer",
  bio: "Education tech is my ting.",
  twitter: "ben_layer",
  github: "benlayer291",
  image: "https://avatars0.githubusercontent.com/u/13622911?v=3&s=460",
  portfolio: "www.benlayer.com",
  projects: [project1]
})

user1.save(function(err, user){
  if (err) return console.log(err);
  console.log(user)
})



