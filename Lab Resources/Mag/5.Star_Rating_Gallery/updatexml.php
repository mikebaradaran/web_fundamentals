<?php
	// Location of the XML file on the file system
	$file = 'gallery.xml';
	$xml = simplexml_load_file($file);
	$score = $xml->xpath('/gallery/image[path="'.$_GET["image"].'"]/rating');
	$numvotes = $xml->xpath('/gallery/image[path="'.$_GET["image"].'"]/numvotes');
	$oldscore = (double)$score[0];
	$votes = (integer)$numvotes[0];
	$tmpscore = ($oldscore*$votes)+$_GET['rating'];
	$votes = $votes+1;
	$newscore = $tmpscore/$votes;
	$score[0][0] = $newscore;
	$numvotes[0][0] = $votes;
	$fp = fopen('gallery.xml', 'w');
	fwrite($fp, $xml->asXML());
	fclose($fp);
?>

