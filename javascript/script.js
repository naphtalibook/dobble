var card1 = [1, 2, 3, 4, 5, 6, 7, 8];
var card2 = [1, 9, 10, 11, 12, 13, 14, 15];
var card3 = [1, 16, 17, 18, 22, 19, 20, 21];
var card4 = [1, 29, 23, 24, 25, 26, 27, 28];
var card5 = [1, 36, 30, 31, 32, 33, 34, 35];
var card6 = [1, 43, 37, 38, 39, 40, 41, 42];
var card7 = [1, 50, 44, 45, 46, 47, 48, 49];
var card8 = [1, 57, 51, 52, 53, 54, 55, 56];
var card9 = [2, 34, 26, 42, 54, 10, 22, 50];
var card10 = [2, 15, 19, 44, 51, 41, 32, 23];
var card11 = [2, 18, 33, 37, 13, 27, 49, 56];
var card12 = [2, 24, 31, 47, 38, 57, 9, 17];
var card13 = [2, 11, 52, 46, 39, 35, 21, 25];
var card14 = [2, 40, 29, 30, 45, 16, 53, 14];
var card15 = [2, 55, 48, 43, 12, 28, 20, 36];
var card16 = [3, 9, 20, 34, 44, 52, 27, 40];
var card17 = [3, 47, 11, 22, 30, 23, 55, 37];
var card18 = [3, 17, 43, 26, 51, 13, 35, 45];
var card19 = [3, 12, 33, 24, 54, 16, 46, 41];
var card20 = [3, 49, 42, 29, 57, 36, 15, 21];
var card21 = [3, 25, 32, 18, 10, 48, 38, 53];
var card22 = [3, 39, 14, 28, 19, 50, 56, 31];
var card23 = [4, 45, 23, 57, 18, 39, 12, 34];
var card24 = [4, 42, 17, 25, 55, 14, 44, 33];
var card25 = [4, 41, 48, 22, 29, 9, 35, 56];
var card26 = [4, 43, 49, 10, 30, 19, 52, 24];
var card27 = [4, 11, 51, 38, 36, 50, 16, 27];
var card28 = [4, 46, 15, 37, 20, 31, 53, 26];
var card29 = [5, 16, 26, 32, 39, 9, 55, 49];
var card30 = [5, 31, 54, 43, 11, 44, 18, 29];
var card31 = [5, 41, 25, 13, 57, 20, 50, 30];
var card32 = [5, 48, 51, 34, 37, 14, 21, 24];
var card33 = [5, 12, 53, 35, 47, 27, 42, 19];
var card34 = [5, 17, 40, 46, 56, 36, 23, 10];
var card35 = [5, 15, 33, 28, 38, 22, 45, 52];
var card36 = [6, 46, 34, 38, 19, 29, 55, 13];
var card37 = [6, 36, 41, 47, 26, 52, 18, 14];
var card38 = [6, 23, 43, 53, 33, 21, 50, 9];
var card39 = [6, 42, 11, 32, 20, 24, 56, 45];
var card40 = [6, 31, 25, 40, 51, 12, 22, 49];
var card41 = [6, 54, 48, 27, 17, 39, 15, 30];
var card42 = [6, 10, 16, 44, 35, 37, 28, 57];
var card43 = [7, 34, 28, 49, 17, 41, 53, 11];
var card44 = [7, 14, 57, 22, 43, 27, 32, 46];
var card45 = [7, 38, 12, 21, 30, 56, 26, 44];
var card46 = [7, 37, 19, 36, 9, 45, 54, 25];
var card47 = [7, 13, 23, 31, 48, 16, 42, 52];
var card48 = [7, 18, 15, 35, 50, 24, 55, 40];
var card49 = [7, 20, 33, 29, 10, 47, 39, 51];
var card50 = [8, 51, 18, 28, 9, 30, 46, 42];
var card51 = [8, 12, 37, 50, 29, 17, 52, 32];
var card52 = [8, 44, 36, 39, 13, 22, 24, 53];
var card53 = [8, 38, 35, 14, 49, 20, 23, 54];
var card54 = [8, 15, 34, 56, 25, 43, 47, 16];
var card55 = [8, 10, 45, 21, 55, 31, 41, 27];
var allCards = [card1, card2, card3, card4, card5, card6, card7, card8, card9, card10, card11, card12, card13, card14, card15, card16, card17, card18, card19, card20, card21, card22, card23, card24, card25, card26, card27, card28, card29, card30, card31, card32, card33, card34, card35, card36, card37, card38, card39, card40, card41, card42, card43, card44, card45, card46, card47, card48, card49, card50, card51, card52, card53, card54, card55];
var randomCard1;
var randomCard2;
var card1_1 = document.getElementById("card1-1");
var card1_2 = document.getElementById("card1-2");
var card1_3 = document.getElementById("card1-3");
var card1_4 = document.getElementById("card1-4");
var card1_5 = document.getElementById("card1-5");
var card1_6 = document.getElementById("card1-6");
var card1_7 = document.getElementById("card1-7");
var card1_8 = document.getElementById("card1-8");
var card2_1 = document.getElementById("card2-1");
var card2_2 = document.getElementById("card2-2");
var card2_3 = document.getElementById("card2-3");
var card2_4 = document.getElementById("card2-4");
var card2_5 = document.getElementById("card2-5");
var card2_6 = document.getElementById("card2-6");
var card2_7 = document.getElementById("card2-7");
var card2_8 = document.getElementById("card2-8");
var arrayCard1Id = [card1_1, card1_2, card1_3, card1_4, card1_5, card1_6, card1_7, card1_8];
var arrayCard2Id = [card2_1, card2_2, card2_3, card2_4, card2_5, card2_6, card2_7, card2_8];
var games = 0;
var gameLength = 10;
var mistake = 0;
var bestTime="99:99:99";
var thisTime;

