//画像を読み込んでImageオブジェクトを作成する
var canvas;
var base64;
var ctx;
// canvas = document.getElementById('preview');
// ctx = canvas.getContext('2d');
// var canvasImg = document.getElementById("canvas-img");
// ctx.drawImage(canvasImg, 0, 0);
var element = document.getElementById('myslider');
var image = new Image();
image.src = 'https://mira-aimiku.github.io/AIart/test.png';
image.onload = (function () {
    //画像ロードが完了してからキャンバスの準備をする
    canvas = document.getElementById('preview');
    ctx = canvas.getContext('2d');
    //キャンバスのサイズを画像サイズに合わせる
    canvas.width = image.width;
    canvas.height = image.height;
    //キャンバスに画像を描画（開始位置0,0）
    var canvasImg = document.getElementById("canvas-img");
    ctx.drawImage(canvasImg, 0, 0);
});
//キャンバスに文字を描く
function drawText()
{
    var canvasImg = document.getElementById("canvas-img");
    var text = document.getElementById('canvas_text');
    //文字のスタイルを指定
    ctx.font = element.value+'px IPAMincho';
    ctx.fillStyle = '#ffffff';
    //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
    ctx.textBaseline = 'bottom';
    ctx.textAlign = 'center';
    //座標を指定して文字を描く（座標は画像の中心に）
    var x = (canvas.width / 2);
    x = Math.ceil(canvas.width-(Number(element.value)*2+element.value.length*(Number(element.value)/1)));
    var y = (canvas.height / 2);
    y = Math.ceil(canvas.height-1.75*Number(element.value)+Number(element.value));
    console.log(x);
    console.log(y);
    ctx.drawImage(canvasImg, 0, 0);
    ctx.fillText(text.value, x, y);
    base64 = canvas.toDataURL("image/png");
    document.getElementById("download").href = base64;
}