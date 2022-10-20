"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Konyv_cim;
class Zene {
    constructor(cim, hossz) {
        this.cim = cim;
        this.hossz = hossz;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.cim + " (" + this.hossz + " s)";
    }
}
class Konyv {
    constructor(cim) {
        _Konyv_cim.set(this, void 0);
        __classPrivateFieldSet(this, _Konyv_cim, cim, "f");
    }
    get cim() {
        return __classPrivateFieldGet(this, _Konyv_cim, "f");
    }
    set cim(cim) {
        __classPrivateFieldSet(this, _Konyv_cim, cim, "f");
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return __classPrivateFieldGet(this, _Konyv_cim, "f");
    }
}
_Konyv_cim = new WeakMap();
class Film {
    constructor(cim, hossz) {
        this.cim = cim;
        this.hossz = hossz;
    }
    kiir() {
        console.log(this.toString());
    }
    toString() {
        return this.cim + " (" + this.hossz + " s)";
    }
}
let f = new Film('Die hard', 1865);
let termekek = [
    new Zene('let it go', 183),
    new Konyv('The Lord of the Rings'),
    new Film('Die hard', 1865),
];
for (let termek of termekek) {
    termek.kiir();
}
let streamelhetoTermekek = [
    new Film('Harry Potter', 2000),
    new Zene('Sweet child of mine', 200),
    { cim: 'Thunderstruck', hossz: 198 },
];