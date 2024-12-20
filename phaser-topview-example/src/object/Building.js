export class Building {
    constructor(scene, x, y, h, size) {
        this.scene = scene;

        // // 물리적 충돌 처리를 위한 Static Body 생성
        // this.body = scene.physics.add.staticImage(x + size / 2, y + size / 2, null);
        // this.body.setSize(size, size); // 충돌 박스 크기 설정
        // this.body.refreshBody(); // 충돌 박스 갱신

        // 시각적 렌더링을 위한 Graphics 생성
        this.floor = this.scene.add.graphics();

        // 수직선
        this.side1 = this.scene.add.graphics();
        this.side2 = this.scene.add.graphics();
        this.side3 = this.scene.add.graphics();
        this.side4 = this.scene.add.graphics();

        this.loop = this.scene.add.graphics(); // loop

        this.size = size;
        this.x = x;
        this.y = y;
        this.h = h;
    }

    update(camX, camY) {

        // draw floor;
        this.floor.clear();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.floor.fillStyle(0x444444, 0.5);
        else
            this.floor.fillStyle(0x444444, 1);
        this.floor.fillRect(this.x, this.y, this.size, this.size);

        // calc loop
        const loopX = this.x + (this.x - camX) * (this.h / 1500);
        const loopY = this.y + (this.y - camY) * (this.h / 1500);
        const loopSize = this.size + this.size * (this.h / 1500);

        this.side1.clear();
        this.side1.lineStyle(1, 0x000000, 1);
        this.side1.beginPath();
        this.side1.moveTo(this.x, this.y);
        this.side1.lineTo(loopX, loopY);
        this.side1.lineTo(loopX + loopSize, loopY);
        this.side1.lineTo(this.x + this.size, this.y);
        this.side1.lineTo(this.x, this.y);
        this.side1.closePath();
        this.side1.strokePath();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.side1.fillPath(0x666666, 0.5);
        else
            this.side1.fillPath(0x666666);

        this.side2.clear();
        this.side2.lineStyle(1, 0x000000, 1);
        this.side2.beginPath();
        this.side2.moveTo(this.x + this.size, this.y);
        this.side2.lineTo(loopX + loopSize, loopY);
        this.side2.lineTo(loopX + loopSize, loopY + loopSize);
        this.side2.lineTo(this.x + this.size, this.y + this.size);
        this.side2.lineTo(this.x + this.size, this.y);
        this.side2.closePath();
        this.side2.strokePath();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.side2.fillPath(0x666666, 0.5);
        else
            this.side2.fillPath(0x666666);

        this.side3.clear();
        this.side3.lineStyle(1, 0x000000, 1);
        this.side3.beginPath();
        this.side3.moveTo(this.x, this.y + this.size);
        this.side3.lineTo(loopX, loopY + loopSize);
        this.side3.lineTo(loopX, loopY);
        this.side3.lineTo(this.x , this.y);
        this.side3.lineTo(this.x, this.y + this.size);
        this.side3.closePath();
        this.side3.strokePath();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.side3.fillPath(0x666666, 0.5);
        else
            this.side3.fillPath(0x666666);

        this.side4.clear();
        this.side4.lineStyle(1, 0x000000, 1);
        this.side4.beginPath();
        this.side4.moveTo(this.x + this.size, this.y + this.size);
        this.side4.lineTo(loopX + loopSize, loopY + loopSize);
        this.side4.lineTo(loopX, loopY + loopSize);
        this.side4.lineTo(this.x, this.y + this.size);
        this.side4.lineTo(this.x + this.size, this.y + this.size);
        this.side4.closePath();
        this.side4.strokePath();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.side4.fillPath(0x666666, 0.5);
        else
            this.side4.fillPath(0x666666);

        // draw loop
        this.loop.clear();
        if(this.x < camX && camX < this.x + this.size && this.y < camY && camY < this.y + this.size)
            this.loop.fillStyle(0x888888, 0.3);
        else
            this.loop.fillStyle(0x888888, 1);

        this.loop.fillRect(
            loopX,
            loopY,
            loopSize,
            loopSize,
        );
    }

    destroy() {
        // 객체 제거
        this.body.destroy();
        this.graphics.destroy();
    }
}

export default Building;