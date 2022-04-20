var fromList = [];      //처음 클릭한 영역의 노드들을 지정하기 위해 만든 변수
var toList = [];      //옮길 영역의 노드들을 지정하기 위해 만든 변수

var Clickstate          //////////////////////////////////////////////
var temp_Clickstate=0;  // 처음 클릭후 옮길 영역을 구분하기 위해 넣음 //
var fromOrto = false;   //////////////////////////////////////////////

//클릭하면서 재선언해서 List 초기화 방지를 위해 그냥 전역변수로 빼버림

function Area_Click_Manager(AreaControll){
    var Clickstate = 0; //어디를 클릭했는지 편하게 체크하기 위해 만든 변수(정수 선호파)
    

    if(AreaControll=="Left"){Clickstate=1;}
    else if(AreaControll=="Center"){Clickstate=2;}
    else if(AreaControll=="Right"){Clickstate=3;}
    // console.log(Clickstate);
    fromAndtoChecker(fromOrto, Clickstate);


}

function fromAndtoChecker(OnOffer, Clickstate){
    if(!OnOffer){
        console.log("in from");
        switch(Clickstate){
            case 1:
                fromList = document.getElementsByClassName("LeftNemo");
                break;
            case 2:
                fromList = document.getElementsByClassName("CenterNemo");
                break;
            case 3:
                fromList = document.getElementsByClassName("RightNemo");
                break;
        }
        fromOrto = true;
        temp_Clickstate = Clickstate;
    } else if (OnOffer && temp_Clickstate!=Clickstate){
        console.log("in to");
        switch(Clickstate){
            case 1:
                toList = document.getElementsByClassName("LeftNemo");
                break;
            case 2:
                toList = document.getElementsByClassName("CenterNemo");
                break;
            case 3:
                toList = document.getElementsByClassName("RightNemo");
                break;
        }
        compare();
        fromOrto = false;
    }
}

function compare(){
    console.log("in compare");
    // console.log(toList[toList.length-1].innerText);
    let i,j;
    let Nemocheck="";

    for(j=0;j<fromList.length;j++){
        if(fromList[j].innerText!='0') { break;}
    }   // 0이 아닌 블럭을 찾아서 옮길 수있게 j값 찾음
    for(i=0;i<toList.length;i++){
        if(toList[i].innerText!='0'){
            //특별 스왑
            console.log("in special swap");
            
            //블럭수 계산하기
            if(countBlock(j,i)){
                swap(j,i-1);    
            }
            //블럭수 계산하기
            break;
        }
    }   //해당 반복문 그냥 종료 시 toList에는 0값만 존재하는 사실을 알수 있기에 그냥 깡으로 맨 마지막 스왑하기
    if(toList[toList.length-1].innerText=='0'){
        //일반 스왑
        swap(j,toList.length-1);
    }
}

function swap(fromIndex,transIndex){
    console.log("in nomal_swap");
    let temp_string = toList[transIndex].innerText; 
    let temp_color = toList[transIndex].style.color;

    toList[transIndex].innerText = fromList[fromIndex].innerText;
    toList[transIndex].style.color = fromList[fromIndex].style.color;
    
    fromList[fromIndex].innerText = temp_string;
    fromList[fromIndex].style.color = temp_color;
}

function countBlock(from,to){
    let fromBlock = fromList[from].innerText;
    let toBlock = toList[to].innerText;

    let surveyBlock = "";
    
    var z;
    var u;

    for(u=0;u<fromList.length*2;u++){
        surveyBlock += "■";
        if(fromBlock == surveyBlock) {
            console.log("from : "+u+", surveyBlock : "+surveyBlock);
            break;
        }
    }
    
    surveyBlock = "";

    for(z=0;z<toList.length*2;z++){
        surveyBlock += "■";
        if(toBlock == surveyBlock) {
            console.log("to : "+z+", surveyBlock : "+surveyBlock);
            break;
        }
    }

    console.log("from : "+u+", to : "+z);
    if(u > z) {
        alert("큰 링은 작은 링 위에 못두어요");
        return false;
    }
    else if (u < z) {
        
        return true;
    }
}