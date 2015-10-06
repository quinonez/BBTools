/*
Module BBTAxis Building Block and Tools Axis.

This module has all functionalities for graphical display of axes.

Module Dependencies: d3, THREE, BBMathematics, BBStatistics.
 
*/
define( [ 'd3', 'THREE' ], function( d3, THREE ){
  "use strict";

  // Object Constructor BBH1 Building Block Histogram 1D. 
  function BBTAxis( name, title ){
    this.name = name;
    this.title = title;

    this.fNdivisions;
    this.fAxisColor;
    this.fLabelColor;
    this.fLabelFont;
    this.fLabelOffset;
    this.fLabelOffset;
    this.fLabelSize;
    this.fTitleOffset;

  }

  BBTAxis.prototype = {
    constructor: BBTAxis,
    // ****************************************************
    // * Functions coming from ROOT mother class TAxisAtt *
    // ****************************************************

    // 
    SaveAttributes: function( out, name, subname ){
      
    },

    // Set color of the line axis and tick marks.
    SetAxisColor: function( color = 1 ){
    
    },

    // Set color of labels.
    SetLabelColor: function( color = 1 ){

    },

    // Set labels' font.
    SetLabelFont: function( font = 62 ){

    },

    // Set distance between the axis and the labels.
    // In ROOT: The distance is expressed in per cent of the pad width.
    SetLabelOffset: function( offset = 0.005 ){

    },

    // Set size of axis labels.
    // In ROOT: The size is expressed in per cent of the pad width.
    SetLabelSize: function( size = 0.04 ){

    },

    /* Set the number of divisions for this axis.

    if optim = kTRUE (default), the number of divisions will be
                   optimized around the specified value.
    if optim = kFALSE, or n < 0, the axis will be forced to use
                   exactly n divisions.

    n = n1 + 100*n2 + 10000*n3

    Where n1 is the number of primary divisions,
    n2 is the number of second order divisions and
    n3 is the number of third order divisions.

    e.g. 512 means 12 primary and 5 secondary divisions.

    If the number of divisions is "optimized" (see above) n1, n2, n3 are
    maximum values. */
    SetNdivisions: function( n = 510, optim = true ){
      
    },
    SetNdivisions: function( n1, n2, n3, optim = true ){
      
    },

    // Set tick mark length
    // The length is expressed in per cent of the pad width
    SetTickLength: function( lenght = 0.03 ){
      
    },

    /* Set distance between the axis and the axis title
    Offset is a correction factor with respect to the "standard" value.
    offset = 1  uses the default position that is computed in function
    of the label offset and size.
    offset = 1.2 will add 20 per cent more to the default offset. */
    SetTitleOffset: function( offset = 1 ){
    
    },
    
    // Set size of axis title.
    // The size is expressed in per cent of the pad width.
    SetTitleSize: function( size = 0.04 ){
    
    },

    // Set color of axis title
    SetTitleColor: function( color = 1 ){

    },

    // Set the title font.
    SetTitleFont: function( font = 62 ){
      
    },

    GetNdivisions: function(){
      return this.fNdivisions;
    },

    GetAxisColor: function(){
      return this.fAxisColor;
    },

    GetLabelColor: function(){
      return this.fLabelColor;
    },

    GetLabelFont: function(){
      return this.fLabelFont;
    },

    GetLabelOffset: function(){
      return this.fLabelOffset;
    },

    GetLabelSize: function(){
      return this.fLabelSize;
    },

    GetTitleOffset: function(){
      return this.fTitleOffset;
    },

    GetTitleSize: function(){
      return this.fTitleSize;
    },

    GetTitleColor: function(){
      return this.fTitleColor;
    },

    GetTitleFont: function(){
      return this.fTitleFont;
    },










  };

  return BBTAxis;
 
}); // Ends Module BBTAxis

