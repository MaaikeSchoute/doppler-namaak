// JavaScript Document
console.log("hi");

// How to make tabs: https://www.youtube.com/watch?app=desktop&v=5L6h_MrNvsk&t=3m58s
const tabs = document.querySelectorAll('[data-tab-target'); 
const tabContents = document.querySelectorAll('[data-tab-content]');

// How to make tabs: https://www.youtube.com/watch?app=desktop&v=5L6h_MrNvsk&t=3m58s
tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.tabTarget)
      tabContents.forEach(tabContent => { 
        tabContent.classList.remove('active')
   })
  tabs.forEach(tab => {
    tab.classList.remove('active')
  })
  tab.classList.add('active')
  target.classList.add('active')
  })
})