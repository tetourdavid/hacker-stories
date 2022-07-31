import './App.css';

const welcome = {
  greeting: 'Hi',
  title: 'React',
};

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

const App = () => (
  <div className="App">
    <h1>{welcome.greeting} {welcome.title}!</h1>
    <Search />
    <hr />
    <List />
  </div>
)

const List = () => (
  <ul>{list.map(item => (
    <li key={item.objectID}>
      <span><a href={item.url}>{item.title}</a></span>
      <span>{item.author}</span>
      <span>{item.num_comments}</span>
      <span>{item.points}</span>
    </li>
  ))}</ul>
);

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={event => console.log(event.target.value)}/>
  </div>
);

export default App;
