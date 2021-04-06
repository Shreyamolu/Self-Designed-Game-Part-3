class Thursday{
    constructor(){
        this.thursday = createButton("Thursday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.thursdaySde.hide();
    }

    display(){
        this.thursday.position(920, 400);

        this.thursday.mousePressed(()=>{
            
        this.thursdaySde = createButton("My Schedule - Thu");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        wednesday.hide();
        wednesday = new Monday();
        wednesday.display()

        this.thursdaySde.visible = true;

        this.thursday.hide();
        this.input1.position(1250,500);
        this.input2.position(1250,600);
        this.input3.position(1250,700);
        this.thursdaySde.position(1300,800);
        this.thursdaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Thursday",morningCount);
            patient.updateTabletCountAfternoon("Thursday",afternoonCount);
            patient.updateTabletCountNight("Thursday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.thursdaySde.hide();
            var schedule = new ThursdayS(); 
            schedule.display();
        })
        })


    }
}