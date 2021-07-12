'use strict';

function random (minCus,maxCus){
  return Math.floor(Math.random() * (maxCus- minCus + 1) ) + minCus;
}

/////////table
//declare
let reftable;
let row1;
let tdata;

let location1 = new Shope('Seattle', 23,65,6.3);
location1.totalCookiesPerHour();
location1.render();

let location2 = new Shope('tokyo', 23,65,6.3);
location2.totalCookiesPerHour();
location2.render();

let location3 = new Shope('dubie', 23,65,6.3);
location3.totalCookiesPerHour();
location3.render();

////////////////////first row
//virtical
for (let index = 0; index < 1; index++) {
  //get id
  reftable = document.getElementById('table');
  //creat tr
  row1 = document.createElement('tr');
  //append tr to table
  reftable.prepend(row1);
  //add text to tr
  row1.textContent=index;

  //horisental
  for (let d = 0; d < 1; d++) {
    //creat td
    tdata=document.createElement('td');
    //append td to tr
    row1.appendChild(tdata);
    //add text to td
    tdata.textContent='Time';
  }

  //horisental
  for (let d = 0; d < location1.time.length; d++) {
    //creat td
    tdata=document.createElement('td');
    //append td to tr
    row1.appendChild(tdata);
    //add text to td
    tdata.textContent=location1.time[d];
  }

}

function Shope(locName,min,max,avg){
  this.location= locName;
  this.minCus= min;
  this.maxCus= max;
  this.avgSale= avg;
  this.arrayCookies= [];
  this.time=[];
  this.totalCookiesPerHour= function(){
    let customers;
    let cookiesPerHour;
    for (let i=6 ;i<=20;i++){
      customers =random(this.minCus,this.maxCus);
      cookiesPerHour=Math.floor(customers*this.avgSale);
      this.arrayCookies.push(cookiesPerHour);

    }
  };

  this.render=function(){
    let ArrayTotal ;
    let hourlyOrder = document.getElementById('hourlyOrder');

    let h2= document.createElement('h2');
    hourlyOrder.appendChild(h2);
    //h2.textContent=this.location;

    let li;
    let hour=5;
    let sum=0;
    let hourResult;

    
    //calculate hours and throu arrayCookies[i] index link it here
    for (let i=0 ;i<14;i++){
      let cookiesPerHour=this.arrayCookies[i];
      sum=sum+cookiesPerHour;
      let time;
      hour++;
      hourResult=hour;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hourResult=hour-12;
        time='pm';
      }else{
        time='am';
      }
      //calculate per cookie and link it to sales.html
      ArrayTotal=[`${hourResult}${time}: `+cookiesPerHour+'cookies'];
      // li= document.createElement('li');
      // hourlyOrder.appendChild(li);
      // li.textContent=ArrayTotal;
      this.time.push(`${hourResult}${time}`);
    }
    //calculate the total and link it to sales.html
    ArrayTotal=['Total: '+sum];
    //li= document.createElement('li');
    //hourlyOrder.appendChild(li);
    //li.textContent=ArrayTotal;





    ////////////////////second row
    //virtical
    for (let index = 1; index <=1; index++) {
      //get id
      reftable = document.getElementById('table');

      //creat tr
      row1 = document.createElement('tr');
      //append tr to table
      reftable.appendChild(row1);
      //add text to tr

      row1.textContent=index;

      //horisental  td , inside loop tr
      for (let d = 0; d < 1; d++) {
        //creat td
        tdata=document.createElement('td');
        //append td to tr
        row1.appendChild(tdata);
        //add text to td
        tdata.textContent=this.location;
      }

      //horisental  td , inside loop tr
      for (let d = 0; d < this.arrayCookies.length-1; d++) {
        //creat td
        tdata=document.createElement('td');
        //append td to tr
        row1.appendChild(tdata);
        //add text to td
        tdata.textContent=this.arrayCookies[d];
      }

    }

  };
}













