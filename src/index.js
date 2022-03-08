import 'phaser';


//Globals
var music;

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
};

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


function preload () {
    this.load.image('logo', '../src/assets/img/logo.png');
    game.load.audio('sky', '../src/assets/sound/sky.wav');

};
var game = new Phaser.Game(config);


function create () {
    var logo = this.add.image(400, 150, 'logo');
    var group = this.add.group();
    game.stage.backgroundColor = '#4a9bd0';
    music = game.add.audio('sky');

    music.play();



    group.createMultiple({ key: 'raster', repeat: 64 });

    var hsv = Phaser.Display.Color.HSVColorWheel();

    var i = 0;

    var _this = this;

    group.children.iterate(function (child) {

        child.x = 400;
        child.y = 100;
        child.depth = 64 - i;

        child.setTint(hsv[i * 4].color);

        i++;

        _this.tweens.add({
            targets: child,
            props: {
                y: { value: 500, duration: 1500 },
                scaleX: { value: child.depth / 64, duration: 6000, hold: 2000, delay: 2000 }
            },
            yoyo: true,
            repeat: -1,
            ease: 'Sine.easeInOut',
            delay: 32 * i
        });

    });
};

function update(){
    console.log(5);
};

function render(){
    console.log(5);
};