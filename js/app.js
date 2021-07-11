'use strict';

let seattle={
  minCus: 23,
  maxCus: 65,
  avgSale: 6.3,
  total:[],
  custPerHpur:function(){
    for (let i=6 ;i<=20;i++){
      let totalCookiesPerHour=Math.floor(random(seattle.minCus,seattle.maxCus)*this.avgSale);
      this.total.push(totalCookiesPerHour);
    }
    return ;
  },
  render:function(){
    let ArrayTotal ;
    let hourlyOrder = document.getElementById('hourlyOrder');
    let li;

    let hour=5;
    let sum=0;
    for (let i=0 ;i<15;i++){
      let totalCookiesPerHour=this.total[i];
      sum=sum+totalCookiesPerHour;
      let time;
      hour++;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hour=hour-12;
        time='pm';
      }else{
        time='am';
      }
      ArrayTotal=[`${hour}${time}: `+totalCookiesPerHour];
      li= document.createElement('li');
      hourlyOrder.appendChild(li);
      li.textContent=ArrayTotal;
    }

    ArrayTotal=['Total: '+sum];
    li= document.createElement('li');
    hourlyOrder.appendChild(li);
    li.textContent=ArrayTotal;
  }
};

let Tokyo ={
  minCus: 23,
  maxCus: 65,
  avgSale: 6.3,
  total:[],
  custPerHpur:function(){
    for (let i=6 ;i<=20;i++){
      let totalCookiesPerHour=Math.floor(random(Tokyo.minCus,Tokyo.maxCus)*this.avgSale);
      this.total.push(totalCookiesPerHour);
    }
    return ;
  },
  render:function(){
    let ArrayTotal ;
    let hourlyOrder2 = document.getElementById('hourlyOrder2');
    let li;

    let hour=5;
    let sum=0;
    for (let i=0 ;i<15;i++){
      let totalCookiesPerHour=this.total[i];
      sum=sum+totalCookiesPerHour;
      let time;
      hour++;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hour=hour-12;
        time='pm';
      }else{
        time='am';
      }
      ArrayTotal=[`${hour}${time}: `+totalCookiesPerHour];
      li= document.createElement('li');
      hourlyOrder2 .appendChild(li);
      li.textContent=ArrayTotal;
    }

    ArrayTotal=['Total: '+sum];
    li= document.createElement('li');
    hourlyOrder2.appendChild(li);
    li.textContent=ArrayTotal;
  }
};

let Dubai={
  minCus: 11,
  maxCus: 38,
  avgSale: 3.7,
  total:[],
  custPerHpur:function(){
    for (let i=6 ;i<=20;i++){
      let totalCookiesPerHour=Math.floor(random(Dubai.minCus,Dubai.maxCus)*this.avgSale);
      this.total.push(totalCookiesPerHour);
    }
    return ;
  },
  render:function(){
    let ArrayTotal ;
    let hourlyOrder3 = document.getElementById('hourlyOrder3');
    let li;

    let hour=5;
    let sum=0;
    for (let i=0 ;i<15;i++){
      let totalCookiesPerHour=this.total[i];
      sum=sum+totalCookiesPerHour;
      let time;
      hour++;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hour=hour-12;
        time='pm';
      }else{
        time='am';
      }
      ArrayTotal=[`${hour}${time}: `+totalCookiesPerHour];
      li= document.createElement('li');
      hourlyOrder3.appendChild(li);
      li.textContent=ArrayTotal;
    }

    ArrayTotal=['Total: '+sum];
    li= document.createElement('li');
    hourlyOrder3.appendChild(li);
    li.textContent=ArrayTotal;
  }
};

let Paris={
  minCus: 20,
  maxCus: 38,
  avgSale: 2.3,
  total:[],
  custPerHpur:function(){
    for (let i=6 ;i<=20;i++){
      let totalCookiesPerHour=Math.floor(random(Paris.minCus,Paris.maxCus)*this.avgSale);
      this.total.push(totalCookiesPerHour);
    }
    return ;
  },
  render:function(){
    let ArrayTotal ;
    let hourlyOrder = document.getElementById('hourlyOrder');
    let li;

    let hour=5;
    let sum=0;
    for (let i=0 ;i<15;i++){
      let totalCookiesPerHour=this.total[i];
      sum=sum+totalCookiesPerHour;
      let time;
      hour++;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hour=hour-12;
        time='pm';
      }else{
        time='am';
      }
      ArrayTotal=[`${hour}${time}: `+totalCookiesPerHour];
      li= document.createElement('li');
      hourlyOrder.appendChild(li);
      li.textContent=ArrayTotal;
    }

    ArrayTotal=['Total: '+sum];
    li= document.createElement('li');
    hourlyOrder.appendChild(li);
    li.textContent=ArrayTotal;
  }
};

let Lima={
  minCus: 20,
  maxCus: 38,
  avgSale: 2.3,
  total:[],
  custPerHpur:function(){
    for (let i=6 ;i<=20;i++){
      let totalCookiesPerHour=Math.floor(random(Lima.minCus,Lima.maxCus)*this.avgSale);
      this.total.push(totalCookiesPerHour);
    }
    return ;
  },
  render:function(){
    let ArrayTotal ;
    let hourlyOrder4 = document.getElementById('hourlyOrder4');
    let li;

    let hour=5;
    let sum=0;
    for (let i=0 ;i<15;i++){
      let totalCookiesPerHour=this.total[i];
      sum=sum+totalCookiesPerHour;
      let time;
      hour++;
      if(hour===12){
        time='pm';
      }else if (hour>12){
        hour=hour-12;
        time='pm';
      }else{
        time='am';
      }
      ArrayTotal=[`${hour}${time}: `+totalCookiesPerHour];
      li= document.createElement('li');
      hourlyOrder4.appendChild(li);
      li.textContent=ArrayTotal;
    }

    ArrayTotal=['Total: '+sum];
    li= document.createElement('li');
    hourlyOrder4.appendChild(li);
    li.textContent=ArrayTotal;
  }
};


function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
seattle.custPerHpur();
seattle.render();

Tokyo.custPerHpur();
Tokyo.render();

Dubai.custPerHpur();
Dubai.render();

Paris.custPerHpur();
Paris.render();

Lima.custPerHpur();
Lima.render();

