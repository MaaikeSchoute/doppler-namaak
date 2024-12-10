// •••••••••••••••••••••••••••••••••••• JAVASCRIPT DOCUMENT •••••••••••••••••••••••••••••••••••• 
// •••••••••••••••••••••••••••••••••••• CONSOLE LOG ••••••••••••••••••••••••••••••••••••
console.log("hi");
console.log(document.querySelector(".swatches-container").clientHeight);

// •••••••••••••••••••••••••••••••••••• CONST ••••••••••••••••••••••••••••••••••••
// How to make tabs: https://www.youtube.com/watch?app=desktop&v=5L6h_MrNvsk&t=3m58s
const tabs = document.querySelectorAll('[data-tab-target]'); 
const tabContents = document.querySelectorAll('[data-tab-content]');

// how to make carousel: https://www.youtube.com/watch?v=gBzsE0oieio
const swatchesContainer = document.querySelector(".swatches-container");
const swatchesImgSlide = Array.from(swatchesContainer.children);
const risoButtonContainer = document.querySelector('.button-container');
const risoButtons = Array.from(risoButtonContainer.children);
const eersteSwatch = swatchesImgSlide[0];
const slideSize = eersteSwatch.getBoundingClientRect();
const slideHeight = slideSize.height;


console.log(slideHeight);


// •••••••••••••••••••••••••••••••••••• ACTIES ••••••••••••••••••••••••••••••••••••
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


// carosel hulp bron: https://chatgpt.com/share/67544ceb-6d58-8009-8c93-8c78735101fd & https://codepen.io/shooft/pen/ZEpXmrg?editors=1100 : Werkte niet
