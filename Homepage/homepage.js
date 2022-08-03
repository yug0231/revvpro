// why revv//
var span = document.getElementsById("next");
var div = document.getElementById("slide");
var l=0;
span[1].onclick = ()=>{
    l++;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2220px";}
    }
}
span[0].onclick = ()=>{
    l--;
    for(var i of div)
    {
        if (l==0) {i.style.left = "0px";}
        if (l==1) {i.style.left = "-740px";}
        if (l==2) {i.style.left = "-1480px";}
        if (l==3) {i.style.left = "-2220px";}
    }
}