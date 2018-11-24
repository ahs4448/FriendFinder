const path = require("path");
let friends = require("../data/friends.js");

module.exports = function(app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });
    app.post("/api/friends", function (req, res) {
        var newFriendInput = req.body;
        var newFriendResponses = newFriendInput.scores;
        var closestMatch = {
          name: "Abdul",
          photo: '',
          closestMatchDifference: 500
        };
        for (var i = 0; i < friends.length; i++) {
          var differenceCount = 0;
          for (var l = 0; l < friends[l].scores.length; l++) {
            differenceCount += Math.abs(parseInt(friends[i].scores[l]) - parseInt(newFriendResponses[l]));
          }
          if (closestMatch.closestMatchDifference > differenceCount) {
            closestMatch.name = friends[i].name;
            closestMatch.photo = friends[i].photo;
            closestMatch.closestMatchDifference = differenceCount;
          }
        }
        (friends).push(newFriendInput);
        res.json(closestMatch);
      });
    };