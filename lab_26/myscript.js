var clickCount = 0;
var currentText = "";
var firstClickedId;
var currentTextNew;
var id;
var test = 1;
var numBoxes = 24;
var totalMatches = numBoxes/2
var openids = [];
var idOne;
var id;
var openBoxes = 0;
function restorePics() {
  pictures = ["balloons", "book", "burger", "bus", "car", "crocodile", "dragon", "earth", "penguin", "penguin3", "penguinflag", "policeman", "rubikscube", "smiley", "tomato", "trompet", "umbrella", "windmill"];
};
restorePics();

//reset button
$("button").click(newGame);
$(".optionOne").click(optionOne);
$(".optionTwo").click(optionTwo);
$(".optionThree").click(optionThree);


var option = 3;

function newGame() {
  switch (option) {
    case 1:
      optionOne();
      break;
    case 2:
      optionTwo();
      break;
    case 3:
      optionThree();
  };
}
newGame();

function optionOne() {
  option = 1;
  numBoxes = 16;
  totalMatches = numBoxes/2
  $(".columnone").width("300px");
  $(".table").addClass("smalltable");
  $(".table").removeClass("midtable");
  $(".table").removeClass("bigtable");
  restorePics();
  pictures.splice(8, 12);
  pictures = pictures.concat(pictures);
  reset();
};

function optionTwo() {
  option = 2;
  numBoxes = 24;
  totalMatches = numBoxes/2
  $(".columnone").width("360px");
  $(".table").removeClass("smalltable");
  $(".table").addClass("midtable");
  $(".table").removeClass("bigtable");
  restorePics();
  pictures.splice(12, 6);
  pictures = pictures.concat(pictures);
  reset();
};

function optionThree() {
  option = 3;
  numBoxes = 36;
  totalMatches = numBoxes/2
  $(".columnone").width("420px");
  $(".table").removeClass("smalltable");
  $(".table").removeClass("midtable");
  $(".table").addClass("bigtable");
  restorePics();
  pictures = pictures.concat(pictures);
  reset();
};


function init() {
  pictures = pictures.concat(pictures);
  reset();
};
init();


function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

function reset() {
  clickCount = 0;
  $("h3").html('Number of tries: <span class="tries"></span>');
  pictures = shuffle(pictures);
  totalMatches = numBoxes/2;
  $(".table").html("");
  createArray();
  hideAll();
  addFunctionality();
}

function hideAll() {
  for (i = 0; i < numBoxes; i++) {
    $("#" + i).addClass("hidden");
  };
};

function hideItems() {
  $("#" + idOne).addClass("hidden");
  $("#" + id).addClass("hidden");
  openids[idOne] = false;
  openids[id] = false;
  openBoxes = 0;
}

function clickOne(id) {
  idOne = id;
  firstClickedId = $(this).parent().text();
  console.log("This is a first click");
  console.log(thisIs);
  console.log(idOne);
  openBoxes++;
};

function clickTwo(id) {
  console.log("This is a second click");
  openBoxes++;
  $(".tries").text(clickCount/2);
  if (currentTextNew === currentText) {
    openBoxes = 0;
    totalMatches--;
    console.log("So much matches left: " + totalMatches)
    console.log("MATCH");
    console.log("This is the answer " + currentTextNew);
    console.log("This is the answer " + currentTextNew);
    console.log("This is the answer " + currentTextNew);
    if (totalMatches === 0) {
      $("h3").text("Congratulations You WON with " + clickCount/2 + " tries!");
    };
  }
  else {
    console.log("This is NOT a match");
    setTimeout(hideItems, 1500);
  }

};

console.log(pictures);

// Create the array of pictures
function createArray() {
  for (i = 0; i < numBoxes; i++) {
    if (i === 12 && option === 2) {
      $(".table").append('<div class="box blank">' + (i + 1) +  '</div>');
    }

    if ($(".blank")[0]){
        // Do something if class exists
        $(".blank").html("");
    } else {
        // Do something if class does not exist
    }

    $(".table").append('<div id="' + i + '" class="box hidden">' + (i + 1) +  '</div>');
    $("#" + i).addClass(pictures[i]);
    $("#" + i).text(pictures[i]);
    theText = $("#" + i).text();
    openids[i] = false;
    console.log(theText);
  };
};


// Add the click functionality to pictures

function addFunctionality() {
  for (i = 0; i < numBoxes; i++) {
    $("#" + i).click(function() {


  if (openBoxes !== 2) {
    thisIs = $(this).text();
    id = $(this).attr("id");
    console.log(id);

    if (openids[id] === false) {
      clickCount++
      openids[id] = true;
      console.log("These are the ids " + openids[id]);
      $(this).removeClass("hidden");
        if (clickCount % 2 == 1) {
          currentText = thisIs;

          clickOne(id);
        }
        else {
          currentTextNew = thisIs;
          clickTwo(id);
        }

        currentText = $(this).text();
    }

  }

    });
  };

}
