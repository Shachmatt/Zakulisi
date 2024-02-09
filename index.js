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
"Zdar",
 "Čau",
"Ahoj",
 "Čauky",
"Dobrej"];

 var obrazky = [
"Photos/stažený soubor (1).jpeg",
"Photos/stažený soubor.jpeg",
"Photos/D1D7897-Final-Leveled-2560.jpg",
"Photos/painting-mountain-lake-with-mountain-background_188544-9126.avif.jpg",
"Photos/fvh.jpg"]


 var textiky = [
    "Je to přecijen moje chyba. V zimě se kupuje exotičtější ovoce. Velice populární jsou například mandarinky.",
"Zapomněl jsem zmínit, že byla trochu kyselá, ale v zimě bývají okurky nic moc.",
"Ahoj snědl jsem okurku a byla moc dobrá fakt jsem si pochutnal",
"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget pharetra nisi, eu iaculis purus. Donec tortor dolor, egestas eget tortor ut, consequat volutpat tortor. Etiam suscipit nulla id est accumsan, a facilisis arcu finibus Duis feugiat velit a tellus tempor, id tempor erat ultrices.",
"Mandarinky jsou ale podle mě přeceňované. Je to možná tím, že jsem je měl v zimním období víceméně pořád."]

var data = [
    "1.2. 2024",
    "2.2. 2024",
    "3.2. 2024",
    "4.2. 2024",
    "5.2. 2024"
]
var klasy = [
    "https://cs.wikipedia.org/wiki/Mastn%C3%A1_kyselina",
    "https://www.google.com",
    "https://www.seznam.cz",
    "https://www.youtube.com/watch?v=AF8d72mA41M",
    "clanek-template.html"
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

