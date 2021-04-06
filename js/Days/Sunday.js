class Sunday{
    constructor(){
        this.sunday = createButton("Sunday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.sundaySde.hide();
    }

    display(){
        this.sunday.position(1212, 400);

        this.sunday.mousePressed(()=>{
            
        this.sundaySde = createButton("My Schedule - Sun");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        sunday.hide();
        sunday = new Monday();
        sunday.display()

        this.sundaySde.visible = true;

        this.sunday.hide();
        this.input1.position(1850,500);
        this.input2.position(1850,600);
        this.input3.position(1850,700);
        this.sundaySde.position(1900,800);
        this.sundaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Sunday",morningCount);
            patient.updateTabletCountAfternoon("Sunday",afternoonCount);
            patient.updateTabletCountNight("Sunday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.sundaySde.hide();
            var schedule = new SundayS(); 
            schedule.display();
        })
        })


    }
}