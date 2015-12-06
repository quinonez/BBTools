/*
Graphical Module H1.
This module has all functionalities for graphical display of user data.

*/
define( [ 'd3', 
          '../Visualization/Axis',
          '../Generation/Random/JamesRandom',
          '../Generation/Random/RandBinomial', 
          '../Generation/Random/RandBit', 
          '../Generation/Random/RandBreitWigner', 
          '../Generation/Random/RandChiSquare', 
          '../Generation/Random/RandExponential', 
          '../Generation/Random/RandFlat',
          '../Generation/Random/RandGamma', 
          '../Generation/Random/RandGauss', 
          '../Generation/Random/RandLandau', 
          '../Generation/Random/RandPoisson', 
          '../Generation/Random/RandStudentT' 
        ], function( 
             d3, 
             Axis,
             JamesRandom,
             RandBinomial,
             RandBit,
             RandBreitWigner,
             RandChiSquare,
             RandExponential,
             RandFlat,
             RandGamma,
             RandGauss,
             RandLandau,
             RandPoisson,
             RandStudentT
           ){
  "use strict";

  // Object Constructor H1 Building Block Histogram 1D. 
  function H1( name, title, nbinsx, xmin, xmax ){
    this.fDimension = 1; // Dimension of the plot data.
    this.name = name;
    this.title = title;
    this.nbinsx = nbinsx;
    this.xmin = xmin;
    this.xmax = xmax;
    this.rawData = []; // data array filled by Fill function.
    this.freqData = new Array( nbinsx + 2 ); // data array of frequencies for each bin. Two bins extra have been added, one for underflow and the another one for overflow.

    this.fXaxis =new Axis("xaxishisto", "Eje x en [u]") ;
    this.fYaxis =new Axis("xaxishisto", "Eje x en [u]") ;
	//this.fPainter = Object.create( Painter() );
  }

  H1.prototype = {
    constructor: H1,

    Fill: function( value ) {
      return this.rawData.push( value );
    },

    FillRandom: function( args ){
      var siz3 = args.size || 1;
      var n = args.n || size;
      var v3ct = args.vect || [];
      var pdf = args.pdf || "Gauss";
      var s = args.seed || 234;

      var pdf_mean = args.pdf_mean || undefined; // Used in: BreitWigner, Gauss, Poisson, Exponential, 
      var pdf_stdDev = args.pdf_stdDev || undefined; // Used in: Gauss
      var pdf_a = args.pdf_a || undefined; // Used in: ChiSquare, StudentT, Flat
      var pdf_b = args.pdf_b || undefined; // Used in: Flat
      var pdf_width = pdf_b - pdf_a; // Used in: Flat
      var pdf_cut = args.pdf_cut || undefined; // Used in: BreitWigner
      var pdf_n = args.pdf_n || undefined; // Used in: Binomial
      var pdf_p = args.pdf_p || undefined; // Used in: Binomial
      var pdf_k = args.pdf_k || undefined; // Used in: Gamma
      var pdf_lambda = args.pdf_lambda || undefined; // Used in: Gamma
      var pdf_gamma = args.pdf_gamma || undefined; // Used in: BreitWigner


      var engine;
      var distro;

      switch( pdf ){
        case "Bit":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandBit( { engine: engin3 } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Binomial":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandBinomial( { engine: engin3, n: pdf_n, p: pdf_p } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "BreitWigner":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandBreitWigner( { engine: engin3, mean: pdf_mean, gamma: pdf_gamma, cut: pdf_cut } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "ChiSquare":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandChiSquare( { engine: engin3, a: pdf_a } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Exponential":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandExponential( { engine: engin3, mean: pdf_mean } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Flat":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandExponential( { engine: engin3, a: pdf_a, b: pdf_b, width: pdf_width } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Gamma":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandGamma( { engine: engin3, k: pdf_k, lamda: pdf_lamda } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Gauss":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandGauss( { engine: engin3, mean: pdf_mean, stdDev: pdf_stdDev } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Landau":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandLandau( { engine: engin3 } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "Poisson":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandPoisson( { engine: engin3, mean: pdf_mean } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;

        case "StudentT":
          engin3 = new BBT.JamesRandom( { seed: s } );
          distro = new BBT.RandPoisson( { engine: engin3, a: pdf_a } );
          distro.ShootArray( { size: siz3, vect: v3ct } );
          this.rawData = v3ct;
          break;
      }
    },
 
    // Deattach data preparation
    Prepare: function(){
      var binxlow = this.xmin;
      var binwidth = ( this.xmax - this.xmin ) / this.nbinsx;
      var binxup = binxlow + binwidth;
  
      // Initialize frequencies to zero.
      for( var i = 0; i < this.freqData.length; i++ ){
        this.freqData[ i ] = 0;
      }
  
      // First fill array of frequencies for each bin: freqData.
      for( var i = 0; i < this.rawData.length; i++ ){
        binxlow = this.xmin;
        binxup = binxlow + binwidth;
        if( this.rawData[ i ] < this.xmin ) this.freqData[ 0 ] += 1; // Underflow.
        if( this.rawData[ i ] >= this.xmax ) this.freqData[ nbinsx + 1 ] += 1; // Overflow.
        // From index 1 til index nbinsx-2 of freqData Array.
        for( var j = 1; j < this.freqData.length - 1; j++ ){
          if( this.rawData[ i ] >= binxlow && this.rawData[ i ] < binxup ){
            this.freqData[ j ] += 1;
            break;
          }
          // Go to the next bin
          binxlow = binxup;
          binxup += binwidth;   
        }
      }
      console.log(this.freqData);
       
    },
    
    Draw: function(){
      this.Prepare();
      var binwidth = ( this.xmax - this.xmin ) / this.nbinsx;
      // **************************************************************
      // Now start visualization
      // **************************************************************
      var margin = { top:20, right:40, bottom: 30, left:60 };
      var width = 640 -  margin.left - margin.right ;
      var height = 400 -  margin.top - margin.bottom ;
      var svg = d3.select( "#c1" ).append( "svg" )
        .attr( "width", width + margin.left + margin.right )
        .attr( "height", height + margin.top + margin.bottom );
      // Drawing a chart inside the svg
      var chart = svg.append( "g" )
        .attr( "transform", "translate(" + margin.left + "," + margin.top + ")" );
      // Scaling the data
      var xScale = d3.scale.linear().domain([ this.xmin, this.xmax ]).range( [ 0, width ] );
      var yScale = d3.scale.linear().domain([ 0, d3.max( this.freqData ) ]).range( [ height, 0 ] );
      // Defining the plot's domain
      //xScale..nice();
      //yScale.nice();

      var xAxis = d3.svg.axis()
        .scale( xScale )
        .orient( "bottom" );

      var yAxis = d3.svg.axis()
        .scale( yScale )
        .orient( "left" );

      var xAxisGroup = chart.append( "g" )
        .attr( "transform", "translate(0," + height + ")" );

      var yAxisGroup = chart.append( "g" )
        .attr( "transform", "translate(0,0)" );

      xAxis( xAxisGroup );
      yAxis( yAxisGroup );
      // Definining text labels for axis.
      // Don't do it because that need to be accessed by the user

      // Displaying data    
      this.freqData.forEach(function(d,i){
		        chart.append( "rect" )
          .attr( "x", function(){return (i-1)*xScale(binwidth);} )
          .attr( "width", xScale(binwidth)-2)
          .attr( "y", yScale(d) )
          .attr( "height", function(){return height-yScale(d);}  )
		        .attr("fill", "steelblue");
      });
    }, // Ends function Draw

    GetXaxis: function(){
      return this.fXaxis;
    },

    GetYaxis: function(){
      return this.fYaxis;
    },
    
};
  return H1;
 
}); // Ends Module H1

