//画像を読み込んでImageオブジェクトを作成する
var canvas;
var base64;
var ctx;
var main_system;
var element = document.getElementById('myslider');
class test{
    constructor(a){
        this.a = a;
    }
    b(){
        return new test2(this);
    }
}
class test2{
    constructor(a){
        this.a = a;
    }
    c(){
        return this.a.a;
    }
}
var a = new test("abc");
var b = a.b();
console.log(b.c());
function drawText()
{
    var element = document.getElementById('myslider');
    // var canvasImg = document.getElementById("canvas-img");
    // var text = document.getElementById('canvas_text');
    // //文字のスタイルを指定
    // ctx.font = element.value+'px IPAMincho';
    // ctx.fillStyle = '#ffffff';
    // //文字の配置を指定（左上基準にしたければtop/leftだが、文字の中心座標を指定するのでcenter
    // ctx.textBaseline = 'bottom';
    // ctx.textAlign = 'center';
    // //座標を指定して文字を描く（座標は画像の中心に）
    // var x = Math.floor(canvas.width - (Number(element.value)/4 * text.value.length) - Number(element.value));
    // var y = Math.floor(canvas.height-0.75*Number(element.value));
    // console.log(x);
    // console.log(y);
    // ctx.drawImage(canvasImg, 0, 0);
    // ctx.fillText(text.value, x, y);
    // base64 = canvas.toDataURL("image/png");
    // document.getElementById("download").href = base64;
    main_system.create_text(0, document.getElementById('canvas_text').value, "IPAMincho", element.value, document.getElementById("head").value);
    main_system.drawText();
}

function auto() {
    var scale;
    if(main_system.height > main_system.width){
        scale = main_system.height / 3840;
    } else {
        scale = main_system.width / 3840;
    }
    var element = document.getElementById('myslider');
    element.value = Math.floor(element.value*scale);
}

function preview (e) {
    // ファイル未選択
    if (!e.files.length) return;
    // ファイルを1件ずつ処理する
    var errMsg = "";
    for (var i = 0; i < e.files.length; i++) {
        var file = e.files[i];
      // 想定したMIMEタイプでない場合には処理しない
        if (!/^image\/(png|jpeg|gif)$/.test(file.type)) {
            errMsg += "ファイル名: " + file.name + ", 実際のMIMEタイプ: " + file.type + "\n\n";
            continue;
        }
        var fr = new FileReader();
        fr.onload = function () {
            var tmpImg = document.getElementById("canvas-img");
            tmpImg.src = this.result;
            tmpImg.onload = function () {
                canvas = document.getElementById('preview');
                main_system = new System(canvas,this);
            }
        }
        // 画像読み込み
        fr.readAsDataURL(file);
        console.log(file);
    }

    // エラーがあれば表示する
    if (errMsg != "") {
        errMsg = "以下ファイルはMIMEタイプが対応していません。\n"
            + "MIMEタイプはimage/png, image/jpeg, image/gifのみ対応です。\n\n"
            + errMsg;
        alert(errMsg);
    }
}