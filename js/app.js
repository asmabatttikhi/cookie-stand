'use strict';

let openWorkingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

function CookieShop (location,minPersonPerHour,maxPersonPerHour,avgCookieSalePerson){
  this.location=location;
  this.minPersonPerHour= minPersonPerHour;
  this.maxPersonPerHour=maxPersonPerHour;
  this.avgCookieSalePerson=avgCookieSalePerson;
  this.arrayC=[];

  this.eqRandomP = function(){
    let randomP=Math.floor(Math.random()*(this.maxPersonPerHour-this.minPersonPerHour+1)+this.minPersonPerHour);
    return randomP;};
  this.eqCookiesPerHour=function(){
    let cookieXrandomP =Math.floor(this.eqRandomP()*this.avgCookieSalePerson);
    return cookieXrandomP;
  };
  this.arrayCookie=function(){
    for (let hours = 0; hours < openWorkingHours.length; hours++) {
      let totalCookie=this.eqCookiesPerHour();
      this.arrayC.push(totalCookie);
    }
    return this.arrayC;
  };
}






//render function
CookieShop.prototype.render=function(){
  let tableCookie=document.getElementById('table');
  let trLocation=document.createElement('tr');
  tableCookie.appendChild(trLocation);
  //location
  let locationTd=document.createElement('td');
  //locationTd=document.createTextNode(this.location);
  locationTd.textContent=this.location;
  trLocation.appendChild(locationTd);

  let x = this.arrayCookie();
  //console.log(this.arrayC);
  let DLT;
  let DLTotal=0;
  for (let index6 = 0; index6 < x.length; index6++) {
    let minPersonPerHourTd=document.createElement('td');
    //minPersonPerHourTd=document.createTextNode(x[index6]);
    minPersonPerHourTd.textContent=x[index6];
    trLocation.appendChild(minPersonPerHourTd);
    DLT = x[index6];
    DLTotal+=DLT;

  }
  //console.log( DLTotal);
  let totalDLTotal=0;
  let tableDLT = document.createElement ('td');
  tableDLT.textContent=DLTotal;
  trLocation.appendChild(tableDLT);
  totalDLTotal+=DLTotal;
};


// header function
function tableHeaderTh (c1,c2,c3){
  //row
  let tr=document.createElement('tr');
  document.getElementById('table').appendChild(tr);
  //colomn
  let locationTh=document.createElement('th');
  locationTh.textContent=c1;
  tr.appendChild(locationTh);

  for (let index2 = 0; index2 < openWorkingHours.length; index2++) {
    let openWorkingHoursTh=document.createElement('th');
    tr.appendChild(openWorkingHoursTh);
    //openWorkingHoursTh=document.createTextNode(openWorkingHours[index2]);
    openWorkingHoursTh.textContent=c2[index2];
  }
  let dialyLocationTotal=document.createElement('th');
  tr.appendChild(dialyLocationTotal);
  dialyLocationTotal.textContent=c3;
}



// footer function


let Seattle=new CookieShop('Seattle',23,65,6.3);
let Tokyo=new CookieShop('Tokyo',3,24,1.2);
let Dubai=new CookieShop('Dubai',11,38,3.7);
let Paris=new CookieShop('Paris',20,38,2.3);
let Lima=new CookieShop('Lima',2,16,4.6);

tableHeaderTh('',openWorkingHours,'Daily Location Total');

Seattle.render();
Tokyo.render();
Dubai.render();
Paris.render();
Lima.render();




