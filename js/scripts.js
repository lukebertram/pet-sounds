//Back town business plan
function Pet (name, age, gender, type, image) {
  this.name = name;
  this.age = age;
  this.gender = gender;
  this.type = type;
  this.image = image;
}


var pets = [];
pets.push(new Pet("Spots", "15000", "Lichcat", "http://placekitten.com/g/200/300"));
pets.push(new Pet("Tinkles", "2", "Mutahound", "http://placekitten.com/g/200/300"));
pets.push(new Pet("Sgt. Tumbles", "37", "Human", "http://placekitten.com/g/200/300"));
pets.push(new Pet("Dyna", "7", "Kitty", "http://placekitten.com/g/200/300"));
pets.push(new Pet("Alice", "12", "Radbit", "http://placekitten.com/g/200/300"));


//front-end flamboyance
$(document).ready(function(){

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
