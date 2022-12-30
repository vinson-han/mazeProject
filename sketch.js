

const button = document.getElementById('button')

// return value from input - size for maze
function getValueFromButton() {
	button.addEventListener('click', () => {
		const x = (document.getElementById('sizing').value)
		makeMaze(x, x)
	})
}

getValueFromButton()

function setup() {
	let cnv = createCanvas(500, 500)
	cnv.parent('myContainer')
}

function draw() {
	background(0, 100, 200)
}


function makeMaze(w, h) {
	console.log('hi')
	resizeCanvas(w * 100, h * 100)
}

function makeTile() {

}