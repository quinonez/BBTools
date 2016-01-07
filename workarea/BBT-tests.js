/*global require, define, test, expect, strictEqual, location */

if (typeof require === 'function' && require.config) {
    require.config({
        baseUrl: '../lib',
        paths: {
            //Path relative to baseUrl
            'BBT': '../BBT'
        },
        shim: {
            'underscore': {
                exports: '_'
            }
        }
    });

    //Override if in "dist" mode
    if (location.href.indexOf('-dist') !== -1) {
        //Set location of BBT to the dist location
        require.config({
            paths: {
                'BBT': '../dist/BBT.min'
            }
        });
    }
}

(function (root, factory) {
    'use strict';

    if (typeof define === 'function' && define.amd) {
        // AMD.
        define(['BBT', 'jquery'], factory);
    } else {
        // Browser globals
        factory(root.BBT, root.jQuery);
    }
}(this, function (BBT, $) {
    'use strict';

    var histo = new BBT.H1("h","h",10,0,200);
    histo.Fill(123.4);
    histo.Fill(113.4);
    histo.Fill(129.4);
    histo.Fill(23.4);
    histo.Fill(33.6);
    histo.Fill(3.98);
    histo.Fill(12);
    histo.Fill(7);
  
    //var xaxishisto = new H1.fXaxis("xaxishisto", "Eje x en [u]");
  	
    histo.Draw();


}));
