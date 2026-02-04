/**
 * Coach Jones Website - Main JavaScript
 */

document.addEventListener('DOMContentLoaded', function() {

  // Mobile Navigation Toggle
  const navToggle = document.querySelector('.nav__toggle');
  const nav = document.querySelector('.nav');

  if (navToggle && nav) {
    navToggle.addEventListener('click', function() {
      nav.classList.toggle('nav--open');
    });
  }

});
