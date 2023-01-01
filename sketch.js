var grid = []
var current, rows, cols
var w = 50

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
	cols = floor(width / 20)
	rows = floor(height / 20)

	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			let cell = new Cell(i, j)
			grid.push(cell)
		}
	}
}

function draw() {
	background(51)

	for (let i = 0; i < grid.length; i++) {
		grid[i].show()
	}

}


function makeMaze(w, h) {
	resizeCanvas(w * 250, h * 250)
	cols = floor(width / 20)
	rows = floor(height / 20)

	for (let j = 0; j < rows; j++) {
		for (let i = 0; i < cols; i++) {
			let cell = new Cell(i, j)
			grid.push(cell)
		}
	}

	for (let i = 0; i < grid.length; i++) {
		grid[i].show()
	}


}

function makeTile() {

}

function Cell(i, j) {
	this.i = i
	this.j = j
	this.wall = [true, true, true, true]
	this.visited = false


	this.show = function () {
		var x = this.i * w
		var y = this.j * w
		stroke(255)
		noFill()
		rect(x, y, w, w)
	}
}