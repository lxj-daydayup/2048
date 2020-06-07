function showNumberWithAnimation(i,j,number) {
    var mycell = $('#numberCell-' + i + '-' + j);
    mycell.css('background-color', getNumberBackgroundColor(number));
    mycell.css('color', getNumberColor(number));
    mycell.text(number);
    mycell.animate({
        width: "100px",
        height: "100px",
        top: getTop(i),
        left: getLeft(j)

    }, 50);

}
function showMoveAnimation(fromx,fromy,tox,toy){
    var mycell=$("#numberCell-"+fromx+"-"+fromy);
    mycell.animate({
        top: getTop(tox),
        left: getLeft(toy)
    },200)
}