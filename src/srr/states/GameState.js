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