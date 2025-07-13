javascript:
//mass scavenging by Sophie "Shinko to Kuma"
serverTimeTemp = $("#serverDate")[0].innerText + " " + $("#serverTime")[0].innerText;
serverTime = serverTimeTemp.match(/^([0][1-9]|[12][0-9]|3[01])[\/\-]([0][1-9]|1[012])[\/\-](\d{4})( (0?[0-9]|[1][0-9]|[2][0-3])[:]([0-5][0-9])([:]([0-5][0-9]))?)?$/);
serverDate = Date.parse(serverTime[3] + "/" + serverTime[2] + "/" + serverTime[1] + serverTime[4]);
var is_mobile = !!navigator.userAgent.match(/iphone|android|blackberry/ig) || false;
var scavengeInfo;
var tempElementSelection="";

//relocate to mass scavenging page
if (window.location.href.indexOf('screen=place&mode=scavenge_mass') < 0) {
    //relocate
    window.location.assign(game_data.link_base_pure + "place&mode=scavenge_mass");
}

$("#massScavengeSophie").remove();
//set global variables

if (typeof version == 'undefined') {
    version = "new";
}


//set translations
var langShinko = [
    "Mass scavenging",
    "Select unit types/ORDER to scavenge with (drag units to order)",
    "Select categories to use",
    "When do you want your scav runs to return (approximately)?",
    "Runtime here",
    "Calculate runtimes for each page",
    "Creator: ",
    "Mass scavenging: send per 50 villages",
    "Launch group "
]

if (game_data.locale == "ro_RO") {
    //romanian server
    langShinko = [
        "Curatare in masa",
        "Selecteaza tipul unitatii/ORDONEAZA sa curete cu (trage unitatea pentru a ordona)",
        "Selecteaza categoria",
        "Cand vrei sa se intoarca trupele de la curatare (aproximativ)",
        "Durata aici",
        "Calculeaza durata pentru fiecare pagina",
        "Creator: ",
        "Cueatare in masa: trimite pe 50 de sate",
        "Lanseaza grup "
    ]
}
if (game_data.locale == "ar_AE") {
    //arabic server
    langShinko = [
        "Ø§Ù„Ø§ØºØ§Ø±Ø§Øª",
        "Ø§Ø®ØªØ§Ø± Ø§Ù„ÙˆØ­Ø¯Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø© ÙÙ‰ Ø§Ù„Ø§ØºØ§Ø±Ø§Øª",
        "Ø§Ø®ØªØ§Ø± Ø§Ù†ÙˆØ§Ø¹   Ø§Ù„Ø§ØºØ§Ø±Ø§Øª Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…Ø© ",
        " Ù…Ø§ Ø§Ù„Ù…Ø¯Ù‡ Ø§Ù„Ù…Ø¯Ù‡ Ø§Ù„Ø²Ù…Ù†ÙŠÙ‡ Ø§Ù„Ù…Ø±Ø§Ø¯ Ø§Ø±Ø³Ø§Ù„ Ø§Ù„Ø§ØºØ§Ø±Ø§Øª Ø¨Ù‡Ø§",
        "Ø¶Ø¹ Ø§Ø§Ù„Ù…Ø¯Ù‡ Ù‡Ù†Ø§",
        "Ø­Ø³Ø§Ø¨ Ø§Ù„Ù…Ø¯Ù‡ Ù„ÙƒÙ„ ØµÙØ­Ù‡ ",
        "Creator: ",
        "Ø§Ù„Ø§ØºØ§Ø±Ø§Øª : ØªØ±Ø³Ù„ Ù„ÙƒÙ„ 50 Ù‚Ø±ÙŠÙ‡ Ø¹Ù„Ù‰ Ø­Ø¯Ù‰ ",
        " ØªØ´ØºÙŠÙ„ Ø§Ù„Ù…Ø¬Ù…ÙˆØ¹Ø© "
    ]
}
if (game_data.locale == "el_GR") {
    //greek server
    langShinko = [
        "ÎœÎ±Î¶Î¹ÎºÎ® ÏƒÎ¬ÏÏ‰ÏƒÎ·",
        "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ Ï„Î¹Ï‚ Î¼Î¿Î½Î¬Î´ÎµÏ‚ Î¼Îµ Ï„Î¹Ï‚ Î¿Ï€Î¿Î¯ÎµÏ‚ Î¸Î± ÎºÎ¬Î½ÎµÏ„Îµ ÏƒÎ¬ÏÏ‰ÏƒÎ·",
        "Î•Ï€Î¹Î»Î­Î¾Ï„Îµ ÎµÏ€Î¯Ï€ÎµÎ´Î± ÏƒÎ¬ÏÏ‰ÏƒÎ·Ï‚ Ï€Î¿Ï… Î¸Î± Ï‡ÏÎ·ÏƒÎ¹Î¼Î¿Ï€Î¿Î¹Î·Î¸Î¿ÏÎ½",
        "Î§ÏÏŒÎ½Î¿Ï‚ Î£Î¬ÏÏ‰ÏƒÎ·Ï‚ (ÎÏÎµÏ‚.Î›ÎµÏ€Ï„Î¬)",
        "Î§ÏÏŒÎ½Î¿Ï‚",
        "Î¥Ï€Î¿Î»ÏŒÎ³Î¹ÏƒÎµ Ï‡ÏÏŒÎ½Î¿Ï…Ï‚ ÏƒÎ¬ÏÏ‰ÏƒÎ·Ï‚ Î³Î¹Î± ÎºÎ¬Î¸Îµ ÏƒÎµÎ»Î¯Î´Î±.",
        "Î”Î·Î¼Î¹Î¿Ï…ÏÎ³ÏŒÏ‚: ",
        "ÎœÎ±Î¶Î¹ÎºÎ® ÏƒÎ¬ÏÏ‰ÏƒÎ·: Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î® Î±Î½Î± 50 Ï‡Ï‰ÏÎ¹Î¬",
        "Î‘Ï€Î¿ÏƒÏ„Î¿Î»Î® Î¿Î¼Î¬Î´Î±Ï‚ "
    ]
}
if (game_data.locale == "nl_NL") {
    //dutch server
    langShinko = [
        "Massa rooftochten",
        "Kies welke troeptypes je wil mee roven, sleep om prioriteit te ordenen",
        "Kies categorieÃ«n die je wil gebruiken",
        "Wanneer wil je dat je rooftochten terug zijn?",
        "Looptijd hier invullen",
        "Bereken rooftochten voor iedere pagina",
        "Scripter: ",
        "Massa rooftochten: verstuur per 50 dorpen",
        "Verstuur groep "
    ]
}
if (game_data.locale == "it_IT") {
    //Italian server
    langShinko = [
        "Rovistamento di massa",
        "Seleziona i tipi da unitÃ  con cui rovistare",
        "Seleziona quali categorie utilizzare",
        "Inserisci la durata voluta dei rovistamenti in ORE",
        "Inserisci qui il tempo",
        "Calcola tempi per tutte le pagine",
        "Creatore: ",
        "Rovistamento di massa: manda su 50 villaggi",
        "Lancia gruppo"
    ]
}

