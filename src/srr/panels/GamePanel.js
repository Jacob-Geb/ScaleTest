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

    var p = BasePanel.prototype;
    var s = extend(GamePanel, BasePanel);

    p.setup = function()
    {
        this.background = new Bitmap(images.background);
        this.addChild(this.background);

        this.btn = new Button(images.btn);
        this.addChild(this.btn);
        // app.scaling.addItem(this.btn);
    };

    namespace("srr.panels").GamePanel = GamePanel;
}());
