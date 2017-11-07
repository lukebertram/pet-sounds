//Back town business plan
function Pet (name, age, gender, type, image) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.type = type;
  this.image = image;
}


var pets = [];
pets.push(new Pet("Spots", "15000", "male", "Lichcat", "http://fillmurray.com/200/300"));
pets.push(new Pet("Tinkles", "2", "female", "Mutahound", "http://fillmurray.com/200/300"));
pets.push(new Pet("Sgt. Tumbles", "37", "attack helicopter", "Human", "http://fillmurray.com/200/300"));
pets.push(new Pet("Dyna", "7", "female", "Kitty", "http://fillmurray.com/200/300"));
pets.push(new Pet("Alice", "12", "female", "Radbit", "http://fillmurray.com/200/300"));


//front-end flamboyance
$(document).ready(function(){

  //display all pets in the array
  pets.forEach (function(pet){
    $(".pet-list ul").append(
       "<li>" +
         "<div class='pet-preview'>" +
          "<img src='" + pet.image + "' alt='" + pet.name + "'>" +
          "<span class='pet-name'>" + pet.name + "</span>" +
        "</div>" +
       "</li>");
  });

  //on form submit
  $("form#pet-form").submit(function(event){
    event.preventDefault();
    var type = $("#pet-type").val();
    var name = $("#pet-name").val();
    var gender = $("#pet-gender").val();
    var age = $("#pet-age").val();
    var dogeggs = $("#pet-image").val();
    pets.push(new Pet(name, age, gender, type, dogeggs));

  });

});
