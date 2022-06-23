function showImg() {
    console.log("Im in showImg!");
    // const srcName="@/assets/img/"+imgName;

    //亮出遮罩层
    const parentDiv=document.getElementById("parentDiv");
    parentDiv.style.opacity = "0.4";
    // 展示图片相框以及关闭按钮
    document.getElementById("honorImg").style.display="inline";
    document.getElementById("close").style.display="inline";
    // document.getElementById("honorImg").src=srcName;


}

function closeImg(){
    console.log("Im in closeImg!");

    // 关闭图片相框以及关闭按钮
    document.getElementById("close").style.display="none";
    document.getElementById("honorImg").style.display="none";
    //关闭遮罩层
    const parentDiv=document.getElementById("parentDiv");
    parentDiv.style.opacity = "1";
}

export { //很关键
    closeImg,
    showImg
}