import sideViewConfig from "./SideViewConfig";

class Cuboid {

    constructor(scene, x, _y, width, _length, height, float = 0) {

        this.scene = scene;

        this.x = x;
        this.y = _y;
        this._y = _y * sideViewConfig.y_adj;
        this.width = width;
        this.length = _length;
        this._length = _length * sideViewConfig.y_adj;
        this.height = height;
        this.float = float;

        // view object
        this.createViewObject();

        // // collision object
        // this.createCollisionObject();

    }

    createViewObject() {

        // shadow
        if (this.float !== 0) {
            const shadow = new Phaser.GameObjects.Graphics(this.scene);
            this.scene.add.existing(shadow);

            shadow.fillStyle(0x000000, 0.3);
            shadow.fillRect(this.x, this._y, this.width, this._length);
        }

        const front = new Phaser.GameObjects.Graphics(this.scene);
        this.scene.add.existing(front);

        front.fillStyle(0x666666, 1);
        front.fillRect(this.x, this._y + this._length - this.height - this.float, this.width, this.height);

        const top = new Phaser.GameObjects.Graphics(this.scene);
        this.scene.add.existing(top);
        top.fillStyle(0x888888, 1);
        top.fillRect(this.x, this._y - this.height - this.float, this.width, this._length);
    }

    createCollisionObject() {

    }
}

export const Cubiod = Cuboid;