import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

import { Rook } from './Rook';
import { Bishop } from './Bishop';
import { Queen } from './Queen';
import { Knight } from './Knight';
import { King } from './King';

@ccclass('Board_Game')
export class Board_Game extends Component {

    @property({
        type: Node
    })
    public Board:Node = null!;

    @property({
        type:Rook
    })
    public rook:Rook;

    @property({
        type:Bishop
    })
    public bishop:Bishop
    
    @property({
        type:Queen
    })
    public queen:Queen

    @property({
        type: Knight
    })
    public knight:Knight

    @property({
        type: King
    })
    public king:King

    x:number;
    y:number;
    start() {
        this.rook.start_game();
        this.queen.start_game();
        this.bishop.start_game();
        this.knight.start_game();
        this.initLisener();
        
    }

    initLisener() {

        // Rook =========================================================
        this.rook.rook_one.on(Node.EventType.MOUSE_DOWN,(event) => {
            console.log("Rook_one");
            if(this.rook.isClickRook_one) {
                this.rook.isClickRook_one = false;
            }
            else {
                this.rook.isClickRook_one = true;
            }
            
        },this)     
        
        this.rook.rook_two.on(Node.EventType.MOUSE_DOWN,(event) => {
            console.log("Rook_two");
            if(this.rook.isClickRook_two) {
                this.rook.isClickRook_two = false;
            }
            else {
                this.rook.isClickRook_two = true;
            }
        },this)  
        
        // Bishop ======================================================

        this.bishop.bishop_one.on(Node.EventType.MOUSE_DOWN,(e) => {
            if(this.bishop.isClickBishop_one) {
                this.bishop.isClickBishop_one = false;
            }
            else {
                this.bishop.isClickBishop_one = true;
            }
        },this)

        this.bishop.bishop_two.on(Node.EventType.MOUSE_DOWN,(e) => {
            if(this.bishop.isClickBishop_two) {
                this.bishop.isClickBishop_two = false;
            }
            else {
                this.bishop.isClickBishop_two = true;
            }
        },this)

        // Queen ================================================================

        this.queen.queen.on(Node.EventType.MOUSE_DOWN, (e) => {
            if(this.queen.isClickQueen) {
                this.queen.isClickQueen = false;
            }
            else {
                this.queen.isClickQueen = true;
            }
        })

        // Knight =================================================================

        this.knight.knights[0].on(Node.EventType.MOUSE_DOWN, (e) => {
            if(this.knight.isClickKnight[0]) {
                this.knight.isClickKnight[0] = false;
            }
            else {
                this.knight.isClickKnight[0] = true;
            }
        })

        this.knight.knights[1].on(Node.EventType.MOUSE_DOWN, (e) => {
            if(this.knight.isClickKnight[1]) {
                this.knight.isClickKnight[1] = false;
            }
            else {
                this.knight.isClickKnight[1] = true;
            }
        })

        // King =====================================================================

        this.king.king.on(Node.EventType.MOUSE_DOWN, (e) => {
            if(this.king.isClickKing) {
                this.king.isClickKing = false;
            }
            else {
                this.king.isClickKing = true;
            }
        })

        // Board game =============================================================
        
        this.Board.on(Node.EventType.MOUSE_DOWN,(e) => {
            this.calc_cell(e.getLocationX(),e.getLocationY());
            console.log(this.x,this.y);
            if(this.rook.isClickRook_one || this.rook.isClickRook_two)
                this.rook.move(this.x,this.y);
            if(this.bishop.isClickBishop_one || this.bishop.isClickBishop_two)
                this.bishop.move(this.x,this.y);
            if(this.queen.isClickQueen) 
                this.queen.move(this.x,this.y);
            if(this.knight.isClickKnight[0]) 
                this.knight.move(0,this.x,this.y);
            if(this.knight.isClickKnight[1]) 
                this.knight.move(1,this.x,this.y);
            if(this.king.isClickKing)
                this.king.move(this.x,this.y);
            
        })
    }

    calc_cell(mouse_x:number,mouse_y:number) {
        let arr_x: number[] = [395,506,606,706,806,906,1006,1106,1206];
        let arr_y: number[] = [20,120,220,320,420,520,620,720,820];

        for(let i=0;i<8;i++) {
            if(mouse_x >= arr_x[i] && mouse_x <= arr_x[i+1]){
                this.x = -280 + i*80;
            }
            if(mouse_y >= arr_y[i] && mouse_y <= arr_y[i+1]){
                this.y = -280 + i*80;
            }
        }
    }
    
}


