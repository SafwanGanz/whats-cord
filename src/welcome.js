const Canvas = require("canvas");
class Welcome {
    constructor() {
        this.grupname = null;
        this.avatar = null;
        this.membername = null;
        this.background = null;
        this.message = null;
    }
    setGroupName(grupname) {
        this.grupname = grupname;
        return this;
    }
    setAvatar(source) {
        this.avatar = source;
        return this;
    }
    setBackground(source) {
        this.background = source;
        return this;
    }
    setMemberName(name) {
        this.membername = name;
        return this;
    }
    setMessage(message) {
        this.message = message;
        return this;
    }
    async build() {
    const canvas = Canvas.createCanvas(1024, 500);
    const context = canvas.getContext('2d');
    let nm = this.membername.length > 13 ? this.membername.substring(0, 9) + "..." : this.membername;
    const background = await Canvas.loadImage(this.background);
        context.drawImage(background, 0, 0, 1024, 500);
        context.font = '42px serif';
        context.textAlign = 'center'
	    context.fillStyle = '#ffffff';
	    context.fillText('Hello' + ' ' + nm, canvas.width - 512,          canvas.height - 200);
        context.font = ' 32px ariel';
        context.textAlign = 'center'
        context.fillStyle = '#FFFFFF';
        context.fillText(this.messsage, canvas.width - 512, canvas.height - 150);
        context.font = ' 32px trajan-bold';
        context.textAlign = 'center'
        context.fillStyle = '#FFFFFF';
        context.fillText(this.grupname, canvas.width - 512, canvas.height - 110);
	    context.beginPath();
 	    context.arc(512, 150, 80, 0, Math.PI * 2, true);
        context.strokeStyle = '#FFFFFF';
        context.lineWidth = 6;
        context.stroke();
        context.save();
	    context.closePath();
	    context.clip();
    const avatar = await Canvas.loadImage(this.avatar);
       context.drawImage(avatar, 391, 47, 218, 219);
        return canvas.encode("png");
    }

}

module.exports = Welcome;
