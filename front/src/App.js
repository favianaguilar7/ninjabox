import logo from './logo.svg';
import './App.css';

function App() {

  const apiUrl = 'https://5001-148-220-60-102.ngrok-free.app/packages';
    fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
            throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
    })
    .then(data => {
        const container = document.getElementById('datos-container');    
        data.forEach(objeto => {
            const div = document.createElement('div');
            div.textContent = JSON.stringify(objeto);
            container.appendChild(div);
        });
    })
    .catch(error => {
        console.error('Error:', error.message);
    });

  return (
    <div className="App">
      <a href="asd.html" >Ir a mi página HTML</a>

    </div>
  );
}

export default App;
