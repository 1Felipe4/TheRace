/*
When this complete page loads into memory if any of the addAnimalButton is clicked, make an animal object based on the type of object desired.
Add that object to the window content area.

 */


$(document).ready(function() {
  window.animals = [];

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
    var animalMakerFunctionName = $(this).data('animal-maker-function-name');

    // get the maker function for the kind of animal we're supposed to make
    var animalMakerFunction = window[animalMakerFunctionName];

    // make an animal with a random position

    var animal = new animalMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    
    $('#content').append(animal.$node);
    window.animals.push(animal);
  });
});