import 'phaser';




class player extends Phaser.Class {
    /**
     * @param color This determines what color your "avatar" will be (either hex or rgb)
     * @brief Constructor for the player class
     */
    player(color) {
        this.color = color;
        this.hp = 100;
    }

    /**
     * @brief Just a accessor method that returns hp value of player
     * @returns the health point value of the player at this current time
     */
    getHP() {
        return this.hp;
    }
}





let config = {
    type: Phaser.AUTO,
    parent: 'game',
    width: 800,
    height: 600,
    //Lower the gravity slower the speed(1 doesnt move)
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 100 }
        }
    },
    backgroundColor: '#4a9bd0',
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};


function preload() {
    this.load.image('logo', '../src/assets/img/logo.png');
    this.load.audio('sky', '../src/assets/sound/sky.ogg');

}
var game = new Phaser.Game(config);

/**
 * @param game Is just the phaser game object
 * @brief just setting up and playing background music
 */
function setupMusic(game){
    game.music = game.sound.add('sky');

    //Music Config
    let musicConfig = {
        mute: false,
        volume:.5,
        rate:1,
        loop: true,
        delay:0
    }
    game.music.play(musicConfig);
}


function create() {
    //Example adding physics
    var logo = this.physics.add.image(400, 100, 'logo');

    //Load background Music
    setupMusic(this);

}

function update() {
    console.log(5);
}

function render() {
    console.log(5);
}