//loading settings

// troop types

if (localStorage.getItem("troopTypeEnabled") == null) {
    console.log("No troopTypeEnabled found, making new one")
    worldUnits = game_data.units;
    var troopTypeEnabled = {}
    for (var i = 0; i < worldUnits.length; i++) {
        if (worldUnits[i] != "militia" && worldUnits[i] != "snob" && worldUnits[i] != "ram" && worldUnits[i] != "catapult" && worldUnits[i] != "spy" && worldUnits[i] != "knight") {
            troopTypeEnabled[worldUnits[i]] = false
        }
    };
    localStorage.setItem("troopTypeEnabled", JSON.stringify(troopTypeEnabled));
}
else {
    console.log("Getting which troop types are enabled from storage");
    var troopTypeEnabled = JSON.parse(localStorage.getItem("troopTypeEnabled"));
}

// keepHome

if (localStorage.getItem("keepHome") == null) {
    console.log("No units set to keep home, creating")
    var keepHome = {
        "spear": 0,
        "sword": 0,
        "axe": 0,
        "archer": 0,
        "light": 0,
        "marcher": 0,
        "heavy": 0
    }
    localStorage.setItem("keepHome", JSON.stringify(keepHome));
}
else {
    console.log("Grabbing which units to keep home");
    var keepHome = JSON.parse(localStorage.getItem("keepHome"));
}

// categories enabled

if (localStorage.getItem("categoryEnabled") == null) {
    console.log("No category enabled setting found, making new one")
    var categoryEnabled = [true, true, true, true];
    localStorage.setItem("categoryEnabled", JSON.stringify(categoryEnabled));
}
else {
    console.log("Getting which category types are enabled from storage");
    var categoryEnabled = JSON.parse(localStorage.getItem("categoryEnabled"));
}

//priority

if (localStorage.getItem("prioritiseHighCat") == null) {
    console.log("No priority/balance setting found, making new one")
    var prioritiseHighCat = false;
    localStorage.setItem("prioritiseHighCat", JSON.stringify(prioritiseHighCat));
}
else {
    console.log("Getting prioritiseHighCat from storage");
    var prioritiseHighCat = JSON.parse(localStorage.getItem("prioritiseHighCat"));
}

//Time element

if (localStorage.getItem("timeElement") == null) {
    console.log("No timeElement selected, use Date");
    localStorage.setItem("timeElement", "Date");
    tempElementSelection = "Date";
}
else {
    console.log("Getting which element from localstorage");
    tempElementSelection = localStorage.getItem("timeElement");

}

// sendorder

if (localStorage.getItem("sendOrder") == null) {
    console.log("No sendorder found, making new one")
    worldUnits = game_data.units;
    var sendOrder = [];
    for (var i = 0; i < worldUnits.length; i++) {
        if (worldUnits[i] != "militia" && worldUnits[i] != "snob" && worldUnits[i] != "ram" && worldUnits[i] != "catapult" && worldUnits[i] != "spy" && worldUnits[i] != "knight") {
            sendOrder.push(worldUnits[i])
        }
    };
    console.log(sendOrder);
    localStorage.setItem("sendOrder", JSON.stringify(sendOrder));
}
else {
    console.log("Getting sendorder from storage");
    var sendOrder = JSON.parse(localStorage.getItem("sendOrder"));
}

// runtimes

if (localStorage.getItem("runTimes") == null) {
    console.log("No runTimes found, making new one")
    var runTimes = {
        "off": 4,
        "def": 3
    }
    localStorage.setItem("runTimes", JSON.stringify(runTimes));
}
else {
    console.log("Getting runTimes from storage");
    var runTimes = JSON.parse(localStorage.getItem("runTimes"));
}

if (typeof premiumBtnEnabled == 'undefined') {
    var premiumBtnEnabled = false;
}

/*if (game_data.units.indexOf("archer") == -1) {
    sendOrder.splice(sendOrder.indexOf('archer'), 1);
    delete troopTypeEnabled["archer"];
}
if (game_data.units.indexOf("marcher") == -1) {
    sendOrder.splice(sendOrder.indexOf('marcher'), 1);
    delete troopTypeEnabled["marcher"];
}*/

if (game_data.player.sitter > 0) {
    URLReq = `game.php?t=${game_data.player.id}&screen=place&mode=scavenge_mass`;
}
else {
    URLReq = "game.php?&screen=place&mode=scavenge_mass";
}
var arrayWithData;
var enabledCategories = [];
var availableUnits = [];
var squad_requests = [];
var squad_requests_premium = [];
var scavengeInfo;
var duration_factor = 0;
var duration_exponent = 0;
var duration_initial_seconds = 0;
var categoryNames = JSON.parse("[" + $.find('script:contains("ScavengeMassScreen")')[0].innerHTML.match(/\{.*\:\{.*\:.*\}\}/g) + "]")[0];
//basic setting, to be safe
var time = {
    'off': 0,
    'def': 0
};



