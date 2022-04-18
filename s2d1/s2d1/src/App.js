import logo from './logo.svg';
import './App.css';

function App() {
  const data="hello"
  return (
    <div className="App">
      <First data={data}/>
    </div>
  );
}

function First({data})
{
  console.log("Received data from parent:",data)
  return (
    
    <div>     
      First child
    </div>
  )
}

export default App;
