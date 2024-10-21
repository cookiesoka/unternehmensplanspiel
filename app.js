const outputEL = document.querySelector(".outputText");
// Modal-Elemente

function onClick() {

    var duengerProd = parseFloat(document.getElementById("duenger").value);
    var kleberProd = parseFloat(document.getElementById("kleber").value);
    var waschmProd = parseFloat(document.getElementById("waschmittel").value);

    // Holen vom Produktionskoeffizienten
    var prodKoDuengerArt1 = parseFloat(document.getElementById("art1_duenger").value);
    var prodKoDuengerArt2 = parseFloat(document.getElementById("art2_duenger").value);
    var prodKoDuengerArt3 = parseFloat(document.getElementById("art3_duenger").value);

    var prodKoKleberArt1 = parseFloat(document.getElementById("art1_kleber").value);
    var prodKoKleberArt2 = parseFloat(document.getElementById("art2_kleber").value);
    var prodKoKleberArt3 = parseFloat(document.getElementById("art3_kleber").value);

    var prodKoWaschmArt1 = parseFloat(document.getElementById("art1_waschmittel").value);
    var prodKoWaschmArt2 = parseFloat(document.getElementById("art2_waschmittel").value);
    var prodKoWaschmArt3 = parseFloat(document.getElementById("art3_waschmittel").value);

    // Holen vorhandene Maschinen
    var maschArt1 = parseInt(document.getElementById("art1_maschinen").value);
    var maschArt2 = parseInt(document.getElementById("art2_maschinen").value);
    var maschArt3 = parseInt(document.getElementById("art3_maschinen").value);

    // Produktionseffizienz 
    var duengerMArt1 = Number(duengerProd * prodKoDuengerArt1);
    var duengerMArt2 = Number(duengerProd * prodKoDuengerArt2);
    var duengerMArt3 = Number(duengerProd * prodKoDuengerArt3);

    var kleberMArt1 = Number(kleberProd * prodKoKleberArt1);
    var kleberMArt2 = Number(kleberProd * prodKoKleberArt2);
    var kleberMArt3 = Number(kleberProd * prodKoKleberArt3);

    var waschmMArt1 = Number(waschmProd * prodKoWaschmArt1);
    var waschmMArt2 = Number(waschmProd * prodKoWaschmArt2);
    var waschmMArt3 = Number(waschmProd * prodKoWaschmArt3);

    // Notwendige Kapazität errechnen
    var kapaArt1 = Number(duengerMArt1 + kleberMArt1 + waschmMArt1);
    var kapaArt2 = Number(duengerMArt2 + kleberMArt2 + waschmMArt2);
    var kapaArt3 = Number(duengerMArt3 + kleberMArt3 + waschmMArt3);

    // Notwendige Maschinen ermitteln
    var notwMaschineArt1 = kapaArt1 / 3;
    var notwMaschineArt2 = kapaArt2 / 1;
    var notwMaschineArt3 = kapaArt3 / 0.3;

    // Auslastung der Maschinen berechnen
    var auslastungMaschine1 = (notwMaschineArt1 / maschArt1)*100;
    var auslastungMaschine2 = (notwMaschineArt2 / maschArt2)*100;
    var auslastungMaschine3 = (notwMaschineArt3 / maschArt3)*100;

    // Benötigte Rohstoffe nach Produkt
    var typ1Duenger = duengerProd * 1;
    var typ2Duenger = duengerProd * 7;

    var typ1Kleber = kleberProd * 3;
    var typ2Kleber = kleberProd * 7;

    var typ1Waschm = waschmProd * 15;
    var typ2Waschm = waschmProd * 7;

    // Summme verbrauchte Rohstoffe
    var verbrauchTyp1 = typ1Duenger + typ1Kleber + typ1Waschm;
    var verbrauchTyp2 = typ2Duenger + typ2Kleber + typ2Waschm;

    // Personalbedarf
    var bedarfTeamDuenger = duengerProd / 150;
    var bedarfTeamKleber = kleberProd / 40;
    var bedarfTeamWaschm = waschmProd / 6;

    // Facharbeiter je Team:
    var facharbeiterBedarfDuenger = bedarfTeamDuenger * 1;
    var facharbeiterBedarfKleber = bedarfTeamKleber * 2;
    var facharbeiterBedarfWaschm = bedarfTeamWaschm * 3;

    // Gesamt Bedarf Facharbeiter
    var gesamtBedarfFacharbeiter = facharbeiterBedarfDuenger + facharbeiterBedarfKleber + facharbeiterBedarfWaschm;


    // Angelernte MA je Team:
    var angelernteBedarfDuenger = bedarfTeamDuenger * 8;
    var angelernteBedarfKleber = bedarfTeamDuenger * 11;
    var angelernteBedarfWaschm = bedarfTeamWaschm * 1;

    // Gesamt Bedarf angelernte MA
    var gesamtBedarfangelernte = angelernteBedarfDuenger + angelernteBedarfKleber + angelernteBedarfWaschm;

    //Berechnung fehlende / Überschüssige MA
    var angestelleFacharbeiter = parseFloat(document.getElementById("fachkraefte").value);
    var angestelleAngelernte = parseFloat(document.getElementById("angelernte").value);

    var personalDispoFacharbeiter = gesamtBedarfFacharbeiter - angestelleFacharbeiter;
    var personalDispoAngelernte = gesamtBedarfangelernte - angestelleAngelernte


    // Ausgabe der Ergebnisse in die HTML-Datei
    outputEL.innerHTML = `
        Auslastung Maschine 1: ${auslastungMaschine1.toFixed(2)}% <br>
        Auslastung Maschine 2: ${auslastungMaschine2.toFixed(2)}% <br>
        Auslastung Maschine 3: ${auslastungMaschine3.toFixed(2)}% <br>
        Verbrauch Rohstoff Typ 1: ${verbrauchTyp1.toFixed(2)} <br>
        Verbrauch Rohstoff Typ 2: ${verbrauchTyp2.toFixed(2)} <br>
        Gesamtbedarf Facharbeiter: ${gesamtBedarfFacharbeiter.toFixed(2)} <br>
        Bedarf/Kündigung Facharbeiter: ${personalDispoFacharbeiter.toFixed(2)} <br>
        Gesamtbedarf angelernte MA: ${gesamtBedarfangelernte.toFixed(2)} <br>
        Bedarf/Kündigung angelernte MA: ${personalDispoAngelernte.toFixed(2)} 
    `;
}


