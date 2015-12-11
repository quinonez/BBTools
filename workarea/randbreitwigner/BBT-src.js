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

    test('version test', function () {
        expect(1);
        strictEqual(BBT.version,
            '0.0.1, jQuery version is: ' + $.fn.jquery,
            'Version concatenated');
    });

    test('conversion test', function () {
        expect(1);
        strictEqual(BBT.convert('Harry & Sally'),
            'Harry &amp; Sally',
            'Ampersand converted');
    });


    /*
    //------------------------------------------------------------------------------------------
    // Optional approach: passing an object to the static function BBT.RandBreitWigner.ShootArray,
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var argu =  { size: n, vect: A, engine: gen, mean: 3, gamma: 0.5, cut: undefined };
    BBT.RandBreitWigner.ShootArray( argu );
    console.log(A);
    console.log( bw.FireM2() );
    //------------------------------------------------------------------------------------------
    */

    /*
    //------------------------------------------------------------------------------------------
    // Optional approach: passing the engine of random numbers to the Breit-Wigner Distribution,
    // then using FireArray function.
    var gen = new BBT.JamesRandom( { seed: 12345 } );
    var n = 30;
    var A = [];
    var bw = new BBT.RandBreitWigner( { engine: gen } );
    bw.FireArray( n, A );
    console.log(A);
    console.log( bw.FireM2() );
    //------------------------------------------------------------------------------------------
    */

    //------------------------------------------------------------------------------------------
    // Optional approach: using all the defaults internally by RandBreitWigner object.
    var n = 30;
    var A = [];
    var bw = new BBT.RandBreitWigner({});
    bw.FireArray( n, A );
    console.log(A);
    console.log( bw.FireM2() );
    //------------------------------------------------------------------------------------------




}));
