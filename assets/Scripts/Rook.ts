import { _decorator, Component, Input, input, Node, tween, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { Board_Game } from './Board_Game';

@ccclass('Rook')
export class Rook extends Component {
    
    @property({
        type:Node,
        tooltip:'The Rookkk'
    })
    public rook_one:Node;

    @property({
        type:Node,
        tooltip:'The Rookkk'
    })
    public rook_two:Node;

    public isClickRook_one:boolean = false;
    public isClickRook_two:boolean = false;

    start_game() {
        this.rook_one.setPosition(new Vec3(280,-280,0));
        this.rook_two.setPosition(new Vec3(-280,-280,0));
    }

    move(x:number,y:number) {
        if(this.isClickRook_one) {
            if((x == this.rook_one.position.x || y == this.rook_one.position.y) /*&& 
        (x != this.rook_two.position.x && y != this.rook_two.position.y)*/) {
                this.rook_one.setPosition(new Vec3(x,y,0));
                this.isClickRook_one = false;
            }
            this.isClickRook_one = false;
        }  

        if(this.isClickRook_two) {
            if((x == this.rook_two.position.x || y == this.rook_two.position.y) /*&& 
        (x != this.rook_one.position.x && y != this.rook_one.position.y)*/) {
                this.rook_two.setPosition(new Vec3(x,y,0));
                this.isClickRook_two = false;
            }
            this.isClickRook_two = false;
        }  
    }

}


