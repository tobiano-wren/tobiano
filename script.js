// Javascript source code

/* Varriable Guide
 - parentp 1/2 = Textbox input
 - parent 1/2 = RegExed parentp 1/2
 - parext 1/2 = Extrapolated parent array
 - gamete 1/2 = Array post parext distribution
 - forl = Number of for loops for the string to distribute
 - pos = punnett square 
 - genot = Genotype
 - genor = Genotype ratio
 - comp = Extrapolation boolean
 - repush = Repushed full genotypes for RegEx
 - phenot = Repushed genotypes
 - phenor = Repushed genotype ratio
 - midpush = Repush array
 - genop = Genotype combination print
 */

 /* Letter Guide
 -F/f =Camarillo White = CW/N
 -G/g = Gray = G
 -Z/z = Silver = Z/N
 -R/r = Roan = Rn
 -E/e = Extension = E
 -A/a = Agouti = A
 -H/h = Champagne = Ch/n
 -C/c/P = Cream = Ccr/C
 -1/2/d = Dun = nd1/nd2/N
 -M/m = Mushroom = M/N
 -L/l = Leopard Complex = LP/N
 -U/u = Appaloosa Pattern 1 = PATN1/N
 -O/o = Lethal White Overo = O/N
 -B/b = Sabino 1 = SB1/N
 -S/s = Splashed White = SW/N
 -T/t = Tobiano = TO/N
 */

// Grab parent genotypes

var parent1 = ("")
var parent2 = ("")

function cross() {
    var parentp1 = document.getElementById("p1").value;
    var parentp2 = document.getElementById("p2").value;

    //Clear all textbox values
    document.getElementById("display").textContent = "";
    document.getElementById("phenotypes").textContent = "";

    // RegEx p1
    var parent1 = parentp1.replace("CcrCcr", "MM")
                          .replace("CcrC", "Mm")
                          .replace("CCcr", "mM")
                          .replace("CC", "mm")

                          .replace("RnRn", "RR")
                          .replace("Rnrn", "Rr")
                          .replace("rnRn", "rR")
                          .replace("rnrn", "rr")

                          .replace("ChCh", "PP")
                          .replace("Chn", "Pp")
                          .replace("nCh", "pP")
                          .replace("nn", "pp");

    // RegEx p2
    var parent2 = parentp2.replace("CcrCcr", "MM")
                          .replace("CcrC", "Mm")
                          .replace("CCcr", "mM")
                          .replace("CC", "mm")

                          .replace("RnRn", "RR")
                          .replace("Rnrn", "Rr")
                          .replace("rnRn", "rR")
                          .replace("rnrn", "rr")

                          .replace("ChCh", "PP")
                          .replace("Chn", "Pp")
                          .replace("nCh", "pP")
                          .replace("nn", "pp")

                          .replace("Y", "x");

    // Print Parents
    if (parent1.length != 0 || parent2.length != 0) {
        if (parent1.toUpperCase() == parent2.toUpperCase()) {
            if (parent1.toUpperCase().indexOf("EE") != -1 || parent1.toUpperCase().indexOf("AA") != -1 || parent1.toUpperCase().indexOf("MM") != -1 || parent1.toUpperCase().indexOf("DD") != -1 || parent1.toUpperCase().indexOf("PP") != -1 || parent1.toUpperCase().indexOf("EE") != -1 || parent2.toUpperCase().indexOf("AA") != -1 || parent2.toUpperCase().indexOf("MM") != -1 || parent2.toUpperCase().indexOf("DD") != -1 || parent2.toUpperCase().indexOf("PP") != -1) {
                if (parent1.toUpperCase().indexOf("EE") != -1 && parent1.toUpperCase().indexOf("AA") != -1 && parent2.toUpperCase().indexOf("EE") != -1 && parent2.toUpperCase().indexOf("AA") != -1) {
                    punnett(parent1, parent2);
                } else
                    document.getElementById("display").textContent = "Genes Ea and Aa are required to complete this cross";
            } else {
                punnett(parent1, parent2);
            }
            //Unmatched gene detector
        } else {
            document.getElementById("display").textContent = "Unmatched genes entered";
        }
    } else {
        document.getElementById("display").textContent = "No genes entered";
    }

}

