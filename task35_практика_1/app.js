

import {Phone} from "./phone.js";

import {Hua} from "./hua.js";
import {Nok} from "./nok.js";
import { Call } from "./call.js";



let hua = new Hua("11", "102", "131212");
let nok = new Nok("12", "103", "141212");

let call = new Call();

hua.getWeight();
hua.getModel();
hua.getNumber();
nok.getWeight();
nok.getModel();
nok.getNumber();

let Ph = [];

Ph.push(hua);
Ph.push(nok);
Ph.forEach(function(item) {
    call.trea(item);
})
