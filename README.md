**node-gnuplotter** is an easy to use [node.js](http://nodejs.org/) module to draw charts using [gnuplot](http://www.gnuplot.info/) and [ps2pdf](http://pages.cs.wisc.edu/~ghost/doc/AFPL/6.50/Ps2pdf.htm). This module is based on Richard Meadows's [node-plotter](https://github.com/richardeoin/nodejs-plotter)

## Installation ##

Prerequisites:

```
sudo apt-get install gnuplot ghostscript libgd2-dev
```

If you have [npm](https://npmjs.org/) installed, just run:

```
npm install plotter
```

## Usage ##

```javascript
var plot = require('plotter').plot;

plot({
	data:		[ 3, 1, 2, 3, 4 ],
	filename:	'output.png'
});
```

### Output format ###

This defaults to `.png` but specifing `format: svg` changes the output
to [.svg](http://www.w3.org/Graphics/SVG/) and `format: pdf` changes
the output format to
[.pdf](http://en.wikipedia.org/wiki/Portable_Document_Format).

```javascript
var plot = require('plotter').plot;

plot({
	data:		[ 3, 1, 2, 3, 4 ],
	filename:	'output.svg',
	format:		'svg'
});
```

### Formatting ###

The following properties can be used:
- `title` : _Sets the title of the graph_
- `xlabel` : _Sets the label on the x axis of the graph_
- `ylabel` : _Sets the label on the y axis of the graph_
- `logscale` : _Makes the y axis of the graph appear in a log scale_
- `style` : _The style of the lines on the graph. Possibilites include
  `lines` (default), `points` and `linespoints`_
- `nokey` : _Disables the graph key_
- `hideSeriesTitle`: _Indicates if plot should include legend_
- `margin`: _Sets margin if needed_
- `lineStyles`: _Applies additional style to each serie_
- `decimalsign`: _Specifies a custom decimal sign_
- `yFormat`: _Specifies how to format values on the Y axis_

The following example shows these in use:

```javascript
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
	]
});
```

### Specifing X and Y values ###

```javascript
plot({
	data:		{ 'line' : { 1: 5, 5: 6 } },
	filename:	'output.png'
});
```

Instead of specifing an array for `data`, you can specify an object
with a named series inside.

### Multiple Series ###

```javascript
plot({
	data:		{ 'tick' : [ 3, 1, 2, 3, 4 ], 'line' : { 1: 5, 5: 6 } },
	filename:	'output.png'
});
```

### Time Formatting ###

```javascript
plot({
	data:		{ 'temperature' :
			{ 1357162672: 22, 1357162782: 23, 1357162892: 24 } },
	time:		'hours',
	filename:	'output.png'
});
```

The x axis can be formatted as a time series if the x values are given
as a [unix time](http://en.wikipedia.org/wiki/Unix_time). The `time`
property can be specified with the [gnuplot time format](http://gnuplot.sourceforge.net/docs_4.2/node274.html).

### Other options ###

The options object might additionally contain the following:

Option | Description | Example
-------|-------------|---------
`exec`   | Arguments for the gnuplot process | `options.exec = { cwd : '/home/user/images' };`
`finish` | Callback executed when the gnuplot process finishes | `options.finish = function(){ Console.log('Success!'); };`
