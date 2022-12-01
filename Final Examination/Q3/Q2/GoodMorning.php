<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Get Time</title>
</head>

<body>
    <p style="font-weight:bold">
        Hello Mihir,
        <?php
date_default_timezone_set('Asia/Calcutta');
$Hour = date('G');


if ($Hour >= 5 && $Hour <= 11) {
    echo "Good Morning";
} else if ($Hour >= 12 && $Hour <= 18) {
    echo "Good Afternoon";
} else if ($Hour >= 19 || $Hour <= 4) {
    echo "Good Evening";
}
    
?>
    </p>
</body>

</html>