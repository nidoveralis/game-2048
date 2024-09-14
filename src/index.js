import { Score } from "./components/score";
import { Board } from "./components/board";
import { Tile } from "./components/tile";

import "./styles/style.css";

const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const score = new Score(ctx);
const board = new Board(ctx);
const tile = new Tile(ctx, 1);
const tile1 = new Tile(ctx, 2);
const tile2 = new Tile(ctx, 3);
const tile3 = new Tile(ctx, 4);


score.generationScore();

board.generationBoard();
board.generationGrid();

tile.generationTile();
tile1.generationTile();
tile2.generationTile();
tile3.generationTile();

