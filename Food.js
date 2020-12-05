class Food{
constructor (){
var FoodStock,lastFed;
    }
    getFoodStoke(){
        FoodStockRef=database.ref('FoodStoke')
        FoodStockRef.on("value".function(data)) 
            FoodStock=data.val();
        }
       
        this.image=loadImage("images/milk.png")
    }

update(FoodStock){
    database.ref('/').update({
       FoodStock:FoodS
   })
}
    display(){
        var x=80,=100;
image(this.image,720,220,70,70)
imageMode(CENTER)
if(this.FoodStock!=0){
    for(var i=0;i<this.FoodStock;i++){
        if(i%10==0){
            x=80;
            y=y+50;;
        }
        image(this.image,x,y,50,50);
        x=x+30;
    }
}
    }

