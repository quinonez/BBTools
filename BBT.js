/*global define */

/**
 * The main module that defines the public interface for BBT,
 * a made-up library to demonstrate how to construct a source from components.
 */
define(function (require) {
    'use strict';

    var $ = require('jquery');
    var convert = require('BBT/convert');
    var Axis = require('BBT/Axis');
    var H1 = require('BBT/H1');

    //Return the module value.
    return {
        version: '0.0.1, jQuery version is: ' + $.fn.jquery,
        convert: convert,
        Axis: Axis,
        H1: H1
    };
});
