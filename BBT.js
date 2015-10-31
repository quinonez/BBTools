/*global define */

/**
 * The main module that defines the public interface for BBT,
 * a made-up library to demonstrate how to construct a source from components.
 */
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var convert = require('BBT/convert');
    var FileSaver = require('FileSaver');

    var Axis = require('BBT/Visualization/Axis');
    var H1 = require('BBT/Visualization/H1');

    var JamesRandom = require('BBT/Generation/Random/JamesRandom');
    var RandBinomial = require('BBT/Generation/Random/RandBinomial');

    //Return the module value.
    return {
        version: '0.0.1, jQuery version is: ' + $.fn.jquery,
        convert: convert,
        FileSaver: FileSaver,

        Axis: Axis,
        H1: H1,

        JamesRandom: JamesRandom,
        RandBinomial: RandBinomial
    };
});
