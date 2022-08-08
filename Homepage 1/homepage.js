// why revv//
var left=1;
var right=3;
var left4=1;
var right4=4;
function show(){
for(i=left;i<=right;i++)
document.getElementById("whyrev"+i).style.display="inline-block";
for(i=left;i<=right;i++)
document.getElementById("feature"+i).style.display="inline-block";
for(i=left4;i<=right4;i++)
document.getElementById("ss"+i).style.display="inline-block";
for(i=left4;i<=right4;i++)
document.getElementById("hc"+i).style.display="inline-block";
}
function moverightwhyrev(){
if(left<=1 && right<=3)
{
document.getElementById("whyrev"+left).style.display="none";
left+=1;
right+=1;
for(i=left;i<=right;i++)
document.getElementById("whyrev"+i).style.display="inline-block";
}
else{
    return;
}
}        
function moveleftwhyrev(){
if(left>=2 && right>=4)
{
document.getElementById("whyrev"+right).style.display="none";
left-=1;
right-=1;
for(i=left;i<=right;i++)
document.getElementById("whyrev"+i).style.display="inline-block";
}
else{
    return;
}
}
function moverightfeatures(){
    if(left<=1 && right<=3)
    {
    document.getElementById("feature"+left).style.display="none";
    left+=1;
    right+=1;
    for(i=left;i<=right;i++)
    document.getElementById("feature"+i).style.display="inline-block";
    }
    else{
        return;
    }
    }        
    function moveleftfeatures(){
    if(left>=2 && right>=4)
    {
    document.getElementById("feature"+right).style.display="none";
    left-=1;
    right-=1;
    for(i=left;i<=right;i++)
    document.getElementById("feature"+i).style.display="inline-block";
    }
    else{
        return;
    }
    }
    function moverightss(){
        if(left4<=1 && right4<=4)
        {
        document.getElementById("ss"+left4).style.display="none";
        left4 += 1;
        right4 += 1;
        for(i=left4;i<=right4;i++)
        document.getElementById("ss"+i).style.display="inline-block";
        }
        else{
            return;
        }
        }        
        function moveleftss(){
        if(left4>=2 && right4>=5)
        {
        document.getElementById("ss"+right4).style.display="none";
        left4 -=1 ;
        right4 -=1 ;
        for(i=left4;i<=right4;i++)
        document.getElementById("ss"+i).style.display="inline-block";
        }
        else{
            return;
        }
        }
        function moverighthc(){
            if(left4<=1 && right4<=4)
            {
            document.getElementById("hc"+left4).style.display="none";
            left4 += 1;
            right4 += 1;
            for(i=left4;i<=right4;i++)
            document.getElementById("hc"+i).style.display="inline-block";
            }
            else{
                return;
            }
            }        
            function movelefthc(){
            if(left4>=2 && right4>=5)
            {
            document.getElementById("hc"+right4).style.display="none";
            left4 -=1 ;
            right4 -=1 ;
            for(i=left4;i<=right4;i++)
            document.getElementById("hc"+i).style.display="inline-block";
            }
            else{
                return;
            }
            }