export class DateTime {
    currentDT;
    timeString;
    constructor() {
        this.update();
        setInterval(() => this.update(), 1000); 
    }
    update(){
        this.currentDT = new Date();
       this.timeString = this.currentDT.toLocaleTimeString();
    }
}

