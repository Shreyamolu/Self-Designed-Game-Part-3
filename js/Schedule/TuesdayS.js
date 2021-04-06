class TuesdayS{
    constructor(){
        this.taketM = createButton("Take Morning Tablet");
        this.taketA = createButton("Take Afternoon Tablet");
        this.taketN = createButton("Take Night Tablet");
    }

    display(){
        this.taketM.position(1120,700);
        this.taketA.position(1120,800);
        this.taketN.position(1120,900);
        this.greeting1 = createElement().style('font-size','18px');
        this.greeting2 = createElement().style('font-size','18px');
        this.greeting3 = createElement().style('font-size','18px');
        morningCount = patient.getTabletCountMorning("Tuesday","morning");
        afternoonCount = patient.getTabletCountAfternoon("Tuesday","afternoon");
        nightCount = patient.getTabletCountNight("Tuesday","night")
        this.greeting1.html("Tablets in the Morning -> " + morningCount);
        this.greeting1.position(900, 700);
        this.greeting2.html("Tablets in the Afternoon -> " + afternoonCount);
        this.greeting2.position(900, 800);
        this.greeting3.html("Tablets in the Night -> " + nightCount);
        this.greeting3.position(900, 900);

        this.taketM.mousePressed(()=>{
            
            patient.updateMorning("Tuesday","morning",morningCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new TuesdayS(); 
            schedule.display();
        })
        this.taketA.mousePressed(()=>{
            
            patient.updateAfternoon("Tuesday","afternoon",afternoonCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new TuesdayS(); 
            schedule.display();
        })
        this.taketN.mousePressed(()=>{
            
            patient.updateNight("Tuesday","night",nightCount);
			
			 this.greeting1.hide();
			  this.greeting2.hide();
			   this.greeting3.hide();
			 
            var schedule = new TuesdayS(); 
            schedule.display();
        })
    }
}