//colors for UI
if (typeof colors == 'undefined') {
    var backgroundColor = "#36393f";
    var borderColor = "#3e4147";
    var headerColor = "#202225";
    var titleColor = "#ffffdf";
    cssClassesSophie = `
<style>
.sophRowA {
background-color: #32353b;
color: white;
}
.sophRowB {
background-color: #36393f;
color: white;
}
.sophHeader {
background-color: #202225;
font-weight: bold;
color: white;
}
.btnSophie
{
    background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);
}
.btnSophie:hover
{ 
    background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);
}
#x {
    position: absolute;
    background: red;
    color: white;
    top: 0px;
    right: 0px;
    width: 30px;
    height: 30px;
}
#cog {
    position: absolute;
    background: #32353b;
    color: white;
    top: 0px;
    right: 30px;
    width: 30px;
    height: 30px;
}
</style>`
}
else {
    if (colors == 'pink') {
        //pink theme
        var colors = {
            "backgroundColor": "#FEC5E5",
            "borderColor": "#FF1694",
            "headerColor": "#F699CD",
            "titleColor": "#E11584"
        };
        var backgroundColor = colors.backgroundColor;
        var borderColor = colors.borderColor;
        var headerColor = colors.headerColor;
        var titleColor = colors.titleColor;
        cssClassesSophie = `
        <style>
        .btnSophie
        {
            background-image: linear-gradient(#FEC5E5 0%, #FD5DA8 30%, #FF1694 80%, #E11584 100%);
        }
        .btnSophie:hover
        { 
            background-image: linear-gradient(#F2B8C6 0%, #FCBACB 30%, #FA86C4 80%, #FE7F9C 100%);
        }
        #x {
            position: absolute;
            background: red;
            color: white;
            top: 0px;
            right: 0px;
            width: 30px;
            height: 30px;
        }
        #cog {
            position: absolute;
            background: #FEC5E5;
            color: white;
            top: 0px;
            right: 30px;
            width: 30px;
            height: 30px;
        }
        </style>`
    }
    else if (colors == "swedish") {
        //yellow/blue

        var colors = {
            "backgroundColor": "#fecd00",
            "borderColor": "#03456b",
            "headerColor": "#006aa8",
            "titleColor": "#ffffdf"
        };
        var backgroundColor = colors.backgroundColor;
        var borderColor = colors.borderColor;
        var headerColor = colors.headerColor;
        var titleColor = colors.titleColor;
        cssClassesSophie = `
        <style>
        .btnSophie
        {
            background-image: linear-gradient(#00a1fe 0%, #5d9afd 30%, #1626ff 80%, #1f15e1 100%);
        }
        .btnSophie:hover
        { 
            background-image: linear-gradient(#b8bcf2 0%, #babbfc 30%, #8c86fa 80%, #969fff 100%);
        }
        #x {
            position: absolute;
            background: red;
            color: white;
            top: 0px;
            right: 0px;
            width: 30px;
            height: 30px;
        }
        #cog {
            position: absolute;
            background: #fecd00;
            color: white;
            top: 0px;
            right: 30px;
            width: 30px;
            height: 30px;
        }
        </style>`


    }
    else if (colors == "minimalistGray") {
        //gray

        var colors = {
            "backgroundColor": "#f1f1f1",
            "borderColor": "#777777",
            "headerColor": "#ded9d9",
            "titleColor": "#383834"
        };
        var backgroundColor = colors.backgroundColor;
        var borderColor = colors.borderColor;
        var headerColor = colors.headerColor;
        var titleColor = colors.titleColor;
        cssClassesSophie = `
        <style>
        .btnSophie
        {
            background-image: linear-gradient(#00a1fe 0%, #5d9afd 30%, #1626ff 80%, #1f15e1 100%);
            color:white
        }
        .btnSophie:hover
        { 
            background-image: linear-gradient(#b8bcf2 0%, #babbfc 30%, #8c86fa 80%, #969fff 100%);
            color: white
        }
        #x {
            position: absolute;
            background: red;
            color: white;
            top: 0px;
            right: 0px;
            width: 30px;
            height: 30px;
        }
        #cog {
            position: absolute;
            background: #f1f1f1;
            color: white;
            top: 0px;
            right: 30px;
            width: 30px;
            height: 30px;
        }
        </style>`


    }
    else if (colors == "TW") {
        //TW
        console.log("Changing to TW theme");
        var backgroundColor = "#F4E4BC";
        var borderColor = "#ecd7ac";
        var headerColor = "#c6a768";
        var titleColor = "#803000";
        cssClassesSophie = `
        <style>
        .sophRowA {
            background-color: #f4e4bc;
            color: black;
            }
            .sophRowB {
            background-color: #fff5da;
            color: black;
            }
            .sophHeader {
            background-color: #c6a768;
            font-weight: bold;
            color: #803000;
            }
            .sophLink
            {
                color:#803000;
            }
        .btnSophie
        {
            linear-gradient(to bottom, #947a62 0%,#7b5c3d 22%,#6c4824 30%,#6c4824 100%)
            color:white
        }
        .btnSophie:hover
        { 
            linear-gradient(to bottom, #b69471 0%,#9f764d 22%,#8f6133 30%,#6c4d2d 100%);
            color: white
        }
        #x {
            position: absolute;
            background: red;
            color: white;
            top: 0px;
            right: 0px;
            width: 30px;
            height: 30px;
        }
        #cog {
            position: absolute;
            background: #f4e4bc;
            color: white;
            top: 0px;
            right: 30px;
            width: 30px;
            height: 30px;
        }
        </style>`
    }
    else {
        //standard
        var backgroundColor = "#36393f";
        var borderColor = "#3e4147";
        var headerColor = "#202225";
        var titleColor = "#ffffdf";
        cssClassesSophie = `
            <style>
            .sophRowA {
            background-color: #32353b;
            color: white;
            }
            .sophRowB {
            background-color: #36393f;
            color: white;
            }
            .sophHeader {
            background-color: #202225;
            font-weight: bold;
            color: white;
            }
            .btnSophie
            {
                background-image: linear-gradient(#6e7178 0%, #36393f 30%, #202225 80%, black 100%);
            }
            .btnSophie:hover
            { 
                background-image: linear-gradient(#7b7e85 0%, #40444a 30%, #393c40 80%, #171717 100%);
            }
            #x {
                position: absolute;
                background: red;
                color: white;
                top: 0px;
                right: 0px;
                width: 30px;
                height: 30px;
            }
            #cog {
                position: absolute;
                background: #32353b;
                color: white;
                top: 0px;
                right: 30px;
                width: 30px;
                height: 30px;
            }
            </style>`
    }
}




//adding UI classes to page
$("#contentContainer").eq(0).prepend(cssClassesSophie);
$("#mobileHeader").eq(0).prepend(cssClassesSophie);



$.getAll = function (
    urls, // array of URLs
    onLoad, // called when any URL is loaded, params (index, data)
    onDone, // called when all URLs successfully loaded, no params
    onError // called when a URL load fails or if onLoad throws an exception, params (error)
) {
    var numDone = 0;
    var lastRequestTime = 0;
    var minWaitTime = 200; // ms between requests
    loadNext();
    function loadNext() {
        if (numDone == urls.length) {
            onDone();
            return;
        }

        let now = Date.now();
        let timeElapsed = now - lastRequestTime;
        if (timeElapsed < minWaitTime) {
            let timeRemaining = minWaitTime - timeElapsed;
            setTimeout(loadNext, timeRemaining);
            return;
        }
        console.log('Getting ', urls[numDone]);
        $("#progress").css("width", `${(numDone + 1) / urls.length * 100}%`);
        lastRequestTime = now;
        $.get(urls[numDone])
            .done((data) => {
                try {
                    onLoad(numDone, data);
                    ++numDone;
                    loadNext();
                } catch (e) {
                    onError(e);
                }
            })
            .fail((xhr) => {
                onError(xhr);
            })
    }
};

