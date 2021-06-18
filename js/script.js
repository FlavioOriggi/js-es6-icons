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
            <i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
            <p class="fs-5 text-uppercase fw-bold mt-3">${element.name}</p>
        </div>  
    `;
});


// Milestone 2 Coloriamo le icone per tipo

const pink = '#f0b3d2';
const blue = '#005fd9';
const green = '#006d31';



const getColor = icons.map((element) => { 
    const name = element.name;
    const prefix = element.prefix;
    const type = element.type;
    const family = element.family;

    
    

    let icona = pink;
    if (element.type == 'vegetable'){
        icona = green;
    } else if (element.type == 'animal'){
        icona = blue;
    } else {
        icona = pink;
    }
           
    return {        
        name,
        prefix,
        type,
        family,
        color : icona
    }
});

console.log(getColor)


// Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone