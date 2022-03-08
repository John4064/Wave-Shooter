import 'phaser';


//Globals
var game = new Phaser.Game(config);
var music;
var hp = 100;

class player{
    /**
     * @param color This determines what color your "avatar" will be (either hex or rgb)
     * @brief Constructor for the player class
     */
    player(color){
        this.color = color;
        this.hp = 100;
    }

    /**
     * @brief Just a accessor method that returns hp value of player
     * @returns the health point value of the player at this current time
     */
    getHP(){
        return this.hp;
    }


}
var config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: update,
        render: render
    }
};

var game = new Phaser.Game(config);


function preload () {
    this.load.image('logo', '../src/assets/img/logo.png');
    //this.load.audio('sky', ['../src/assets/sound/sky.wav']);

}

function create () {
    var logo = this.add.image(400, 150, 'logo');
    this.stage.backgroundColor = "#4488AA";

    this.tweens.add({
        targets: logo,
        y: 450,
        duration: 2000,
        ease: 'Power2',
        yoyo: true,
        loop: -1
    });


}

function update(){
    console.log(5);
}
