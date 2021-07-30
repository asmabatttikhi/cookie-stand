'use strict';

let openWorkingHours = ['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let shops=[];
let dialyLocationTotalTable=0;


function CookieShop (location,minPersonPerHour,maxPersonPerHour,avgCookieSalePerson){
  this.location=location;
  this.minPersonPerHour= minPersonPerHour;
  this.maxPersonPerHour=maxPersonPerHour;
  this.avgCookieSalePerson=avgCookieSalePerson;
  this.arrayC=[];
  this.dialyLocationTotalArray=0;
  shops.push(this);
}


CookieShop.prototype.eqRandomP = function(){
  let randomP=Math.floor(Math.random()*(this.maxPersonPerHour-this.minPersonPerHour+1)+this.minPersonPerHour);
  return randomP;
};

CookieShop.prototype.eqCookiesPerHour=function(){
  let cookieXrandomP =Math.floor(this.eqRandomP()*this.avgCookieSalePerson);
  return cookieXrandomP;
};

CookieShop.prototype.arrayCookie=function(){
  for (let hours = 0; hours < openWorkingHours.length; hours++) {
    let totalCookie=this.eqCookiesPerHour();
    this.arrayC.push(totalCookie);
  }
  return this.arrayC;
};



//render function
CookieShop.prototype.render=function(){
  let tableCookie=document.getElementById('table');
  let trLocation=document.createElement('tr');
  if (tableCookie===null){
    return;
  }
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

  let tableDLT = document.createElement ('td');
  tableDLT.textContent=DLTotal;
  trLocation.appendChild(tableDLT);
  this.dialyLocationTotalArray=DLTotal;
};


// header function
function tableHeaderTh (c1,c2,c3){
  //row
  let tr=document.createElement('tr');
  let table=document.getElementById('table');
  if (table === null){
    return ;
  }
  table.appendChild(tr);
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



tableHeaderTh('Location',openWorkingHours,'Daily Location Total');






let form=document.getElementById('form');
if (form!=null){
form.addEventListener('submit',submitter);
}
function submitter(event){
  event.preventDefault();

  let tablelocation = (event.target.nameLocation.value);
  let tableMin = (event.target.minShop.value);
  let tableMax = (event.target.maxShop.value);
  let tableaverage = (event.target.averageShop.value);
  console.log(event);
  let inputShop=new CookieShop(tablelocation,tableMin,tableMax,tableaverage);
  inputShop.render();
  let footer=document.getElementById('footer');
  if (footer){
    footer.remove();
  }
  tableFooterTh ();


}


// footer function
function tableFooterTh (){
  let trfooter=document.createElement('tr');
  trfooter.id='footer';
  let table=document.getElementById('table');
  if(table===null){
    return;
  }
  table.appendChild(trfooter);

  let thfooter=document.createElement('th');
  trfooter.appendChild(thfooter);
  thfooter.textContent='Totals ';

  for (let h = 0; h < openWorkingHours.length; h++) {
    let totalCookieHour=0;

    for (let i = 0; i < shops.length; i++) {
      //console.log(shops[i].arrayC[h]);
      totalCookieHour+=shops[i].arrayC[h];

    }
    thfooter=document.createElement('th');
    trfooter.appendChild(thfooter);
    thfooter.textContent=totalCookieHour;

  }
  for (let d = 0; d < shops.length; d++) {
    dialyLocationTotalTable+=shops[d].dialyLocationTotalArray;
  }
  let thfooterdialylocation=document.createElement('th');
  trfooter.appendChild(thfooterdialylocation);
  thfooterdialylocation.textContent=dialyLocationTotalTable;
}
