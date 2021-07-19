let i, len = 3;
for(i = 0; i < len; i++) {
    document.getElementById("divScope" + i).addEventListener(
        "click",
        (function (index) {
            return function () {
                alert("You clicked div #" + index);
            };
        }(i)),
    false);
}