export const calculateWinner=(board)=>{
    const winningLines = [
        [0,1,2], [3,4,5], [6,7,8], //All Horizontal winning combinations
        [0,3,6], [1,4,7], [2,5,8], //All Vertical winning combinations
        [0,4,8], [2,4,6]  //All Diagobal Winning Combinations
    ]
    for(const [a,b,c] of winningLines){
        if(board[a] && board[a] === board[b] && board[a] === board[c]){
            return board[a]
        }
    }
    return null
}