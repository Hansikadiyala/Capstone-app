class Player {
    constructor(){
      this.name = null;

    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      database.ref('player').set({
        name:this.name,
      });
    }
  
     getPlayerInfo(){
      var playerInfoRef = database.ref('player/name');
      playerInfoRef.on("value",(data)=>{
        playerName = data.val();
      })
     // console.log(data.val())
    }
  
    
  }
  
  
  
  
  
  