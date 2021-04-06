class Patient{

    constructor(){
        
    }

    getTabletCountMorning(day,time){
        var tabletCountref = database.ref("Days/"+day+"/"+time);
        console.log(tabletCountref);
        tabletCountref.on("value",function (data){
            tabletCount = data.val();
        });
        return tabletCount;
    }
    updateMorning(day,time,x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
          } 
          console.log(x)
        var tabletCountref = database.ref("Days/"+day+"/");
        console.log(tabletCountref);
        tabletCountref.update({morning:x})
    }

    getTabletCountAfternoon(day,time){
        var tabletCountref = database.ref("Days/"+day+"/"+time);
        tabletCountref.on("value",function (data){
            tabletCount = data.val();
        });
        return tabletCount;
    }
    updateAfternoon(day,time,x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
          } 
          console.log(x)
        var tabletCountref = database.ref("Days/"+day+"/");
        console.log(tabletCountref);
        tabletCountref.update({afternoon:x})
    }

    getTabletCountNight(day,time){
        var tabletCountref = database.ref("Days/"+day+"/"+time);
        tabletCountref.on("value",function (data){
            tabletCount = data.val();
        });
        return tabletCount;
    }
    updateNight(day,time,x){
        if(x<=0){
            x=0;
          }else{
            x=x-1;
          } 
          console.log(x)
        var tabletCountref = database.ref("Days/"+day+"/");
        console.log(tabletCountref);
        tabletCountref.update({night:x})
    }

    updateTabletCountMorning(day,count){
        database.ref("Days/"+day+"/").update ({
            morning : count
        })
    }
    updateTabletCountAfternoon(day,count){
        database.ref("Days/"+day+"/").update ({
            afternoon : count
        })
    }
    updateTabletCountNight(day,count){
        database.ref("Days/"+day+"/").update ({
            night : count
        })
    }
}