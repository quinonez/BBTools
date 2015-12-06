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
    var RandBit = require('BBT/Generation/Random/RandBit');
    var RandBreitWigner = require('BBT/Generation/Random/RandBreitWigner');
    var RandChiSquare = require('BBT/Generation/Random/RandChiSquare');
    var RandExponential = require('BBT/Generation/Random/RandExponential');
    var RandFlat = require('BBT/Generation/Random/RandFlat');
    var RandGamma = require('BBT/Generation/Random/RandGamma');
    var RandGauss = require('BBT/Generation/Random/RandGauss');
    //var RandGeneral = require('BBT/Generation/Random/RandGeneral');
    var RandLandau = require('BBT/Generation/Random/RandLandau');
    var RandPoisson = require('BBT/Generation/Random/RandPoisson');
    var RandStudentT = require('BBT/Generation/Random/RandStudentT');


    //Return the module value.
    return {
        version: '0.0.1, jQuery version is: ' + $.fn.jquery,
        convert: convert,
        FileSaver: FileSaver,

        Axis: Axis,
        H1: H1,

        JamesRandom: JamesRandom,
        RandBinomial: RandBinomial,
        RandBit: RandBit,
        RandBreitWigner: RandBreitWigner,
        RandChiSquare: RandChiSquare,
        RandExponential: RandExponential,
        RandFlat: RandFlat,
        RandGamma: RandGamma,
        RandGauss: RandGauss,
        //RandGeneral: RandGeneral,
        RandLandau: RandLandau,
        RandPoisson: RandPoisson,
        RandStudentT: RandStudentT
        
        
    };
});
