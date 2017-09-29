import {AlgoFrame} from './AlgoFrame'
import {MergeSortData} from './MergeSortData'

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
        this.data = new MergeSortData(N, sceneHeight);

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
        this.setData(-1, -1, -1);

        for (let sz = 1; sz < this.data.N(); sz *= 2)
            for (let i = 0; i < this.data.N() - sz; i += sz + sz)
                // 对 arr[i...i+sz-1] 和 arr[i+sz...i+2*sz-1] 进行归并
                this.merge(i, i + sz - 1, Math.min(i + sz + sz - 1, this.data.N() - 1));
        this.setData(0, this.data.N() - 1, this.data.N() - 1);

        // 渲染数据
        this.render();
    }

    merge(l, mid, r) {

        let aux = [];

        for (let a = l; a < r + 1; a++) {
            aux.push(this.data.numbers[a])
        }

        // 初始化，i指向左半部分的起始索引位置l；j指向右半部分起始索引位置mid+1
        let i = l, j = mid + 1;
        for (let k = l; k <= r; k++) {

            if (i > mid) {  // 如果左半部分元素已经全部处理完毕
                this.data.numbers[k] = aux[j - l];
                j++;
            }
            else if (j > r) {   // 如果右半部分元素已经全部处理完毕
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else if (aux[i - l] < aux[j - l]) {  // 左半部分所指元素 < 右半部分所指元素
                this.data.numbers[k] = aux[i - l];
                i++;
            }
            else {  // 左半部分所指元素 >= 右半部分所指元素
                this.data.numbers[k] = aux[j - l];
                j++;
            }

            this.setData(l, r, k);
        }
    }

    setData(l, r, mergeIndex) {
        let data = new MergeSortData(this.N, this.sceneHeight);
        data.l = l;
        data.r = r;
        data.mergeIndex = mergeIndex;
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