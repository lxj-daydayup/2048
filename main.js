var board=[];
var score=0;

$(document).ready(
    function () {
        newgame();

    }

);
function newgame() {
    init();
    generateOneNumber();
    generateOneNumber();


}
function init(){
    for( var i = 0; i < 4; i++){
        for( var j = 0; j < 4; j++){
            var mygrid=$("#grid-cell-" + i + "-" + j);
            mygrid.css('top',getTop(i));
            mygrid.css('left',getLeft(j));
        }
    }

    for( var i=0; i<4; i++) {
        board[i] = new Array;
        for(var j=0;j<4;j++)
        {
            board[i][j]=0;
        }
    }

    updateNumberBoard();
    score=0;

}
function  updateNumberBoard() {
    $(".numberCell").remove();
    for(var i = 0; i < 4; i++){
        for(var j=0;j<4;j++){

            $("#grid-container").append('<div class="numberCell" id="numberCell-'+i+'-'+j+'"></div>');
            var myCell=$('#numberCell-'+i+'-'+j);
            if(board[i][j]==0){
                myCell.css('width',0);
                myCell.css('height',0);
                myCell.css('top',getTop(i)+50);
                myCell.css('left',getLeft(j)+50);
            }
            else{
                myCell.css('width',100);
                myCell.css('height',100);
                myCell.css('top',getTop(i));
                myCell.css('left',getLeft(j));
                myCell.css('background-color',getNumberBackgroundColor(board[i][j]));
                myCell.css('color',getNumberColor(board[i][j]));
                myCell.text(board[i][j]);

            }
        }
    }

}
function generateOneNumber(){
    if(nospace(board)) return false;
    //generate a random position (0~3)
    var randomX=parseInt(Math.floor(Math.random() * 4));
    var randomY=parseInt(Math.floor(Math.random() * 4));
    while (true){
        if(board[randomX][randomY]==0) break;
        var randomX=parseInt(Math.floor(Math.random() * 4));
        var randomY=parseInt(Math.floor(Math.random() * 4));

    }
    //generate a number[2,4]
    var number=Math.random()>0.5?2:4;
    //fill the position with the number
    board[randomX][randomY]=number;
    showNumberWithAnimation(randomX,randomY,number);

}

$(document).keydown(function(event){
    switch (event.keyCode) {
        case(37): {
            if (moveLeft())
            {
                setTimeout("generateOneNumber()",210);
                setTimeout("isGameOver()",300);
            }
            break;

        }
        case(38): {
            if (moveUp())
            {
                setTimeout("generateOneNumber()",210);
                setTimeout("isGameOver()",300);
            }
            break;
        }
        case(39): {
            if (moveRight())
            {
                setTimeout("generateOneNumber()",210);
                setTimeout("isGameOver()",300);
            }
            break;
        }
        case(40): {
            if (moveDown())
            {
                setTimeout("generateOneNumber()",210);
                setTimeout("isGameOver()",300);
            }
            break;

        }
        default: break;

    }
})
function moveLeft(){
    if(!canMoveLeft()) return false;
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]==0) continue;
            for(var k=0;k<j;k++){
            if((board[i][k]==0 || board[i][k]==board[i][j]) && emptyX(i,j,k)) {
                showMoveAnimation(i,j,i,k);
                score+=2*board[i][k];
                updateScore(score);
                board[i][k]+=board[i][j];
                board[i][j]=0;
            }
            }
        }

    }
    setTimeout("updateNumberBoard()",200);
    return true;
}
function moveUp(){
    if(!canMoveUp()) return false;
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]==0) continue;
            for(var k=0;k<i;k++){
                if((board[k][j]==0 || board[k][j]==board[i][j]) && emptyY(i,j,k)) {
                    showMoveAnimation(i,j,k,j);
                    score+=2*board[k][j];
                    updateScore(score);
                    board[k][j]+=board[i][j];
                    board[i][j]=0;}

            }
        }
    }
    setTimeout("updateNumberBoard()",200);
    return true;
}
function moveRight(){
    if(!canMoveRight()) return false;
    for(var i=0;i<4;i++){
        for(var j=2;j>=0;j--){
            if(board[i][j]==0) continue;
            for(var k=3;k>j;k--){
                if((board[i][k]==0 || board[i][k]==board[i][j]) && emptyX(i,k,j)) {
                    showMoveAnimation(i,j,i,k);
                    score+=2*board[i][k];
                    updateScore(score);
                    board[i][k]+=board[i][j];
                    board[i][j]=0;}

            }
        }
    }
    setTimeout("updateNumberBoard()",200);
    return true;
}

function moveDown(){
    if(!canMoveDown()) return false;
    for(var i=2;i>=0;i--){
        for(var j=0;j<4;j++){
            if(board[i][j]==0) continue;
            for(var k=3;k>i;k--){
                if((board[k][j]==0 || board[k][j]==board[i][j]) && emptyY(k,j,i)) {
                    showMoveAnimation(i,j,k,j);
                    score+=2*board[k][j];
                    updateScore(score);
                    board[k][j]+=board[i][j];
                    board[i][j]=0;}

            }
        }
    }
    setTimeout("updateNumberBoard()",200);
    return true;
}

function isGameOver(){
    if(nospace() && nomove()) alert("Game Over");

}