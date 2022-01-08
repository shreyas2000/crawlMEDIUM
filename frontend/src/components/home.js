import React,{Component} from 'react';
import {useState} from 'react';


const axios = require("axios")

function Home(){
    

      const [tag,setTag] = useState("")
      const [index,setIndex] = useState(10)
      const [index2,setIndex2] = useState(20)



        const search = async () => {
          setIndex(10)
          console.log(index)
          let query = tag.replace(/\s+/g, '-');
          axios.get("http://localhost:8080/search/"+`${index}`+"/"+`${query}`)


          const socket = new WebSocket("ws://localhost:8080/socket");
          
          socket.addEventListener('open', () => {
            console.log("client")
          })
          await socket.addEventListener('message', (msg) => {

            let obj = {
              creator : JSON.parse(msg.data).creator,
              title : JSON.parse(msg.data).title,
              link : JSON.parse(msg.data).link,
              subtitle : JSON.parse(msg.data).subtitle,
              claps : JSON.parse(msg.data).claps,
              comments : JSON.parse(msg.data).comments,
            }
            console.log(obj)  
          })
        }


        const next = async () => {
          setIndex2(index+10)
          console.log(index2)
          let query = tag.replace(/\s+/g, '-');
          axios.get("http://localhost:8080/search/"+`${index2}`+"/"+`${query}`)


          const socket = new WebSocket("ws://localhost:8080/socket");
          
          socket.addEventListener('open', () => {
            console.log("client")
          })
          await socket.addEventListener('message', (msg) => {

            let obj = {
              creator : JSON.parse(msg.data).creator,
              title : JSON.parse(msg.data).title,
              link : JSON.parse(msg.data).link,
              subtitle : JSON.parse(msg.data).subtitle,
              claps : JSON.parse(msg.data).claps,
              comments : JSON.parse(msg.data).comments,
            }
            console.log(obj)  
          })
        }

        return(
            <div className="container mt-3">
            <div className="row">
              <div className="col">
              </div>
              <div className="col-8">
                  <div className="input-group mb-3">
                  <input type="text" value={tag} onChange={(e)=>setTag(e.target.value)} className="form-control" placeholder="Tag"/>
                  <button className="btn btn-outline-secondary" onClick={search} type="button" id="button-addon2">Search</button>
                  </div>
              </div>
              <div className="col">
              </div>

              <table className="table">
              <thead className="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Creator</th>
                  <th scope="col">Tilte</th>
                  <th scope="col">Subtitle</th>
                  <th scope="col">Claps</th>
                  <th scope="col">Comments</th>
                </tr>
              </thead>
              <tbody>
                <tr>

                </tr>
                <tr>
                  <th scope="row">2</th>

                </tr>
                <tr>
                  <th scope="row">3</th>

                </tr>
              </tbody>
            </table>


            <button className="btn btn-outline-secondary" onClick={next} type="button" id="button-addon2">Next 10</button>

            </div>
          </div>
        )
    
}
export default Home;
