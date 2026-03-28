import './style/index.less';
import Food from './modules/Food'
import ScorePannel from './modules/ScorePannel'
import Snake from './modules/Snake'
import GameControl from './modules/GameControl'

const food = new Food();
console.log(food.X, food.Y);
food.change()
console.log(food.X, food.Y);


const scorepannel = new ScorePannel(10,1)
// scorepannel.addScore()
// scorepannel.addScore()
// scorepannel.addScore()

const gs = new GameControl()
// setInterval(() => {
//     console.log(gs.direction);
    
// }, 1000)


