<?php
$myfile = fopen("MCA.txt", "w") or die("Unable to open file!");
$txt = "Hi i am ,\n";
fwrite($myfile, $txt);
$txt = "Mihir Dhangdhariya\n";
fwrite($myfile, $txt);
$txt = "Roll no.,\n";
fwrite($myfile, $txt);
$txt = "A011.,\n";
fwrite($myfile, $txt);
$txt = "from batch B1,\n";
fwrite($myfile, $txt);
$txt = "& currently pursuing MCA From MPSTME\n";
fwrite($myfile, $txt);
fclose($myfile);
?>