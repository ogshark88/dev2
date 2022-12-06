import './App.css';
import { useState } from "react";
import animeData from "./assets/anime.json";
import sorted from "./assets/sorted.json"


// const 

// animeData.forEach((item) => {
//   item.image = item.image;
// });
const originalOrder = JSON.parse(JSON.stringify(animeData))

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */


  const [list, setList] = useState({});
  const [totalScore, setScore] = useState(0);
  const [totalItems, setTot] = useState(0.00001);
  const [order, setOrder] = useState(animeData)

  function sortedList() {
    let newlist = animeData.sort((a,b) =>{
      return b.rating - a.rating
    })
    setOrder([...newlist])
    // console.log(order)
    // console.log(originalOrder)
  }

  // async function f() {
  //   let ne = new Promise(() => {
  //     let newlist = animeData.sort((a,b) =>{
  //       return b.rating - a.rating
  //     })
  //     setOrder([...newlist])
  //   });
  //   let result = await ne
    // const s = await sortedList()
    //   console.log(order)
    // }

  // async function unsortList() {
  //   let ne = new Promise(() => {
  //     setOrder(originalOrder)
  //   });
  //   let result = await ne
    // const s = await sortedList()
    //   console.log(order)
  // }

  const unsortList = () => {
    setOrder([...originalOrder])
    // console.log(order)
    // console.log(originalOrder)
}

  const update = (i,score) => {
    let newlist = list;

    if (!newlist[i]){
      newlist[i] = score
      setScore(totalScore + score)
      setTot(totalItems + 1)
      setList({...newlist})
    }
  }

  const deleteList = (k, score) => {
    let newlist = list
    
    if (newlist[k]){
      delete newlist[k]
      setScore(totalScore - score)
      setTot(totalItems - 1)
      setList({...newlist})
    }
    console.log(list)
    // console.log(totalItems)
    // console.log(totalScore)
  }

  return (
    <div id="root">
    <div class="header">
      <h1>yourAnimeList</h1>
    </div>
    <div className="App">
      <div class="left-side">
        <h3>Sort by:</h3>
        {/* <input type="radio" id="rating" name="sort" value="Rating" onClick={sortedList}></input>
        <label for="rating">Rating</label>
        <br></br>
        <input type="radio" id="none" name="sort" value="None" checked onClick={unsortList}></input>
        <label for="none">None</label> */}

        <button onClick={sortedList}>Sort by Rating</button>
        <br></br>
        <button onClick={unsortList}>Unsort</button>

        <h3>Filter by:</h3>


        <h3>Watchlist</h3>
        {/* <h4>Happy Watching!!</h4> */}

        {Object.keys(list).map((k) =>{

        return(
          <div class="watchlist">
          <b>{animeData[k].name}</b> {" ~ Average User Rating: " + list[k]}
          </div>
        )

        })}

        <p>Average Score = {Math.round(totalScore/totalItems * 100) / 100}/10</p>
      </div>


      <div class = "right-side">
      
      {order.map((item, index) => {
        return(
        <CustomList update={update} item={item} index={index} deleteList={deleteList}> </CustomList>
        )
        })}

      </div>
      </div>
    </div>
    
  );
}




function CustomList(x) {
  return (
    <div class="show-component">
      <h1>{x.item.name} </h1>
      <div class="coverart-sum">
        <div class="coverart-title">
          <img src = {x.item.image} width = "200"></img>
        </div>
        <div class="ratings">
          <p><b>Average User Rating: {x.item.rating}/10</b></p>
          <p><b>Status: </b>{x.item.status}</p>
          <p><b>Genres: </b>{x.item.genres}</p>
        </div>
      </div>
      <div class="desc">
        <b>Synopsis</b>
        <p>{x.item.description}</p>
      </div>
      <br></br>
      <div class="button-pos">
        <div>
        <button class="add" onClick={()=>{x.update(x.index, x.item.rating)}}>Add {x.item.name} to List</button>
        </div>
        <div>
        <button class="remove" onClick={()=>{x.deleteList(x.index, x.item.rating)}}> Remove {x.item.name} from Cart</button>
        </div>
      </div>
    </div>
  )
}

export default App;
