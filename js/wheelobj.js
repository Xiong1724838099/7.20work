function wheel(wins, opts, bopts, runopt) {
    this.init();
    this.getWin();
    this.createBox();
    this.createList();
    this.creatBtnBox();
    this.creatBtn();
    this.autoRun();
    this.clickRun();
}
wheel.prototype = {
    init() {
        this.wins = this.win = wins

        if (!wins && wins.nodeType == 1) {
            console.error("窗口元素not defind");
            return;
        }
        this.imgLength = opts.img.length + 1;
        console.log(imgLength)
        if (this.imgLength == 0) {
            console.error("没有相应的轮播图内容")
            return;
        }
        opts.img.push(this.opts.img[0]);
        opts.imgColor.push(this.opts.imgColor[0]);
        this.imgSize = opts.imgSize;
        if (!(this.imgSize instanceof Array)) {
            console.error("请传入合理的尺寸类型")
        }
        if (this.imgSize == 0) {
            this.imgSize[0] = this.documentElement.clientWidth;
            this.imgSize[1] = 400;
        }
        if (this.imgSize.some(function (val) {
            return val == 0;
        })) {
            for (var i = 0; i < 2; i++) {
                if (this.imgSize[i] == 0) {
                    this.imgSize[i] = 500;
                }
            }
        }
        if (runopt.runStyle == "liner" || !(runopt.runStyle)) {
            this.runStyle = Tween.Linear;
        } else if (runopt.runStyle == "in") {
            this.runStyle = Tween.Quad.easeIn;
        } else if (runopt.runStyle == "out") {
            this.runStyle = Tween.Quad.easeOut;
        }
    },
    getWin() {
        this.wins = document.querySelector(wins);
        this.Time = runopt.time * 1000 || 5000;
        this.runStyle = null;
        this.imgColor = opts.imgColor;
        this.links = opts.links;
        this.btnColor = bopts.btnColor || "red";
        this.btnSelect = bopts.btnSelect || "blue";
        this.btnPos = bopts.btnPos || ["center", "40"];
    },
    createBox() {
        this.wins.style.cssText = "width:100%;height:" + imgSize[1] + "px;position:relative;";
        //创建容器
        this.box = document.createElement("div");
        this.box.style.cssText = "width:" + this.imgLength * 100 + "%;height:100%;border:1px solid red";
        this.wins.appendChild(this.box);
    },
    createList() {
        for (var i = 0; i < this.imgLength; i++) {
            this.divList = document.createElement("div");
            this.divList.style.cssText = `float:left;width:${100 / imgLength}%;height:100%;background:${opts.imgColor[i]};
            border:1px solide red`;
            this.link = document.createElement("a");
            this.link.href = opts.links[i];
            this.link.style.cssText = "margin:auto;display：block;background:url(" + this.opts.img[i] + ") no-repeat 0 0;width:" + this.imgSize[0] + "px;height:" + this.imgSize[1] + "px;"
            this.divList.appendChild(this.link)
            this.box.appendChild(this.divList)

        }
    },
    creatBtnBox() {
        this.btnBox = document.createElement("div");
        this.btn.style.cssText = "position:absolute;left:0;right:0;bottom:" + btnPos[1] + ";height:20px;width:300px;"
        this.wins.appendChild(this.brnBox);
    },
    creatBtn() {
        for (var i = 0; i < this.imgLength - 1; i++) {
            this.btns = document.createElement("div");
            if (i = 0) {
                btns.style.cssText = "height:20px;width:20px;background:" + this.btnColorr + ";float:left;cursor:pointer;margin:0 10px;border-radius:50%;"
            } else {

                this.btns.style.cssText = "height:20px;width:20px;;background:" + this.btnSelect + ";float:left;cursor:pointer;margin:0 10px;border-radius:50%;"
            }
        }
        this.btnBox.appendChild(this.btn);
    },
    autoRun(){
        this.wid = parseInt(getComputedStyle(wins, null).width);
        var num = 0;
        //无缝轮播
        //及时完成
        //自动轮播
        var t = setInterval(move,time)
        function move() {
            num++
            if (num > this.btns.length-1) {
                animate(box,{"margin-left": -num * this.wid},500,this.runStyle,function(){
                    this.box.style.marginLeft=0;
                })
                num = 0;
            }else{
            animate(box, {
                "margin-left": -num * this.wid
            }, 500)}
            for (var i = 0; i < this.btns.length; i++) {
                this.btns[i].style.background = this.btnSelect;
            }
            this.btns[num].style.background = this.btnColor;
        }
        this.wins.onmouseover = function () {
            clearInterval(t)
        }
        this.wins.onmouseout = function () {
            t = setInterval(move, time)
        }
    },
    clickRun(){
        for (let i = 0; i < this.btns.length; i++) {
            this.btns[i].onclick = function () {
                num = i;
                animate(box, {
                    "margin-left": -num * this.wid
                }, 500)
                for (var j = 0; j < this.btns.length; j++) {
                    this.btns[j].style.background = this.btnSelect;
                }
                this.btns[num].style.background = this.btnColor;
            }
        
        }
    }
}
