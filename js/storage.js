// Deutsch30 数据保存


function getDay(){


return Number(

localStorage.getItem("day")

)||1;


}



function saveDay(day){


localStorage.setItem(

"day",

day

);


}



function getStreak(){


return Number(

localStorage.getItem("streak")

)||0;


}



function saveStreak(number){


localStorage.setItem(

"streak",

number

);


}



function completeToday(){


let day=getDay();


let streak=getStreak();



if(day<30){

saveDay(day+1);

}


saveStreak(streak+1);



}

