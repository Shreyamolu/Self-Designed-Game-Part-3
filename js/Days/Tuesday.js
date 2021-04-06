class Tuesday{
    constructor(){
        this.tuesday = createButton("Tuesday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.tuesdaySde.hide();
    }

    display(){
        this.tuesday.position(700, 400);

        this.tuesday.mousePressed(()=>{
            
        this.tuesdaySde = createButton("My Schedule - Tue");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        monday.hide();
        monday = new Monday();
        monday.display()

        this.tuesdaySde.visible = true;

        this.tuesday.hide();
        this.input1.position(850,500);
        this.input2.position(850,600);
        this.input3.position(850,700);
        this.tuesdaySde.position(900,800);
        this.tuesdaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Tuesday",morningCount);
            patient.updateTabletCountAfternoon("Tuesday",afternoonCount);
            patient.updateTabletCountNight("Tuesday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.tuesdaySde.hide();
            var schedule = new TuesdayS(); 
            schedule.display();
        })
        })


    }
}