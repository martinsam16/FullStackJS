import {IShapes} from './shapes_interface';

export class Triangle implements IShapes{
    points: number;

    getPoints(){
        return this.points;
    }

    setPoints(points: number){
        this.points = points;
    }
}

export class Square{
    points: number;

    getPoints(){
        return this.points;
    }

    setPoints(points: number){
        this.points = points;
    }
}