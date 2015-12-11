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
    // Optional approach: passing an object to the static function BBT.RandGauss.ShootArray,
    var h = new BBT.H1( "h1", "h1", 24, 0, 300 );
    var m = [];
    h.FillRandom( { pdf: "Gauss", size: 1000, pdf_mean: 115, pdf_stdDev: 50, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------

    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 300 );
    var m = [];
    h.FillRandom( { pdf: "Flat", size: 1000, pdf_a: 0, pdf_b: 300, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 300 );
    var m = [];
    h.FillRandom( { pdf: "Poisson", size: 1000, pdf_mean: 150, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 60 );
    var m = [];
    h.FillRandom( { pdf: "Landau", size: 1000, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 60 );
    var m = [];
    h.FillRandom( { pdf: "Binomial", size: 1000, pdf_n: 50, pdf_p: 0.5, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 24 );
    var m = [];
    h.FillRandom( { pdf: "ChiSquare", size: 1000, pdf_a: 3, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 5 );
    var m = [];
    h.FillRandom( { pdf: "StudentT", size: 1000, pdf_a: 5, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 2, 0, 2 );
    var m = [];
    h.FillRandom( { pdf: "Bit", size: 1000, vect: m, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------



    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 24, 0, 200 );
    var m = [];
    h.FillRandom( { pdf: "BreitWigner", size: 1000, vect: m, pdf_mean: 100, pdf_gamma: 29, pdf_cut: undefined, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    //------------------------------------------------------------------------------------------
    var h = new BBT.H1( "h1", "h1", 14, 0, 14 );
    var m = [];
    h.FillRandom( { pdf: "Gamma", size: 1000, vect: m, pdf_lambda: 2, pdf_k: 3, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );
    //------------------------------------------------------------------------------------------


    */

    var h = new BBT.H1( "h1", "h1", 24, 0, 840 );
    var m = [];
    h.FillRandom( { pdf: "Exponential", size: 1000, vect: m, pdf_mean: 115, seed: new Date().getDate() } );
    h.Draw();
    console.log( m );





}));
