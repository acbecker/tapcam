import Phaser from 'phaser';

export class PlaceholderScene extends Phaser.Scene {
  constructor() {
    super('PlaceholderScene');
  }

  preload() {
    // preload assets here
  }

  create() {
    const text = this.add.text(400, 300, 'Tap Defense Placeholder', {
      fontSize: '32px',
      color: '#ffffff'
    });
    text.setOrigin(0.5, 0.5);
  }
}
