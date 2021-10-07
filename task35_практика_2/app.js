

import {Student} from "./student.js";

import {Asp} from "./asp.js";

import { Call } from "./call.js";



let student = new Student("11", "102", "131212", 5);
let asp = new Asp("12", "103", "141212", 5);

let call = new Call();
student.getS();

asp.getS();



let Ph = [];
Ph.push(student);
Ph.push(asp);

Ph.forEach(function(item) {
    call.trea(item);
})
