// 折れ線グラフ
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100);
  }

  // 横線を引く
  const n = 10;
  for(let i = 0; i < n; i++){
    line(0, height * i / n, width, height * i / n);
  }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;

  let px, py; // 一つ前の点の座標

  for(let i = 0; i < scores.length; i++){

    // 点の座標を計算
    let x = dx / 2 + i * dx;
    let y = height - scores[i] * height / 100;

    // 点を描く
    circle(x, y, 5);

    // 2個目以降は前の点と結ぶ
    if(i > 0){
      line(px, py, x, y);
    }

    // 今の点を覚える
    px = x;
    py = y;
  }
}