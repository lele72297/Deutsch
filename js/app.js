// Deutsch30 主程序


window.onload=function(){


let day=getDay();



let dayElement=

document.getElementById("day");



if(dayElement){


dayElement.innerHTML=day;


}



let streakElement=

document.getElementById("streak");



if(streakElement){


streakElement.innerHTML=

getStreak();


}



};





function startStudy(){


window.location.href=

"study.html";


}




function finishDay(){



completeToday();



alert(

"🎉 今日学习完成！"

);



window.location.href=

"index.html";


}
