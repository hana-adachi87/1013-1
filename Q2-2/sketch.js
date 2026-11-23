// チェッカー
function setup() {
  createCanvas(200, 200);
  const size = width / 8; // マスの一辺の長さ

  for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 8; j++) {

      strokeWeight(0)

      // BLANK[1] ヒント： rectのx座標は size * i, y座標は size * j

      if ((i + j) % 2 == 0) {
        fill(255);
      } else {
        fill(150)
      }
      rect(size * i, size * j, size, size)

      if (j < 3 && (i + j) % 2 == 1) {
        fill("red");
        circle(size * i + size / 2, size * j + size / 2, size * 0.8);
      }
      if (j > 4 && (i + j) % 2 == 1) {
        fill("black");
        circle(
          size * i + size / 2,
          size * j + size / 2,
          size * 0.8
        );
      }
    }
  }

}