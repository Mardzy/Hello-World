(function(root, create) {

    'use strict';

    // window.itv = window.itv || {};
    //

    if (typeof define === 'function' && define.amd) {
        define('main',['underscore'], function (_) {
            root.itv = create(root, {}, _);
            console.log('in amd');
            return root.itv;
        })
    } else if (typeof exports !== 'undefined' && !exports.nodeType) {
        var _ = require('underscore');
        exports = module.exports = create(root,{}, _);
        console.log('in node');
    } else {
        root.itv = create(root, {}, root._);
        console.log('in browser');
    }

})(this, function (root, {}, _) {

    function getStr(str, str2) {
        var arr = [str, str2];
        return _.last(arr)
    }

    var itv = {
        hi: {
            say: function(){
                return getStr('Hello', 'Universe...')
            }
        },
        hello: {
            say: function(){
                return getStr('Hello', 'World!')
            }
        },
    };

    return itv;
});
