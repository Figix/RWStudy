function reverse(){
    let redBox = document.getElementsByClassName("LeftNemo");
    let greenBox = document.getElementsByClassName("CenterNemo");
    let blueBox = document.getElementsByClassName("RightNemo");

    //각각의 영역마다 반복문 2개로 0이 아닌 모든값 리버스시킴 이 때 0값은 자리 변경없이 그대로 있게끔 구현함

    for(var i=redBox.length-1;i>=0;i--){
        for(var k=1;k<=i;k++){
            if(redBox[k-1].innerText=="0"){
                continue;
            }
            var temper_innerText = redBox[k-1].innerText;
            var temper_color = redBox[k-1].style.color;
            redBox[k-1].innerText = redBox[k].innerText;
            redBox[k-1].style.color = redBox[k].style.color;
            redBox[k].innerText = temper_innerText;
            redBox[k].style.color = temper_color;   
        }
    }
    for(var i=greenBox.length-1;i>=0;i--){
        for(var k=1;k<=i;k++){
            if(greenBox[k-1].innerText=="0"){
                continue;
            }
            temper_innerText = greenBox[k-1].innerText;
            temper_color = greenBox[k-1].style.color;
            greenBox[k-1].innerText = greenBox[k].innerText;
            greenBox[k-1].style.color = greenBox[k].style.color;
            greenBox[k].innerText = temper_innerText;
            greenBox[k].style.color = temper_color;
        }
    }
    for(var i=blueBox.length-1;i>=0;i--){
        for(var k=1;k<=i;k++){
            if(blueBox[k-1].innerText=="0"){
                continue;
            }
            temper_innerText = blueBox[k-1].innerText;
            temper_color = blueBox[k-1].style.color;
            blueBox[k-1].innerText = blueBox[k].innerText;
            blueBox[k-1].style.color = blueBox[k].style.color;
            blueBox[k].innerText = temper_innerText;
            blueBox[k].style.color = temper_color;            
        }
    }
}