var Player = function(name, strip) {
  this.name = name 
  this.strip = strip
  this.position = 1
}

Player.prototype.advancePosition = function() {
  this.strip.find('td.active').removeClass('active').next().addClass('active')
  this.position += 1
}
