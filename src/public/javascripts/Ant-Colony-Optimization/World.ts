import {Map} from './Map';
import {Ant} from './Ant';


export class World {

    private map: any;
    private ant: any;

    constructor(x, y, ant_counts, food_counts) {
        this.map = new Map(x,y, food_counts);
        for (let i =0; i<ant_counts;i++) {
            this.ant = new Ant(this.map);
        }
    }

    public run() {

    }
}