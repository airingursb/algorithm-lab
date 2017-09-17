import {AlgoFrame} from './AlgoFrame'

export class AlgoVisualizer {

    private DELAY: number = 10;
    private money: any;
    private frame: AlgoFrame;

    constructor(sceneWidth, sceneHeight) {
        this.money = [];
        for (let i = 0; i < 100; i++) {
            this.money[i] = 100;
        }

        this.frame = new AlgoFrame(sceneWidth, sceneHeight);
        this.run();
    }

    private run() {
        setInterval(() => {
            this.frame.render(this.money);
            for (let i = 0; i < this.money.length; i++) {
                let j = Math.floor(Math.random() * this.money.length);
                this.money[i] -= 1;
                this.money[j] += 1;
            }
        }, this.DELAY);
    }
}