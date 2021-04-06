class Wednesday{
    constructor(){
        this.wednesday = createButton("Wednesday ->");
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
        this.wednesdaySde.hide();
    }

    display(){
        this.wednesday.position(800, 400);

        this.wednesday.mousePressed(()=>{
            
        this.wednesdaySde = createButton("My Schedule - Wed");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        tuesday.hide();
        tuesday = new Monday();
        tuesday.display()

        this.wednesdaySde.visible = true;

        this.wednesday.hide();
        this.input1.position(1050,500);
        this.input2.position(1050,600);
        this.input3.position(1050,700);
        this.wednesdaySde.position(1100,800);
        this.wednesdaySde.mousePressed(()=>{
            var morningCount = this.input1.value();
            var afternoonCount = this.input2.value();
            var nightCount = this.input3.value();
            patient.updateTabletCountMorning("Wednesday",morningCount);
            patient.updateTabletCountAfternoon("Wednesday",afternoonCount);
            patient.updateTabletCountNight("Wednesday",nightCount);
            this.input1.hide();
            this.input2.hide();
            this.input3.hide();
            this.wednesdaySde.hide();
            var schedule = new WednesdayS(); 
            schedule.display();
        })
        })


    }
}