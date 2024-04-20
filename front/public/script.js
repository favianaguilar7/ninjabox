document.addEventListener('DOMContentLoaded', function() {

    // const data = [{"id":1,"weight":10,"price":100,"arrivalDate":"2024-04-25T06:00:00.000Z","departureDate":"2024-04-30T06:00:00.000Z","fragile":false,"xDimension":10,"yDimension":20,"zDimension":5},{"id":2,"weight":10,"price":100,"arrivalDate":"2024-04-25T06:00:00.000Z","departureDate":"2024-04-30T06:00:00.000Z","fragile":false,"xDimension":10,"yDimension":20,"zDimension":5},{"id":3,"weight":0,"price":0,"arrivalDate":"2024-04-25T06:00:00.000Z","departureDate":"2024-04-26T06:00:00.000Z","fragile":false,"xDimension":0,"yDimension":0,"zDimension":0}]

    // const container = document.getElementById('container');

    // data.forEach(item => {
    //     const card = document.createElement('div');
    //     card.classList.add('card');
    //     card.innerHTML = `
    //         <h3>Folio: ${item.id}</h3>
    //         <p>Weight: ${item.weight}</p>
    //         <p>Precio: ${item.price}</p>
    //         <p>Fecha de llegada: ${item.arrivalDate.split("T")[0]}</p>
    //         <p>Dia de partida: ${item.departureDate.split("T")[0]}</p>
    //         <p>Fragil: ${item.fragile ? 'Yes' : 'No'}</p>
    //         <p>Largo: ${item.xDimension}</p>
    //         <p>Ancho: ${item.yDimension}</p>
    //         <p>Alto: ${item.zDimension}</p>
    //     `;
    //     container.appendChild(card);
    // });
    

    // let num='B-0-1-14';
    // var num = sessionStorage.getItem('id');
    const num = sessionStorage.getItem('num');
    if (num !== null) {
        miFuncion(num);
    otraFuncion(num);
      } 
     

    const searchInput = document.getElementById('searchInput');
  const searchButton = document.getElementById('searchButton');

  searchButton.addEventListener('click', function() {
    const searchTerm = searchInput.value.trim();
    if (searchTerm !== '') {
      sessionStorage.setItem('num', searchTerm);
      location.reload();
    } else {
      alert('Por favor ingresa un término de búsqueda válido.');
    }
  });
    
    const rectangulos = [
        { x: 100, y: 60, width: 790, height: 30, fill: 'black', id:'' },
        { x: 100, y: 150, width: 200, height: 295, fill: 'gray', id:'A' },
        { x: 395, y: 150, width: 200, height: 295, fill: 'gray', id:'B' },
        { x: 690, y: 150, width: 200, height: 295, fill: 'gray', id:'C' },
        
    ];
        
    const svg = document.getElementById('svgContainer');
    for (let i = 0; i < rectangulos.length; i++) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', rectangulos[i].x);
        rect.setAttribute('y', rectangulos[i].y);
        rect.setAttribute('width', rectangulos[i].width);
        rect.setAttribute('height', rectangulos[i].height);
        rect.setAttribute('fill', rectangulos[i].fill);
        rect.setAttribute('id', rectangulos[i].id);
        rect.setAttribute('onclick', 'miFuncion('+i+')');
        svg.appendChild(rect);
    }
     
   
});

