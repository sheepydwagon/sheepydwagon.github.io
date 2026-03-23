(function(){

    if(window.location.protocol !== "file:"){
        window.absolutePath = "http://sheepydwagon.github.io";
    } else {
        window.absolutePath = window.location.href.substring(0, window.location.href.search(".io")+3);
    }

    console.log(window.absolutePath);

    console.log("FYI I do not hide stuff here in the code, it's not really worth the effort. You're welcome to peek for like html/css/js inspo tho, hope u have fun!");

}());