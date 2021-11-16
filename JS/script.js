//  function akan(){
//           var d = new day()
//     var day = parseInt(document.getElementById("day").value);
//      var month = parseInt(document.getElementById("month").value);
//      var year = parseInt(document.getElementById("year").value);
//           if(day < 0 || day > 31){
//          document.getElementById("dayerror");
//          alert("invalid day input.Try again");
//      } else if (day === ""){
//          document.getElementById("dayerror");
//          alert("day is required");
//      } else {
//          d.setDay(day);
//      }
//      if (month < 0 || month > 12){
//          document.getElementByid("montherror");
//          alert("invalid month input.Try again");
//      } else if(month === ""){
//          document.getElementByid("montherror");
//          alert("field is required");
//      } else {
//          d.setMonth(month);
//      }
//  }
//     if (year.value === "" && year.value <= 0){
//         alert("enter valid year")
//     } else { d.setmonth
//     }
//     var days = ["sunday" , "monday" , "tuesday" , "wednesday","thursday","friday","saturday"]
//     var male =["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame"]
//     var female =[" Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama"]

//     function getAkan(){
//         var ismale = document.getElementById('male').checked;
//         var isfemale = document.getElementById('female').checked;
    
//     if (ismale== true &&isfemale == false){
//         if (day== 0){
//             alert("born on Sunday"+"your name is" + male[0]);
//         }
//         if (day== 1){
//             alert("born on Monday"+"your name is" + male[1]);}
//             if (day== 2){
//                 alert("Born on Tuesday"+"your name is" + male[2]);}
//                 if (day== 3){
//                     alert("Born on Wednesday"+"your name is" + male[3]);}
//                     if (day== 4){
//                         alert("Born on Thursday"+"your name is" + male[4]);}
//                                         if (day== 5){
//                                              alert("Born on Friday"+"your name is" +male[5]);}
//                                              if (day== 6){
//                                              alert("Born on Saturday"+"your name is" +male[6]);}
//     }
//     if (isfemale==true && ismale==false){
//         if (day== 0){
//             alert("Born on Sunday"+"your name is" + female[0]);}
//             if (day== 1){
//                 alert("Born on Monday"+"your name is" + female[1]);}
//                 if (day== 2){
//                     alert("Born on Tuesday"+"your name is" + female[2]);}
//                     if (day== 3){
//                         alert("Born on Wednesday"+"your name is" + female[3]);}
//                         if (day== 4){
//                             alert("Born on Thursday"+"your name is" + female[4]);}
//                             if (day== 5){
//                                 alert("Born on friday"+"your name is" + female[5]);}
//                                 if (day== 6){
//                                     alert("Born on Saturday"+"your name is" + female[6]);}
//     }


// }
 function output(){
     var day =parseInt( document.getElementById("day").value);
     var year = parseInt(document.getElementById("year").value);
     var mm = parseInt( document.getElementById("month").value);

     let YY=  (year)%100
     let MM=  mm
     let CC= parseInt(year/100)
     let DD= day
     var results =((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7

     if(year <= 0 || year > 2021){
         alert("enter correct year!") ;
     }
     else if(year ==" "){
         alert("enter correct values");
     }
     else{
         d.setYear(year);
     }
    

     if(month <= 0 || month > 12){
         alert("enter correct month!");
     }
     else if(month ==" "){
         alert("enter correct values");
     }
     else{
         d.setMonth(month);
     }



     if(day <= 0 || day > 31){
         alert("enter correct day!");
     }
     else if(day ==" "){
         alert("enter correct values");
     }
     else{
         d.setDate(day);
     }
     var boy = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
     var girl = ["Akosua", " Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  if (document.getElementById("gender1").checked) {
    var gender = 'male';

  } 
  else if (document.getElementById("gender2").checked) {
    var gender = 'female';
//   if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
//     alert("INVALID MONTH");
//   } else if (dd < 1 || dd > 31) {
//     alert("INVALID DAY");
//   }


  if (male) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("Born on Monday ,your Akan name is " + boy[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("Born on Tuesday ,your Akan name is " + boy[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("Born on Wednesday ,your Akan name is " + boy[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("Born on Thursday,your Akan name is " + boy[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("Born on Friday,your Akan name is " + boy[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("Born on Saturday,your Akan name is " + boy[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("Born on Sunday,your Akan name is " + boy[0]);
    }
  }
else if (female) {
    if (results == 1) {
      document.getElementById("results").innerHTML =
        alert("Born on Monday ,your Akan name is " + girl[1]);
    } else if (results == 2) {
      document.getElementById("results").innerHTML =
        alert("Born on Tuesday,your Akan name is " + girl[2]);
    } else if (results == 3) {
      document.getElementById("results").innerHTML =
        alert("Born on Wednesday,your Akan name is " + girl[3]);
    } else if (results == 4) {
      document.getElementById("results").innerHTML =
        alert("Born on Thursday,your Akan name is " + girl[4]);
    } else if (results == 5) {
      document.getElementById("results").innerHTML =
        alert("Born on Friday,your Akan name is " + girl[5]);
    } else if (results == 6) {
      document.getElementById("results").innerHTML =
        alert("Born on Saturday,your Akan name is " + girl[6]);
    } else if (results == 0) {
      document.getElementById("results").innerHTML =
        alert("Born on Sunday,your Akan name is " + girl[0]);
    }
  } else {
    alert("enter your credentials please");
  }
}

 }