//get scavenging data that is in play for this world, every world has different exponent, factor, and initial seconds. Also getting the URLS of each mass scavenging page
//we can limit the amount of pages we need to call this way, since the mass scavenging pages have all the data that is necessary: troopcounts, which categories per village are unlocked, and if rally point exists.
function getData() {
    $("#massScavengeSophie").remove();
    URLs = [];
    $.get(URLReq, function (data) {
        if ($(".paged-nav-item").length > 0) {
            amountOfPages = parseInt($(".paged-nav-item")[$(".paged-nav-item").length - 1].href.match(/page=(\d+)/)[1]);
        }
        else {
            amountOfPages = 0;
        }
        for (var i = 0; i <= amountOfPages; i++) {
            //push url that belongs to scavenging page i
            URLs.push(URLReq + "&page=" + i);
            //get world data
            tempData = JSON.parse($(data).find('script:contains("ScavengeMassScreen")').html().match(/\{.*\:\{.*\:.*\}\}/g)[0]);
            duration_exponent = tempData[1].duration_exponent;
            duration_factor = tempData[1].duration_factor;
            duration_initial_seconds = tempData[1].duration_initial_seconds;
        }
        console.log(URLs);

    })
        .done(function () {
            //here we get all the village data and make an array with it, we won't be able to parse unless we add brackets before and after the string
            arrayWithData = "[";
            $.getAll(URLs,
                (i, data) => {
                    thisPageData = $(data).find('script:contains("ScavengeMassScreen")').html().match(/\{.*\:\{.*\:.*\}\}/g)[2];
                    arrayWithData += thisPageData + ",";
                },
                () => {
                    //on done
                    arrayWithData = arrayWithData.substring(0, arrayWithData.length - 1);
                    //closing bracket so we can parse the data into a useable array
                    arrayWithData += "]";
                    scavengeInfo = JSON.parse(arrayWithData);
                    // count and calculate per village how many troops per category need to be sent. 
                    // Once count is finished, make a new UI element, and group all the results per 200.
                    // According to morthy, that is the limit at which the server will accept squad pushes.
                    count = 0;
                    for (var i = 0; i < scavengeInfo.length; i++) {
                        calculateHaulCategories(scavengeInfo[i]);
                        count++;
                    }
                    if (count == scavengeInfo.length) {
                        //Post here
                        console.log("Done");
                        //need to split all the scavenging runs per 200, server limit according to morty
                        squads = {};
                        squads_premium = {};
                        per200 = 0;
                        groupNumber = 0;
                        squads[groupNumber] = [];
                        squads_premium[groupNumber] = [];
                        for (var k = 0; k < squad_requests.length; k++) {
                            if (per200 == 200) {
                                groupNumber++;
                                squads[groupNumber] = [];
                                squads_premium[groupNumber] = [];
                                per200 = 0;
                            }
                            per200++;
                            squads[groupNumber].push(squad_requests[k]);
                            squads_premium[groupNumber].push(squad_requests_premium[k]);
                        }

                        //create html send screen with button per launch
                        console.log("Creating launch options");
                        htmlWithLaunchButtons = `<div id="massScavengeFinal" class="ui-widget-content" style="position:fixed;background-color:${backgroundColor};cursor:move;z-index:50;">
                        <button class="btn" id = "x" onclick="closeWindow('massScavengeFinal')">
                            X
                        </button>
                        <table id="massScavengeSophieFinalTable" class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
                        <tr>
                            <td colspan="10" id="massScavengeSophieTitle" style="text-align:center; width:auto; background-color:${headerColor}">
                                <h3>
                                    <center style="margin:10px"><u>
                                            <font color="${titleColor}">${langShinko[7]}</font>
                                        </u>
                                    </center>
                                </h3>
                            </td>
                        </tr>`;
                        for (var s = 0; s < Object.keys(squads).length; s++) {
                            //add row with new button
                            htmlWithLaunchButtons += `<tr id="sendRow${s}" style="text-align:center; width:auto; background-color:${backgroundColor}"><td style="text-align:center; width:auto; background-color:${backgroundColor}"><center><input type="button"  class="btn btnSophie" id="sendMass" onclick="sendGroup(${s},false)" value="${langShinko[8]}${s + 1}"></center></td><td style="text-align:center; width:auto; background-color:${backgroundColor}"><center><input type="button"  class="btn btn-pp btn-send-premium" id="sendMassPremium" onclick="sendGroup(${s},true)" value="${langShinko[8]}${s + 1} WITH PREMIUM" style="display:none"></center></td></tr>`
                        }
                        htmlWithLaunchButtons += "</table></div>"
                        //appending to page
                        console.log("Creating launch UI");
                        $(".maincell").eq(0).prepend(htmlWithLaunchButtons);
                        $("#mobileContent").eq(0).prepend(htmlWithLaunchButtons);

                        if (is_mobile == false) {
                            $("#massScavengeFinal").draggable();
                        }
                        for (var prem = 0; prem < $("#sendMassPremium").length; prem++) {
                            if (premiumBtnEnabled == true) {
                                $($("#sendMassPremium")[prem]).show();
                            }
                        }
                        $("#sendMass")[0].focus()
                    }
                },
                (error) => {
                    console.error(error);
                });
        }
        )
}

