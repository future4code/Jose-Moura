import React, {useState, useEffect} from "react";
import axios from "axios";
import styled from "styled-components";
import Matches from "./components/Matches/Index";
import Like from "./images/like-atual.png";
import desLike from "./images/deslike-atual.png";

const containerCard = styled.div`
  text-align: center;
  margin: 0 auto;
`
const botaoDeslike = styled.button`
  width: 100px;

  img{
    width: 100px
  }
`



function App(props) {
  const [allMatches, setMatch] = useState({});
  const [choosePerson, setChoosePerson] = useState({})
  const [isMatch,setIsMatch] = useState();
  const [like,setLike] = useState([]);
  useEffect(() => {
    axios
    .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jose/person`)
    .then((res) => {
      setMatch(res.data.profile);
      //console.log(res.data.profile)
    })
    .catch((err) => {
      console.log(err);
    });
}, []);

  const darLike = () => {
    setIsMatch(true)
    alert(`deu LIKE no ${allMatches.name}`)
    setLike(allMatches.name)
    console.log(like)

  }
  {/*
  useEffect(() => {
    localStorage.setItem(allMatches.name,JSON.stringify(allMatches.name))
  }, [allMatches])
*/
}
  const darDesLike = () => {
    setIsMatch(false)
    alert(`deu desLIKE no ${allMatches.name}`)
  }


 const createJob = (() => {
  const body = {
    "id": allMatches.id,
	  "choice": true
  }

  axios
  .post(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:jose/choose-person`,body)
  .then(() => {
    alert(`deu LIKE no ${allMatches.name}`)
    setIsMatch({isMatch: ""});
    console.log(body)
  })
  .catch((err) => {
    console.log(err);
  });
})

useEffect(() =>{
  createJob()
},[])
  return (
    <div>
      <containerCard>
        <div>
          <img src={allMatches.photo} alt="Imagem personagem"/>
          <p>{allMatches.name}</p>
          <p>{allMatches.age}</p>
          <p>{allMatches.bio}</p>
        </div>
        <div>
          <botaoDeslike onClick={darDesLike}>
            <img src={desLike} alt="botão de deslike"/>
          </botaoDeslike>
          <button onClick={darLike}>
            <img src={Like} alt="botão de like"/>
          </button>
        </div>
      </containerCard>
    </div>

  );
}

export default App;
