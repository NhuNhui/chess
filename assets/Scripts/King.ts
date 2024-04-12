import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { Rook } from './Rook';

@ccclass('King')
export class King extends Component {
    
    @property({
        type: Node,
        tooltip: 'The King'
    })
    public king: Node;

    @property({
        type: Rook
    })
    public rook:Rook

    public isClickKing: boolean = false;
    public isMove: boolean = true;

    start_game() {
        this.king.setPosition(new Vec3(40, -280, 0));
    }

    move(x: number, y: number) {
        if (this.isClickKing) {
            // Kings can move one square in any direction
            if(this.isMove) {
                if(x - this.king.position.x == 160 && y == this.king.position.y) {
                    this.king.setPosition(new Vec3(x,y,0))
                    this.rook.rook_one.setPosition(new Vec3(120,-280,0));
                }

                if(x - this.king.position.x == -160 && y == this.king.position.y) {
                    this.king.setPosition(new Vec3(x,y,0))
                    this.rook.rook_two.setPosition(new Vec3(-40,-280,0));
                }
                this.isMove = false;
            }
            else {
                const deltaX = Math.abs(x - this.king.position.x);
                const deltaY = Math.abs(y - this.king.position.y);
                if ((deltaX <= 80 && deltaY == 0) || (deltaX == 0 && deltaY <= 80) || (deltaX == 80 && deltaY == 80)) {
                    this.king.setPosition(new Vec3(x, y, 0));
                    this.isClickKing = false;
            }
            }
            
        }
    }

}


