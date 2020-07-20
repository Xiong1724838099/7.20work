function wheel(wins, opts,bopts) {
    var wins = document.querySelector(wins);
    if (!wins && wins.nodeType == 1) {
        console.error("窗口元素not defind");
        return;
    }
    var imgLength = opts.img.length+1;
    console.log(imgLength)
    if (imgLength == 0) {
        console.error("没有相应的轮播图内容")
        return;
    }
    opts.img.push(opts.img[0]);
    opts.imgColor.push(opts.imgColor[0]);
    var imgSize = opts.imgSize;
    if (!(imgSize instanceof Array)) {
        console.error("请传入合理的尺寸类型")
    }
    if(imgSize==0){
        imgSize[0]=document.documentElement.clientWidth;
        imgSize[1]=400;
    }
   if(imgSize.some(function(val){
       return val==0;
   })){
       for (var i=0;i<2;i++){
           if(imgSize[i]==0){
               imgSize[i]=500;
           }
       }
   }
   // imgSize.some()
    console.log(imgSize)
    var imgColor=opts.imgColor;
    var links = opts.links;
    var btnColor = bopts.btnColor || "red";
    var btnSelect = bopts.btnSelect || "blue";
    var btnPos = bopts.btnPos || ["center", "40"];
    //创建html样式
    wins.style.cssText="width:100%;height:"+imgSize[1]+"px;position:relative;";
    //创建容器
    var box = document.createElement("div");
    box.style.cssText = "width:" + imgLength * 100 + "%;height:100%;border:1px solid red";
    wins.appendChild(box);
    //创建每个轮播
    for (var i = 0; i < imgLength; i++) {
        var divList=document.createElement("div");
        divList.style.cssText=`float:left;width:${100/imgLength}%;height:100%;background:${opts.imgColor[i]};
        border:1px solide red`;
        var link=document.createElement("a");
        link.href=opts.links[i];
        link.style.cssText="margin:auto;display：block;background:url("+opts.img[i]+") no-repeat 0 0;width:"+imgSize[0]+"px;height:"+imgSize[1]+"px;"
        divList.appendChild(link)
        box.appendChild(divList)
        
    }    
    //创建按钮容器
    var btnBox=document.createElement("div");
    btn
  for(var i=0;i<imgLength-1;i++){
    var btn = document.createElement("div");
      if(i=0){
        btn.style.cssText="height:20px;width:300px;position:absolute;left:0;right:0;bottom:"+btnPos[1]+";background:"+btnColor+";float:left;cursor:pointer;margin:0 10px;border-radius:50%;"
      }else{
      
    btn.style.cssText="height:20px;width:300px;position:absolute;left:0;right:0;bottom:"+btnPos[1]+";background:"+btnSelect+";float:left;cursor:pointer;margin:0 10px;border-radius:50%;"}
  }
    btnBox.appendChild(btn);
}
wins.appendChild(brnBox)