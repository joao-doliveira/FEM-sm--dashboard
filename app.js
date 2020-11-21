const body = document.querySelector('body')
const headerBg = document.querySelector('.header__bg');
const headerTitle = document.querySelector('.ht__text');
const headerFollow = document.querySelector('.ht__follow');
const themeToggler = document.querySelector('.theme__toggler');
const themeTogglerLabel = document.querySelector('.tt__label');
const themeTogglerButton = document.querySelector('.theme__toggler__button');
const mcCard = document.querySelectorAll('.mc__card');
const scoreNumber = document.querySelectorAll('.score__number');
const scoreSubtitle = document.querySelectorAll('.score__subtitle');
const mcCardName = document.querySelectorAll('.mc__card__name');
const overview = document.querySelector('.overview');
const ovCard = document.querySelectorAll('.ov__card');
const ovCardTitle = document.querySelectorAll('.ov__card__title__text');
const ovCardNum = document.querySelectorAll('.ov__card__num');


themeToggler.addEventListener('click', () => {
    colorToggler(body, 'dt--body');
    colorToggler(headerBg, 'dt--header')
    colorToggler(headerTitle, 'dt--text--white')
    colorToggler(headerFollow, 'dt--text--grey')
    colorToggler(themeToggler, 'dt--theme--toggler')
    colorToggler(themeTogglerButton, 'dt--toggler--button')
    colorToggler(themeTogglerLabel, 'dt--text--grey')
    colorToggler(overview, 'dt--text--white')
    multColorToggler(mcCard, 'dt--card')
    multColorToggler(mcCardName, 'dt--text--grey')
    multColorToggler(scoreNumber, 'dt--text--white')
    multColorToggler(scoreSubtitle, 'dt--text--grey')
    multColorToggler(ovCard, 'dt--card')
    multColorToggler(ovCardTitle, 'dt--text--grey')
    multColorToggler(ovCardNum, 'dt--text--white')


    // for(number of scoreNumber){
    //     number.classList.toggle('dt--text--white');
    // }

    
    

})

const colorToggler = (el, newClass) => {
    el.classList.toggle(`${newClass}`)
}

const multColorToggler = (iter, newClass) => {
    for(item of iter){
        colorToggler(item, newClass)
    }
}
