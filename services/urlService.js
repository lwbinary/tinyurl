var encode = [];
var decode = {};

var genCharArray = function (charA, charZ) {
    // charCodeAt: returns the unicode value, e.g. A->65, B->66
    var arr = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);

    for (; i <= j; i++) {
        // String.fromCharCode: convert unicode value into char
        arr.push(String.fromCharCode(i));
    }
    return arr;
};

encode = encode.concat(genCharArray('a', 'z'));
encode = encode.concat(genCharArray('A', 'Z'));
encode = encode.concat(genCharArray('0', '9'));

// eventually, encode = [a...z...A...Z...0...9] -> a joined array

// adding encode elements into decode object as a dictionary: a:0, b:1 ...
for (var i = 0; i < encode.length; i++) {
    decode[encode[i]] = i;
}

// long -> short
var getShortUrl = function (longUrl, longToShortHash, shortToLongHash) {
    // important to check if contains http here
    // by this code, http://abc.com == abc.com -> 0
    if ( longUrl.indexOf('http') === -1) {
        longUrl = "http://" + longUrl;
    }

    if (longToShortHash[longUrl] != null) {
        return longToShortHash[longUrl];
    } else {
        var shortUrl = generateShortUrl(longToShortHash);
        longToShortHash[longUrl] = shortUrl;
        shortToLongHash[shortUrl] = longUrl;
        return shortUrl;
    }
};

// just return the size of the longToshortHash object -> the size of the hashtable
var generateShortUrl = function (longToShortHash) {
    return Object.keys(longToShortHash).length;
};

// convert the size of the hashtable into a shorter URL using 62 chars
var generateShortUrlV2 = function (longToShortHash) {
    return convertTo62(Object.keys(longToShortHash).length);
};

// where decode used?
var convertTo62 = function (num) {
    var result = '';
    do {
        result = encode[num % 62] + result;
        num = Math.floor(num / 62);
    } while (num);

    return result;
};

var getLongUrl = function (shortUrl, shortToLongHash) {
    return shortToLongHash[shortUrl];
};



module.exports = {
    // Function Name exported and to be used/called outside: Function Name defined here in this file
    getShortUrl: getShortUrl,
    getLongUrl: getLongUrl
};