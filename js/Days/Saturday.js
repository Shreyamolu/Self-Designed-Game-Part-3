class Saturday{
    constructor(){
        this.saturday = createButton("Saturday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.saturdaySde.hide();
    }

    display(){
        this.saturday.position(1112, 400);

        this.saturday.mousePressed(()=>{
            
        this.saturdaySde = createButton("My Schedule - Sat");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        saturday.hide();
        saturday = new Monday();
        saturday.display()

        this.saturdaySde.visible = true;

        this.saturday.hide();
        this.input1.position(1650,500);
        this.input2.position(1650,600);
        this.input3.position(1650,700);
        this.saturdaySde.position(1700,800);
        this.saturdaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Saturday",morningCount);
            patient.updateTabletCountAfternoon("Saturday",afternoonCount);
            patient.updateTabletCountNight("Saturday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.saturdaySde.hide();
            var schedule = new SaturdayS(); 
            schedule.display();
        })
        })


    }
}