function punnett(parent1, parent2) {

    document.getElementById("display").textContent = "P\u2081 " + parent1 + " \u00D7 " + parent2;


    // Initialize arrays
    var parext1 = [];
    var parext2 = [];

    // Loop through strings adding characters to an array
    for (let i = 0; i < parent1.length; i++) {
        parext1.push(parent1.substr(i, 1));
    }
    for (let i = 0; i < parent2.length; i++) {
        parext2.push(parent2.substr(i, 1));
    }

    //Initialize new array
    var gamete1 = [];
    var gamete2 = [];

    //Create steps varriables
    if (parext1.length < parext2.length) {
        var forl = parext1.length / 2;
    } else {
        var forl = parext2.length / 2;
    }

    console.log("forl = " + forl)

    // Distribute possible gametes

    //Gamete 1
    if (forl > 0) {
        for (let i = 0; i < 2; i++) {
            if (forl > 1) {
                for (let j = 2; j < 4; j++) {
                    if (forl > 2) {
                        for (let k = 4; k < 6; k++) {
                            if (forl > 3) {
                                for (let l = 6; l < 8; l++) {
                                    if (forl > 4) {
                                        for (let m = 8; m < 10; m++) {
                                            if (forl > 5) {
                                                for (let n = 10; n < 12; n++) {
                                                    if (forl > 6) {
                                                        for (let o = 12; o < 14; o++) {
                                                            if (forl > 7) {
                                                                for (let p = 14; p < 16; p++) {
                                                                    if (forl > 8) {
                                                                        for (let q = 16; q < 18; q++) {
                                                                            gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l] + parext1[m] + parext1[n] + parext1[o] + parext1[p] + parext1[q]);
                                                                        }
                                                                    } else {
                                                                        gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l] + parext1[m] + parext1[n] + parext1[o] + parext1[p]);
                                                                    }
                                                                }
                                                            } else {
                                                                gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l] + parext1[m] + parext1[n] + parext1[o]);
                                                            }
                                                        }
                                                    } else {
                                                        gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l] + parext1[m] + parext1[n]);
                                                    }
                                                }
                                            } else {
                                                gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l] + parext1[m]);
                                            }
                                        }
                                    } else {
                                        gamete1.push(parext1[i] + parext1[j] + parext1[k] + parext1[l]);
                                    }
                                }
                            } else {
                                gamete1.push(parext1[i] + parext1[j] + parext1[k]);
                            }
                        }
                    } else {
                        gamete1.push(parext1[i] + parext1[j]);
                    }
                }
            } else {
                gamete1.push(parext1[i]);
            }
        }
    }

    //Gamete 2
    if (forl > 0) {
        for (let i = 0; i < 2; i++) {
            if (forl > 1) {
                for (let j = 2; j < 4; j++) {
                    if (forl > 2) {
                        for (let k = 4; k < 6; k++) {
                            if (forl > 3) {
                                for (let l = 6; l < 8; l++) {
                                    if (forl > 4) {
                                        for (let m = 8; m < 10; m++) {
                                            if (forl > 5) {
                                                for (let n = 10; n < 12; n++) {
                                                    if (forl > 6) {
                                                        for (let o = 12; o < 14; o++) {
                                                            if (forl > 7) {
                                                                for (let p = 14; p < 16; p++) {
                                                                    if (forl > 8) {
                                                                        for (let q = 16; q < 18; q++) {
                                                                            gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l] + parext2[m] + parext2[n] + parext2[o] + parext2[p] + parext2[q]);
                                                                        }
                                                                    } else {
                                                                        gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l] + parext2[m] + parext2[n] + parext2[o] + parext2[p]);
                                                                    }
                                                                }
                                                            } else {
                                                                gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l] + parext2[m] + parext2[n] + parext2[o]);
                                                            }
                                                        }
                                                    } else {
                                                        gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l] + parext2[m] + parext2[n]);
                                                    }
                                                }
                                            } else {
                                                gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l] + parext2[m]);
                                            }
                                        }
                                    } else {
                                        gamete2.push(parext2[i] + parext2[j] + parext2[k] + parext2[l]);
                                    }
                                }
                            } else {
                                gamete2.push(parext2[i] + parext2[j] + parext2[k]);
                            }
                        }
                    } else {
                        gamete2.push(parext2[i] + parext2[j]);
                    }
                }
            } else {
                gamete2.push(parext2[i]);
            }
        }
    }

    //Initialize boolean varriable
    var comp = false;

    //Initialize genotype variables
    var genot = [];
    var genor = [];

    //Initialize punnet position varriable
    var pos = ("");

    //Create punnett square
    for (let i = 0; i < gamete1.length; i++) {
        for (let j = 0; j < gamete2.length; j++) {
            if (forl == 1) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1);
            } else if (forl == 2) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1);
            } else if (forl == 3) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1);
            } else if (forl == 4) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1);
            } else if (forl == 5) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1) + gamete1[i].substr(4, 1) + gamete2[j].substr(4, 1);
            } else if (forl == 6) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1) + gamete1[i].substr(4, 1) + gamete2[j].substr(4, 1) + gamete1[i].substr(5, 1) + gamete2[j].substr(5, 1);
            } else if (forl == 7) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1) + gamete1[i].substr(4, 1) + gamete2[j].substr(4, 1) + gamete1[i].substr(5, 1) + gamete2[j].substr(5, 1) + gamete1[i].substr(6, 1) + gamete2[j].substr(6, 1);
            } else if (forl == 8) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1) + gamete1[i].substr(4, 1) + gamete2[j].substr(4, 1) + gamete1[i].substr(5, 1) + gamete2[j].substr(5, 1) + gamete1[i].substr(6, 1) + gamete2[j].substr(6, 1) + gamete1[i].substr(7, 1) + gamete2[j].substr(7, 1);
            } else if (forl == 9) {
                pos = gamete1[i].substr(0, 1) + gamete2[j].substr(0, 1) + gamete1[i].substr(1, 1) + gamete2[j].substr(1, 1) + gamete1[i].substr(2, 1) + gamete2[j].substr(2, 1) + gamete1[i].substr(3, 1) + gamete2[j].substr(3, 1) + gamete1[i].substr(4, 1) + gamete2[j].substr(4, 1) + gamete1[i].substr(5, 1) + gamete2[j].substr(5, 1) + gamete1[i].substr(6, 1) + gamete2[j].substr(6, 1) + gamete1[i].substr(7, 1) + gamete2[j].substr(7, 1) + gamete1[i].substr(8, 1) + gamete2[j].substr(8, 1);
            }

            //RegEx for mismatched heterozygous genes
            pos = pos.replace("wW", "Ww")
                .replace("gG", "Gg")
                .replace("eE", "Ee")
                .replace("aA", "Aa")
                .replace("mM", "Mm")
                .replace("dD", "Dd")
                .replace("rR", "Rr")
                .replace("pP", "Pp")
                .replace("xX", "Xx");

            //Genotype counter
            for (let k = 0; k < genot.length; k++) {
                if (pos === genot[k]) {
                    genor[k] += 1;
                    comp = true;
                    break;
                }
            }
            if (comp == false) {
                genot.push(pos);
                genor.push(1);
            }
            comp = false;
        }
    }

    //Initialize repush arrays
    var repush = [];

    //Repush
    for (let i = 0; i < genot.length; i++) {
        for (let j = 0; j < genor[i]; j++) {
            repush.push(genot[i]);
        }
    }

    //Initialize middle types varriable
    var phenot = [];
    var phenor = [];
    var midpush = ("");

    for (let i = 0; i < repush.length; i++) {
        midpush = repush[i].replace("Gg", "GG")
            .replace("Ee", "EE")
            .replace("Aa", "AA")
            .replace("Dd", "DD")
            .replace("Rr", "RR")
            .replace("Pp", "PP");

        console.log(midpush)

        //Phenotype counter
        comp = false;
        for (let k = 0; k < phenot.length; k++) {
            if (midpush === phenot[k]) {
                phenor[k] += 1;
                comp = true;
                break;
            }
        }
        if (comp == false) {
            phenot.push(midpush);
            phenor.push(1);
        }
        comp = false;
    }

    //Initialize percentage varriable
    var phenop = [];

    //Phenotype percentage generator
    for (let i = 0; i < phenor.length; i++) {
        phenop.push(phenor[i] / repush.length * 100);
    }

    //Phenotype name array
    var pname = [];

    //Base phenotype namer
    for (let i = 0; i < phenot.length; i++) {
        if (phenot[i].indexOf("WW") != -1) { //Check for lethal carmallio white
            pname.push("Non-viable");
        } else if (phenot[i].indexOf("Ww") != -1) { //Check for carmallio white
            pname.push("Carmallio White");
        } else if (phenot[i].indexOf("GG") != -1) { //Check for dominant gray
            pname.push("Gray");
            //Check for base color
        } else if (phenot[i].indexOf("EE") != -1 && phenot[i].indexOf("aa") != -1) {
            pname.push("Black");
        } else if (phenot[i].indexOf("EE") != -1 && phenot[i].indexOf("AA") != -1) {
            pname.push("Bay");
        } else if (phenot[i].indexOf("ee") != -1 && phenot[i].indexOf("AA") != -1 || phenot[i].indexOf("aa") != -1) {
            pname.push("Chestnut");
        }
    }

    //Dilutions and gendering

    //Black dilutions
    for (let i = 0; i < pname.length; i++) {
        if (pname[i].indexOf("Black") != -1 && phenot[i].indexOf("Mm") != -1) {
            pname[i] = "Smoky Black";
        } else if (pname[i].indexOf("Black") != -1 && phenot[i].indexOf("MM") != -1) {
            pname[i] = "Smoky Cream";
        } else if (pname[i].indexOf("Black") != -1 && phenot[i].indexOf("DD") != -1) {
            pname[i] = "Grulla";
        } else if (pname[i].indexOf("Black") != -1 && phenot[i].indexOf("PP") != -1) {
            pname[i] = "Black Golden";
        }
    }

    //Bay dilutions
    for (let i = 0; i < pname.length; i++) {
        if (pname[i].indexOf("Bay") != -1 && phenot[i].indexOf("Mm") != -1) {
            pname[i] = "Buckskin";
        } else if (pname[i].indexOf("Bay") != -1 && phenot[i].indexOf("MM") != -1) {
            pname[i] = "Perlino";
        } else if (pname[i].indexOf("Bay") != -1 && phenot[i].indexOf("DD") != -1) {
            pname[i] = "Dun";
        } else if (pname[i].indexOf("Bay") != -1 && phenot[i].indexOf("PP") != -1) {
            pname[i] = "Bay Golden";
        }
    }

    //Chestnut dilutions
    for (let i = 0; i < pname.length; i++) {
        if (pname[i].indexOf("Chestnut") != -1 && phenot[i].indexOf("Mn") != -1) {
            pname[i] = "Palomino";
        } else if (pname[i].indexOf("Chestnut") != -1 && phenot[i].indexOf("MM") != -1) {
            pname[i] = "Cremello";
        } else if (pname[i].indexOf("Chestnut") != -1 && phenot[i].indexOf("DD") != -1) {
            pname[i] = "Red Dun";
        } else if (pname[i].indexOf("Chestnut") != -1 && phenot[i].indexOf("PP") != -1) {
            pname[i] = "Red Golden";
        }
    }

    //Roan
    for (let i = 0; i < pname.length; i++) {
        if (phenot[i].indexOf("RR") != -1) {
            pname[i] = pname[i] + " Roan";
        }
    }

    //Gender
    for (let i = 0; i < pname.length; i++) {
        if (phenot[i].indexOf("XX") != -1) {
            pname[i] = pname[i] + " Mare";
        } else if (phenot[i].indexOf("Xx") != -1) {
            pname[i] = pname[i] + " Stallion";
        }
    }

    //Phenotype conbiner
    for (let i = 0; i < pname.length; i++) {
        for (let j = 0; j < pname.length; j++) {
            if (pname[i] == pname[j] && i != j) {
                pname.splice(j,1);
                phenop[i] += phenop[j]
                phenop.splice(j, 1);
                j--;
            }
        }
    }

    for (let i = 0; i < phenop.length; i++) {
        phenop[i] = Math.round(phenop[i] * 100) / 100 + "%";
    }

    //Initialize print varriables
    var genop = [];
    var pnamep = [];

    //Genotype combo generator
    for (let i = 0; i < genot.length; i++) {
        genop.push(genor[i] + " " + genot[i]);
    }

    //Phenotype combo generator
    for (let i = 0; i < pname.length; i++) {
        pnamep.push(phenop[i] + " " + pname[i]);
    }

    //Array convert to string
    genop = genop.toString()
    pnamep = pnamep.toString()

    //Print RegEx
    while (genop.indexOf(",") != -1) {
        genop = genop.replace(",", " : ");
    }
    while (pnamep.indexOf(",") != -1) {
        pnamep = pnamep.replace(",", " / ");
    }

    //Result printers
    document.getElementById("phenotypes").textContent = "F\u2081 Phenotypes: " + pnamep;

    //Logs

    console.log(parent1);
    console.log(parent2);

    console.log(parent1.length);
    console.log(parent2.length);

    console.log(parext1);
    console.log(parext2);

    console.log(gamete1);
    console.log(gamete2);

    console.log(genot);
    console.log(genor);

    console.log("repush = " + repush);

    console.log(phenot);
    console.log(phenor);

    console.log(pname);
}

