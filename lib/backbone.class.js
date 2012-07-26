(function (_undef) {
    var global = this,
        isBackbone = 
            (global.Backbone) && 
            (global.Backbone.Model) &&
            (global.Backbone.Model.extend),
        isUnderscore = 
            (global._) &&
            (global._.uniqueId),
        Class;

    if (!isBackbone || !isUnderscore) {
        throw new Error ("Backbone.js and Underscore.js are required");
    }

    Class = function () {
        this.cid = _.uniqueId('class');
        if (this.initialize) {
            this.initialize.apply (this, arguments);
        }
    };

    Class.extend = global.Backbone.Model.extend;

    global.Backbone.Class = Class;
}).call(this);
