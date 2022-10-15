let squere = {
  a1: '',
  a2: '',
  a3: '',
  b1: '',
  b2: '',
  b3: '',
  c1: '',
  c2: '',
  c3: ''
}

let player = ''
let warnig = ''
let playing = false

//função para resetar o jogo
function reset() {
  warning = ''
  let random = Math.floor(Math.random() * 2)

  player = random === 0 ? 'X' : 'O'

  for (let i in squere) {
    squere[i] = ''
  }

  playing = true
  renderSquere()
  renderInfor()
}

// função para mostar os itens na tela
function renderSquere() {
  for (let i in squere) {
    let item = document.querySelector(`div[data-item=${i}]`)
    item.innerHTML = squere[i]
  }
  checkGame()
}

function renderInfor() {
  document.querySelector('.vez').innerHTML = player
  document.querySelector('.resultado').innerHTML = warnig
}

function togglePlayer() {
  player = player == 'X' ? 'O' : 'X'
  renderInfor()
}

function checkGame() {
  if (checkWinnerFor('X')) {
    warnig = 'O "X" venceu!'
  } else if (checkWinnerFor('O')) {
    warnig = 'O "O" venceu!'
  } else if (isFull()) {
    warnig = 'Deu Velha!'
  }
}

function checkWinnerFor(player) {}

function isFull() {
  for (let i in squere) {
    if (squere[i] == '') {
      return false
    } else {
      return true
    }
  }
}
