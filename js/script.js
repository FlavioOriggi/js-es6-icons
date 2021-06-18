// Milestone 1: Partendo dalla seguente struttura dati, mostriamo 
// in pagina tutte le icone disponibili come da layout. 

const icons = [
    {
      name: 'cat',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'crow',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dog',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dove',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'dragon',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'horse',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'hippo',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'fish',
      prefix: 'fa-',
      type: 'animal',
      family: 'fas',
    },
    {
      name: 'carrot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'apple-alt',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'lemon',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'pepper-hot',
      prefix: 'fa-',
      type: 'vegetable',
      family: 'fas',
    },
    {
      name: 'user-astronaut',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-graduate',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-ninja',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
    {
      name: 'user-secret',
      prefix: 'fa-',
      type: 'user',
      family: 'fas',
    },
];

icons.forEach((element) => {
    document.getElementById('icon').innerHTML += 
    `
        <div id="icon" class="col ombra rounded border icon-conteiner text-center p-4 mt-5">
            <div ><i class="${element.family} ${element.prefix}${element.name} icon-card mb-3"></i></div>
            <p class="fs-5 text-uppercase fw-bold">${element.name}</p>
        </div>  
    `;
});


// Milestone 2 Coloriamo le icone per tipo

const pink = '#f0b3d2';
const green = '#448300';
const blue = '#005fd9';
const black = '#000000'

const newColor = icons.map((element) => {  

    let color = pink;
    if (type == 'vegetable'){
        color = green;
    } else if (type == 'animal'){
        color = blue;
    }
           
    return {        
        type : {
            color: color            
        }
    }
});





// Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone