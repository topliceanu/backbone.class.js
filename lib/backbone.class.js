(function (_undef) {
    var win = window,
        isBackbone = 
            (win.Backbone) && 
            (win.Backbone.Model) &&
            (win.Backbone.Model.extend),
        isUnderscore = 
            (win._) &&
            (win._.uniqueId),
        Class;

    if (!isBackbone || !isUnderscore) {
        throw new Error ("Backbone.js is required");
    }

    Class = function () {
        this.cid = _.uniqueId('class');
        if (this.initialize) {
            this.initialize.apply (this, arguments);
        }
    };

    Class.extend = win.Backbone.Model.extend;

    win.Backbone.Class = Class;
}).call(this);
