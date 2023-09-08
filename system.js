class System{
    constructor(canvas, canvasImg){
        this.canvas = canvas;
        this.ctx = this.canvas.getContext('2d');
        this.canvasImg = canvasImg;
        this.width = this.canvasImg.naturalWidth;
        this.height = this.canvasImg.naturalHeight;
        this.text_list = [];
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.ctx.drawImage(this.canvasImg, 0, 0);
    }

    create_text(number, text, font, textsize, color){
        if(this.text_list.length-1 < number){
            this.text_list.push(new Img_text(this, text, font, textsize, color));
        } else {
            this.text_list[number].setValue(text, font, textsize, color);
        }
    }

    drawText(){
        this.ctx.drawImage(this.canvasImg, 0, 0);
        this.text_list.forEach(element => {
            element.write();
        });
        document.getElementById("download").href = this.canvas.toDataURL("image/png");
    }

    getCanvas(){return this.canvas;}
    getCtx(){return this.ctx;}
    getCanvasImg(){return this.canvasImg;}
    getWidth(){return this.width;}
    getHeight(){return this.height;} 
}

class Img_text{
    constructor(main, text, font, textsize, color){
        this.main = main;
        this.text = text;
        this.font = font;
        this.textsize = textsize;
        this.color = color;
        this.ctx = this.main.canvas.getContext('2d');
        this.x = Math.floor(this.main.width - (Number(this.textsize)/4 * this.text.length) - Number(this.textsize));
        this.y = Math.floor(this.main.height-0.75*Number(this.textsize));
    }

    write(){
        this.ctx.font = this.textsize+'px '+this.font;
        this.ctx.fillStyle = this.color;
        this.ctx.textBaseline = 'bottom';
        this.ctx.textAlign = 'center';
        this.x = Math.floor(this.main.width - (Number(this.textsize)/4 * this.text.length) - Number(this.textsize));
        this.y = Math.floor(this.main.height-0.75*Number(this.textsize));
        this.ctx.fillText(this.text, this.x, this.y);
    }

    setValue(text, font, textsize, color){
        this.text = text;
        this.font = font;
        this.textsize = textsize;
        this.color = color;
        this.x = Math.floor(this.main.width - (Number(this.textsize)/4 * this.text.length) - Number(this.textsize));
        this.y = Math.floor(this.main.height-0.75*Number(this.textsize));
    }
}