//first UI, will always open as soon as you run the script.
html = `
<div id="massScavengeSophie" class="ui-widget-content" style="width:600px;background-color:${backgroundColor};cursor:move;z-index:50;">
<button class="btn" id ="cog" onclick="settings()">âš™ï¸</button>
<button class="btn" id = "x" onclick="closeWindow('massScavengeSophie')">
            X
        </button>
    <table id="massScavengeSophieTable" class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
        <tr>
            <td colspan="10" id="massScavengeSophieTitle" style="text-align:center; width:auto; background-color:${headerColor}">
                <h3>
                    <center style="margin:10px"><u>
                            <font color="${titleColor}">${langShinko[0]}</font>
                        </u>
                    </center>
                </h3>
            </td>
        </tr>
        <tr style="background-color:${backgroundColor}">
            <td style="text-align:center;background-color:${headerColor}" colspan="15">
                <h3>
                    <center style="margin:10px"><u>
                            <font color="${titleColor}">${langShinko[1]}</font>
                        </u></center>
                </h3>
            </td>
        </tr>
        <tr id="imgRow">
        </tr>
    </table>
    <hr>
    <table class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
        <tbody>
            <tr style="background-color:${backgroundColor}">
                <td style="text-align:center;background-color:${headerColor}" colspan="4">
                    <h3>
                        <center style="margin:10px"><u>
                                <font color="${titleColor}">${langShinko[2]}</font>
                            </u></center>
                    </h3>
                </td>
            </tr>
            <tr id="categories" style="text-align:center; width:auto; background-color:${headerColor}">
                <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                    <font color="${titleColor}">${categoryNames[1].name}</font>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                    <font color="${titleColor}">${categoryNames[2].name}</font>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                    <font color="${titleColor}">${categoryNames[3].name}</font>
                </td>
                <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                    <font color="${titleColor}">${categoryNames[4].name}</font>
                </td>
            </tr>
            <tr>
                <td style="text-align:center; width:auto; background-color:${backgroundColor}">
                    <center><input type="checkbox" ID="category1" name="cat1"></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${backgroundColor}">
                    <center><input type="checkbox" ID="category2" name="cat2"></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${backgroundColor}">
                    <center><input type="checkbox" ID="category3" name="cat3"></center>
                </td>
                <td style="text-align:center; width:auto; background-color:${backgroundColor}">
                    <center><input type="checkbox" ID="category4" name="cat4"></center>
                </td>
            </tr>
        </tbody>
    </table>
    <hr>
    <table class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
        <tr id="runtimesTitle" style="text-align:center; width:auto; background-color:${headerColor}">
            <td colspan="3" style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:10px">
                    <font color="${titleColor}">${langShinko[3]}</font>
                </center>
            </td>
        </tr>
        <tr id="runtimes" style="text-align:center; width:auto; background-color:${headerColor}">
            <td style="background-color:${headerColor};"></td>
            <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                <font color="${titleColor}">Off villages</font>
            </td>
            <td style="text-align:center; width:auto; background-color:${headerColor};padding: 10px;">
                <font color="${titleColor}">Def villages</font>
            </td>
        </tr>
        <tr>
            <td style="width:22px;background-color:${backgroundColor}; padding:5px;"><input type="radio" ID="timeSelectorDate" name="timeSelector" ></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><input type="date" id="offDay" name="offDay" value="${setDayToField(runTimes.off)}"><input type="time" id="offTime" name="offTime" value="${setTimeToField(runTimes.off)}"></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><input type="date" id="defDay" name="defDay" value="${setDayToField(runTimes.def)}"><input type="time" id="defTime" name="defTime" value="${setTimeToField(runTimes.def)}"></td>
        </tr>
        <tr>
            <td style="width:22px;background-color:${backgroundColor}; padding:5px;"><input type="radio" ID="timeSelectorHours" name="timeSelector" ></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><input type="text" class="runTime_off" style="background-color:${backgroundColor};color:${titleColor};" value="${runTimes['off']}" onclick="this.select();"></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><input type="text" class="runTime_def" style="background-color:${backgroundColor};color:${titleColor};" value="${runTimes['def']}" onclick="this.select();"></td>
        </tr>
        <tr>
            <td style="width:22px;background-color:${backgroundColor}; padding:5px;"></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><font color="${titleColor}"><span id="offDisplay"></span></font></td>
            <td style="text-align:center; width:auto; background-color:${backgroundColor}; padding:5px;"><font color="${titleColor}"><span id="defDisplay"></span></font></td>
        </tr>
        </tr>
    </table>
    <hr>
    <table class="vis" border="1" style="width: 100%;background-color:${backgroundColor};border-color:${borderColor}">
        <tr id="settingPriorityTitle" style="text-align:center; width:auto; background-color:${headerColor}">
            <td colspan="2" style="text-align:center; width:auto; background-color:${headerColor}">
                <center style="margin:10px">
                    <font color="${titleColor}">${"Which setting?"}</font>
                </center>
            </td>
        </tr>
        <tr id="settingPriorityHeader" style="text-align:center; width:auto; background-color:${headerColor}">
            <td style="text-align:center; width:50%; background-color:${headerColor}; padding:5px;">
                <font color="${titleColor}">Balanced over all categories</font>
            </td>
            <td style="text-align:center; width:50%; background-color:${headerColor}; padding:5px;">
                <font color="${titleColor}">Priority on filling higher categories</font>
            </td>
        </tr>
        <tr id="settingPriority" style="text-align:center; width:auto; background-color:${headerColor}">
            <td style="text-align:center; width:50%; background-color:${backgroundColor}; padding:5px;"><input type="radio" ID="settingPriorityBalanced" name="prio"></td>
            <td style="text-align:center; width:50%; background-color:${backgroundColor}; padding:5px;"><input type="radio" ID="settingPriorityPriority" name="prio"></td>
        </tr>
        <tr style="text-align:center; width:auto; background-color:${headerColor}">
            <td style="text-align:center; width:50%; background-color:${backgroundColor}; padding:5px;"> <font color="${titleColor}">Settings bugged?</font></td>
            <td style="text-align:center; width:50%; background-color:${backgroundColor}; padding:5px;"><center><input type="button" class="btn btnSophie" id="reset" onclick="resetSettings()" value="Reset settings"></center></td>
        </tr>
    </table>
    <hr>
    <center><input type="button" class="btn btnSophie" id="sendMass" onclick="readyToSend()" value="${langShinko[5]}"></center>
    <hr>
    <center><img id="sophieImg" class=" tooltip-delayed" title="Sophie -Shinko to Kuma-" src="https://dl.dropboxusercontent.com/s/bxoyga8wa6yuuz4/sophie2.gif" style="cursor:help; position: relative"></center>
    <br>
    <center>
        <p>
            <font color="${titleColor}">${langShinko[6]} </font><a href="https://shinko-to-kuma.my-free.website/" style="text-shadow:-1px -1px 0 ${titleColor},1px -1px 0 ${titleColor},-1px 1px 0 ${titleColor},1px 1px 0 ${titleColor};" title="Sophie profile" target="_blank">Sophie "Shinko to Kuma"</a>
        </p>
    </center>
</div>
`;
$(".maincell").eq(0).prepend(html);
$("#mobileContent").eq(0).prepend(html);
if (game_data.locale == "ar_AE") {
    $("#sophieImg").attr("src", "https://media2.giphy.com/media/qYr8p3Dzbet5S/giphy.gif");
}
if (is_mobile == false) {
    $("#massScavengeSophie").css("position", "fixed");
    $("#massScavengeSophie").draggable();

}

