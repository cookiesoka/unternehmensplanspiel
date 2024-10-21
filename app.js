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

    //Rohstoff Berechnung
    var lagerRohstoffTyp1 = parseFloat(document.getElementById("rohstoff1").value)
    var lagerRohstoffTyp2 = parseFloat(document.getElementById("rohstoff2").value)

    var neuLagerRohstoffTyp1 = lagerRohstoffTyp1 - verbrauchTyp1;
    var neuLagerRohstoffTyp2 = lagerRohstoffTyp2 - verbrauchTyp2;
    
    //Transport
    //Absatz Dünger
    var absatzChfDuengerAlt = parseFloat(document.getElementById("absatz_duenger_chf").value)
    var absatzAutDuengerAlt = parseFloat(document.getElementById("absatz_duenger_aut").value)
    var absatzPoldiDuengerAlt = parseFloat(document.getElementById("absatz_duenger_poldi").value)
    //Absatz Kleber
    var absatzChfKleberAlt = parseFloat(document.getElementById("absatz_kleber_chf").value)
    var absatzAutKleberAlt = parseFloat(document.getElementById("absatz_kleber_aut").value)
    var absatzPoldiKleberAlt = parseFloat(document.getElementById("absatz_kleber_poldi").value)
    //Absatz Waschmittel
    var absatzChfWaschmAlt = parseFloat(document.getElementById("absatz_waschmittel_chf").value)
    var absatzAutWaschmAlt = parseFloat(document.getElementById("absatz_waschmittel_aut").value)
    var absatzPoldiWaschmAlt = parseFloat(document.getElementById("absatz_waschmittel_poldi").value)
    //Lager Dünger
    var lagerChfDuengerAlt = parseFloat(document.getElementById("chf_duenger").value)
    var lagerAutDuengerAlt = parseFloat(document.getElementById("aut_duenger").value)
    var lagerPoldiDuengerAlt = parseFloat(document.getElementById("poldi_duenger").value)
    //Lager Kleber
    var lagerChfKleberAlt = parseFloat(document.getElementById("chf_kleber").value)
    var lagerAutKleberAlt = parseFloat(document.getElementById("aut_kleber").value)
    var lagerPoldiKleberAlt = parseFloat(document.getElementById("poldi_kleber").value)
    //Lager Waschmittel
    var lagerChfWaschmAlt = parseFloat(document.getElementById("chf_waschmittel").value)
    var lagerAutWaschmAlt = parseFloat(document.getElementById("aut_waschmittel").value)
    var lagerPoldiWaschmAlt = parseFloat(document.getElementById("poldi_waschmittel").value)

    //Berechnung neuer Regionallagerbestand
    //Dünger
    var lagerChfDuengerNeu = lagerChfDuengerAlt - absatzChfDuengerAlt;
    var lagerAutDuengerNeu = lagerAutDuengerAlt - absatzAutDuengerAlt;
    var lagerPoldiDuengerNeu = lagerPoldiDuengerAlt - absatzPoldiDuengerAlt;
    //Kleber
    var lagerChfKleberNeu = lagerChfKleberAlt - absatzChfKleberAlt;
    var lagerAutKleberNeu = lagerAutKleberAlt - absatzAutKleberAlt;
    var lagerPoldiKleberNeu = lagerPoldiKleberAlt - absatzPoldiKleberAlt;
    //Waschmittel
    var lagerChfWaschmNeu = lagerChfWaschmAlt - absatzChfWaschmAlt;
    var lagerAutWaschmNeu = lagerAutWaschmAlt - absatzAutWaschmAlt;
    var lagerPoldiWaschmNeu = lagerPoldiWaschmAlt - absatzPoldiWaschmAlt;

    // Ausgabe der Ergebnisse in die HTML-Datei
    outputEL.innerHTML = `
        Auslastung Maschine 1: ${auslastungMaschine1.toFixed(2)}% <br>
        Auslastung Maschine 2: ${auslastungMaschine2.toFixed(2)}% <br>
        Auslastung Maschine 3: ${auslastungMaschine3.toFixed(2)}% <br><br>
        Verbrauch Rohstoff Typ 1: ${verbrauchTyp1.toFixed(2)} <br>
        Neuer Lagerbestand Rohstoff Typ 1: ${neuLagerRohstoffTyp1.toFixed(2)}% <br><br>
        Verbrauch Rohstoff Typ 2: ${verbrauchTyp2.toFixed(2)} <br>
        Neuer Lagerbestand Rohstoff Typ 2: ${neuLagerRohstoffTyp2.toFixed(2)}% <br><br>
        Gesamtbedarf Facharbeiter: ${gesamtBedarfFacharbeiter.toFixed(2)} <br>
        Bedarf/Kündigung Facharbeiter: ${personalDispoFacharbeiter.toFixed(2)} <br>
        Gesamtbedarf angelernte MA: ${gesamtBedarfangelernte.toFixed(2)} <br>
        Bedarf/Kündigung angelernte MA: ${personalDispoAngelernte.toFixed(2)} <br><br>
        Neuer Lagerbestand Dünger:<br>
        CHF: ${lagerChfDuengerNeu.toFixed(2)} <br>
        AUT: ${lagerAutDuengerNeu.toFixed(2)} <br>
        Poldi: ${lagerPoldiDuengerNeu.toFixed(2)} <br>
        Neuer Lagerbestand Kleber:<br>
        CHF: ${lagerChfKleberNeu.toFixed(2)} <br>
        AUT: ${lagerAutKleberNeu.toFixed(2)} <br>
        Poldi: ${lagerPoldiKleberNeu.toFixed(2)} <br>
        Neuer Lagerbestand Waschmittel:<br>
        CHF: ${lagerChfWaschmNeu.toFixed(2)} <br>
        AUT: ${lagerAutWaschmNeu.toFixed(2)} <br>
        Poldi: ${lagerPoldiWaschmNeu.toFixed(2)} <br>
    `;
}


