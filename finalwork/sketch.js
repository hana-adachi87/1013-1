let stage = 0;

let ballX;
let ballSize;

let parts = [];

function setup() {
 createCanvas(windowWidth, windowHeight);

  ballX = width / 2;
  ballSize = 20;
}

function draw() {
  background(150, 220, 255);

  // 地面
  fill(240);
  rect(0, windowHeight*0.8, width, windowHeight);
     
  // 作成済み雪だるま
  drawSnowman();

  // 完成前だけ操作
  if (stage < 3) {

    let moved = false;

    if (keyIsDown(LEFT_ARROW)) {
      ballX -= 3;
      moved = true;
    }

    if (keyIsDown(RIGHT_ARROW)) {
      ballX += 3;
      moved = true;
    }

    ballX = constrain(ballX, ballSize/2, width-ballSize/2);

    // 転がすと成長
    if (moved) {
      ballSize += 1/(ballSize/20);
    }

    // 現在の雪玉
    fill(255);
    ellipse(ballX, windowHeight*0.8- ballSize/2, ballSize);
  }

  fill(0);
  textSize(15);

  if (stage < 3) {
    text("← →で転がして雪だるまをつくろう", 20, 30);
    text("SPACEでパーツ完成", 20, 60);
    text("大きさ: " + ballSize, 20, 90);
    text("Rキーで最初から作り直す",20,120)
  } else {
    fill(255, 130, 50);
    textSize(windowWidth*0.33/12)　;
    text("雪だるま完成！\nRキーで最初から作り直す",windowWidth*0.33, 50);
    if(parts[0] > parts[2] && parts[2] > parts[1]){
      fill(60,200,40);
      textSize(windowWidth*0.33/10);
      text("黄金比の雪だるま！",windowWidth*0.33,150)
    }else if(parts[2]>parts[1]&&parts[1]>parts[0]){
      fill(60,200,40);
      textSize(windowWidth*0.33/12);
      text("不安定でたおれちゃいそう",windowWidth*0.33,150)
    }else if(parts[0]>parts[1]&&parts[1]>parts[2]){
      fill(60,200,40);
      textSize(windowWidth*0.33/11);
      text("安定したバランスだね👍",windowWidth*0.33,150)
    }else{
       fill(60,200,40);
      textSize(windowWidth*0.33/12);
      text("何とも言えないバランスだ",windowWidth*0.33,150)
    }
  }
}

// スペースキーでパーツ確定
function keyPressed() {

  if (key === ' ' && stage < 3) {

    parts.push(ballSize);

    stage++;

    ballSize = 20;
    ballX = width / 2;
  }

  if (key === 'r') {
    stage = 0;
    parts = [];
    ballSize = 20;
    ballX = width / 2;
  }
}

// 雪だるま描画
function drawSnowman() {

  push();

  translate(width / 2, windowHeight * 0.8);

  fill(255);
  noStroke();

  let y = 0;

  for (let i = 0; i < parts.length; i++) {

    let size = parts[i];

    ellipse(0, -y - size / 2, size);

    y += size;
  }

  // 顔
  if (parts.length === 3) {

    let headSize = parts[2];
    let headY = parts[0] + parts[1] + headSize / 2;

    fill(0);

    ellipse(-headSize * 0.15, -headY - 5, 5);
    ellipse(headSize * 0.15, -headY - 5, 5);

    fill(255,140,0);

    triangle(
      0, -headY,
      0, -headY + 5,
      headSize * 0.3, -headY + 2
    );
  }

  pop();
}

