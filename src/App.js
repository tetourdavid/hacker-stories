import './App.css';

const welcome = {
  greeting: 'Hi',
  title: 'React',
};

function App() {
  // todo add logic here
  return (
    <div className="App">
      <h1>{welcome.greeting} {welcome.title}!</h1>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" /  >
    </div>
  );
}

export default App;
