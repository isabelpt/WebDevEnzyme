//truth value for while loop
var playing = true;

//note: come up with an actual name
console.log("🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄");
console.log("Welcome to the enzyme guesser thing");
console.log("🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 \n");

//loop adds play again option
while (playing == true){
  //initializing variables 
  //which answer
  var loc = 0;
  var pHval = 0;
  var sub = 0;

  //number of (correct) answers
  var qSum = 4;
  var qCorrect = 0;

  //incorrect input failsafe
  var q1 = true;
  var q2 = true;
  var q3 = true;
  var q4 = true;
  var q5 = true;

  //question 1
  while (q1 == true) {
    var location = prompt("Where do you live? [duodenum/stomach/small intestine/mouth]\n");
    if (location == "duodenum"){
      loc = 1;
      q1 = false;
    } else if (location == "stomach"){
      loc = 2;
      q1 = false;
    } else if (location == "small intestine"){
      loc = 3;
      q1 = false;
    } else if (location == "mouth"){
      loc = 4;
      q1 = false;
    } else {
      console.log("invalid input\n");
      //willloop through again
    }
  } 

  //question 2
  while (q2 == true) {
    var pH = prompt("\nWhat is your optimal pH? [6.5/7/2/8]\n");
    if (pH == 6.5){
      pHval = 1;
      q2 = false;
    } else if (pH == 7){
      pHval = 2;
      q2 = false;
    } else if (pH == 2){
      pHval = 3;
      q2 = false;
    } else if (pH == 8){
      pHval = 4;
      q2 = false;
    } else {
      console.log("invalid input\n");
    }
  }

  //question 3
  while (q3 == true) {
    var substrate = prompt("\nWhat is your substrate? [maltose/starch/protein/polypeptides]\n");
    if (substrate == "maltose"){
      sub = 1;
      q3 = false;
    } else if (substrate == "starch"){
      sub = 2;
      q3 = false;
    } else if (substrate == "protein"){
      sub = 3;
      q3 = false;
    } else if (substrate == "polypeptides"){
      sub = 4;
      q3 = false;
    } else {
        console.log("invalid input\n");
      }
  }

  console.log("\n🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐\n");

  //possible question 4
  while (q4 == true) {
    //maltase
    if (loc == 1 && pHval == 1 && sub == 1){
      qCorrect = 3;
      console.log("One last question...");
      console.log("So far you have described the enzyme maltase. Let's see if you can get this last question correct!\n");
      var product1 = prompt("Is your product glucose? [y/n]\n");
      if(product1 == "y"){
        qCorrect += 1;
        console.log("correct!")
        console.log("maltase");
        //add info about maltase
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else if(product1 == "n"){
        console.log("incorrect!");
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        //add the right answer
        q4 = false;
      } else {
        console.log("invalid input\n");
      }

    //amylase
    } else if (loc == 2 && pHval == 2 && sub == 2){
      qCorrect = 3;
      console.log("One last question...");
      console.log("So far you have described the enzyme amylase. Let's see if you can get this last question correct!");
      var product2 = prompt("is your product maltase? [y/n]\n");
      if (product2 == "y"){
        console.log("incorrect!");
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else if(product2 == "n"){
        qCorrect += 1;
        console.log("correct!");
        console.log("amylase");
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else {
        console.log("invalid input\n");
      }

    //pepsin
    } else if (loc == 3 && pHval == 3 && sub == 3){
      qCorrect = 3;
      console.log("One last question...");
      console.log("So far you have described the enzyme pepsin. Let's see if you can get this last question correct!");
      var product3 = prompt("is your only product peptides? [y/n]\n");
      if (product3 == "y"){
        console.log("incorrect");
        cconsole.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else if (product3 == "n"){
        qCorrect += 1;
        console.log("correct!");
        console.log("pepsin");
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else {
        console.log("invalid input\n");
      }

    //tripsin
    } else if (loc == 4 && pHval == 4 && sub == 4){
      qCorrect = 3;
      console.log("One last question...");
      console.log("So far you have described the enzyme tripsin. Let's see if you can get this last question correct!");
      var product4 = prompt("Are your products fatty acids and glycerol? [y/n]\n");
      if (product4 == "y"){
        qCorrect += 1;
        console.log("correct!");
        console.log("tripsin");
        //calculates score, always 100%
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else if (product4 == "n"){
        //calculates score, always 75%
        console.log("incorrect");
        console.log("Score: " + qCorrect/qSum * 100 + "%");
        q4 = false;
      } else {
        console.log("invalid input\n");
      }

    //very far off
    } else {
      console.log("not an enzyme");
      //maybe add a score thing here (kind of makes so sense though and seems unnecesarily complicated)
      //add some big brain knowledge here 
      //maybe a chart of the enzyme info
    }
  }

  console.log("\n👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻 👩‍💻\n");

  //play again question
  while (q5 == true) {
    var playAgain = prompt("Would you like to play again? [y/n]\n");
    if (playAgain == "y"){
      playing = true;
      q5 = false;
    } else if (playAgain == "n") {
      playing = false;
      console.log("Have a nice day 🐸");
      //give info on enzymes here
      q5 = false;
    } else {
      console.log("invalid input\n");
    }
  }
}