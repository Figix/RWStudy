var colorsArr = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'indigo',
    'violet'
];
var colorvar =0; //이 변수로 배열의 인덱스를 바꾸면 색을 배열안에 넣어서 줄바꿈 때마다 인덱스를 바꿔서 넣을 생각

var blockcount ="";
var j;

var NodePlus = 10; // 타워층 조절하는 변수

function init() {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//복제하는 곳
startOnOffer=false;
CliCk_redAreaOnOffer = false;
CliCk_greenAreaOnOffer = false;
CliCk_blueAreaOnOffer = false;
temp_node = null;

let redBox = document.getElementsByClassName("redNemo");
let redArea = document.getElementById("redBox");

let greenBox = document.getElementsByClassName("greenNemo");
let greenArea = document.getElementById("greenBox");

let blueBox = document.getElementsByClassName("blueNemo");
let blueArea = document.getElementById("blueBox");
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
    console.log(redBox.length);
    console.log(greenBox.length);
    console.log(blueBox.length);

//복제하는곳
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//하노이탑 생성 코드
    for(var i=redBox.length+redBox.length-1;i>=1;i=i-2){    //Red영역
        for(j=1;j<=i;j++){
            blockcount += "■";
        }
        console.log(blockcount+i);
        console.log(colorsArr[colorvar]);
        
        redBox[colorvar].innerHTML=blockcount
        redBox[colorvar].style.color = colorsArr[colorvar%7];
        greenBox[colorvar].innerHTML="0";
        // greenBox[colorvar].style.color="white";
        blueBox[colorvar].innerHTML="0";
        // blueBox[colorvar].style.color="white";
        //폰트 사이즈조절

        blockcount="";//초기화
        colorvar++; //출력후 색변경하려고 넣음
    }       colorvar =0;    //이 변수가 컬러변수 초기화하는 변수
    
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var temp_node;

var startOnOffer=false;
var CliCk_redAreaOnOffer = false;
var CliCk_greenAreaOnOffer = false;
var CliCk_blueAreaOnOffer = false;

function CliCk_AllOffer(){
    CliCk_redAreaOnOffer = false;
    CliCk_greenAreaOnOffer = false;
    CliCk_blueAreaOnOffer = false;
}

function Click_redArea(){
    var redBox = document.getElementsByClassName("redNemo");
    if(!startOnOffer){  //false일 때만 조건문 실행
        console.log("빨강 영역 들어옴");
        startOnOffer=true;
        CliCk_redAreaOnOffer=true;

        for(j=0 ;j<redBox.length;j++){
            if(redBox[j].innerText != "0"){
                Click_Start(redBox[j]);
                break;        
            }
        }
    } else if(startOnOffer && !CliCk_redAreaOnOffer) { //중복  클릭 방지를 위해서 이런식으로 짜버림 각각의 영역마다 엔드 유무 체킹방식           
        for(j=redBox.length-1;j>=0;j--){
            if(redBox[j].innerText == "0"){
                console.log(nodeBox_check(redBox[j]));
                Click_End(redBox[j]);
                CliCk_AllOffer();
                break;    
            }
        }
    } else{ console.log("중복 클릭 멈춰!"); }
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Click_greenArea(){
    var greenBox = document.getElementsByClassName("greenNemo");
    if(!startOnOffer){  //false일 때만 조건문 실행
        console.log("녹색 영역 들어옴");
        startOnOffer=true;
        CliCk_greenAreaOnOffer=true;
        
        for(j=0 ;j<greenBox.length;j++){
            if(greenBox[j].innerText != "0"){
                Click_Start(greenBox[j]);
                break;        
            }
        }
    } else if(startOnOffer && !CliCk_greenAreaOnOffer) { //중복  클릭 방지를 위해서 이런식으로 짜버림 각각의 영역마다 엔드 유무 체킹방식           
        console.log(greenBox.length);
        for(j=greenBox.length-1;j>=0;j--){
            if(greenBox[j].innerHTML == "0"){
                console.log(nodeBox_check(greenBox[j]));
                Click_End(greenBox[j]);
                CliCk_AllOffer();
                break;
            }
        }
    } else{ console.log("중복 클릭 멈춰!"); }
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function Click_blueArea(){
    var blueBox = document.getElementsByClassName("blueNemo");
    if(!startOnOffer){  //false일 때만 조건문 실행
        console.log("파랑 영역 들어옴");
        startOnOffer=true;
        CliCk_blueAreaOnOffer=true;

        for(j=0 ;j<blueBox.length;j++){
            if(blueBox[j].innerText != "0"){
                Click_Start(blueBox[j]);
                break;        
            }
        }
    } else if(startOnOffer && !CliCk_blueAreaOnOffer) { //중복  클릭 방지를 위해서 이런식으로 짜버림 각각의 영역마다 엔드 유무 체킹방식           
        for(j=blueBox.length-1;j>=0;j--){
            if(blueBox[j].innerText == "0"){
                console.log(nodeBox_check(blueBox[j]));
                Click_End(blueBox[j]);
                CliCk_AllOffer();
                break;     
            }
        }
    } else{ console.log("중복 클릭 멈춰!"); }
}
function Click_Start(Node){ //클릭해서 옮길 영역 대상의 박스 줄을 찾습니다. 
    console.log(Node);
    temp_node = Node;
}
function Click_End(Node){   //옮길 공간의 영역의 박스를 올립니다.
    Node.innerText = temp_node.innerText;
    Node.style.color =  temp_node.style.color;
    temp_node.innerText = "0";
    // temp_node.style.color = "white";
    //종료시에 startOnOffer와 ednOnOffer를 초기화시켜서 계속해서 동작 유지하도록 아래 코드가 있어야함
    startOnOffer = false;
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function nodeBox_check(ground){
    var tmp1=temp_node.innerText;
    var tmp2=ground.innerText;
    tmpstring="";
    for(var k=1; k<=NodePlus+1; k+=2) {
        for(var i=1;i<=k;i++){
            tmpstring+="■";
            if(tmp1==tmpstring){
                tmp1=i;
            } else if(tmp2==tmpstring){
                tmp2=i;
            }
        }
    }

}
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function reverse(){
    let redBox = document.getElementsByClassName("redNemo");
    let greenBox = document.getElementsByClassName("greenNemo");
    let blueBox = document.getElementsByClassName("blueNemo");

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
// 코드의 전체적인 설명
// 기본적으로 텍스트가 없으면 div가 영역이 잡히지 않아서 0으로 기본 초기화값을 주고
// 그에 따라서 블럭 줄이 위치가 맨위가 아닌 맨 아래도 생성이 가능해졌다. 
// 그래서 있는지 여부를 배열의 맨아래부터 체크하면서 0이 아닌 값이 나올때까지 돌리는 방식으로 구성했다. 
// 리버스는 0빼고 모든값이 아래서부터 채워지게끔 설계했으므로 0빼고 나머지 값끼리만 리버스시키는 방식으로 구성했다.
// 기본적으로 위치 변경 메커니즘은
// 첫 영역 클릭 유무와 해당 영역 클릭 유무를 체크 하는 방식으로 중복 클릭을 방지하고
// 또한 0으로만 이루어진 아무것도 없는 클릭을 할 시에는 무시하도록 첫 클릭에서 만들었고
// 두번째 클릭은 배열의 끝부터 시작해서 처음까지 0이 없다면 해당 영역은 꽉찬 상태로 이동이 불가능한 영역으로 구성했다. 
// 아래서부터 있는 유무 체크 방식 이때 첫 클릭 유무 체크하는 변수들은 false로 초기화해줌