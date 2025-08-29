# Tap Defense Game Scaffold

This repository contains a starter implementation for a tap defense game using TypeScript. To work without external registry access, minimal stub versions of required packages are vendored under `vendor/` and referenced via local `file:` dependencies.

## Game

The `game` directory holds the front end.

```sh
cd game
npm install
npm run build # emits dist/main.js and copies index.html
```

Open `game/dist/index.html` in a browser to view the placeholder scene.

To inspect the prototype **Graveyard Field** layout used for the tower-defense level,
open `game/public/graveyard-preview.html` in a browser. It renders a 500×500 ft
graveyard map with the winding path and scattered graves so you can visually
verify the terrain before importing it into Roblox.

## Infrastructure

The `infra` directory includes stubbed AWS CDK constructs.

```sh
cd infra
npm install
npm run build
```

Because all dependencies are local, these commands do not require access to the public npm registry.

## Next Steps

To continue iterating on the game:

- Upload a background image for the scene.
- Describe the characters, weapons, and bonuses you want.
- Outline the enemies for each level.

This information will guide future development and deployment work.
