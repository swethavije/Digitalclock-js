function numberFormat(num){
    return num<10 ? "0"+num:num;
}
//date function
let getDate=document.getElementById("date");
let getMonth=document.getElementById("month");
let getYear=document.getElementById("year");


let setDay=document.getElementsByClassName("day");


function datefunc(){
      let d=new Date();
      let dat=numberFormat(d.getDate());
      let mon=numberFormat(d.getMonth());
      let yr=numberFormat(d.getFullYear());

      let dd=d.getDay();
      console.log(dd);

  document.getElementsByClassName("active-days")[0].classList.remove("active-days");
  document.getElementsByClassName("day")[dd].classList.add("active-days")
     
      
     getDate.innerText=dat;
     getMonth.innerText=mon;
     getYear.innerText=yr;
     
};
datefunc();

let getHMS=document.getElementById("hms");
// let getMins=document.getElementById("mins");
// let getSec=document.getElementById("sec");
let getapm=document.getElementsByClassName("apm");

function timefunc(){
    let d=new Date();
    let hr=numberFormat(d.getHours());
    let mm=numberFormat(d.getMinutes());
    let sec=numberFormat(d.getSeconds());

    getHMS.innerText=hr+" : "+mm+" : "+sec;
    if(d.getHours()>=12 && d.getHours() <= 24 ){
        getapm[0].classList.remove("active-days");
        getapm[1].classList.add("active-days");
    }else{
        getapm[1].classList.remove("active-days");
        getapm[0].classList.add("active-days");
    }

    // getHr.innerText=hr+ " : ";
    // getMins.innerText=mm+" : ";
    // getSec.innerText=sec;


};

setInterval(timefunc,1000);