$(".dropdown").hide();


var slided = false;
$(".list").click(function () {
$(".dropdown").slideToggle();

})
if($(".dropdown").is(":hidden")){
    $(document).click(function() {
        $(".dropdown").hide();
    })
}

/*databáze*/


var nadpisy = [
"Rozhovor s filmovým publicistou"];

 var obrazky = [
"Photos/Totalfilm.jpg"]


 var textiky = [
    "Náš první host pro náš první rozhovor je filmový publicista a tvůrce Totalfilm Podcast, Martin Mažári, se kterým jsme si povídali o aktuální situaci ve světě filmu."]

var data = [
    "21. 4. 2024"
]
var klasy = [
    "Clanky/clanek-1.html"
]




var del = nadpisy.length
var headlines = nadpisy.length - 1;
var sec = nadpisy.length - 2;
var trd = del -3;
var frh = del - 4;
var fvh = del - 5;








$(".nadpis").html(nadpisy[headlines])
$(".foto").attr("src", obrazky[headlines])
$(".clanek-text").html(textiky[headlines])
$(".hlavdat").html(data[headlines])
$(".a1").attr("href", klasy[headlines])

$(".n2").html(nadpisy[sec])
$(".o2").attr("src", obrazky[sec])
$(".t2").html(textiky[sec])
$(".d2").html(data[sec])
$(".a2").attr("href", klasy[sec]);

$(".n3").html(nadpisy[trd])
$(".o3").attr("src", obrazky[trd])
$(".t3").html(textiky[trd])
$(".d3").html(data[trd])
$(".a3").attr("href", klasy[trd]);

$(".n4").html(nadpisy[frh])
$(".o4").attr("src", obrazky[frh])
$(".t4").html(textiky[frh])
$(".d4").html(data[frh])
$(".a4").attr("href", klasy[frh]);

$(".n5").html(nadpisy[fvh])
$(".o5").attr("src", obrazky[fvh])
$(".t5").html(textiky[fvh])
$(".d5").html(data[fvh])
$(".a5").attr("href", klasy[fvh]);

