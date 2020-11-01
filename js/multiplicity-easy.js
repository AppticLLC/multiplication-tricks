function gen() {
    document.getElementById('num1').innerHTML = Math.floor(Math.random() * 90 + 10);
    document.getElementById('num2').innerHTML = Math.floor(Math.random() * 8 + 2);
}

function timer() {
    document.getElementById('timeDisplay').innerHTML = Math.round((document.getElementById('timeDisplay').innerHTML - .1) * 10) / 10;
    if (document.getElementById('timeDisplay').innerHTML <= 0) verify();
}

function verify() {
    var ans = document.getElementById('answer').value;
    if (document.getElementById('timeDisplay').innerHTML <= 0 || ans != "") {
        var num1 = document.getElementById('num1').innerHTML;
        var num2 = document.getElementById('num2').innerHTML;
        if (parseInt(num1) * parseInt(num2) == ans) {
            var ind = document.getElementById('indicator');
            ind.style.color = "green";
            ind.innerHTML = "correct";
            document.getElementById('correctAnswer').innerHTML = ans;
            document.getElementById('correctNumber').innerHTML = parseInt(document.getElementById('correctNumber').innerHTML) + 1;
            document.getElementById('totalNumber').innerHTML = parseInt(document.getElementById('totalNumber').innerHTML) + 1;
        } else {
            var ind = document.getElementById('indicator');
            ind.style.color = "red";
            ind.innerHTML = "wrong";
            document.getElementById('correctAnswer').innerHTML = parseInt(num1) * parseInt(num2);
            document.getElementById('totalNumber').innerHTML = parseInt(document.getElementById('totalNumber').innerHTML) + 1;
        }
        document.getElementById('answer').value = "";
        document.getElementById('timeDisplay').innerHTML = "15";
        gen();
    }
}

function init() {
    setInterval(function() {
        timer()
    }, 100);
    document.getElementById('answer').focus();
    gen();
}
