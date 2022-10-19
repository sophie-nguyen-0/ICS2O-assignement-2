// Created by: sophie
// Created on: oct 2020
// This file contains the JS functions for index.html

"use strict"
/**
 * Do basic math.
 */
function calculate() {
  // input
  const sideA = parseInt(document.getElementById("side-a").value)
  const sideB = parseInt(document.getElementById("side-b").value)
  const sideC = parseInt(document.getElementById("side-c").value)

  // process
  const perimeter = sideA + sideB + sideC

  // output
  document.getElementById("perimeter").innerHTML =
    "<h5> the perimeter is: " + perimeter + " cm</h5>"
}
