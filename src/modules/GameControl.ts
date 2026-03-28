import Snake from './Snake';
import Food from './Food';
import ScorePannel from './ScorePannel';


class GameControl {
    snake: Snake;
    food: Food;
    scorePannel: ScorePannel;

    // 存放蛇的移动方向
    direction: string = 'right';
    // 蛇是否
    isLive: boolean = true;

    constructor(){
        this.snake = new Snake();
        this.food = new Food();
        this.scorePannel = new ScorePannel();
        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this))
        this.run()
        
    }
    /**
     * 键盘事件处理
     * @param event 
     */
    keydownHandler(event: KeyboardEvent) {
        this.direction = event.key;
    }

    run() {
        let x = this.snake.X;
        let y = this.snake.Y;

        switch(this.direction) {
            case "ArrowUp":
            case "Up":
                y -= 10;
                break;
            case "ArrowDown":
            case "Down":
                y += 10;
                break;
            case "ArrowLeft":
            case "Left":
                x -= 10;
                break;
            case "ArrowRight":
            case "Right":
                x += 10;
                break;
        }
        //console.log('Snake position:', x, y, 'Direction:', this.direction);
        
        this.checkEat(x, y);

        try {
            this.snake.X = x;
            this.snake.Y = y;
        } catch (error: unknown) {
            alert((error as Error).message+'，游戏结束')
            this.isLive = false;
            return;
        }
        
        setTimeout(this.run.bind(this), 300-(this.scorePannel.level-1)*30)
    }

    checkEat(X:number, Y:number) {
        if(this.snake.X === this.food.X && this.snake.Y === this.food.Y) {
            this.snake.addBody();
            this.food.change();
            this.scorePannel.addScore();
            
        }
    }

}

export default GameControl;
