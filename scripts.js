function zoomTest(test_src,test_title,test_id){
    document.getElementById("prev").disabled = false;
    document.getElementById("nxt").disabled = false;


    let slice = test_src.slice(-29, -10);
    let path = "docs/assets/images/";
    let ext = ".jpg";
    let full_size_src = path.concat("", slice, "", ext);



    document.getElementById("testImg").src=full_size_src;
    document.getElementById("testTitle").innerHTML = test_title;

    var num = test_id.match(/\d/g);
    num = num.join("");
    document.getElementById("testIndex").innerHTML = num

    images = document.getElementsByClassName("col");
    c = images.length;
    document.getElementById("numbtxt").innerHTML = num + " / " + c

}

function zoomVideo(vid_src){
    document.getElementById("modalVideo").src=vid_src
}

function stopVideo(){
    var vid = document.getElementById("modalVideo")
    vid.pause()
    vid.currentTime = 0
}


  function plusImages(n){
    images = document.getElementsByClassName("col");
    c = images.length;

    currentSrc = document.getElementById("testImg").src;
    currentTit = document.getElementById("testImg").title;
    currentIndex = document.getElementById("testIndex").innerHTML;

    i = Number(currentIndex);
    i += n;

    if (i >= c) {document.getElementById("nxt").disabled = true}
    if (i <= 1) {document.getElementById("prev").disabled = true}
    if (i > 1) {document.getElementById("prev").disabled = false}
    if (i < c) {document.getElementById("nxt").disabled = false}

    nextSrc = document.getElementById(String("img"+i)).src;
    nextTit = document.getElementById(String("img"+i)).title;
    nextIndex = document.getElementById(String("img"+i)).id;

    zoomTest(nextSrc,nextTit,nextIndex);
  }



  document.addEventListener('keydown', function (e) {
    if(e.key === "ArrowLeft"){ plusImages(-1); }    //for left arrow
    if(e.key === "ArrowRight"){ plusImages(1) }     //for right arrow
});
