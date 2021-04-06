class Friday{
    constructor(){
        this.friday = createButton("Friday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.fridaySde.hide();
    }

    display(){
        this.friday.position(1025, 400);

        this.friday.mousePressed(()=>{
            
        this.fridaySde = createButton("My Schedule - Fri");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        friday.hide();
        friday = new Monday();
        friday.display()

        this.fridaySde.visible = true;

        this.friday.hide();
        this.input1.position(1450,500);
        this.input2.position(1450,600);
        this.input3.position(1450,700);
        this.fridaySde.position(1500,800);
        this.fridaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Friday",morningCount);
            patient.updateTabletCountAfternoon("Friday",afternoonCount);
            patient.updateTabletCountNight("Friday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.fridaySde.hide();
            var schedule = new FridayS(); 
            schedule.display();
        })
        })


    }
}