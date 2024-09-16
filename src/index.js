import { Score } from "./components/score";
import { Board } from "./components/board";
import { Tile } from "./components/tile";
import { Game } from "./components/game";

import "./styles/style.css";

let defaultTile = [[3,3], [2,3]];

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const score = new Score(ctx);
const board = new Board(ctx, defaultTile);
const game = new Game(defaultTile);

board.generationGrid();
const grid = board.initTilesList(defaultTile);

score.generationScore();
board.generationBoard();

function ss() {
  grid.map(el=>{
    if(el.tile > 0) {
      const tile = new Tile(ctx, [el.x, el.y]);
      tile.generationTile();
    }
  })
};

ss();

function handleKeyDown(key) {
  defaultTile = game.move(key, defaultTile);
  board.generationGrid();
  const grid = board.initTilesList(defaultTile);
  ss();
};

document.addEventListener('keydown', (e)=> handleKeyDown(e.key))