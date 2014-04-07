/*
 * Util
 * */

var Util = {
    NameSpace: 'UTIL',
    Version: '1.0.0',
    upperCaseUUID: function () {
        return this.UUID()
            .toString()
            .toUpperCase();
    },
    UUID: function () {
        var e, t = "89ab",
            n = [];
        for (e = 0; e < 36; e += 1) n[e] = (Math.random() * 16 | 0)
            .toString(16);
        return n[8] = n[13] = n[18] = n[23] = "-", n[14] = "4", n[19] = t.charAt(Math.random() * 4 | 0), n.join("");
    },
};

module.exports = Util;
