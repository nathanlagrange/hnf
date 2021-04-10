const accordionItemHeaders = document.querySelectorAll(".accordion-item-header"); /*On recupere le header de l'item accordéon*/

accordionItemHeaders.forEach(accordionItemHeader => { /*Pour chaque header de l'accordéon*/
  accordionItemHeader.addEventListener("click", event => { /*Au click, un evenement se prépare*/

    // const currentlyActiveAccordionItemHeader = document.querySelector(".accordion-item-header.active"); /*On recupere le header de l'accordéon AVEC la classe active*/
    //     if(currentlyActiveAccordionItemHeader && currentlyActiveAccordionItemHeader!==accordionItemHeader) { /*Si */
    //         currentlyActiveAccordionItemHeader.classList.toggle("active");
    //         currentlyActiveAccordionItemHeader.nextElementSibling.style.maxHeight = 0;
    //     } /*décommenter pour autoclose*/

    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if(accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    }
    else {
      accordionItemBody.style.maxHeight = 0;
    }

  });
});

let question1 = document.querySelector('#headerquest1')

question1.addEventListener('click', () => {
  question1.classList.toggle('active2')
}, false)

let question2 = document.querySelector('#headerquest2')

question2.addEventListener('click', () => {
  question2.classList.toggle('active2')
}, false)

let question3 = document.querySelector('#headerquest3')

question3.addEventListener('click', () => {
  question3.classList.toggle('active2')
}, false)

let question4 = document.querySelector('#headerquest4')

question4.addEventListener('click', () => {
  question4.classList.toggle('active2')
}, false)
