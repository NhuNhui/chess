import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Bishop')
export class Bishop extends Component {
    @property({
        type:Node
    })
    public bishop_one:Node;

    @property({
        type:Node
    })
    public bishop_two:Node;

    public isClickBishop_one:boolean = false;
    public isClickBishop_two:boolean = false;

    start_game() {
        this.bishop_one.setPosition(new Vec3(-120,-280,0));
        this.bishop_two.setPosition(new Vec3(120,-280,0));
    }

    move(x:number,y:number) {
        if(this.isClickBishop_one) {
            let a = Math.abs((x - this.bishop_one.position.x)/80);
            let b = Math.abs((y - this.bishop_one.position.y)/80);
            if(a == b) {
                this.bishop_one.setPosition(new Vec3(x,y,0));
            }
            this.isClickBishop_one = false
        }
        if(this.isClickBishop_two) {
            let a = Math.abs((x - this.bishop_two.position.x)/80);
            let b = Math.abs((y - this.bishop_two.position.y)/80);
            if(a == b) {
                this.bishop_two.setPosition(new Vec3(x,y,0));
            }
            this.isClickBishop_two = false
        }

    }

    
}


