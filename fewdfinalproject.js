//Establish a "random number" between 1-3 in order to match the door selected to the random number generated. If the random number generated matches the door selected, I show the picture of the girl selected on the drop down.
var randomNumber = getRandomNumberBetween(1,3);

//Create a function called "resetDoor". This function is a loop. I am referencing the dropdown I made on the HTML.
//Each time I "reset" (or change the name of the girl) in the HTML dropdown, I am pulling back the original yellow door image, so I can start over & generate a new random number, which is the door the "player" must select in order to reveal the girl (vs the dog photo)
function resetDoor() {
  for (let i = 1; i < 4; i++) {
        doorClicked = document.getElementById('door' + i);
        doorClicked.src="https://special-lite.com/wp-content/uploads/2019/06/AF-200FR.png";
        doorClicked.style = null;
      }
      randomNumber = correctImage=getRandomNumberBetween(1,3);
}

//When I click on a door, the javascript changes dynamically the image of the door to show either a girl (if random number = girl number selected) or the dog (if not).
//If that random number generated = the door I selected, I show the girl's picture that is selected on the dropdown.
//If the random number does NOT coorespond to the number door I selected, I replace the door pic with the dog photo
function showgirl(doorSelected) {
      let doorClicked = document.getElementById('door' + doorSelected);
    console.log(doorSelected, randomNumber);
    girlSelected = document.getElementById('girlsSelector');
    if (doorSelected == randomNumber) {
        doorClicked.src=`pictures/girl${girlSelected.value}.jpg`;
        doorClicked.style.width = "200px";
        doorClicked.style.padding = "100px";
    }
    else {
        doorClicked.src="https://i.pinimg.com/originals/9c/97/e7/9c97e7a49380b364cd3792ec0f6004bb.jpg";
        doorClicked.style.height = "200px";
        doorClicked.style.padding = "100px";
    }
  }

  //This function assigns a random number between a max (3) and min (1), and is applied above)
  function getRandomNumberBetween(min,max){
    return Math.floor(Math.random() * (max - min + 1) + min);
}
