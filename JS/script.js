

function output() {

  var dd = document.getElementById("day").value;
  var year = document.getElementById("year").value;
  var mm = document.getElementById("month").value;
  var male = document.getElementById("gender1").checked;
  var female = document.getElementById("gender2").checked;


  var yy = year.slice(0, 2);
  var yy = year.slice(2, 4);
  var cc = (yy - 1) / 100 + 1;
  var results = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

  var males = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var females = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender1").checked) {
    var gender = 'male';

  } else {
    var gender = 'female';

  }
  if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
    alert("your month is invalid");
  } else if (dd < 1 || dd > 31) {
    alert("your month is invalid");
  }


  if (male) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Monday ,your Akan name is " + males[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Tuesday ,your Akan name is " + males[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("You were born on a Wednesday ,your Akan name is " + males[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Thursday,your Akan name is " + males[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Friday,your Akan name is " + males[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Saturday,your Akan name is " + males[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Sunday,your Akan name is " + males[0]);
    }
  }
  else if (female) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Monday ,your Akan name is " + females[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Tuesday,your Akan name is " + females[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Wednesday,your Akan name is " + females[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Thursday,your Akan name is " + females[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Friday,your Akan name is " + females[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Saturday,your Akan name is " + females[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("you were born on a Sunday,your Akan name is " + females[0]);
    }
  } else {
    alert("please enter your credentials properly");
  }
}
