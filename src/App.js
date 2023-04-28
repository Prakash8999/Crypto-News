import React, { useEffect, useState } from 'react'
import axios from 'axios'
function App() {

  const [news, setNews] = useState([])

  useEffect(() => {
    axios.get("https://newsapi.org/v2/everything?q=bitcoin&apiKey=c7f4dfdcc3a2468c8ea72ba197f984f3")
      .then((response) => {
        console.log(response);
        setNews(response.data.articles)
      })
  })

  return (
    <>
      <div className="container" style={{background: "black" }}>
        <div className="row">
          {
            news.map((value, index) => {
              console.log(value);
              return (
                <a href={value.url} key={index} target="_blank" className="col-4">
                  <div className="card" style={{ width: "18rem" , height:"max-content", margin:22  }}>
                    <img src={value.urlToImage} style={{height: '10rem'}} className="card-img-top" alt="..." />
                    <div className="card-body">
                      <h5 style={{}} className="card-title">{value.title.substring(0, 50)}...</h5>
                      <p style={{color:"black" , textDecoration:'none'}}  className="card-text">{value.description.substring(0, 100)}...</p>
                    </div>
                  </div>
                </a>
              );
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;