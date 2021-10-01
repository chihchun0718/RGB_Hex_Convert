const saveBtn = document.querySelector("#add-btn");
const addColor = document.getElementById('my-color');
const hexBox = document.getElementById('hex-box')
const framwork = document.querySelector(".saver")

function getColor(){
	const red = document.getElementById('red').value
	let redBox = document.querySelector('.display.r')
	redBox.style.background = 'rgb('+red+',0,0)'
	const green = document.getElementById('green').value
	let greenBox = document.querySelector('.display.g')
	greenBox.style.background = 'rgb(0,'+green+',0)'
	const blue = document.getElementById('blue').value
	let blueBox = document.querySelector('.display.b')
	blueBox.style.background = 'rgb(0,0,'+blue+')'
	const color = 'rgb('+red+', '+green+', '+blue+')' 
	document.getElementById('rgb-box').value = color
	
	//color review區域
	document.getElementById('hex-display').style.background = color
	
	// convert rgb into hex
	//避免色碼在10以下時只有單位數
	function getHex(heu) {
		if (heu.length == 1 ) {
			return "0" + Number(heu).toString(16).toUpperCase()
		} else {
		return Number(heu).toString(16).toUpperCase()
		}
	}
	
	let hexRed = getHex(red)
	let hexGreen = getHex(green)
	let hexBlue = getHex(blue)
		
	document.getElementById('hex-box').value = '#'+hexRed+hexGreen+hexBlue
	
}


document.getElementById('red').addEventListener('input', getColor)
document.getElementById('green').addEventListener('input', getColor)
document.getElementById('blue').addEventListener('input', getColor)
document.getElementById('hex-display').addEventListener('input', getColor)

// 儲存color
function addItem (text) {
  let newItem = document.createElement("div");
	newItem.classList.add("col-3")
  newItem.innerHTML = `
			<div class="display save" id="hex-display" style="background-color: ${text}" >Color Review</div>
			<label for="item">${text}</label>
			<i class="delete fa fa-trash"></i>
  `;
  addColor.appendChild(newItem);
}



// Create
saveBtn.addEventListener("click", function () {
  const inputValue = hexBox.value;

  if (inputValue.length > 0) {
    addItem(inputValue);
    // 如果input是空白的就會發生警示
  } else if (inputValue.length == 0 ) {
    emptyAlert()
  }
});

//Create2: by pressing Enter
document.addEventListener("keypress", function(event){
  const inputValue = hexBox.value;
  if (event.key === "Enter" && inputValue.length > 0) {
    addItem(inputValue)
  }
})

// Delete and check
addColor.addEventListener("click", function (event) {
  const target = event.target;

  if (target.classList.contains("delete")) {
    let parentElement = target.parentElement;
    parentElement.remove();
  } else if (target.tagName === "LABEL") {
    target.classList.toggle("checked");
  }
});


