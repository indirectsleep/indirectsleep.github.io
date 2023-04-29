function zoomIn(img_src){
    document.getElementById("modalImage").src=img_src
}

function zoomVideo(vid_src){
    document.getElementById("modalVideo").src=vid_src
}

function zoomTest(test_src,test_title,test_id){
    document.getElementById("testImg").src=test_src
    document.getElementById("testTitle").innerHTML = test_title

    var num = test_id.match(/\d/g);
    num = num.join("");

    document.getElementById("testValue").value = num
}

function stopVideo(){
    var vid = document.getElementById("modalVideo")
    vid.pause()
    vid.currentTime = 0
}


// 1. change src of testImg

//  - get id of testImg
//  - get src of element with id of id+1
//  - testImg.src = new source