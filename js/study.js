// Deutsch30课程读取


window.onload=function(){


let day =
getDay();



let lesson =
lessons.find(
item=>item.day===day
);



if(!lesson){

return;

}




document.getElementById(
"lessonTitle"
).innerHTML =

"Day "
+
lesson.day
+
" "
+
lesson.title;




document.getElementById(
"dialog"
).innerHTML =

lesson.listening
+
"<br><br>"
+
lesson.translation;




document.getElementById(
"speaking"
).innerHTML =

lesson.speaking;




document.getElementById(
"engineering"
).innerHTML =

lesson.engineering;



}
