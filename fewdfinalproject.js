console.log("testing");
function showgirl(doorSelected) {
    // alert(doorSelected);
    let doorClicked = document.getElementById('door' + doorSelected);
    let correctImage=getRandomNumberBetween(1,3);
    // alert(correctImage);
    console.log(doorSelected, correctImage);
  
    if (doorSelected == correctImage){
        doorClicked.src="pictures/girl" + correctImage + ".jpg";
    }
    else {
        doorClicked.src="https://i.pinimg.com/originals/9c/97/e7/9c97e7a49380b364cd3792ec0f6004bb.jpg";
    }
  }

  function getRandomNumberBetween(min,max){
    return Math.floor(Math.random()*4);
}
function resetDoor() {
  for (let i = 1; i < 4; i++) {
        doorClicked = document.getElementById('door' + i);
        doorClicked.src="https://special-lite.com/wp-content/uploads/2019/06/AF-200FR.png";
      }
}