$("#offDisplay")[0].innerText = fancyTimeFormat(runTimes.off * 3600);
$("#defDisplay")[0].innerText = fancyTimeFormat(runTimes.def * 3600);
if (tempElementSelection == "Date") {
    $(`#timeSelectorDate`).prop("checked", true);
    selectType("Date");
    updateTimers();
}
else {
    $(`#timeSelectorHours`).prop("checked", true);
    selectType("Hours");
    updateTimers();
}
$("#offDay")[0].addEventListener("input", function () {
    updateTimers();
}, false)



$("#defDay")[0].addEventListener("input", function () {
    updateTimers();
}, false)

$("#offTime")[0].addEventListener("input", function () {
    updateTimers();
}, false)

$("#defTime")[0].addEventListener("input", function () {
    updateTimers();
}, false)


$(".runTime_off")[0].addEventListener("input", function () {
    updateTimers();
}, false)

$(".runTime_def")[0].addEventListener("input", function () {
    updateTimers();
}, false)

$("#timeSelectorDate")[0].addEventListener("input", function () {
    selectType('Date');
    updateTimers();
}, false)

$("#timeSelectorHours")[0].addEventListener("input", function () {
    selectType('Hours');
    updateTimers();
}, false)

//create checkboxes and add them to the UI


for (var i = 0; i < sendOrder.length; i++) {

    $("#imgRow").eq(0).append(`<td align="center" style="background-color:${backgroundColor}">
    <table class="vis" border="1" style="width: 100%">
    <thead>
    </thead>
    <tbody>    
        <tr>
            <td style=" text-align:center;background-color:${headerColor};padding: 5px;"><img src="https://dsen.innogamescdn.com/asset/cf2959e7/graphic/unit/unit_${sendOrder[i]}.png" title="${sendOrder[i]}" alt="" class=""></td>
        </tr>
        <tr>
            <td align="center" style="background-color:${backgroundColor};padding: 5px;"><input type="checkbox" ID="${sendOrder[i]}" name="${sendOrder[i]}"></td>
        </tr>
        <tr>
            <td style="text-align:center; width:auto; background-color:#202225;padding: 5px;"><font color="#ffffdf">Backup</font></td>
        </tr>
        <tr>
            <td align="center" style="background-color:${backgroundColor};padding: 5px;"><input type="text" ID="${sendOrder[i]}Backup" name="${sendOrder[i]}" value="${keepHome[sendOrder[i]]}" size="5"></td>
        </tr>
        </tbody>  
    </table>
</td>`);
    $("#imgRow").sortable({
        axis: "x",
        revert: 100,
        containment: "parent",
        forceHelperSize: true,
        delay: 100,
        scroll: false
    }).disableSelection();

    if (prioritiseHighCat == true) {
        console.log('setting high priority cat')
        $(`#settingPriorityPriority`).prop("checked", true);
    }
    else {
        console.log('setting balanced')
        $(`#settingPriorityBalanced`).prop("checked", true);
    }

    enableCorrectTroopTypes();
}



//focus calculate button!
$("#sendMass").focus();

function readyToSend() {

    //check if every setting is chosen, otherwise alert and abort

    if ($("#settingPriorityPriority")[0].checked == false && $("#settingPriorityBalanced")[0].checked == false) {
        // no setting chosen
        alert("You have not chosen how you want to split your troops! Choose either prioritising higher categories till chosen runtime, or balanced spread over all categories!");
        throw Error("didn't choose type");
    }

    if ($("#category1").is(":checked") == false && $("#category2").is(":checked") == false && $("#category3").is(":checked") == false && $("#category4").is(":checked") == false) {
        // no category chosen
        alert("You have not chosen which categories you want to use!");
        throw Error("didn't choose category");
    }


    //get trooptypes we wanna use, and runtime
    console.log(sendOrder);
    for (var i = 0; i < sendOrder.length; i++) {
        troopTypeEnabled[sendOrder[i]] = $(`:checkbox#${sendOrder[i]}`).is(":checked");
    }
    for (var i = 0; i < sendOrder.length; i++) {
        keepHome[sendOrder[i]] = $(`#${sendOrder[i]}Backup`).val();
    }
    console.log(troopTypeEnabled);
    enabledCategories.push($("#category1").is(":checked"));
    enabledCategories.push($("#category2").is(":checked"));
    enabledCategories.push($("#category3").is(":checked"));
    enabledCategories.push($("#category4").is(":checked"));

    if ($("#timeSelectorDate")[0].checked == true) {
        localStorage.setItem("timeElement", "Date");
        time.off = Date.parse($("#offDay").val().replace(/-/g, "/") + " " + $("#offTime").val());
        time.def = Date.parse($("#defDay").val().replace(/-/g, "/") + " " + $("#defTime").val());
        time.off = (time.off - serverDate) / 1000 / 3600;
        time.def = (time.def - serverDate) / 1000 / 3600;
    }
    else {
        localStorage.setItem("timeElement", "Hours");
        time.off = $('.runTime_off').val();
        time.def = $('.runTime_def').val();
    }

    console.log("Time off: " + time.off);
    console.log("Time def: " + time.def);
    if (time.off > 24 || time.def > 24) {
        alert("Your runtime is higher than 24h!");
    }


    //Dialog.show("content", time.off + " " + time.def);


    console.log(sendOrder);
    if ($("#settingPriorityPriority")[0].checked == true) {
        prioritiseHighCat = true;
    }
    else {
        prioritiseHighCat = false;
    }

    sendOrder = [];
    for (var k = 0; k < $("#imgRow :checkbox").length; k++) {
        sendOrder.push($("#imgRow :checkbox")[k].name)
    }

    console.log("Runtimes: Off: " + time.off + " Def: " + time.def);
    localStorage.setItem("troopTypeEnabled", JSON.stringify(troopTypeEnabled));
    localStorage.setItem("keepHome", JSON.stringify(keepHome));
    localStorage.setItem("categoryEnabled", JSON.stringify(enabledCategories));
    localStorage.setItem("prioritiseHighCat", JSON.stringify(prioritiseHighCat));
    localStorage.setItem("sendOrder", JSON.stringify(sendOrder));
    localStorage.setItem("runTimes", JSON.stringify(time));

    console.log("Saved priority: " + prioritiseHighCat);
    console.table(troopTypeEnabled);
    console.table(time);
    console.table(sendOrder);
    console.table(enabledCategories);
    categoryEnabled = enabledCategories;

    getData();
}

