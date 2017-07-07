class DungeonTile {
    isVisible: boolean;
    hasPlayer: boolean;
    type: GameConstants.DungeonTile;
    cssClass: KnockoutObservable<string>;


    constructor(type: GameConstants.DungeonTile) {
        this.isVisible = false;
        this.hasPlayer = false;
        this.type = type;
        this.cssClass = ko.observable("");
        this.calculateCssClass();
    }

    public calculateCssClass() {
        if (!this.isVisible) {
            console.log("invisible");
            this.cssClass("tile tile-invisible");
            return;
        }
        if (this.hasPlayer) {
            this.cssClass("tile tile-player");
            return;
        }
        console.log(this.type);
        this.cssClass("tile tile-" + GameConstants.DungeonTile[this.type]);
    }
}