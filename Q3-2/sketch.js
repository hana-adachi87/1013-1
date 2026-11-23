// 2D アニメーションゲームのようなインタラクション
let x, y;
let vx, vy;
const g = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
  vx = 0;
  vy = 0;
}

function windowResized(){
  resizeCanvas(windowWidth, windowHeight);
}

function draw(){
  background(160, 192, 255);
  const size = height * 0.1; // キャラクターのサイズ

  // 地面を描く
  const groundY = height * 0.8;
  fill(64, 192, 64); 
  rect(0, groundY, width, height - groundY);

  // BLANK[1] キャラクターの左右移動
  let speed = 5;
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  
   if(keyIsDown(SHIFT)){
  speed = 10;
}

  if(keyIsDown(LEFT_ARROW)){ x -= speed; }

  if(keyIsDown(RIGHT_ARROW)){ x += speed;}

  // BLANK[2] 重力とジャンプ
  // 重力
vy += g;

// 地面との当たり判定
if(y + size / 2 >= groundY){
  y = groundY - size / 2;
  vy = 0;

  // スペースキーでジャンプ
  if(keyIsDown(" ")){
    vy = -15;
  }
}


 
  // 速くなりすぎないように制限
  vx = constrain(vx, -20, 20);
  vy = constrain(vy, -20, 20);

  // 位置を更新
  x += vx;
  y += vy;

  // キャラクターを描く
  fill(0);
  ellipse(x, y, size, size);
}