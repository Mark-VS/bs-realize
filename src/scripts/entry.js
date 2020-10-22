document.write("<div>Это говняха из ДИВа</div>");
document.write("<div>Это гонвяха из второго ДИВа</div>");
import { kaka } from "./kaka.js";
kaka();


import $ from "jquery";
//import { createPopper } from "@popperjs/core";
import { createPopper } from  "./../../node_modules/@popperjs/core/dist/umd/popper.js";
import Util from "./../../node_modules/bootstrap/js/dist/util.js";
import Tooltip from "./../../node_modules/bootstrap/js/dist/tooltip";
import Dropdown from "./../../node_modules/bootstrap/js/dist/dropdown";


const btn1 = document.querySelector('#button');
const tooltip1 = document.querySelector('#tooltip');
createPopper(btn1, tooltip1, {
  placement: "top"
});

$(function() {
  $('[data-toggle="tooltip"]').tooltip()
});

let murka = "murka";
let jopa = {
  jopa1: "laja",
  jopa2: "laja2",
  ar: {
    pole1: murka
  }
}
document.write(jopa.ar.pole1);