function updateBestTime(){
    //get data from local storage and sent to print
    if (localStorage.getItem("bestTime") != null) {
        bestTime = JSON.parse(localStorage.getItem("bestTime"));
        document.getElementById('bestTime').innerHTML = bestTime;
    }
}

updateBestTime();

function oneMore() {
    start();
    games++;
    clearBorder();
    if (games == 0) {
        document.getElementById("start").style.color = "green";
        document.getElementById("reset").style.color = "gray";
        document.getElementById("reset").disabled = true;
    }
    if (games > 0 && games < gameLength) {
        document.getElementById("start").style.color = "gray";
        document.getElementById("start").disabled = true;
        document.getElementById("reset").style.color = "black";
    }
    if (games > gameLength) {
        document.getElementById("start").style.color = "gray";
        document.getElementById("start").disabled = true;
        document.getElementById("reset").style.color = "green";
        document.getElementById("card1").style.backgroundColor = "red";
        document.getElementById("card2").style.backgroundColor = "red";
        stop();
        finish();
        checkBestTime();

    }

    randomCard1 = (allCards[randomOne()]);
    randomCard2 = (allCards[randomTow()]);
    while (randomCard1 == randomCard2) {
        randomCard1 = randomCard1[randomOne()];
        games--;
    }
    if (randomCard1 == undefined || randomCard2 == undefined) { //hope not to get andefind
        oneMore();
    }

    attachImgToCard(randomCard1);
    attachImgToCard(randomCard2);                      //pelet atidi: randomCard1 = ["url(nhnnd)","url(nhnnd)","url(nhnnd)",]

    shuffle(randomCard1);
    shuffle(randomCard2);

    insertImg1(randomCard1);
    insertImg2(randomCard2);
}


function selection(x) {
    if (games < gameLength + 1) {                                               //onclick from html
        var clickedUrl = document.getElementById(x).style.backgroundImage;
        if (randomCard2.indexOf(clickedUrl) > -1) {
            oneMore();
        } else {
            document.getElementById(x).style.border = "thick solid red";
            mistake++;
        }
    } else {
        games = 0;
    }
}

function selection2(x) {
    if (games < gameLength + 1) {                                              //onclick from html
        var clickedUrl = document.getElementById(x).style.backgroundImage;
        if (randomCard1.indexOf(clickedUrl) > -1) {
            oneMore();
        } else {
            document.getElementById(x).style.border = "thick solid red";
            mistake++;
        }
    } else {
        games = 0;
    }

}

function finish() {
    document.getElementById("finish").innerHTML = "GREAT JOB!";
    document.getElementById("scor").innerHTML = "you finished with " + mistake + " mistakes";
}


