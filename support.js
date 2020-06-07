function getTop(i){
    var top = 120*i + 20;
    return top;

}
function  getLeft(j) {
    var left = 120*j + 20;
    return left;

}

function getNumberBackgroundColor(x){
    switch (x) {
        case(2): return "#FF2B1C";break;
        case(4): return "#FF589E";break;
        case(8): return "#ED4AFF";break;
        case(16): return "#9F92FF";break;
        case(32): return "#81BAFF";break;
        case(64): return "#59FFAA";break;
        case(128): return "#a83411";break;
        case(256): return "rgba(232,232,18,0.58)";break;

    }
    return "black";
}

function getNumberColor(x){
    if(x<=4) return "#93E8E8A8";
    else return "white";
}

function nospace(){
    for(var i=0;i<4;i++)
    {
        for(var j=0;j<4;j++)
        {
          if(board[i][j]==0) return false;
        }
    }
    return true;
}

function canMoveLeft(){
    for(var i=0;i<4;i++){
        for(var j=1;j<4;j++){
            if(board[i][j]!=0){
            if(board[i][j-1]==0 || board[i][j-1]==board[i][j]) return true;}
        }
    }
    return false;
}
function canMoveUp(){
    for(var i=1;i<4;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
            if(board[i-1][j]==0 || board[i-1][j]==board[i][j]) return true;}

        }
    }
    return  false;
}
function canMoveRight(){
    for(var i=0;i<4;i++){
        for(var j=0;j<3;j++){
            if(board[i][j]!=0){
            if(board[i][j+1]==0 || board[i][j+1]==board[i][j]) return true;}

        }
    }
    return  false;
}
function canMoveDown(){
    for(var i=0;i<3;i++){
        for(var j=0;j<4;j++){
            if(board[i][j]!=0){
            if(board[i+1][j]==0 || board[i+1][j]==board[i][j]) return true;}

        }
    }
    return false;
}
function  emptyX(a,b,c) {
    for(var h=c+1;h<b;h++)
    { if(board[a][h]!=0) return false;}
    return true;
}
function  emptyY(i,j,k) {
    for(var h=k+1;h<i;h++)
    { if(board[h][j]!=0) return false;}
    return true;
}

function nomove(){
    if(canMoveDown() ||
    canMoveRight()||
    canMoveUp() ||
    canMoveLeft()) return false;
    return true;
}
function updateScore (score) {
    $("#score").text(score);

}