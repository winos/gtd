// call the readline module
const readline = require('readline')

// Define interface i/o
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Init program
rl.question('De que trata tu tarea?', (answer) => {

	rl.question('Es accionable? (y/n)', (answer) => {
		if (answer.trim() === 'y') {
			rl.prompt()
			rl.question('Lo puedo realizar yo? (y/n)', (answer) => {
				if (answer.trim() === 'y') {
					rl.question('Toma menos de 2 minutos? (y/n)', (answer) => {
						if (answer.trim() === 'y') {
							show('Hazlo de inmediato!'.toUpperCase())
						} else {
							show('Debes diferir esta tarea. Te sugiero tomar estas dos medidas:')
							show('1. Next actions')
							show('2. Calendar')
						}		
						rl.close()
					})
				} else if (answer.trim() === 'n') {
					show('Debes Delegar, añadelo a la lista de Waiting For'.toUpperCase())
					rl.close()
				}
			})
		} else if (answer.trim() === 'n') {

			rl.question('Es Ùtil? (y/n)', (answer) => {
				if (answer.trim() === 'y') {
					show('Debes Archivarlo, llevarlo fuera de tu vista o agregalo'
						 .concat('a la lista de SomeDays!').toUpperCase())
				} else if (answer.trim() === 'n') {
					show('Debes Eliminarlo, votalo a la basura!'.toUpperCase())
				}
				rl.close()
			})
		}
		
	})
})

rl.on('close', closeCLI)

function closeCLI() {
	show('::Gracias recuerda accionar::')
	process.exit(0)
}

function show(msg) {
	console.log(msg)
}