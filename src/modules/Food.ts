// 食物类
class Food {
    element: HTMLElement;
 
    constructor() {
        // 获取到元素food
        this.element = document.getElementById('food')!; // 加叹号表示不可能为空
    }

    get X() {
            return this.element.offsetLeft;
    }

    get Y() {
        return this.element.offsetTop;
    }

    change() {
        // 产生0~290且都是十的倍数的随机数
        let left = Math.round(Math.random()*29) * 10;
        let top = Math.round(Math.random()*29)* 10;

        this.element.style.left = left + 'px';
        this.element.style.top = top + 'px';
    }

}

export default Food;