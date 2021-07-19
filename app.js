function setDivClick(index) {
    document.getElementById("divScope" + index).addEventListener(
        "click",
        function() {
            alert("You clicked div#" + index);
        },
        false
    );
}
var i, len = 3;
for (i = 0; i < len; i++) {
    setDivClick(i);
}