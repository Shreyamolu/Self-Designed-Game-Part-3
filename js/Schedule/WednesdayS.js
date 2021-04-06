class WednesdayS{
    constructor(){
        this.taketM = createButton("Take Morning Tablet");
        this.taketA = createButton("Take Afternoon Tablet");
        this.taketN = createButton("Take Night Tablet");
    }

    display(){
        this.taketM.position(2020,700);
        this.taketA.position(2020,800);
        this.taketN.position(2020,900);
        this.greeting1 = createElement().style('font-size','18px');
        this.greeting2 = createElement().style('font-size','18px');
        this.greeting3 = createElement().style('font-size','18px');
        morningCount = patient.getTabletCountMorning("Wednesday","morning");
        afternoonCount = patient.getTabletCountAfternoon("Wednesday","afternoon");
        nightCount = patient.getTabletCountNight("Wednesday","night")
        this.greeting1.html("Tablets in the Morning -> " + morningCount);
        this.greeting1.position(1150, 700);
        this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
        this.greeting2.position(1150, 800);
        this.greeting3.html("Tablets in the Night -> " + nightCount);
        this.greeting3.position(1150, 900);

        this.taketM.mousePressed(()=>{
            
            patient.updateMorning("Wednesday","morning",morningCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new WednesdayS(); 
            schedule.display();
        })
        this.taketA.mousePressed(()=>{
            
            patient.updateAfternoon("Wednesday","afternoon",afternoonCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new WednesdayS(); 
            schedule.display();
        })
        this.taketN.mousePressed(()=>{
            
            patient.updateNight("Wednesday","night",nightCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new WednesdayS(); 
            schedule.display();
        })
    }
}
