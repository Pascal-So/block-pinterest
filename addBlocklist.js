function sort_unique(arr) {
    if (arr.length === 0) return arr;
    arr = arr.sort();
    var ret = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i-1] !== arr[i]) {
            ret.push(arr[i]);
        }
    }
    return ret;
}

function getBlockedSites(query){
    var sites = query.split(' ')
                .filter(function(e){return e.match(/^-site:/);})
                .map(function(e){return e.substr(6);});

    return sites;
}

function newQueryString(query){
    var rawQuery = query.split(' ')
                    .filter(function(e){return !e.match(/^-site:/);})
                    .join(' ');

    var alreadyBlocked = getBlockedSites(query);

    blockSites = [
        'pinterest.com',
        'pinterest.co.uk',
        'pinterest.com.au',
        'pinterest.ie',
        'pinterest.de',
        'pinterest.ch',
        'pinterest.dk',
        'pinterest.ca',
        'pinterest.fr',
        'pinterest.se',
        'pinterest.jp',
        'pinterest.cl',
        'pinterest.es',
        'pinterest.co.kr',
    ];

    var allBlocked = sort_unique(alreadyBlocked.concat(blockSites));

    return rawQuery + ' ' + allBlocked.map(function(e){return '-site:' + e;}).join(' ');
}

var searchfield = document.querySelector('input#lst-ib');

if(searchfield){
    searchfield.value = newQueryString(searchfield.value);

    searchfield.focus();
}

