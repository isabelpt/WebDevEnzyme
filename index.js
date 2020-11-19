//truth value for while loop
var playing = true;

//note: come up with an actual name
console.log("🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄");
console.log("Welcome to the enzyme guesser thing");
console.log("🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄 🎄");

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

  //question 1
  var location = prompt("Where do you live? [duodenum/stomach/small intestine/mouth]");
  if (location == "duodenum"){
    loc = 1;
  } else if (location == "stomach"){
    loc = 2;
  } else if (location == "small intestine"){
    loc = 3;
  } else if (location == "mouth"){
    loc = 4;
  } else{
    //MAKE IT SO IT ASKS THE QUESTION AGAIN OR SOMETHING LIKE THAT
    console.log("invalid input")
  }

  //question 2
  var pH = prompt("What is your optimal pH? [6.5/7/2/8]");
  if (pH == 6.5){
    pHval = 1;
  } else if (pH == 7){
    pHval = 2;
  } else if (pH == 2){
    pHval = 3;
  } else if (pH == 8){
    pHval = 4;
  }

  //question 3
  var substrate = prompt("What is your substrate? [maltose/starch/protein/polypeptides]");
  if (substrate == "maltose"){
    sub = 1;
  } else if (substrate == "starch"){
    sub = 2;
  } else if (substrate == "protein"){
    sub = 3;
  } else if (substrate == "polypeptides"){
    sub = 4;
  }

  console.log("🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐 🪐");

  //possible question 4
  //maltase
  if (loc == 1 && pHval == 1 && sub == 1){
    qCorrect = 3;
    console.log("One last question...");
    console.log("So far you have described the enzyme maltase. Let's see if you can get this last question correct!");
    var product1 = prompt("Is your product glucose? [y/n]");
    if(product1 == "y"){
      qCorrect += 1;
      console.log("correct!")
      console.log("maltase");
      //add info about maltase
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    } else if(product1 == "n"){
      console.log("incorrect!");
      console.log("Score: " + qCorrect/qSum * 100 + "%");
      //add the right answer
    }

  //amylase
  } else if (loc == 2 && pHval == 2 && sub == 2){
    qCorrect = 3;
    console.log("One last question...");
    console.log("So far you have described the enzyme amylase. Let's see if you can get this last question correct!");
    var product2 = prompt("is your product maltase? [y/n]");
    if (product2 == "y"){
      console.log("incorrect!");
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    } else if(product2 == "n"){
      qCorrect += 1;
      console.log("correct!");
      console.log("amylase");
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    }

  //pepsin
  } else if (loc == 3 && pHval == 3 && sub == 3){
    qCorrect = 3;
    console.log("One last question...");
    console.log("So far you have described the enzyme pepsin. Let's see if you can get this last question correct!");
    var product3 = prompt("is your only product peptides? [y/n]");
    if (product3 == "y"){
      console.log("incorrect");
      cconsole.log("Score: " + qCorrect/qSum * 100 + "%");
    } else if (product3 == "n"){
      qCorrect += 1;
      console.log("correct!");
      console.log("pepsin");
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    }

  //tripsin
  } else if (loc == 4 && pHval == 4 && sub == 4){
    qCorrect = 3;
    console.log("One last question...");
    console.log("So far you have described the enzyme tripsin. Let's see if you can get this last question correct!");
    var product4 = prompt("Are your products fatty acids and glycerol? [y/n]");
    if (product4 == "y"){
      qCorrect += 1;
      console.log("correct!");
      console.log("tripsin");
      //calculates score, always 100%
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    } else if (product4 == "n"){
      //calculates score, always 75%
      console.log("incorrect");
      console.log("Score: " + qCorrect/qSum * 100 + "%");
    }

  //very far off
  } else {
    console.log("not an enzyme");
    //maybe add a score thing here (kind of makes so sense though and seems unnecesarily complicated)
    //add some big brain knowledge here 
    //maybe a chart of the enzyme info
  }

  //play again question
  var playAgain = prompt("Would you like to play again? [y/n]");
  if (playAgain == "y"){
    playing = true;
  } else if (playAgain == "n") {
    playing = false;
    console.log("Have a nice day 🐸");
    //give info on enzymes here
  }
}