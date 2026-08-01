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



window.onload=function(){


let day=getDay();



let dayElement =
document.getElementById("day");

if(dayElement){

dayElement.innerHTML=day;

}



let streakElement =
document.getElementById("streak");

if(streakElement){

streakElement.innerHTML=
getStreak();

}




if(window.lessons){


let lesson =
lessons.find(
x=>x.day===day
);



let title =
document.getElementById(
"todayTitle"
);



if(title && lesson){

title.innerHTML=

"今日主题："
+
lesson.title;


}


}


};

if(
"serviceWorker" in navigator
){


navigator.serviceWorker.register(

"service-worker.js"

);


}
