console.log("INITIALIZING JQUERY");

$("#o1").on("click", function () {
    console.log("Outfit 1 clicked");
    $(this).css("background-image", "url(imgs/pixel1.png)");
    $(this).css("background-size", "220px");
    $(this).css("background-align", "center");
    $(this).css("background-repeat", "no-repeat");
    console.log("Outfit 1 loaded");
    $(this).unbind("click");
});

$("#o2").on("click", function () {
    console.log("Outfit 2 clicked");
    $(this).css("background-image", "url(imgs/pixel2.png)");
    $(this).css("background-size", "220px");
    $(this).css("background-align", "center");
    $(this).css("background-repeat", "no-repeat");
    console.log("Outfit 2 loaded");
    $(this).unbind("click");
});

$("#o3").on("click", function () {
    console.log("Outfit 3 clicked");
    $(this).css("background-image", "url(imgs/pixel3.png)");
    $(this).css("background-size", "220px");
    $(this).css("background-align", "center");
    $(this).css("background-repeat", "no-repeat");
    console.log("Outfit 3 loaded");
    $(this).unbind("click");
});

$("#o4").on("click", function () {
    console.log("Outfit 4 clicked");
    $(this).css("background-image", "url(imgs/pixel4.png)");
    $(this).css("background-size", "220px");
    $(this).css("background-align", "center");
    $(this).css("background-repeat", "no-repeat");
    console.log("Outfit 4 loaded");
    $(this).unbind("click");
});

$("#o5").on("click", function () {
    console.log("Outfit 5 clicked");
    $(this).css("background-image", "url(imgs/pixel5.png)");
    $(this).css("background-size", "220px");
    $(this).css("background-align", "center");
    $(this).css("background-repeat", "no-repeat");
    console.log("Outfit 5 loaded");
    $(this).unbind("click");
});

console.log("JQUERY LOADED. MISSION IS A GO, BOSS");