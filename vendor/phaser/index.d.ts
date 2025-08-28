export const AUTO: number;

export class Scene {
  constructor(key?: string);
  add: {
    text(x: number, y: number, text: string, style?: any): { setOrigin(x: number, y: number): void };
  };
}

export class Game {
  constructor(config: any);
}

declare const Phaser: {
  AUTO: typeof AUTO;
  Scene: typeof Scene;
  Game: typeof Game;
};
export default Phaser;
