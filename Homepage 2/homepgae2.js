var left4=1;
var right4=4;
var leftcs=1;
var rightcs=1;
function show(){
    for(i=left4;i<=right4;i++)
    document.getElementById("ss"+i).style.display="inline-block";
    for(i=left4;i<=right4;i++)
    document.getElementById("sb"+i).style.display="inline-block";
    for(i=leftcs;i<=rightcs;i++)
    document.getElementById("cs"+i).style.display="inline-block";
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
        function moverightsb(){
            if(left4<=1 && right4<=4)
            {
            document.getElementById("sb"+left4).style.display="none";
            left4 += 1;
            right4 += 1;
            for(i=left4;i<=right4;i++)
            document.getElementById("sb"+i).style.display="inline-block";
            }
            else{
                return;
            }
            }        
            function moveleftsb(){
            if(left4>=2 && right4>=5)
            {
            document.getElementById("sb"+right4).style.display="none";
            left4 -=1 ;
            right4 -=1 ;
            for(i=left4;i<=right4;i++)
            document.getElementById("sb"+i).style.display="inline-block";
            }
            else{
                return;
            }
            }
            function moverightcs(){
                if(leftcs<=1 && rightcs<=4)
                {
                document.getElementById("cs"+leftcs).style.display="none";
                leftcs += 1;
                rightcs += 1;
                for(i=leftcs;i<=rightcs;i++)
                document.getElementById("cs"+i).style.display="inline-block";
                }
                else{
                    return;
                }
                }        
                function moveleftcs(){
                if(leftcs>=2 && rightcs>=5)
                {
                document.getElementById("cs"+rightcs).style.display="none";
                leftcs -=1 ;
                rightcs -=1 ;
                for(i=leftcs;i<=rightcs;i++)
                document.getElementById("cs"+i).style.display="inline-block";
                }
                else{
                    return;
                }
                }