function sendGroup(groupNr, premiumEnabled) {
    if (premiumEnabled == true) {
        actuallyEnabled = false;
        actuallyEnabled = confirm("Are you sure you want to send the scavenge runs using premium? Cancelling will send the scav run without premium.   ********* DEPENDING ON HOW MANY UNITS/VILLAGES YOU SEND WITH, THIS CAN RESULT IN VERY HIGH AMOUNTS OF PP BEING USED! ONLY USE THIS IF YOU CAN AFFORD IT/KNOW HOW MUCH THE INDIVIDUAL PP RUNS WOULD COST YOU! *********");
    }
    else {
        actuallyEnabled = false;
    }
    if (actuallyEnabled == true) {
        tempSquads = squads_premium[groupNr];
    }
    else {
        tempSquads = squads[groupNr];
    }
    //Send one group(one page worth of scavenging)
    $(':button[id^="sendMass"]').prop('disabled', true)
    $(':button[id^="sendMassPremium"]').prop('disabled', true)
    TribalWars.post('scavenge_api', 
    { ajaxaction: 'send_squads' }, 
    { "squad_requests": tempSquads }, function () {
        UI.SuccessMessage("Group sent successfully");
    },
        !1
    );

    //once group is sent, remove the row from the table
    setTimeout(function () { 
        $(`#sendRow${groupNr}`).remove(); 
        $(':button[id^="sendMass"]').prop('disabled', false); 
        $(':button[id^="sendMassPremium"]').prop('disabled', false); 
        $("#sendMass")[0].focus(); 
    }, 200);
}



function calculateHaulCategories(data) {
    //check if village has rally point
    if (data.has_rally_point == true) {
        console.log("can scavenge");
        var troopsAllowed = {};
        for (key in troopTypeEnabled) {
            if (troopTypeEnabled[key] == true) {
                if (data.unit_counts_home[key] - keepHome[key] > 0) {
                    troopsAllowed[key] = data.unit_counts_home[key] - keepHome[key];
                }
                else {
                    troopsAllowed[key] = 0;
                }
            }
        }
        var unitType = {
            "spear": 'def',
            "sword": 'def',
            "axe": 'off',
            "archer": 'def',
            "light": 'off',
            "marcher": 'off',
            "heavy": 'def',
        }

        var typeCount = { 'off': 0, 'def': 0 };

        for (var prop in troopsAllowed) {
            typeCount[unitType[prop]] = typeCount[unitType[prop]] + troopsAllowed[prop];
        }

        totalLoot = 0;

        //check what the max possible loot is
        for (key in troopsAllowed) {
            if (key == "spear") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 25);
            if (key == "sword") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 15);
            if (key == "axe") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 10);
            if (key == "archer") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 10);
            if (key == "light") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 80);
            if (key == "marcher") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 50);
            if (key == "heavy") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 50);
            if (key == "knight") totalLoot += troopsAllowed[key] * (data.unit_carry_factor * 100);
        }
        console.log("Loot possible from this village: " + totalLoot);
        if (totalLoot == 0) {
            //can't loot from here, end
            return;
        }
        if (typeCount.off > typeCount.def) {
            haul = parseInt(((time.off * 3600) / duration_factor - duration_initial_seconds) ** (1 / (duration_exponent)) / 100) ** (1 / 2);
        } else {
            haul = parseInt(((time.def * 3600) / duration_factor - duration_initial_seconds) ** (1 / (duration_exponent)) / 100) ** (1 / 2);
        }

        haulCategoryRate = {};
        //check which categories are enabled


        if (data.options[1].is_locked == true || data.options[1].scavenging_squad != null) {
            haulCategoryRate[1] = 0;
        } else {
            haulCategoryRate[1] = haul / 0.1;
        }
        if (data.options[2].is_locked == true || data.options[2].scavenging_squad != null) {
            haulCategoryRate[2] = 0;
        } else {
            haulCategoryRate[2] = haul / 0.25;
        }
        if (data.options[3].is_locked == true || data.options[3].scavenging_squad != null) {
            haulCategoryRate[3] = 0;
        } else {
            haulCategoryRate[3] = haul / 0.50;
        }
        if (data.options[4].is_locked == true || data.options[4].scavenging_squad != null) {
            haulCategoryRate[4] = 0;
        } else {
            haulCategoryRate[4] = haul / 0.75;
        }
        console.log(haulCategoryRate);

        for (var i = 0; i < enabledCategories.length; i++) {
            if (enabledCategories[i] == false) haulCategoryRate[i + 1] = 0;
        }


        totalHaul = haulCategoryRate[1] + haulCategoryRate[2] + haulCategoryRate[3] + haulCategoryRate[4];

        unitsReadyForSend = calculateUnitsPerVillage(troopsAllowed);

        for (var k = 0; k < Object.keys(unitsReadyForSend).length; k++) {
            candidate_squad = { "unit_counts": unitsReadyForSend[k], "carry_max": 9999999999 };
            if (data.options[k + 1].is_locked == false) {
                squad_requests.push({ "village_id": data.village_id, "candidate_squad": candidate_squad, "option_id": k + 1, "use_premium": false })
                squad_requests_premium.push({ "village_id": data.village_id, "candidate_squad": candidate_squad, "option_id": k + 1, "use_premium": true })

            }
        }
    }
    else {
        console.log("no rally point");
    }
}

function enableCorrectTroopTypes() {
    worldUnits = game_data.units;
    for (var i = 0; i < worldUnits.length; i++) {
        if (worldUnits[i] != "militia" && worldUnits[i] != "snob" && worldUnits[i] != "ram" && worldUnits[i] != "catapult" && worldUnits[i] != "spy") {
            if (troopTypeEnabled[worldUnits[i]] == true) $(`#${worldUnits[i]}`).prop("checked", true);
        }
    }
    for (var i = 0; i < categoryEnabled.length + 1; i++) {
        if (categoryEnabled[i] == true) {
            $(`#category${i + 1}`).prop("checked", true);
        }
    }
}

