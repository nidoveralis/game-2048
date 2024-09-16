export class Game {
  constructor(arr) {
    // this.arr = arr;
  };

  move(key, arr) {
    console.log(key);
    const newArr = []
    if (key === 'ArrowUp') {
      arr.map((el) => newArr.push([el[0], el[1] > 0 ? el[1] - 1 : el[1]]));
    } else if (key === 'ArrowDown') {
      arr.map((el) => newArr.push([el[0], el[1] < 3 ? el[1] + 1 : el[1]]));
    }else if (key === 'ArrowLeft') {
      arr.map((el) => newArr.push([el[0] > 0 ? el[0] - 1 : el[0], el[1]]));
    }else {
      arr.map((el) => newArr.push([el[0] < 3 ? el[0] + 1 : el[0], el[1]]));
    };
    return newArr;
  }
}