'use strict';

// let CookieShop = {
//   location:'Seattle',
//   openWorkingHours:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//   minPersonPerHour: 23,
//   maxPersonPerHour:65,
//   avgCookieSalePerson:6.3,
//   arrayC:[],
//   eqRandomP: function(){
//     let randomP=Math.floor(Math.random()*(this.maxPersonPerHour-this.minPersonPerHour)+this.minPersonPerHour);
//     return randomP;},
//   eqCookiesPerHour: function(){
//     let cookieXrandomP =Math.floor(this.eqRandomP()*this.avgCookieSalePerson);
//     return cookieXrandomP;
//   },
//   arrayCookie:function(){
//     for (let hours = 0; hours < this.openWorkingHours.length; hours++) {
//       let totalCookie=this.eqCookiesPerHour();
//       this.arrayC.push(totalCookie);
//       console.log(this.arrayC);
//     }
//     return this.arrayC ;
//   },
// };

// Function CookieShop (location,minPersonPerHour,maxPersonPerHour,avgCookieSalePerson,arrayC){
//   this.location=location;
//   this.minPersonPerHour= minPersonPerHour;
//   this.maxPersonPerHour=maxPersonPerHour;
//   this.avgCookieSalePerson=avgCookieSalePerson;
//   this.arrayC=arrayC;
//   this.openWorkingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
// };

function CookieShop (location,minPersonPerHour,maxPersonPerHour,avgCookieSalePerson){
  this.location=location;
  this.minPersonPerHour= minPersonPerHour;
  this.maxPersonPerHour=maxPersonPerHour;
  this.avgCookieSalePerson=avgCookieSalePerson;
  this.arrayC=[];
  this.openWorkingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
  this.eqRandomP = function(){
    let randomP=Math.floor(Math.random()*(this.maxPersonPerHour-this.minPersonPerHour)+this.minPersonPerHour);
    return randomP;};
  this.eqCookiesPerHour=function(){
    let cookieXrandomP =Math.floor(this.eqRandomP()*this.avgCookieSalePerson);
    return cookieXrandomP;
  };
  this.arrayCookie=function(){
    for (let hours = 0; hours < this.openWorkingHours.length; hours++) {
      let totalCookie=this.eqCookiesPerHour();
      this.arrayC.push(totalCookie);
      // console.log(this.arrayC);
    }
    return this.arrayC;
  };

}
CookieShop.prototype.loopPrint=function(){
  let locatioPrint=document.createElement('h2');
  let textLocation=document.createTextNode(this.location);
  locatioPrint.appendChild(textLocation);

  document.getElementById('hourlyOrder').appendChild(locatioPrint);
  for (let i = 0; i < this.openWorkingHours.length;i++){
    let licookie=document.createElement('li');
    let textCookie=document.createTextNode(this.openWorkingHours[i]+': '+this.arrayCookie()[i]+'cookies');
    licookie.appendChild(textCookie);
    document.getElementById('hourlyOrder').appendChild(licookie);
  }
};


let Seattle=new CookieShop('Seattle',23,65,6.3);
let tokyo=new CookieShop('tokyo',23,65,6.3);


Seattle.loopPrint();
tokyo.loopPrint();

