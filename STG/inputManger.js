let rightPressed = false;
let leftPressed = false;
let upPressed = false;
let downPressed = false;

// 먼저 눌린 키를 수신할 이벤트 리스너 필요
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// target.addEventListener(type, listener[, useCapture]);
// useCapture true 이면, Capturing 방식으로 이벤트가 전달되며, false 이며, Bubling 방식으로 이벤트가 전달된다. 기본값은 false이다.
// Capturing(부모 객체부터 자식 객체로), Bubbling(자식 객체에서 부모 객채로)
// Event객체의 event.preventDefault() 함수는 기본 이벤트 핸들러의 동작을 막는다.

// 키보드가 눌렸을 때 일어나는 함수 (매개변수: e [이 때 e는 이벤트를 의미함])
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 true 
function keyDownHandler(e) {
	if(e.key == 37 || e.key == "ArrowRight") {
		rightPressed = true;
	}
	else if(e.key == 39 || e.key == "ArrowLeft") {
	  leftPressed = true;
  }
  else if(e.key == 38 || e.key == "ArrowUp") {
	  upPressed = true;
  }
  else if(e.key == 40 || e.key == "ArrowDown") {
	  downPressed = true;
  }
}
 
 
// 키보드가 안 눌렸을 때 일어나는 함수 (매개변수: e)
// 각 방향키의 keycode와 방향이 맞다면, 해당 변수들 false > 초기화
function keyUpHandler(e) {
	if(e.key == 37 || e.key == "ArrowRight") {
	  rightPressed = false;
  }
  else if(e.key == 39 || e.key == "ArrowLeft") {
	  leftPressed = false;
  }
  else if(e.key == 38 || e.key == "ArrowUp") {
	  upPressed = false;
  }
  else if(e.key == 40 || e.key == "ArrowDown") {
	  downPressed = false;
  }
}