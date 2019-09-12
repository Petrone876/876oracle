var nature = document.getElementById("open");

function onOpenAction () {
    var openAction = "http://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/invertebrates/m/monarch_butterfly_thumb.ngsversion.1497024022038.adapt.1900.1.JPG";

    var imgTarget = document.getElementById ("dispImage");

    imgTarget.src = openAction;
    }
nature.addEventListener ("click",onOpenAction);



var wood = document.getElementById ("plantGrows")

  function ongrowAction() {
      var growAction = "https://tse3.mm.bing.net/th?id=OIP.l9IqweMr6a0e4JHyJD5FuAHaEz&pid=Api&P=0&w=255&h=166";
  
  var plantImage = document.getElementById ("plantImage");

  plantImage.src = growAction;
  }
wood.addEventListener("click", ongrowAction)



var water = document.getElementById ("waterFalls");

function onWaterAction() {
  var waterAction = "https://tse3.mm.bing.net/th?id=OIP.1GMs77TEhRbIhLvNTdHHzgHaEo&pid=Api&P=0&w=305&h=191";

  var waterImage = document.getElementById ("waterImage");

  waterImage.src = waterAction;
  }
water.addEventListener("click",onWaterAction);
 

























