class ThursdayS{
    constructor(){
        this.taketM = createButton("Take Morning Tablet");
        this.taketA = createButton("Take Afternoon Tablet");
        this.taketN = createButton("Take Night Tablet");
    }

    display(){
        this.taketM.position(2000,700);
        this.taketA.position(2000,800);
        this.taketN.position(2000,900);
        this.greeting1 = createElement().style('font-size','18px');
        this.greeting2 = createElement().style('font-size','18px');
        this.greeting3 = createElement().style('font-size','18px');
        morningCount = patient.getTabletCountMorning("Thursday","morning");
        afternoonCount = patient.getTabletCountAfternoon("Thursday","afternoon");
        nightCount = patient.getTabletCountNight("Thursday","night")
        this.greeting1.html("Tablets in the Morning -> " + morningCount);
        this.greeting1.position(550, 700);
        this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
        this.greeting2.position(550, 800);
        this.greeting3.html("Tablets in the Night -> " + nightCount);
        this.greeting3.position(550, 900);

        this.taketM.mousePressed(()=>{
            
            patient.updateMorning("Thursday","morning",morningCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new ThursdayS(); 
            schedule.display();
        })
        this.taketA.mousePressed(()=>{
            
            patient.updateAfternoon("Thursday","afternoon",afternoonCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new ThursdayS(); 
            schedule.display();
        })
        this.taketN.mousePressed(()=>{
            
            patient.updateNight("Thursday","night",nightCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new ThursdayS(); 
            schedule.display();
        })
    }
}
