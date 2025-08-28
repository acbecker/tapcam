class Scene {
  constructor(key) {
    this.key = key;
    this.add = {
      text: (x, y, text, style) => ({
        setOrigin: () => {}
      })
    };
  }
}

class Game {
  constructor(config) {
    this.config = config;
  }
}

const Phaser = { Scene, Game, AUTO: 0 };
module.exports = Phaser;
module.exports.default = Phaser;
