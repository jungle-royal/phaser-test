import sideViewConfig from "./SideViewConfig"

class SideViewGraphics extends Phaser.GameObjects.Graphics {

    constructor(scene) {
        super(scene);
        scene.add.existing(this);
    }

    /* line */
    moveTo(x, _y) {
        const y = _y * sideViewConfig.y_adj;
        super.moveTo(x, y);
    }

    lineTo(x, _y) {
        const y = _y * sideViewConfig.y_adj;
        super.lineTo(x, y);
    }

    /* surface */
    fillRect(x, _y, width, _length) {
        const y = _y * sideViewConfig.y_adj;
        const length = _length * sideViewConfig.y_adj;
        super.fillRect(x, y, width, length);
    }

    // fillCircle(x, _y, radius) {
    //     const y = _y * sideViewConfig.y_adj;
    //     super.fillEllipse(x, y, radius, radius * sideViewConfig.y_adj);
    // }
}

export default SideViewGraphics;