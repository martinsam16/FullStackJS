interface ITime {
    current: Date;
    setTime(d: Date);
    getTime();
}

class Time implements ITime{
    current: Date;
    setTime(d: Date) {
        this.current = d;
    }
    getTime() {
        return this.current;
    }
    constructor() {

    }
}

let clock = new Time();
clock.setTime(new Date());
console.log(clock.getTime());