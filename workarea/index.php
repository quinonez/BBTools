<?php
?>
<html>
<head>
    <meta charset="UTF-8" />
    <title>Test Suite</title>
    <link rel="stylesheet" href="qunit.css">
    <script src="qunit.js"></script>
    <script src="../lib/require.js"></script>
    <script>
        QUnit.config.autostart = false;
        require(['BBT-tests'], function () {
            //Tests loaded, now run them.
            QUnit.start();
        });
    </script>
</head>
<body>
<div id="qunit"></div>
<div id="qunit-fixture"></div>
<div id="c1"></div>
</body>
</html>

