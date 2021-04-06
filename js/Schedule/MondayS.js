class MondayS{
    constructor(){
        this.taketM = createButton("Take Morning Tablet");
        this.taketA = createButton("Take Afternoon Tablet");
        this.taketN = createButton("Take Night Tablet");
    }

    display(){
        this.taketM.position(720,700);
        this.taketA.position(720,800);
        this.taketN.position(720,900);
        this.greeting1 = createElement().style('font-size','18px');
        this.greeting2 = createElement().style('font-size','18px');
        this.greeting3 = createElement().style('font-size','18px');
        morningCount = patient.getTabletCountMorning("Monday","morning");
        afternoonCount = patient.getTabletCountAfternoon("Monday","afternoon");
        nightCount = patient.getTabletCountNight("Monday","night")
        this.greeting1.html("Tablets in the Morning -> " + morningCount);
        this.greeting1.position(500, 700);
        this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
        this.greeting2.position(500, 800);
        this.greeting3.html("Tablets in the Night -> " + nightCount);
        this.greeting3.position(500, 900);

        this.taketM.mousePressed(()=>{
            
            patient.updateMorning("Monday","morning",morningCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new MondayS(); 
            schedule.display();
        })
        this.taketA.mousePressed(()=>{
            
            patient.updateAfternoon("Monday","afternoon",afternoonCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new MondayS(); 
            schedule.display();
        })
        this.taketN.mousePressed(()=>{
            
            patient.updateNight("Monday","night",nightCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new MondayS(); 
            schedule.display();
        })
    }
}
