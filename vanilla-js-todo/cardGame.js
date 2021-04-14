/* 
Your previous Plain Text content is preserved below:

This is just a simple shared plaintext pad, with no execution capabilities.

When you know what language you'd like to use for your interview,
simply choose it from the dropdown in the top bar.

You can also change the default language your pads are created with
in your account settings: https://app.coderpad.io/settings

Enjoy your interview!


// Cards numbered “1”, “2”, “3”, “4”, “5” - 20x each (100 cards total)
// Deal 10 cards to 3 players
// 1 of the remaining cards is the initial card in play

// Cards can be played on the SAME number, or the number that is ONE HIGHER
// IE If a “2” is in play, you can play a “2” or a “3”. 
// NOTE - If a “5” is in play, you can play a “5” or “1” because there is no “6” card.



inital array of 100 cards ranging from 1 -5 

remove 10 random card for the first player and the same for the second 

Place those cards in their own seperate arrays 

played card = "random card from deck" 

if player ones card is === played card || played card +1 {
replace the played card with that card and remove from palyer ones array.  slice ?? 
go iterate through player two. 
}
 repeat same process for player two. 

 */
 function fillArray( value, len) {
    var arr = [];
    for (var i = 0; i < len; i++) {
      // console.log(value) 
      arr.push(value);
    }
    return arr;
    
  }
  
  // console.log(fillArray([1,2,3,4,5], 20))
  let old_array = fillArray([1,2,3,4,5], 20)
  const deck = old_array.concat().flat()
  console.log( deck )
  //flattens the array by combining the arrays into one array. 
  
  let card = deck[Math.floor(Math.random() * deck.length)];
  console.log(card)
  console.log(deck[card])
  //chooses a random number from the array.
  let player1= [] 
  let player2= [] 
  
  function pick(n) {
    while(player1.length < 5 && player2.length < 5 ){
      var idx = Math.floor(Math.random() * n.length);
      var str = n[idx];
      player1.push(str);
      // console.log("player1", player1)
    
      n.splice(idx, 1)
      let idx2 = Math.floor(Math.random() * n.length)
      let str2 = n[idx2]
      player2.push(str2);
      // console.log("player2", player2)
       n.splice(idx2, 1)
    }
     return (str)
  }
  
    console.log(pick(deck))
    console.log("deck",deck.length)
    console.log("player1", player1)
    console.log("player2", player2)
  
  //Now I have populated the deck and delt the cards to player 1 and 2 using random numbers. 
  
  const game=(player1, player2, deck )=>{
    console.log("deck", deck, deck.length)
    console.log(player1 , player2, deck.length)
    let pile = Math.floor(Math.random() * deck.length)
    console.log("pile", deck[pile], pile+1)
     pile =  deck[pile]
    console.log( "line 101", pile)
    // while(player1.length <= 5 && player2.length <= 5 ){
      for (let i= 0; i < player1.length; i++){ 
        for (let j = 0; j < player2.length; j++){
        console.log("p1", player1[i],i, pile, "line 105")
        
           if( (pile === 5)&& ((player1[i]=== 5 || player1[i]=== 1 ))){
             console.log("player 1 looses card", player1[i], "line109" )
            let pile = player1[i]
             player1.splice(i, 1)
  
            console.log("pile",pile, "line 112")
            console.log("player1", player1, player1.length, "line 114" )
      
            // if(player1.length = 0){
            //   return "player 1 won"
            // }
           }
                                                               
          if ((player1[i] === pile) ||(player1[i] === pile + 1 )){
            console.log("player 1 looses card", player1[i], "line 122" )
            pile = player1[i]
             player1.splice(i, 1)
  
            console.log("pile",pile, "line 112")
            console.log("player1", player1, player1.length, "line 128" )
             
            // if(player1.length = 0){
            //   return "player 1 won"
            // }
          }
       
          console.log("p2", player2[j],j, pile, "line 134")
            
          if( (pile === 5)&& ((player2[j]=== 5) ||(player2[j]=== 1 ))){
            
           console.log("player 2 looses card", player2[j],"linee 135")
            let pile = player2[j]
            player2.splice(player2[j], 1)
             
            console.log("pile",pile)
            console.log("player2", player2, player2.length)
            // if(player2.length = 0){
            //   return "player 2 won"
            // }
           
          }
          if ((player2[j] === pile) ||(player2[j] === pile + 1 )){
            console.log("player 2 looses card", player2[j], "line 148")
            pile = player2[j]
            player2.splice(j, 1)
             
            console.log("pile",pile)
            console.log("player2", player2, player2.length, "line 149")
            
            // if(player2.length = 0){
            //   return "player 2 won"
            // }
          }
         
        }
        // if(player2.length = 0){
        //     return "player 2 won"
        //   }
  
     }
  }
  game(player1, player2, deck)
  
  
  
  
  