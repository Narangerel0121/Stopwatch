document.getElementById("start").addEventListener("click", function() {

});
setInterval(() => {
    const secondRef = document.getElementById("second");
    for(let i = 0; i <= 60; i++){
        Number(secondRef) += 1;
    }
}, 1000);