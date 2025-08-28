import Phaser from 'phaser';
import { PlaceholderScene } from './scenes/PlaceholderScene';

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  scene: [PlaceholderScene]
};

new Phaser.Game(config);
