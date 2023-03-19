function zoomIn(img_src){
    document.getElementById("modalImage").src=img_src
}

function zoomVideo(vid_src){
    document.getElementById("modalVideo").src=vid_src
}

function zoomTest(test_src,test_title){
    document.getElementById("testImg").src=test_src
    document.getElementById("testTitle").innerHTML = test_title
}

function stopVideo(){
    var vid = document.getElementById("modalVideo")
    vid.pause()
    vid.currentTime = 0
}