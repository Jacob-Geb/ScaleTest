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
(function()
{
    var BaseState = include('springroll.easeljs.BaseState');
    var GamePanel = include('srr.panels.GamePanel');

    var GameState = function(options)
    {
        BaseState.call(this, new GamePanel(), options);
        p.panel = this.panel;
    };

    var s = BaseState.prototype;
    var p = extend(GameState, BaseState);

    namespace("srr.states").GameState = GameState;
}());
(function(){

	var Application = include('springroll.Application');
	var	GameState = include('srr.states.GameState');
    var Button = include('springroll.easeljs.Button');
	var EaselJSDisplay = include('springroll.EaselJSDisplay');

	var app = new Application({
		
        name: "Seans Rover Rescue",
		canvasId: "stage",
	  	resizeElement : "frame",

		state: "game",
		configPath: "assets/config/config.json",
		display: EaselJSDisplay,
		displayOptions: {
			clearView: true
		}
	});

	app.on('init', function()
	{
		this.states = {
			game: new GameState({
				preload: this.config.assets.game
			})
		};
	});

	window.app = app;
}());
//# sourceMappingURL=main.js.map