let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
let game = new Phaser.Game(config);
// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;

// new comment
/// New UFO enemy      +20
/// Added Timer        +10
/// +1 sec for hit     +20
/// new Title Screen   +10
/// Background music   +5
/// Scroll background  +5

/// removed borders    +5 (not new artwork)
/// redesign assests   +15 (spaceships and rocket, but not explosions)

/// total should be 90 points
