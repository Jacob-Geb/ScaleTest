(function()
{
    var BaseState = include('springroll.easeljs.BaseState');
    var GamePanel = include('srr.panels.GamePanel');

    var GameState = function(options)
    {
        BaseState.call(this, new GamePanel(), options);
        p.panel = this.panel;
    };

    var p = BaseState.prototype;
    var s = extend(GameState, BaseState);

    namespace("srr.states").GameState = GameState;
}());