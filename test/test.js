/* gnuplotter
 * this project is a fork of Richard Meadows's 'node-plotter'
 *
 */

var should = require('should');
var plot = require('../index.js').plot;

function handleResult(error, stdout, stderr, cb) {
	should.not.exist(error);
	stderr.should.be.empty();

	cb();
}

describe('Plot tests', function() {

	describe('SVG plot', function() {
		it('Output1', function(done) {
			plot({
				title:		'svg example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4, 15, 3, 2, 4, 11 ], 'line' : { 1: 5, 5: 6 } },
				style:		'lines',
				filename:	'test/output11.svg',
				format:		'svg',
				nokey:		true,
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});
	});

	describe('PNG output', function() {
		it('Output1', function(done) {
			plot({
				data:		[3, 1, 2, 3, 4],
				filename:	'test/output1.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output2', function(done) {
			plot({
				data:		[ 3, 1, 2, 3, 4 ],
				filename:	'test/output2.png',
				style:		'linespoints',
				title:		'Example \'Title\', \\n runs onto multiple lines',
				logscale:	true,
				xlabel:		'time',
				ylabel:		'length of string',
				format:		'png',
				finish: 	function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output3', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4 ] },
				style:		'lines',
				filename:	'test/output3.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output4', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4 ], 'line' : { 1: 5, 5: 6 } },
				style:		'lines',
				filename:	'test/output4.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output5', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4 ], 'line' : { 1: 5, 5: 6 } },
				style:		'lines',
				filename:	'test/output5.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output6', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4, 15, 3, 2, 4, 11 ], 'tick2' : [ 3, 10, 2, 30, 4, 15, 3, 20, 4, 11 ], 'line' : { 1: 5, 5: 6 } },
				moving_avg:	4,
				style:		'lines',
				filename:	'test/output6.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output7', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4, 15, 3, 2, 4, 11 ], 'tick2' : [ 3, 10, 2, 30, 4, 15, 3, 20, 4, 11 ], 'line' : { 1: 5, 5: 6 } },
				moving_max:	2,
				style:		'lines',
				filename:	'test/output7.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output8', function(done) {
			plot({
				title:		'example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4, 15, 3, 2, 4, 11 ], 'tick2' : [ 3, 10, 2, 30, 4, 15, 3, 20, 4, 11 ], 'line' : { 1: 5, 5: 6 } },
				moving_max:	2,
				style:		'lines',
				filename:	'test/output8.png',
				nokey:		true,
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output9', function(done) {
			plot({
				title:		'bad_example',
				data:		{ 'tick' : [ 3, 1, 2, 3, 4, 15, 3, 2, 4, 11 ], 'tick2' : function(i) { return i; }, 'line' : { 1: 5, 5: 6 } },
				moving_max:	2,
				style:		'lines',
				filename:	'test/output9.png',
				nokey:		true,
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output10', function(done) {
			plot({
				title:		'example',
				data:		{ 'temperature' : { 1357162672: 22, 1357162782: 23, 1357162892: 24 } },
				time:		'hours',
				style:		'linespoints',
				filename:	'test/output10.png',
				format:		'png',
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output11', function(done) {
			plot({
				title:		'example',
				data:		{ 'temperature' : { 1357162672: 22, 1357162782: 23, 1357162892: 24 } },
				time:		'hours',
				style:		'linespoints',
				filename:	'test/output11.png',
				format:		'png',
				margin: 	{
					left: 10,
					right: 10,
					top: 10,
					bottom: 10
				},
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output12', function(done) {
			plot({
				title:		'example',
				data:		{ 't1' : { 1357162672: 22, 1357162782: 23, 1357162892: 24 }, 't2' : { 1357162672: 18, 1357162782: 20, 1357162892: 23 } },
				time:		'hours',
				style:		'line',
				filename:	'test/output12.png',
				format:		'png',
				hideSeriesTitle: true,
				lineStyle: [
					{
						'color': 'yellow',
						'weight': 2
					},
					{
						'color': 'blue',
						'weight': 4
					}
				],
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output13', function(done) {
			plot({
				title:		'example',
				data:		{ 't1' : { 1357162672: 22.5, 1357162782: 23.5, 1357162892: 24.5 } },
				time:		'hours',
				style:		'line',
				filename:	'test/output13.png',
				format:		'png',
				decimalsign: ',',
				xRotate: {
					value: 45,
					yOffset: 1,
					xOffset: 1
				},
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});

		it('Output14', function(done) {
			plot({
				title:		'example',
				data:		{ 't1' : { 1357162672: 22.2, 1357162782: 23, 1357162892: 24 } },
				time:		'hours',
				style:		'line',
				filename:	'test/output14.png',
				format:		'png',
				decimalsign: ',',
				yFormat: '%.2f USD',
				hideSeriesTitle: true,
				xlabel:		'Time',
				ylabel:		'Price',
				margin: 	{
					left: 10,
					right: 3,
					top: 3,
					bottom: 4
				},
				xRotate: {
					value: 45,
					yOffset: -1.5,
					xOffset: -2
				},
				hideSeriesTitle: true,
				lineStyle: [
					{
						'color': 'green',
						'weight': 2
					}
				],
				finish: function(error, stdout, stderr) { handleResult(error, stdout, stderr, done); }
			});
		});
	});
});