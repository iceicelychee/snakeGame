// 计分板类
class ScorePannel {
    score = 0;
    level = 1;
    
    scoreEle: HTMLElement;
    levelEle: HTMLElement;
    //设置最大leveL
    maxLevel: number;
    // 设置每分提升level
    UpScore: number;

    constructor(maxLevel: number = 10, UpScore: number = 10) {
        this.scoreEle = document.getElementById('score')!;
        this.levelEle = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.UpScore = UpScore;
    }

    addScore() {
        this.scoreEle.innerHTML = ++this.score + '';
         if(this.score % this.UpScore === 0) {
            // 每10分提升level
            this.UpLevel();
         }
    }
    UpLevel() {
        if(this.level < this.maxLevel) {
            this.levelEle.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePannel;
