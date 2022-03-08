var Player = /** @class */ (function () {
    function Player(name) {
        this.x = 0;
        this.y = 0;
        this.name = name;
        // this.x = 0
        // this.y = 0
    }
    Player.prototype.display = function (prefix) {
        console.log(prefix +
            " player " + this.name +
            " is at (" + this.x + ", " + this.y + ")");
    };
    return Player;
}());
var playOne = new Player('Rukno');
playOne.x = 10;
playOne.y = 10;
console.log(playOne);
playOne.display('###');
var playTwo = new Player('Emmanuel');
playTwo.x = 20;
playTwo.y = 20;
