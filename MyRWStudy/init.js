function init() {
    var colorsArr = [       //탑의 색깔이 위에서 순서대로 하나씩 아래로 배치됨 계속 추가 가능
        'red',
        'orange',
        'yellow',
        'green',
        'blue',
        'indigo',
        'violet'
    ];
    var colorvar =0;        //이 변수로 colorsArr의 인덱스를 바꾸면서 색변경
    var blockmaker ="";     //이 변수는 사각링 크기를 만들 때 사용하는 변수
    var j;                  //for문 밖에서도 j값 가져오기 위해서 선언함
    
    var NodePlus = 10; // 타워층 조절하는 변수 변수 값의 +1의 노드가 추가 생성됨
    
    var redBox = document.getElementsByClassName("LeftNemo");
    let redArea = document.getElementById("AreaLeft");
    
    var greenBox = document.getElementsByClassName("CenterNemo");
    let greenArea = document.getElementById("AreaCenter");
    
    var blueBox = document.getElementsByClassName("RightNemo");
    let blueArea = document.getElementById("AreaRight");
        if(redBox.length<NodePlus){         //초기화 버튼 누를때마다 10개씩 증설 가능하기에 조건문으로 제한을 걸어둠
            for(var i=0;i<NodePlus;i++){
                // redArea.appendChild(redBox[i].cloneNode());
                // greenArea.appendChild(greenBox[i].cloneNode());
                // blueArea.appendChild(blueBox[i].cloneNode());
                redArea.append(redBox[i].cloneNode());
                greenArea.append(greenBox[i].cloneNode());
                blueArea.append(blueBox[i].cloneNode());
                //전체 영역의 자식 객체로 들어가야지 깔끔하게 모양이 잡힘
            }
        }
//복제하는곳
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//하노이탑 생성 코드
    for(var i=redBox.length+redBox.length-1;i>=1;i=i-2){
        for(j=1;j<=i;j++){
            blockmaker += "■";
        }
        redBox[colorvar].innerHTML=blockmaker
        redBox[colorvar].style.color = colorsArr[colorvar % colorsArr.length];
        greenBox[colorvar].innerHTML="0";
        greenBox[colorvar].style.color="white";
        blueBox[colorvar].innerHTML="0";
        blueBox[colorvar].style.color="white";
        //폰트 사이즈조절
    
        blockmaker="";//초기화
        colorvar++; //출력후 색변경하려고 넣음
    }   
    colorvar =0;    //이 변수가 컬러변수 초기화하는 변수
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