function playAgin() {
    location.reload();
}
function randomOne() {
    var x = Math.floor((Math.random() * 53) + 1);
    return x;
}
function randomTow() {
    var y = Math.floor((Math.random() * 54) + 1);
    return y;
}
function shuffle(a) {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

function checkBestTime() {
    var thisTime = document.getElementById('time').innerHTML;
    if (bestTime > thisTime) {
        bestTime = thisTime;
        saveOnStorage();
        updateBestTime();
    }
}
function saveOnStorage() {
    localStorage.setItem("bestTime", JSON.stringify(bestTime));
}

function clearBorder() {
    document.getElementById("card1-1").style.border = "none";
    document.getElementById("card1-2").style.border = "none";
    document.getElementById("card1-3").style.border = "none";
    document.getElementById("card1-4").style.border = "none";
    document.getElementById("card1-5").style.border = "none";
    document.getElementById("card1-6").style.border = "none";
    document.getElementById("card1-7").style.border = "none";
    document.getElementById("card1-8").style.border = "none";
    document.getElementById("card2-1").style.border = "none";
    document.getElementById("card2-2").style.border = "none";
    document.getElementById("card2-3").style.border = "none";
    document.getElementById("card2-4").style.border = "none";
    document.getElementById("card2-5").style.border = "none";
    document.getElementById("card2-6").style.border = "none";
    document.getElementById("card2-7").style.border = "none";
    document.getElementById("card2-8").style.border = "none";
}
function attachImgToCard(randomCard) {
    for (var i = 0; i < 8; i++) {
        switch (randomCard[i]) {
            case 1: {
                randomCard[i] = 'url("imgs/Liberian_Road_Signs_-_Regulatory_Sign_-_No_Entry.svg.png")';
                break;
            }
            case 2: {
                randomCard[i] = 'url("imgs/pict--wall-clock-time---vector-stencils-library.png--diagram-flowchart-example.png")';
                break;
            }
            case 3: {
                randomCard[i] = 'url("imgs/images.png")';
                break;
            }
            case 4: {
                randomCard[i] = 'url("imgs/Eye.png")';
                break;
            }
            case 5: {
                randomCard[i] = 'url("imgs/tree).jpg")';
                break;
            }
            case 6: {
                randomCard[i] = 'url("imgs/icecreem.jpg")';
                break;
            }
            case 7: {
                randomCard[i] = 'url("imgs/banana_PNG842.png")';
                break;
            }
            case 8: {
                randomCard[i] = 'url("imgs/cookie.jpg")';
                break;
            }
            case 9: {
                randomCard[i] = 'url("imgs/bottle.jpg")';
                break;
            }
            case 10: {
                randomCard[i] = 'url("imgs/apple.png")';
                break;
            }
            case 11: {
                randomCard[i] = 'url("imgs/flawer.jpg")';
                break;
            }
            case 12: {
                randomCard[i] = 'url("imgs/klubs.png")';
                break;
            }
            case 13: {
                randomCard[i] = 'url("imgs/images.jpg")';
                break;
            }
            case 14: {
                randomCard[i] = 'url("imgs/Bat-PNG-Picture.png")';
                break;
            }
            case 15: {
                randomCard[i] = 'url("imgs/giant-infinity.png")';
                break;
            }
            case 16: {
                randomCard[i] = 'url("imgs/BIRDjpg.jpg")';
                break;
            }
            case 17: {
                randomCard[i] = 'url("imgs/Dobble.png")';
                break;
            }
            case 18: {
                randomCard[i] = 'url("imgs/images (4).png")';
                break;
            }
            case 19: {
                randomCard[i] = 'url("imgs/Ice_Block_IG.png")';
                break;
            }
            case 20: {
                randomCard[i] = 'url("imgs/igloo-png-8.png")';
                break;
            }
            case 21: {
                randomCard[i] = 'url("imgs/PNGPIX-COM-Light-Bulb-Vector-PNG-Transparent-Image.png")';
                break;
            }
            case 22: {
                randomCard[i] = 'url("imgs/solkey).jpg")';
                break;
            }
            case 23: {
                randomCard[i] = 'url("imgs/Lock.png")';
                break;
            }
            case 24: {
                randomCard[i] = 'url("imgs/sun.jpg")';
                break;
            }
            case 25: {
                randomCard[i] = 'url("imgs/heart-png-15.png")';
                break;
            }
            case 26: {
                randomCard[i] = 'url("imgs/images (1).png")';
                break;
            }
            case 27: {
                randomCard[i] = 'url("imgs/Cheese-Free-Download-PNG.png")';
                break;
            }
            case 28: {
                randomCard[i] = 'url("imgs/bug.jpg")';
                break;
            }
            case 29: {
                randomCard[i] = 'url("imgs/ghdn.png")';
                break;
            }
            case 30: {
                randomCard[i] = 'url("imgs/images (2).png")';
                break;
            }
            case 31: {
                randomCard[i] = 'url("imgs/drop.jpg")';
                break;
            }
            case 32: {
                randomCard[i] = 'url("imgs/Skull-High-Quality-PNG.png")';
                break;
            }
            case 33: {
                randomCard[i] = 'url("imgs/Flag_of_Canada_(leaf).svg.png")';
                break;
            }
            case 34: {
                randomCard[i] = 'url("imgs/58469d72cef1014c0b5e47f7.png")';
                break;
            }
            case 35: {
                randomCard[i] = 'url("imgs/images (1).jpg")';
                break;
            }
            case 36: {
                randomCard[i] = 'url("imgs/bomb.png")';
                break;
            }
            case 37: {
                randomCard[i] = 'url("imgs/anchor-306991_1280.png")';
                break;
            }
            case 38: {
                randomCard[i] = 'url("imgs/images (5).png")';
                break;
            }
            case 39: {
                randomCard[i] = 'url("imgs/Hanging-Spider-PNG-Clipart.png")';
                break;
            }
            case 40: {
                randomCard[i] = 'url("imgs/Snowman-PNG.png")';
                break;
            }
            case 41: {
                randomCard[i] = 'url("imgs/018a7a73fa1efd1e8734562115276638--clowns-court-jester.jpg")';
                break;
            }
            case 42: {
                randomCard[i] = 'url("imgs/Target-PNG.png")';
                break;
            }
            case 43: {
                randomCard[i] = 'url("imgs/sunglass.jpg")';
                break;
            }
            case 44: {
                randomCard[i] = 'url("imgs/dolphin.jpg")';
                break;
            }
            case 45: {
                randomCard[i] = 'url("imgs/images (3).png")';
                break;
            }
            case 46: {
                randomCard[i] = 'url("imgs/black-cat-png-7.png")';
                break;
            }
            case 47: {
                randomCard[i] = 'url("imgs/184px-Exclamation_mark_red.png")';
                break;
            }
            case 48: {
                randomCard[i] = 'url("imgs/Large_Cactus.png")';
                break;
            }
            case 49: {
                randomCard[i] = 'url("imgs/24034-200.png")';
                break;
            }
            case 50: {
                randomCard[i] = 'url("imgs/candel.jpg")';
                break;
            }
            case 51: {
                randomCard[i] = 'url("imgs/sizers.png")';
                break;
            }
            case 52: {
                randomCard[i] = 'url("imgs/images (3).jpg")';
                break;
            }
            case 53: {
                randomCard[i] = 'url("imgs/black-pencil-png-black-pencil-vector-8.png")';
                break;
            }
            case 54: {
                randomCard[i] = 'url("imgs/asd.jpg")';
                break;
            }
            case 55: {
                randomCard[i] = 'url("imgs/10-2-key-png-file.png")';
                break;
            }
            case 56: {
                randomCard[i] = 'url("imgs/spider-web-transparent-png-5.png")';
                break;
            }
            case 57: {
                randomCard[i] = 'url("imgs/images (2).jpg")';
                break;
            }
        }
    }
}
function insertImg1(randomCard1) {
    document.getElementById("card1-1").style.background = randomCard1[0];
    document.getElementById("card1-1").style.backgroundSize = "100% 100%";
    document.getElementById("card1-2").style.background = randomCard1[1];
    document.getElementById("card1-2").style.backgroundSize = "100% 100%";
    document.getElementById("card1-3").style.background = randomCard1[2];
    document.getElementById("card1-3").style.backgroundSize = "100% 100%";
    document.getElementById("card1-4").style.background = randomCard1[3];
    document.getElementById("card1-4").style.backgroundSize = "100% 100%";
    document.getElementById("card1-5").style.background = randomCard1[4];
    document.getElementById("card1-5").style.backgroundSize = "100% 100%";
    document.getElementById("card1-6").style.background = randomCard1[5];
    document.getElementById("card1-6").style.backgroundSize = "100% 100%";
    document.getElementById("card1-7").style.background = randomCard1[6];
    document.getElementById("card1-7").style.backgroundSize = "100% 100%";
    document.getElementById("card1-8").style.background = randomCard1[7];
    document.getElementById("card1-8").style.backgroundSize = "100% 100%";
}
function insertImg2(randomCard2) {
    document.getElementById("card2-1").style.background = randomCard2[0];
    document.getElementById("card2-1").style.backgroundSize = "100% 100%";
    document.getElementById("card2-2").style.background = randomCard2[1];
    document.getElementById("card2-2").style.backgroundSize = "100% 100%";
    document.getElementById("card2-3").style.background = randomCard2[2];
    document.getElementById("card2-3").style.backgroundSize = "100% 100%";
    document.getElementById("card2-4").style.background = randomCard2[3];
    document.getElementById("card2-4").style.backgroundSize = "100% 100%";
    document.getElementById("card2-5").style.background = randomCard2[4];
    document.getElementById("card2-5").style.backgroundSize = "100% 100%";
    document.getElementById("card2-6").style.background = randomCard2[5];
    document.getElementById("card2-6").style.backgroundSize = "100% 100%";
    document.getElementById("card2-7").style.background = randomCard2[6];
    document.getElementById("card2-7").style.backgroundSize = "100% 100%";
    document.getElementById("card2-8").style.background = randomCard2[7];
    document.getElementById("card2-8").style.backgroundSize = "100% 100%";
}

