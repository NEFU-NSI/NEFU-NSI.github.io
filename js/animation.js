var indexBg = document.getElementById('home')

indexBg.onmousemove = function (event) {
    event = event || window.event;

    var st = document.body.scrollTop || document.documentElement.scrollTop;
    var sl = document.body.scrollLeft || document.documentElement.scrollLeft;

    var left = event.clientX;
    var top = event.clientY;

    var winWidth = document.body.clientWidth;
    var winHeight = document.body.clientHeight;

    //console.log(left)
    console.log(winWidth)
    // indexBg.style.backgroundSize = (left / winWidth) * 100 + 200 + '%';
    // indexBg.style.backgroundPositionX = -(left / winWidth) * 10 + '%';

}