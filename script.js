//画像を読み込んでImageオブジェクトを作成する
var canvas;
var base64;
var ctx;
// canvas = document.getElementById('preview');
// ctx = canvas.getContext('2d');
// var canvasImg = document.getElementById("canvas-img");
// ctx.drawImage(canvasImg, 0, 0);
var image = new Image();
image.src = 'test.png';
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
    var text = document.getElementById('canvas_text');
    //文字のスタイルを指定
    ctx.font = '32px serif';
    ctx.fillStyle = '#404040';
    //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
    ctx.textBaseline = 'center';
    ctx.textAlign = 'center';
    //座標を指定して文字を描く（座標は画像の中心に）
    var x = (canvas.width / 2);
    var y = (canvas.height / 2);
    ctx.fillText(text.value, x, y);
    base64 = canvas.toDataURL("image/png");
    document.getElementById("download").href = base64;
}
function share(){
    // Web Share APIの対応判定
    var base64 = canvas.toDataURL("image/png");
    if (navigator.share !== undefined){
        // CanvasをBlobに変換→pngに変換
        canvas.toBlob( (blob) => {
            const shareImg = new File([blob], 'share.png', {type: 'image/png'})
            // シェア
            navigator.share({
                text: "トイプードルのひとこと",
                url: "https://web-breeze.net/add-text-to-image-and-share/",
                files: [shareImg]
            })
        })
    } else {
        alert("ご利用のブラウザがWeb Share APIに対応していません・・・")
    }
}