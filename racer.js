$(document).ready(function() {
  var player1 = new Player("jim", $('#player1_strip'));
  var player2 = new Player("mark", $('#player2_strip'));

  var game = new Game(player1, player2);

  $(document).on('keyup', function(event) {
    game.onKeyUp(event.which);
  });
});