function calculateUnitsPerVillage(troopsAllowed) {
    var unitHaul = {
        "spear": 25,
        "sword": 15,
        "axe": 10,
        "archer": 10,
        "light": 80,
        "marcher": 50,
        "heavy": 50,
        "knight": 100
    };
    //calculate HERE :D
    console.log(troopsAllowed)
    unitsReadyForSend = {};
    unitsReadyForSend[0] = {};
    unitsReadyForSend[1] = {};
    unitsReadyForSend[2] = {};
    unitsReadyForSend[3] = {};
    if (totalLoot > totalHaul) {
        //too many units
        console.log("too many units")
        //prioritise higher category first
        if (version != "old") {
            for (var j = 3; j >= 0; j--) {
                var reach = haulCategoryRate[j + 1];
                sendOrder.forEach((unit) => {
                    if (troopsAllowed.hasOwnProperty(unit) && reach > 0) {
                        var amountNeeded = Math.floor(reach / unitHaul[unit]);

                        if (amountNeeded > troopsAllowed[unit]) {
                            unitsReadyForSend[j][unit] = troopsAllowed[unit];
                            reach = reach - (troopsAllowed[unit] * unitHaul[unit]);
                            troopsAllowed[unit] = 0;
                        } else {
                            unitsReadyForSend[j][unit] = amountNeeded;
                            reach = 0;
                            troopsAllowed[unit] = troopsAllowed[unit] - amountNeeded;
                        }
                    }
                });
            }
        }
        else {
            for (var j = 0; j < 4; j++) {
                for (key in troopsAllowed) {
                    unitsReadyForSend[j][key] = Math.floor((haulCategoryRate[j + 1] * (troopsAllowed[key] / totalLoot)));
                }
            }

        }
    }
    else {
        //not enough units, spread evenly
        troopNumber = 0;
        for (key in troopsAllowed) {
            troopNumber += troopsAllowed[key];
        }
        console.log(troopNumber);
        if (prioritiseHighCat != true && troopNumber > 130) {
            for (var j = 0; j < 4; j++) {
                console.log("not enough units, but even balance")
                for (key in troopsAllowed) {
                    unitsReadyForSend[j][key] = Math.floor((totalLoot / totalHaul * haulCategoryRate[j + 1]) * (troopsAllowed[key] / totalLoot));
                }
            }
        }
        else {
            //prioritise higher category first
            for (var j = 3; j >= 0; j--) {
                var reach = haulCategoryRate[j + 1];
                sendOrder.forEach((unit) => {
                    if (troopsAllowed.hasOwnProperty(unit) && reach > 0) {
                        var amountNeeded = Math.floor(reach / unitHaul[unit]);

                        if (amountNeeded > troopsAllowed[unit]) {
                            unitsReadyForSend[j][unit] = troopsAllowed[unit];
                            reach = reach - (troopsAllowed[unit] * unitHaul[unit]);
                            troopsAllowed[unit] = 0;
                        } else {
                            unitsReadyForSend[j][unit] = amountNeeded;
                            reach = 0;
                            troopsAllowed[unit] = troopsAllowed[unit] - amountNeeded;
                        }
                    }
                });
            }
        }
    }
    return unitsReadyForSend;
}

function resetSettings() {
    localStorage.removeItem("troopTypeEnabled");
    localStorage.removeItem("categoryEnabled");
    localStorage.removeItem("prioritiseHighCat");
    localStorage.removeItem("sendOrder");
    localStorage.removeItem("runTimes");
    localStorage.removeItem("keepHome");
    UI.BanneredRewardMessage("Settings reset");
    window.location.reload();
}

function closeWindow(title) {
    $("#" + title).remove();
}

function settings() {
    alert("coming soon!");
}

function zeroPadded(val) {
    if (val >= 10)
        return val;
    else
        return '0' + val;
}

function setTimeToField(runtimeType) {

    d = Date.parse(new Date(serverDate)) + runtimeType * 1000 * 3600;
    d = new Date(d);
    d = zeroPadded(d.getHours()) + ":" + zeroPadded(d.getMinutes());
    return d;
}
function setDayToField(runtimeType) {

    d = Date.parse(new Date(serverDate)) + runtimeType * 1000 * 3600;
    d = new Date(d);
    d = d.getFullYear() + "-" + zeroPadded(d.getMonth() + 1) + "-" + zeroPadded(d.getDate());
    return d;
}

function fancyTimeFormat(time) {
    if (time < 0) {
        return "Time is in the past!"
    }
    else {
        // Hours, minutes and seconds
        var hrs = ~~(time / 3600);
        var mins = ~~((time % 3600) / 60);
        var secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        var ret = "Max duration: ";

        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        else {
            ret += "0:" + (mins < 10 ? "0" : "");
        }

        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }
}

function updateTimers() {
    if ($("#timeSelectorDate")[0].checked == true) {
        console.log("datebox")
        $("#offDisplay")[0].innerText = fancyTimeFormat((Date.parse($("#offDay").val().replace(/-/g, "/") + " " + $("#offTime").val()) - serverDate) / 1000)
        $("#defDisplay")[0].innerText = fancyTimeFormat((Date.parse($("#defDay").val().replace(/-/g, "/") + " " + $("#defTime").val()) - serverDate) / 1000)
    }
    else {
        console.log("Textbox ")
        $("#offDisplay")[0].innerText = fancyTimeFormat($(".runTime_off").val() * 3600)
        $("#defDisplay")[0].innerText = fancyTimeFormat($(".runTime_def").val() * 3600)
    }
}

function selectType(type) {
    console.log("clicked" + type);
    switch (type) {
        case 'Hours':
            if ($("#timeSelectorDate")[0].checked == true) {
                $("#offDay").eq(0).removeAttr('disabled');
                $("#defDay").eq(0).removeAttr('disabled');
                $("#offTime").eq(0).removeAttr('disabled');;
                $("#defTime").eq(0).removeAttr('disabled');
                $(".runTime_off").prop("disabled", true);
                $(".runTime_def").prop("disabled", true);
            }
            else {
                $("#offDay").prop("disabled", true);
                $("#defDay").prop("disabled", true);
                $("#offTime").prop("disabled", true);
                $("#defTime").prop("disabled", true);
                $(".runTime_off").eq(0).removeAttr('disabled');
                $(".runTime_def").eq(0).removeAttr('disabled');
            }
            break;
        case 'Date':
            if ($("#timeSelectorHours")[0].checked == true) {
                $("#offDay").prop("disabled", true);
                $("#defDay").prop("disabled", true);
                $("#offTime").prop("disabled", true);
                $("#defTime").prop("disabled", true);
                $(".runTime_off").eq(0).removeAttr('disabled');
                $(".runTime_def").eq(0).removeAttr('disabled');
            }
            else {
                $("#offDay").eq(0).removeAttr('disabled');
                $("#defDay").eq(0).removeAttr('disabled');
                $("#offTime").eq(0).removeAttr('disabled');;
                $("#defTime").eq(0).removeAttr('disabled');
                $(".runTime_off").prop("disabled", true);
                $(".runTime_def").prop("disabled", true);
            }
            break;
        default:
            break;

    }
}
/* This is some notes just for me so I know what I'm working with data wise

Structure of the array:
scavengInfo[i].

village_id
player_id
village_name
res :{wood,stone,iron}
res_rate:{wood,stone,iron}
storage_max
unit_counts_home:{spear,sword, etc}
unit_carry_factor
has_rally_point (true or false)

options[1]
base_id: 1
village_id
is_locked: (true or false)
unlock_time: null
scavenging_squad: null
*/
