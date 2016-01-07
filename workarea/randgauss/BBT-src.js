/*global require, define, test, expect, strictEqual, location */

if (typeof require === 'function' && require.config) {
    require.config({
        baseUrl: '../../lib',
        paths: {
            //Path relative to baseUrl
            //Module includes are relative to path folder BBTools/BBT 
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



    //------------------------------------------------------------------------------------------
    // Optional approach: passing an object to the static function BBT.RandGauss.ShootArray,
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 115, stdDev: 5 };
    BBT.RandGauss.ShootArray( argu );
    console.log(A);
    //------------------------------------------------------------------------------------------

    /*
    //------------------------------------------------------------------------------------------
    // Optional approach: passing the engine of random numbers to the Breit-Wigner Distribution,
    // then using FireArray function.
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 50;
    var A = [];
    var g = new BBT.RandGauss( { engine: gen, mean: 115, stdDev: 5 } );
    bw.FireArray( n, A );
    console.log(A);
    //------------------------------------------------------------------------------------------
    */

    /*
    //------------------------------------------------------------------------------------------
    // Optional approach: using all the defaults internally by RandGauss object.
    var n = 30;
    var A = [];
    var g = new BBT.RandGauss({});
    g.FireArray( n, A );
    console.log(A);
    //------------------------------------------------------------------------------------------
    */




}));
