var Game = function(player1, player2) {
  this.player1 = player1
  this.player2 = player2
}

Game.prototype.onKeyUp = function(keyPressed) {
  if (String.fromCharCode(keyPressed) === 'A')
    this.player1.advancePosition()
  if (String.fromCharCode(keyPressed) === 'M')
    this.player2.advancePosition()

  this.isGameOver()
  this.updateTrack()
}

Game.prototype.updateTrack = function() {
  if (this.player1.position > this.player2.position) {
   this.player1.strip.find('td').css('border', 'solid green')
   this.player2.strip.find('td').css('border', 'solid red')
 }
 if (this.player1.position < this.player2.position) {
   this.player1.strip.find('td').css('border', 'solid red')
   this.player2.strip.find('td').css('border', 'solid green')
 }
 if (this.player1.position === this.player2.position) {
   this.player1.strip.find('td').css('border', 'solid black')
   this.player2.strip.find('td').css('border', 'solid black')
 }
}

Game.prototype.isGameOver = function(){
  if (this.player1.strip.children().length === this.player1.position) {
    this.finishGame(this.player1)
  }
  if (this.player2.strip.children().length ===this.player2.position) {
    this.finishGame(this.player2)
  }
}

Game.prototype.finishGame = function(player) {
  console.log(player.name + " won!")
  $(document).unbind('keyup')
}



