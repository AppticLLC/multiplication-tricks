var numEq = 20;

function fadeEq() {
    var eqNum = Math.floor(Math.random() * numEq);
    $("#eq" + eqNum).fadeOut(1000, function() {
        var num1 = Math.floor(Math.random() * 99) + 1;
        var num2 = Math.floor(Math.random() * 99) + 1;
        document.getElementById('eq' + eqNum).innerHTML = num1 + " * " + num2 + " = " + (num1 * num2);
        var xMax = $("#numberPlane").width() - 100;
        var yMax = $("#numberPlane").height() - 100;

        var noXMin = $("#noCollide").offset().left;
        var noYMin = $("#noCollide").offset().top;
        var noXMax = noXMin + $("#noCollide").width();
        var noYMax = noYMin + $("#noCollide").height();
        var leftId = .5 * (noXMin + noXMax);
        var topId = .5 * (noYMin + noYMax);

        while (topId > noYMin - 20 && topId < noYMax + 20 && leftId > noXMin - 100 && leftId < noXMax + 20) {
            topId = Math.floor(Math.random() * yMax);
            leftId = Math.floor(Math.random() * xMax);
        }

        document.getElementById('eq' + eqNum).style.top = topId + "px";
        document.getElementById('eq' + eqNum).style.left = leftId + "px";
    });
    $("#eq" + eqNum).fadeIn(1000);
}

function closePop() {
    $("#backdrop").fadeOut();
    $("#popup").fadeOut();
}

function openPop() {
    $("#backdrop").fadeIn();
    $("#popup").fadeIn();
}

function genEq() {
    var plane = document.getElementById('numberPlane');
    for (var i = 0; i < numEq; i++) {
        var xMax = $("#numberPlane").width() - 100;
        var yMax = $("#numberPlane").height() - 100;
        var num1 = Math.floor(Math.random() * 99) + 1;
        var num2 = Math.floor(Math.random() * 99) + 1;

        var noXMin = $("#noCollide").offset().left;
        var noYMin = $("#noCollide").offset().top;
        var noXMax = noXMin + $("#noCollide").width();
        var noYMax = noYMin + $("#noCollide").height();
        var leftId = .5 * (noXMin + noXMax);
        var topId = .5 * (noYMin + noYMax);

        while (topId > noYMin - 20 && topId < noYMax + 20 && leftId > noXMin - 100 && leftId < noXMax + 20) {
            topId = Math.floor(Math.random() * yMax);
            leftId = Math.floor(Math.random() * xMax);
        }

        plane.innerHTML += "<div id='eq" + i + "' style='position:absolute;width:auto;height:auto;top:" + topId + "px;left:" + leftId + "px;'>" + num1 + " * " + num2 + " = " + (num1 * num2) + "</div>";
    }
    setInterval(function() {
        fadeEq();
    }, 500);
}
