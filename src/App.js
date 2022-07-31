import './App.css';

const welcome = {
  greeting: 'Hi',
  title: 'React',
};

const App = () => {
  const stories = [
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
  return (
    <div className="App">
      <h1>{welcome.greeting} {welcome.title}!</h1>
      <Search />
      <hr />
      <List list={stories} />
    </div>
  )
}

const List = (props) => (
  <ul>{props.list.map(item => (
    <Item key={item.objectID} item={item} />
  ))}</ul>
);

const Item = (props) => (
  <li key={props.item.objectID}>
    <span><a href={props.item.url}>{props.item.title}</a></span>
    <span>{props.item.author}</span>
    <span>{props.item.num_comments}</span>
    <span>{props.item.points}</span>
  </li>
)

const Search = () => (
  <div>
    <label htmlFor="search">Search: </label>
    <input id="search" type="text" onChange={event => console.log(event.target.value)} />
  </div>
);

export default App;
