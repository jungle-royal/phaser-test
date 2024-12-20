import SideViewGraphics from '../../side_view/SideViewGraphics';
import SideViewScene from "../../side_view/SideViewScene";
import { Cubiod } from '../../side_view/SideVeiwSolid';

export class Game extends SideViewScene {

    constructor() {
        super('Game');
    }

    create() {

        // 월드 크기 설정
        const worldWidth = 2000; // 월드의 너비
        const worldHeight = 2000; // 월드의 높이
        this.physics.world.setBounds(0, 0, worldWidth, worldHeight);

        this.player = this.physics.add.sprite(100, 300, null).setSize(50, 50);
        this.player.setDisplaySize(50, 50);
        this.player.setCollideWorldBounds(true);
        this.player.setMaxVelocity(400, 400);

        // 월드 배경색 설정
        this.cameras.main.setBackgroundColor(0xAAAAAA);

        // 검정색 격자 생성
        this.createGrid(worldWidth, worldHeight, 50, 0x000000);

        this.camera_point = new SideViewGraphics(this);

        const cuboid1 = new Cubiod(this, 500, 500, 100, 100, 100, 115);
        const cuboid2 = new Cubiod(this, 700, 1000, 200, 100, 30);

        // 키보드 입력 설정
        this.cursors = this.input.keyboard.createCursorKeys();
    }

    update() {
        // 카메라 이동 속도
        const cameraSpeed = 5;

        if (this.cursors.left.isDown) {
            this.cameras.main.scrollX -= cameraSpeed; // 왼쪽 이동
        } else if (this.cursors.right.isDown) {
            this.cameras.main.scrollX += cameraSpeed; // 오른쪽 이동
        }

        if (this.cursors.up.isDown) {
            this.cameras.main.scrollY -= cameraSpeed * 2 / 3; // 위쪽 이동
        } else if (this.cursors.down.isDown) {
            this.cameras.main.scrollY += cameraSpeed * 2 / 3; // 아래쪽 이동
        }

        this.cameraX = this.cameras.main.scrollX + 512;
        this.cameraY = this.cameras.main.scrollY + 384;

        this.camera_point.clear();
        this.camera_point.fillStyle(0xff0000, 1);
        this.camera_point.fillCircle(this.cameraX, this.cameraY, 10);
    }

    createGrid(width, height, gridSize, color) {
        const graphics = new SideViewGraphics(this);
        graphics.lineStyle(1, color, 1); // 선 스타일: 두께, 색상, 투명도

        // 세로선 그리기
        for (let x = 0; x <= width; x += gridSize) {
            graphics.beginPath();
            graphics.moveTo(x, 0);
            graphics.lineTo(x, height);
            graphics.strokePath();
        }

        // 가로선 그리기
        for (let y = 0; y <= height; y += gridSize) {
            graphics.beginPath();
            graphics.moveTo(0, y);
            graphics.lineTo(width, y);
            graphics.strokePath();
        }
    }
}