// Define la función que se activará cuando se haga clic en el botón
function miFuncion(num) {
    var rectangulos = [];
    rectangulos = [
        { x: 100, y: 100, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 300, y: 100, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 100, y: 170, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 300, y: 170, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 100, y: 240, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 300, y: 240, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 100, y: 310, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 300, y: 310, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 100, y: 380, width: 180, height: 50, fill: 'gray',stroke: 2},
        { x: 300, y: 380, width: 180, height: 50, fill: 'gray',stroke: 2},
        
        { x: 680, y: 300, width: 250, height: 150, fill: 'beige', stroke: 2},
        { x: 700, y: 305, width: 200, height: 10, fill: 'black', stroke: 2},
        { x: 700, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
        { x: 775, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
        { x: 850, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
    ];
    document.getElementById('svgContainer').style.display = 'none';
    document.getElementById('svgPrincipal').style.display = 'block';
 

    const svg = document.getElementById('svgPrincipal');
    for (let i = 0; i < rectangulos.length; i++) {
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', rectangulos[i].x);
        rect.setAttribute('y', rectangulos[i].y);
        rect.setAttribute('width', rectangulos[i].width);
        rect.setAttribute('height', rectangulos[i].height);
        
        if(parseInt(num)+11 === i){
            rect.setAttribute('fill', 'blue');
        }else if(parseInt(num)+11 === i){
            rect.setAttribute('fill', 'blue');
        }else if(parseInt(num)+11 === i){
            rect.setAttribute('fill', 'blue');
        }else {
            rect.setAttribute('fill', rectangulos[i].fill);
        }
        rect.setAttribute('id', num+ i);
        rect.setAttribute('stroke', 'black');
        rect.setAttribute('stroke-width', rectangulos[i].stroke);
        var s = '';
        if (num === 1) s ='A';
        if (num === 2) s ='B';
        if (num === 3) s ='C';
        rect.setAttribute('onclick', 'otraFuncion("'+s+'-' + i+'-1-14")');
        svg.appendChild(rect);
    }
}
function otraFuncion(num) {
    var rectangulos = [];
    
    console.log(num);
    rectangulos = [
        { x: 680, y: 100, width: 250, height: 150, fill: 'beige', stroke: 2},
        { x: 680, y: 300, width: 250, height: 150, fill: 'beige', stroke: 2},

        { x: 700, y: 110, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 810, y: 110, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 700, y: 135, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 810, y: 135, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 700, y: 165, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 810, y: 165, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 700, y: 195, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 810, y: 195, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 700, y: 225, width: 90, height: 15, fill: 'gray', stroke: 2},
        { x: 810, y: 225, width: 90, height: 15, fill: 'gray', stroke: 2},
        

        { x: 700, y: 305, width: 200, height: 10, fill: 'black', stroke: 2},
        { x: 700, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
        { x: 775, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
        { x: 850, y: 330, width: 50, height: 90, fill: 'black', stroke: 2},
    ];
    document.getElementById('svgContainer').style.display = 'none';
    document.getElementById('svgPrincipal').style.display = 'none';
    document.getElementById('svgUltimo').style.display = 'block';

    const svg = document.getElementById('svgUltimo');
    
    asd = num.split("-");
    for (let i = 0; i < rectangulos.length; i++) {
        if(asd[0] === 'A'){
            recta = [
                { x: 90, y: 130, width: 550, height: 100, fill: 'gray',stroke: 2},
                { x: 95, y: 155, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 325, width: 45, height: 45, fill: '',stroke: 2},
            ];
            var n = 0;
            if(i === 14){
                for(let j = 0; j < 2; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[0].x);
                    rect.setAttribute('y', recta[0].y+j*165);
                    rect.setAttribute('width', recta[0].width);
                    rect.setAttribute('height', 100);
                    rect.setAttribute('fill', 'gray');
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                }
            }
            if(i === 14){
                for(let j = 0; j < 10; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[1].x + n);
                    rect.setAttribute('y', 155);
                    rect.setAttribute('width', 45);
                    rect.setAttribute('height', 45);
                    
                    if(parseInt(asd[2]) === 0 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 55;
                }
            }
            n = 0;
            if(i === 14){
                for(let j = 0; j < 10; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[2].x + n);
                    rect.setAttribute('y', 325);
                    rect.setAttribute('width', 45);
                    rect.setAttribute('height', 45);
                    if(parseInt(asd[2]) === 1 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 55;
                }
            }    
        }
        if(asd[0] === 'B'){
            recta = [
                { x: 90, y: 130, width: 550, height: 100, fill: 'gray',stroke: 2},
                { x: 95, y: 155, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 325, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 400, width: 45, height: 45, fill: '',stroke: 2},
            ];
            var n = 0;
            if(i === 14){
                for(let j = 0; j < 3; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[0].x);
                    rect.setAttribute('y', recta[0].y+j*120);
                    rect.setAttribute('width', recta[0].width);
                    rect.setAttribute('height', 80);
                    rect.setAttribute('fill', 'gray');
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                }
            }
            if(i === 14){
                for(let j = 0; j < 15; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[1].x + n);
                    rect.setAttribute('y', 155);
                    rect.setAttribute('width', 27);
                    rect.setAttribute('height', 27);
                    if(parseInt(asd[2]) === 0 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 36.5;
                }
            }
            n = 0;
            if(i === 14){
                for(let j = 0; j < 15; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[2].x + n);
                    rect.setAttribute('y', 280);
                    rect.setAttribute('width', 27);
                    rect.setAttribute('height', 27);
                    if(parseInt(asd[2]) === 1 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 36.5;
                }
            }
            n = 0;
            if(i === 14){
                for(let j = 0; j < 15; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[3].x + n);
                    rect.setAttribute('y', 400);
                    rect.setAttribute('width', 27);
                    rect.setAttribute('height', 27);
                    if(parseInt(asd[2]) === 2 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 36.5;
                }
            }    
        }
        if(asd[0] === 'C'){
            recta = [
                { x: 90, y: 130, width: 550, height: 100, fill: '',stroke: 2},
                { x: 95, y: 155, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 325, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 400, width: 45, height: 45, fill: '',stroke: 2},
                { x: 95, y: 450, width: 45, height: 45, fill: '',stroke: 2},
            ];
            var n = 0;
            if(i === 14){
                for(let j = 0; j < 4; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[0].x);
                    rect.setAttribute('y', recta[0].y+j*90);
                    rect.setAttribute('width', recta[0].width);
                    rect.setAttribute('height', 60);
                    rect.setAttribute('fill', 'gray');
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                }
            }
            if(i === 14){
                for(let j = 0; j < 20; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[1].x + n);
                    rect.setAttribute('y', 150);
                    rect.setAttribute('width', 22);
                    rect.setAttribute('height', 22);
                    if(parseInt(asd[2]) === 0 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 27;
                }
            }
            n = 0;
            if(i === 14){
                for(let j = 0; j < 20; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[2].x + n);
                    rect.setAttribute('y', 240);
                    rect.setAttribute('width', 22);
                    rect.setAttribute('height', 22);
                    if(parseInt(asd[2]) === 1 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 27;
                }
            }
            n = 0;
            if(i === 14){
                for(let j = 0; j < 20; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[3].x + n);
                    rect.setAttribute('y', 330);
                    rect.setAttribute('width', 22);
                    rect.setAttribute('height', 22);
                    if(parseInt(asd[2]) === 2 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 27;
                }
            }    
            n=0;
            if(i === 14){
                for(let j = 0; j < 20; j++){
                    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
                    rect.setAttribute('x', recta[4].x + n);
                    rect.setAttribute('y', 420);
                    rect.setAttribute('width', 22);
                    rect.setAttribute('height', 22);
                    if(parseInt(asd[2]) === 3 && j === parseInt(asd[3])-1){//cambiar por el nuevo valor
                        rect.setAttribute('fill', 'blue');
                    }else{
                        rect.setAttribute('fill', 'black');
                    }
                    rect.setAttribute('stroke', 'black');
                    rect.setAttribute('stroke-width', 2);
                    svg.appendChild(rect);
                    n = n + 27;
                }
            }    
        }
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        rect.setAttribute('x', rectangulos[i].x);
        rect.setAttribute('y', rectangulos[i].y);
        rect.setAttribute('width', rectangulos[i].width);
        rect.setAttribute('height', rectangulos[i].height);
        if(i == parseInt(asd[1])+2){
            rect.setAttribute('fill', 'blue');
        }else if(asd[0] === 'A' && i == 13) {
            rect.setAttribute('fill', 'blue');
        }else if(asd[0] === 'B' && i == 14) {
            rect.setAttribute('fill', 'blue');
        }else if(asd[0] === 'C'&& i == 15) {
            rect.setAttribute('fill', 'blue');
        }else{
            rect.setAttribute('fill', rectangulos[i].fill);
        }
        
        rect.setAttribute('stroke', 'black');
        rect.setAttribute('stroke-width', rectangulos[i].stroke);
        svg.appendChild(rect);
    }
}

document.getElementById("svgContainer").onclick = miFuncion(num);
document.getElementById("svgPrincipal").onclick = otraFuncion(num);
