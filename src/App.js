import logo from './logo.svg';
import './App.css';
import { Button } from '@material-ui/core';
import News from './Components/News/News';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [article, setArticle] = useState([]);

  // useEffect(()=>{
  //   const url = 'http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=0ffd00b2d993414c85d69d8283c226e5'
  //   fetch(url)
  //   .then(res => res.json())
  //   .then(data => setArticle(data.articles))
  // },[])

  useEffect(() => {
    const url ="http://newsapi.org/v2/everything?q=tesla&from=2021-02-03&sortBy=publishedAt&apiKey=0ffd00b2d993414c85d69d8283c226e5"
    axios(url)
    .then(data => setArticle(data.data.articles))
  }, [])
  return (
    <div className="App">
      <h3>Article = {article.length}</h3>
      <div className="article">
      {
        article.map(article =><News article={article} className="shakil"></News>)
      }
      </div>
    </div>
  );
}

export default App;
