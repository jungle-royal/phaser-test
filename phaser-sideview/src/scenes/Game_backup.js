import { Scene } from 'phaser';
import Building from '../object/Building';

export class Game extends Scene {
    constructor() {
        super('Game');
    }

    create() {
        // 월드 크기 설정
        const worldWidth = 2000; // 월드의 너비
        const worldHeight = 2000; // 월드의 높이

        this.camera_point = this.add.graphics();

        // 카메라 경계 설정
        this.cameras.main.setBounds(0, 0, worldWidth, worldHeight);

        // 월드 배경색 설정
        this.cameras.main.setBackgroundColor(0xAAAAAA);

        // 검정색 격자 생성
        this.createGrid(worldWidth, worldHeight, 50, 0x000000);

        // 키보드 입력 설정
        this.cursors = this.input.keyboard.createCursorKeys();

        this.building1 = new Building(this, 700, 400, 400, 200); // (Scene, x, y, size, color)
        this.building2 = new Building(this, 1000, 800, 1000, 300);
        this.building3 = new Building(this, 200, 650, 800, 100);

        // 클릭 시 'GameOver' 씬으로 이동
        // this.input.once('pointerdown', () => {
        //     this.scene.start('GameOver');
        // });

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
            this.cameras.main.scrollY -= cameraSpeed; // 위쪽 이동
        } else if (this.cursors.down.isDown) {
            this.cameras.main.scrollY += cameraSpeed; // 아래쪽 이동
        }

        this.cameraX = this.cameras.main.scrollX + 512;
        this.cameraY = this.cameras.main.scrollY + 384;

        this.camera_point.clear();
        this.camera_point.fillStyle(0xff0000), 1
        this.camera_point.fillCircle(this.cameraX, this.cameraY, 10)

        // 카메라 위치에 따라 Square 업데이트
        this.building1.update(this.cameraX, this.cameraY);
        this.building2.update(this.cameraX, this.cameraY);
        this.building3.update(this.cameraX, this.cameraY);
    }

    createGrid(width, height, gridSize, color) {
        const graphics = this.add.graphics();
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
