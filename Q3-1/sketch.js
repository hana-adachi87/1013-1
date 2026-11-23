// 心臓の鼓動のようなアニメーション
const cycle = 200; // 1周期のフレーム数
let count; // 何フレーム目か

function setup(){
  createCanvas(200, 200);
  count = 0;
}

function draw(){
  background(160, 192, 255);
  
  let speed = 1; // アニメーションの速さ
  // BLANK[2]
  count = (count + speed) % cycle;

  let size = 50;
  // BLANK[1] 1周期の前半は size が大きくなり、後半は小さくなる
 if(count < cycle / 2){
    size += count;
  }else{
    size += cycle - count;
  }
  ellipse(width / 2, height / 2, size);
}
