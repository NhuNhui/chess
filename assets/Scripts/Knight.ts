import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Knight')
export class Knight extends Component {
    @property({
        type: [Node],
        tooltip: 'The Knights'
    })
    public knights: Node[] = [];

    public isClickKnight: boolean[] = [];

    start_game() {
        this.knights[0].setPosition(new Vec3(-200, -280, 0));
        this.knights[1].setPosition(new Vec3(200, -280, 0));
        this.isClickKnight[0] = false;
        this.isClickKnight[1] = false;
    }

    move(knightIndex: number, x: number, y: number) {
        if (this.isClickKnight[knightIndex]) {
            // Knights move in an L-shape pattern (2 squares in one direction, 1 square perpendicular)
            const deltaX = Math.abs(x - this.knights[knightIndex].position.x);
            const deltaY = Math.abs(y - this.knights[knightIndex].position.y);
            if ((deltaX == 80 && deltaY == 160) || (deltaX == 160 && deltaY == 80)) {
                this.knights[knightIndex].setPosition(new Vec3(x, y, 0));
                this.isClickKnight[knightIndex] = false;
            }
        }
    }
}


