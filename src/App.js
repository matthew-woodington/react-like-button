import "./App.css";
import { AiFillLike } from "react-icons/ai"
import { useState } from 'react';

function App() {

  const [likes, setLikes] = useState(0);

  const addLikes = () => {
    setLikes(likes + 1);
  }

  const updateWord = () => {
    if (likes === 1) {
      return ' Like '
    } else {
      return ' Likes '
    }
  }

  return <div className="App">
    <button className="like-button" type="button" onClick={addLikes}>{likes}{updateWord()}<AiFillLike /></button>
  </div>;
}

export default App;
