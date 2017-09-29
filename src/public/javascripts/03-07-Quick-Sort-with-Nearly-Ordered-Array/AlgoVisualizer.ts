import {AlgoFrame} from './AlgoFrame'
import {QuickSortData} from './QuickSortData'

export class AlgoVisualizer {

    private DELAY;
    private g2d;
    private data;
    private data_list;
    private frame;
    private N;
    private sceneHeight;

    constructor(g2d, sceneWidth, sceneHeight, N) {

        // 动画的执行速度[毫秒]
        this.DELAY = 40;

        this.g2d = g2d;

        // 初始化数据
        this.data = new QuickSortData(N, sceneHeight);

        // 动画整个存储
        this.data_list = [];
        this.N = N;
        this.sceneHeight = sceneHeight;

        // 初始化视图
        this.frame = new AlgoFrame(g2d, sceneWidth, sceneHeight);
        this.run();
    }

    // 生成数据逻辑
    run() {
        this.setData(-1, -1, -1, -1, -1);

        this.quickSort(0, this.data.N() - 1);

        this.setData(-1, -1, -1, -1, -1);
        // 渲染数据
        this.render();
    }

    quickSort(l, r) {

        if (l > r)
            return;

        if (l == r) {
            this.setData(l, r, l, -1, -1);
            return;
        }

        this.setData(l, r, -1, -1, -1);

        let p = this.partition(l, r);
        this.quickSort(l, p - 1);
        this.quickSort(p + 1, r);
    }

    partition(l, r) {
        let v = this.data.get(l);
        this.setData(l, r, -1, l, -1);

        let j = l; // arr[l+1...j] < v ; arr[j+1...i) > v
        for( let i = l + 1 ; i <= r ; i ++ ){
            this.setData(l, r, -1, l, i);
            if( this.data.get(i) < v ){
                j ++;
                this.data.swap(j, i);
                this.setData(l, r, -1, l, i);
            }
        }

        this.data.swap(l, j);
        this.setData(l, r, j, -1, -1);

        return j;
    }

    setData(l, r, fixedPivot, curPivot, curElement) {
        let data = new QuickSortData(this.N, this.sceneHeight);
        data.l = l;
        data.r = r;
        if(fixedPivot != -1)
            data.fixedPivots[fixedPivot] = true;
        data.curPivot = curPivot;
        data.curElement = curElement;
        data.numbers = this.data.numbers.slice();
        this.data_list[this.data_list.length] = data
    }

    render() {
        let i = 0;
        setInterval(() => {
            if (i < this.data_list.length) {
                this.frame.render(this.data_list[i]);
                i++;
            }
        }, this.DELAY);
    }
}