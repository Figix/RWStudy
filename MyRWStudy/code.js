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
function init() {
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var redBox = document.getElementsByClassName("redNemo");

for(var i=redBox.length+redBox.length-1;i>=1;i=i-2){
    for(j=1;j<=i;j++){
        blockcount += "■";
    }
    console.log(blockcount+i);
    console.log(colorsArr[colorvar]);
    
    redBox[colorvar].innerHTML='<div style="color:'+colorsArr[colorvar]+'">'+blockcount+'<div>'
    //폰트 사이즈조절

    blockcount="";//초기화
    colorvar++; //출력후 색변경하려고 넣음
}       colorvar =0;    //이 변수가 컬러변수 초기화하는 변수
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
}