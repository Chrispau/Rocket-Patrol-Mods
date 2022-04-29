class Menu extends Phaser.Scene {
  constructor() {
      super("menuScene");
  }

  preload() {
      // load audio
      this.load.audio('sfx_select', './assets/blip_select12.wav');
      this.load.audio('sfx_explosion', './assets/explosion38.wav');
      this.load.audio('sfx_rocket', './assets/rocket_shot.wav');
      this.load.audio('Bach', './assets/Bach.mp3');
      this.load.image('planets', './assets/planets.png');
  }

  create() {
      // menu text configuration
      let menuConfig = {
          fontFamily: 'Verdana',
          fontSize: '28px',
          backgroundColor: '#BF4D34',
          color: '#000',
          align: 'right',
          padding: {
              top: 5,
              bottom: 5,
              right:5,
              left:5,
          },
          fixedWidth: 0
      }
      
      // show menu text
      let bg = this.add.image(240,240,'planets');
      this.add.text(game.config.width/2, game.config.height/4 - borderUISize - borderPadding, 'NEW ROCKET PATROL!', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height-40, 'Use ←→ arrows to move & (F) to fire', menuConfig).setOrigin(0.5);
      this.add.text(game.config.width/2, game.config.height/2 + 3*borderUISize + 4*borderPadding, 'Press ← for Novice or → for Expert', menuConfig).setOrigin(0.5);
      this.sound.play('Bach');
      // define keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  }

  update() {
      if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
        // Novice mode
        game.settings = {
          spaceshipSpeed: 3,
          gameTimer: 60000    
        }
       
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
      if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
        // Expert mode
        game.settings = {
          spaceshipSpeed: 4,
          gameTimer: 60000    
        }
        this.sound.play('sfx_select');
        this.scene.start("playScene");    
      }
    }
}
