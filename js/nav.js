function loadNav(){


let nav=document.createElement(
"div"
);


nav.className="bottom-nav";


nav.innerHTML=`

<a href="index.html">

🏠
<br>
首页

</a>


<a href="study.html">

📚
<br>
学习

</a>



<a href="listening.html">

🎧
<br>
精听

</a>



<a href="speaking.html">

🗣
<br>
口语

</a>



<a href="progress.html">

👤
<br>
我的

</a>

`;



document.body.appendChild(nav);


}


window.onload=loadNav;
