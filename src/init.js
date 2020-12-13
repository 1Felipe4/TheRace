/*
When this complete page loads into memory if any of the addAnimalButton is clicked, make an animal object based on the type of object desired.
Add that object to the window content area.

 */
var objects = ["Albertosaurus","Cheetah","Dilong", "Fox", "Gazelle", "Kangaroo", "Lion"]



var updateFields = function (){
  let tempAnimal = new window[$('#animalType').val()]();
console.log(tempAnimal)
$("#aniTimeBetweenStep").val(tempAnimal.timeBetweenSteps/1000)
$("#aniHeight").val(tempAnimal.height)
$("#aniWidth").val(tempAnimal.width)
$("#aniColor").val(tempAnimal.color)

}

function show(id){
  $("#"+id).show();
}

function hide(id){
  $("#"+id).hide();
}

var toggleAdvanced;
$(document).ready(function() {
  window.animals = [];
  window.races = [];

  toggleAdvanced = function(){
    let val = $("#advancedSwitch").prop("checked");
    let div =  $("advancedDiv");
    if(val){
    show("advancedDiv")
    console.log(val)
    }else{
      hide("advancedDiv");
    }
  
  }


  var clearAnimals = function(){
    window.animals = [];
    $('#content').html("");
  }

  objects.forEach(object =>{
    $("#animalType").append("<option value='" + object +"'>" + object + "</option>");
  });

  updateFields();

  $('.addAnimalButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-animal
     * buttons on track.html. You should only need to make one small change to it.
     * As long as the "data-animal-maker-function-name" attribute of a
     * class="addAnimalButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the animal.
     */

    /* animalMakerFunctionName is a string which must match
     * one of the animal maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var animalMakerFunctionName = $('#animalType').val();

    // get the maker function for the kind of animal we're supposed to make
    var animalMakerFunction = window[animalMakerFunctionName];

    // make an animal with a random position
    pos=5;
    window.animals.forEach(animal => {
      pos+= animal.height + 5;
    });

    var animal = new animalMakerFunction(
      pos, 
      10,
      $("#content").height(),
      $("#content").width(),
      parseFloat($("#aniTimeBetweenStep").val()),
      parseFloat($("#aniHeight").val()),
      parseFloat($("#aniWidth").val()),
      $("#aniColor").val()

    );
    pos+= animal.height + 5
    if(pos < $("#content").height()){
    
      window.animals.push(animal);
    $('#content').append(animal.$node);
    }

    
    
    
  });
  var start = false;

  $('.title').on('click', function(event) {
      
      var animalsFinished = 0;
      var animalsTotal = window.animals.length;
      var finished = function (){
        var currRace = window.races[0];
        animalsFinished++;
        currRace.places.push(this);
        if(animalsFinished == currRace.animals.length){
         currRace.finished = true;
        }

        if(currRace.finished){
          currRace.genLeaderboard();
          $("#leaderboards").prepend(currRace.$node());
        }
      }
      start = !start;
      if(start){
        if(!window.races){
          window.races.push(new race("Race #" + (race.count+1), window.animals));
        }else{
          window.races.unshift(new race("Race #" + (race.count+1), window.animals))
        }
        
      }


      console.log(window.races);
      window.races[0].animals.forEach(animal => {
        animal.getReady(start);
        animal.finished = finished;
      });

  });

  $("#animalType").on("change", function(){
    updateFields()
  });

  $("#clearAnimals").on("click", function(){
    clearAnimals();
  });

  $("#defaultList").on("click", function(){
    clearAnimals();
    objects.forEach(object=>{
      pos=5;
    window.animals.forEach(animal => {
      pos+= animal.height + 5;
    });

    animal = new window[object](
      pos, 
      10,
      $("#content").height(),
      $("#content").width());

      pos+= animal.height + 5
    if(pos < $("#content").height()){
    
      window.animals.push(animal);
      console.log(animal.$node)
    $('#content').append(animal.$node);
    }
    
    });
  });
  
  

  toggleAdvanced()

});


