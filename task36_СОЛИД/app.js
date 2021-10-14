

import {User} from "./user.js";

import {Petsitter} from "./petsitter.js";
import {Client} from "./client.js";
import {Animal} from "./animal.js";
import {Service} from "./service.js";
import {Review} from "./review.js";
import {Order} from "./order.js";


let hua = new Hua("11", "102", "131212", "vasia");
let nok = new Nok("12", "103", "141212", "semion");

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
