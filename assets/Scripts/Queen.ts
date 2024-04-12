import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Queen')
export class Queen extends Component {
    @property({
        type:Node
    })
    public queen:Node

    public isClickQueen = false;

    start_game() {
        this.queen.setPosition(new Vec3(-40,-280,0));
    }
    
    move(x:number,y:number) {
        if(this.isClickQueen) {
            if((x == this.queen.position.x || y == this.queen.position.y)) {
                this.queen.setPosition(new Vec3(x,y,0));
                this.isClickQueen = false;
            }
            else {
                let a = Math.abs((x - this.queen.position.x)/80);
                let b = Math.abs((y - this.queen.position.y)/80);
                if(a == b) {
                    this.queen.setPosition(new Vec3(x,y,0));
                }
            }        

            this.isClickQueen = false;
        }  
    }
}


