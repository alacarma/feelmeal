var j=0;
function createSections(iCurrentRec) {
    this.r_iID = iCurrentRec;
    
    var newSect = document.createElement('section');
    newSect.className = "homeimg"+j;
    var appendSec = function() {
        document.getElementById('homepg').appendChild(newSect);
    var newtitle = document.createElement('article');
        newtitle.className = "hometitle"+j;
        document.getElementsByTagName('section')[0].appendChild(newtitle);

    };

    appendSec();
};



function createSec() {
    var iNum= 7;
    for (var i =0; i < 7; i++) {
        var newR = new createSections(i);
        j++;
    }
}