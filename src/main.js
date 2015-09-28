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