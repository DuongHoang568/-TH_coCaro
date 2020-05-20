function changValue() {
    let positionX = prompt("X :");
    let positionY = prompt("Y :");
    data ="";
    board[positionX][positionY] = "x";
    for (let i = 0;i < 5;i++){
        data += "<br>";
        for (let j = 0; j < 5;j++){
            data += board[i][j] + "&nbsp;&nbsp;&nbsp;&nbsp;";
        }
    }
    data +="<br/><br><input type='button' value='Chang Value' onclick='changValue()'>"
    b.innerHTML = "<hr>" + data;
}