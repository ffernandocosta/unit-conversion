# Scrimba - Metric/Imperial Unit Conversion solo project challenge

This is my solo project challenge from Scrimba to build a Metric/Imperial Unit Conversion using HTML, CSS & JavaScript

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- Type the value they want to convert and see the results
- Click the light/dark mode toggle button to switch from light to dark design

### Screenshot

![Screenshot](/assets/img/metricimperial.png)


### Links

- [My solution](https://github.com/ffernandocosta/unit-conversion)
- [Live version](https://unit-conversion-mocha.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript


### What I learned

Building this unit converter project taught me important skills in working with the Document Object Model (DOM) and using JavaScript to manipulate elements on the page based on user input. I learned how to use event listeners to detect user interactions and how to perform calculations and update the content of other elements on the page. Additionally, I improved my problem-solving abilities by thinking carefully about how to structure the calculations and format the resulting text, and I also developed my design and styling skills by selecting appropriate fonts, colors, and spacing and ensuring that the layout was responsive. Overall, building this project was a valuable learning experience that helped me develop my technical, problem-solving, and design skills.

```html
  <h1>Some HTML I am proud of</h1>
  
  <div class="container__unit-converter">

     <h1>Metric/Imperial Unit Conversion</h1>
                
        <form>
            <input type="number" id="unit-input" placeholder="20">
            <button id="unit-converter-button">Convert</button>
        </form>

  </div>
```
```css
.proud-of-this-css {

  .metric-imperial__list {
    list-style: none;
    background-color: var(--clr-neutral-200);
    padding: 1.5rem;
    display: grid;
    gap: 1rem;
  }

  .metric-imperial__items {
    background-color: var(--clr-neutral-100);
    padding: 1.5rem;
  }
}
```
```js
const proudOfThisFunc = () => {
  
  function render() {
    const baseValue = unitInputEl.value;
    
    lenghtResultEl.textContent = `${baseValue} meters = ${(baseValue * meterToFeet).toFixed(3)} feet | ${baseValue} feet = ${(baseValue / meterToFeet).toFixed(3)}`;

    volumeResultEl.textContent = `${baseValue} liters = ${(baseValue * literToGallon).toFixed(3)} gallons | ${baseValue} gallons = ${(baseValue / literToGallon).toFixed(3)}`
    
    massResult.textContent = `${baseValue} kilos = ${(baseValue * kiloToPound).toFixed(3)} pounds | ${baseValue} pounds = ${(baseValue / kiloToPound).toFixed(3)}`

};
}
```


## Author

<div>
  <a href="https://www.linkedin.com/in/ffernando-costa/?locale=en_US" target="_blank"><img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" alt="My Linkedin profile"></a>
  <a href="https://twitter.com/ffernandodev" target="_blank"><img src="https://img.shields.io/badge/Twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white" alt="My twitter profile"</a>
</div>
