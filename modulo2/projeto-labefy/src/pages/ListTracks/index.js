import React,{useState} from "react";
import {BASE_URL, axiosConfig} from "../../constants/urls";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useParams} from "react-router-dom";

const ListTracks = () => {
    const [tracks, setTracks] = useState([]);
    const params = useParams();
    console.log(params)

    const exibirTracks = () => {
        axios
        .get(`${BASE_URL}/playlists/${params.id}/tracks`,axiosConfig)
        .then((res) => {
            setTracks(res.data.result.tracks)
        })
        .catch((err) => {
            console.log(err)
        })
    }


    const removeTrack = (id) => {
        axios
        .delete(`${BASE_URL}/playlists/${params.id}/tracks/${id}`,axiosConfig)
        .then((res) => {
            alert("MUSICA EXCLUIDA DA PLAYLIST");
            exibirTracks()
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <p>
                {tracks.map((track) => {
                    return(
                        <article key={track.id}>
                            {track.name}
                            <DeleteForeverIcon onClick={() => {removeTrack(track.id)}}/>
                        </article>
                    )
                    })
                }
            </p>
       </div>
    )
}

export default ListTracks;
