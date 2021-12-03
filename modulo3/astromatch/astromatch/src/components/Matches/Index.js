import React, {useState, useEffect} from "react";

import axios from "axios";

const Matches = (props) => {
    const [matches, setMatches] = useState([]);

    useEffect(() => {
        pegaMatch();
      }, []);

    const pegaMatch = (props) => {
        axios
      .get(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jose/matches`)
      .then((response) => {
        setMatches(response.data.matches);
        console.log(response.data)
    
      })
      .catch((err) => {
        console.log(err);
      });
    }
    const descobrirMatch = matches.map((match) => {
      return(
        <div key={match.id}>
         {match.name}
        </div>
      )
    })
    return (
        <div>
          <div>
            {descobrirMatch}
          </div>

        </div>
      );
}
export default Matches


