(function()
{
    var BasePanel = include('springroll.easeljs.BasePanel');
    var Bitmap = include('createjs.Bitmap');
    var Button = include('springroll.easeljs.Button');
    var Debug = include('springroll.Debug');

    var GamePanel = function(options)
    {
        BasePanel.call(this);
        this.background = null;
        this.btn = null;
    };

    var s = BasePanel.prototype;
    var p = extend(GamePanel, BasePanel);

    p.setup = function()
    {
        this.background = new Bitmap(images.background);
        this.addChild(this.background);
        app.scaling.addItem(this.background, "cover-image");

        this.btn = new Button(images.btn);
        this.btn.x = 200;
        this.btn.y = 200;
        this.addChild(this.btn);
        app.scaling.addItem(this.btn);
    };

    namespace("srr.panels").GamePanel = GamePanel;
}());