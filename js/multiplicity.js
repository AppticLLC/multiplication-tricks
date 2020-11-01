var timing = true;

function detTip(num, ref) {
    var insert = "";
    if (parseInt(num) == "25" || parseInt(num) == "50") {
        insert += "<p>- 100 is <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=2' target='_blank' style='color:blue;text-decoration:none;'>easily divisible</a> by " + num + "; multiply " + ref + " by 100 and divide the product by " + (100 / num) + "</p>";
    }
    if (parseInt(num) >= 95) {
        insert += "<p>- " + num + " is in the <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=7' target='_blank' style='color:blue;text-decoration:none;'>high 90's</a>; multiply " + ref + " by 100 and subtract " + ref + " * " + (100 - num) + "</p>";
    }
    if (num.substr(num.length - 1) == "0") {
        insert += "<p>- " + num + " <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=8' target='_blank' style='color:blue;text-decoration:none;'>ends in 0</a>; multiply " + ref + " * " + num / 10 + " and put 0 at the end</p>";
        document.getElementById('timeDisplay').innerHTML = 8;
    }
    if (num.substr(num.length - 1) == "1") {
        insert += "<p>- " + num + " <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=7' target='_blank' style='color:blue;text-decoration:none;'>ends in 1</a>; add " + ref + " to " + ref + " * " + Math.floor(num / 10) * 10 + "</p>";
    }
    if (num.substr(num.length - 1) == "2") {
        insert += "<p>- " + num + " <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=7' target='_blank' style='color:blue;text-decoration:none;'>ends in 2</a>; add 2 * " + ref + " to " + ref + " * " + Math.floor(num / 10) * 10 + "</p>";
    }
    if (num.substr(num.length - 1) == "8") {
        insert += "<p>- " + num + " <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=7' target='_blank' style='color:blue;text-decoration:none;'>ends in 8</a>; subtract 2 * " + ref + " from " + ref + " * " + Math.ceil(num / 10) * 10 + "</p>";
    }
    if (num.substr(num.length - 1) == "9") {
        insert += "<p>- " + num + " <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=7' target='_blank' style='color:blue;text-decoration:none;'>ends in 9</a>; subtract " + ref + " from " + ref + " * " + Math.ceil(num / 10) * 10 + "</p>";
    }
    return insert;
}

function hints(hintsButton) {
    if (hintsButton.innerHTML == "Show hints") {
        $("#tips").fadeIn();
        hintsButton.innerHTML = "Hide hints";
    } else {
        $("#tips").fadeOut();
        hintsButton.innerHTML = "Show hints";
    }
}

function sqr(a) {
    return a * a;
}

function pair(num1, num2) {
    var insert = "";
    if (num1 == num2) {
        if (Math.ceil(num1 / 10) * 10 - num1 == 1 || num1 - Math.floor(num1 / 10) * 10 == 1) {
            var nearest = Math.ceil(num1 / 10) * 10;
            if (num1 - Math.floor(num1 / 10) * 10 == 1) nearest = Math.floor(num1 / 10) * 10;
            insert += "<p>- <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=6' target='_blank' style='color:blue;text-decoration:none;'>squares near the nearest 10</a>: square " + nearest + " and ";
            if (Math.ceil(num1 / 10) * 10 - num1 == 1) {
                insert += "subtract (" + nearest + " + " + (nearest - 1) + ")</p>";
            } else {
                insert += "add (" + nearest + " + " + (nearest + 1) + ")</p>";
            }
        }
        insert += "<p>- <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=5' target='_blank' style='color:blue;text-decoration:none;'>squares</a>: multiply ";
        if (num1 - Math.floor(num1 / 10) * 10 >= Math.ceil(num1 / 10) * 10 - num1) {
            insert += parseInt(Math.ceil(num1 / 10) * 10) + " by " + parseInt(2 * num1 - Math.ceil(num1 / 10) * 10) + " and add " + parseInt(sqr(num1 - Math.ceil(num1 / 10) * 10)) + "</p>";
        } else {
            insert += parseInt(Math.floor(num1 / 10) * 10) + " by " + parseInt(2 * num1 - Math.floor(num1 / 10) * 10) + " and add " + parseInt(sqr(num1 - Math.floor(num1 / 10) * 10)) + "</p>"
        }
    } else {
        if (num1 % 2 == num2 % 2) {
            insert += "<p>- <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=1' target='_blank' style='color:blue;text-decoration:none;'>both even or odd</a>: square " + (parseInt(num1) + parseInt(num2)) / 2 + " and subtract " + Math.abs(num2 - num1) / 2 + " squared</p>";
        }
        if (num1 % num2 == 0 || num2 % num1 == 0) {
            if (num1 % num2 == 0) {
                insert += "<p>- " + num1 + " is <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=3' target='_blank' style='color:blue;text-decoration:none;'>easily divisible</a> by " + num2 + "; square " + num2 + " and multiply the product by " + (num1 / num2) + "</p>";
            } else {
                insert += "<p>- " + num2 + " is <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=3' target='_blank' style='color:blue;text-decoration:none;'>easily divisible</a> by " + num1 + "; square " + num1 + " and multiply the product by " + (num2 / num1) + "</p>";
            }
        }
        if (Math.abs(num1 - num2) <= 2) {
            var larger = num1;
            var smaller = num2;
            if (num2 > num1) {
                larger = num2;
                smaller = num1;
            }
            insert += "<p>- the two numbers are <a href='https://www.neelsomani.com/projects/multiply/tricks.html?num=4' target='_blank' style='color:blue;text-decoration:none;'>within 2</a> of each other; square " + larger + " and subtract " + larger + " * " + (larger - smaller) + " or square " + smaller + " and add " + (larger - smaller) + " * " + smaller + "</p>";
        }
    }
    if (num1.substr(num1.length - 1) * num2.substr(num2.length - 1) < 10) {
        insert += "<p>- the ones digits in " + num1 + " and " + num2 + " multiply to less than 10. It may be easiest to traditionally multiply out these numbers as (" + num1.substr(num1.length - 1) + " * " + num2.substr(num2.length - 1) + ") + (" + num1.charAt(0) + "0 * " + num2.substr(num2.length - 1) + ") + (" + num2.charAt(0) + "0 * " + num1.substr(num2.length - 1) + ") + (" + num1.charAt(0) + "0 * " + num2.charAt(0) + "0)</p>";
    }
    return insert;
}

function gen() {
    document.getElementById('num1').innerHTML = Math.floor(Math.random() * 90 + 10);
    document.getElementById('num2').innerHTML = Math.floor(Math.random() * 90 + 10);
    //document.getElementById('num2').innerHTML = document.getElementById('num1').innerHTML;
    var num1 = document.getElementById('num1').innerHTML;
    var num2 = document.getElementById('num2').innerHTML;
    document.getElementById('tips').innerHTML = detTip(num1, num2) + detTip(num2, num1) + pair(num1, num2);
    if (document.getElementById('tips').innerHTML == "") {
        document.getElementById('timeDisplay').innerHTML = "45";
        document.getElementById('tips').innerHTML = "<p>- there are no tricks for this problem</p>";
    }
}

function disableTimer() {
    timing = false;
    document.getElementById('disableLabel').style.display = "none";
    document.getElementById('timeDisplay').style.display = "none";
}

function timer() {
    if (timing) {
        document.getElementById('timeDisplay').innerHTML = Math.round((document.getElementById('timeDisplay').innerHTML - .1) * 10) / 10;
        if (document.getElementById('timeDisplay').innerHTML <= 0) verify();
    }
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
        document.getElementById('timeDisplay').innerHTML = "25";
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
