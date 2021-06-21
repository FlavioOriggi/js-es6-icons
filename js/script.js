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

const selection = document.getElementById("selection");
const icon = document.getElementById("icon");




// Milestone 2 Coloriamo le icone per tipo

const pink = '#f0b3d2';
const blue = '#005fd9';
const green = '#006d31';


const getColor = icons.map((element) => {  
   
  let color = pink;
  if (element.type == 'vegetable'){
      color = green;
  } else if (element.type == 'animal'){
      color = blue;
  }
           
  return {        
      ...element,
      color
  }
    
});

// console.log(getColor);



// Milestone 3: Creiamo una select con i tipi di icone e usiamola per filtrare le icone

const types = [];

getColor.forEach((element) => {
  if(!types.includes(element.type)){
    types.push(element.type);
    selection.innerHTML += 
    `
    <option value="${element.type}">${element.type}</option>
    `
  }
});

selection.addEventListener("change", function(){
  const option = this.value;

  const filteredIcons = getColor.filter((element)=>{
    return element.type == option;
  });

  print(filteredIcons);
  
  if(option == 'All'){
    print(getColor);
  }
  
});

print(getColor);

function print(getColor){    

  document.getElementById('icon').innerHTML = "";

  getColor.forEach((element) => {
    document.getElementById('icon').innerHTML += 
        `
        <div id="icon" class="col ombra rounded border icon-conteiner text-center p-4 mt-5">
            <i class="${element.family} ${element.prefix}${element.name} icon-card mt-1" style="color:${element.color}"></i>
            <p class="fs-5 text-uppercase fw-bold mt-3">${element.name}</p>
        </div>  
    `;
  });
}
