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


    /*
    //------------------------------------------------------------------------------------------
    // Optional approach: passing an object to the static function BBT.RandStudentT.ShootArray,
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, a: 2 };
    BBT.RandStudentT.ShootArray( argu );
    console.log(A);
    //------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------
    // Optional approach: passing the engine of random numbers to the Breit-Wigner Distribution,
    // then using FireArray function.
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT( { engine: gen, a: 2 } );
    st.FireArray( n, A );
    console.log(A);
    //------------------------------------------------------------------------------------------
    */

    //------------------------------------------------------------------------------------------
    // Optional approach: using all the defaults internally by RandStudentT object.
    var n = 100;
    var A = [];
    var st = new BBT.RandStudentT({});
    st.FireArray( n, A );
    console.log(A);
    //------------------------------------------------------------------------------------------




}));
