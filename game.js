var Game = function(player1, player2) {
  this.player1 = player1
  this.player2 = player2
} 

Game.prototype.onKeyUp = function(keyPressed) {
  if (String.fromCharCode(keyPressed) === 'A')
    this.player1.advancePosition()
  if (String.fromCharCode(keyPressed) === 'M')
    this.player2.advancePosition()

  this.winner()
  this.winning()
}

Game.prototype.winning = function() {
  if (this.player1.position > this.player2.position) {
    $('#player1_strip td').css('border', 'solid green')
   this.player2.strip.find('td').css('border', 'solid red')
  }
  if (player1count < player2count) {
    $('#player1_strip td').css('border', 'solid red')
    this.player2.strip.find('td').css('border', 'solid green')
  }
  if (player1count === player2count) {
    $('#player1_strip td').css('border', 'solid black')
    this.player2.strip.find('td').css('border', 'solid black')
  }
}

function winner() {
    if ($('#player1_strip').children().length === player1count) {
      console.log('Player1 won!')
      $(document).unbind('keyup')
    }
    if ($('#player2_strip').children().length === player2count) {
      console.log('Player2 won!')
      $(document).unbind('keyup')
    }
}



