// JavaScript Document
console.log("hi");

// How to make tabs: https://www.youtube.com/watch?app=desktop&v=5L6h_MrNvsk&t=3m58s
const tabs = document.querySelectorAll('[data-tab-target]'); 
const tabContents = document.querySelectorAll('[data-tab-content]');

// Voeg een click event listener toe aan elke tab
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Haal de doel-tab-inhoud op gebaseerd op de data-tab-target
    const target = document.querySelector(tab.dataset.tabTarget);

    // Verwijder de 'active' klasse van alle tab-inhoud en knoppen
    tabContents.forEach(tabContent => { 
      tabContent.classList.remove('active');
    });

    tabs.forEach(tab => {
      tab.classList.remove('active');
    });

    // Voeg de 'active' klasse toe aan de geselecteerde tab en inhoud
    tab.classList.add('active');
    target.classList.add('active');
  });
});