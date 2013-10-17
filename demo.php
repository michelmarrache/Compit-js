<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<title>CompIt JS</title>
	<meta name="author" content="Michel Marrache michel@marrache.co">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<link rel="stylesheet" href="css/reset.css">
	<link rel="stylesheet" href="css/style.css">

	// jQuery
	<script src="//code.jquery.com/jquery-1.9.1.min.js"></script>

	// MouseTrap (credits: http://craig.is/killing/mice)
	<script src="/_private/js/mousetrap.min.js"></script>

	// Comps.js
	<script src="/_private/js/comps.js"></script>

	<script>
		$(function(){

			// COMP JS
			$('#myComps').compit({
			  clientName  : 'Client Name', // String [Name of client or project]
			  minWidth    : 1000, // Integer [minimum width of images]
			  bgColor     : '#FFFFFF' // Hex or RGBA Value [background color of web page]
			});

			// MOUSETRAP:
			Mousetrap.bind('left', function() {
				previousComp();
			});
			Mousetrap.bind('right', function() {
				nextComp();
			});

		});
    </script>
</head>
<body>
<div id="myComps" class="comps">
	<?php include '../_private/get_images.php'; ?>
</div>
</body>
</html>