import React, {useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BASE_URL } from "../../constants/urls";

const CreatePlaylist = () => {
    const [playlist, setPlaylist] = useState("");
    const handlePlaylistChange = (event) => {
        setPlaylist(event.target.value)
    }

    const criarPlaylists = () => {
        const axiosConfig = {
            headers: {
                Authorization: "jose-moura-carver"
              }
        }
        const body = {
            "name": playlist
        }

        axios
        .post(`${BASE_URL}/playlists`, body, axiosConfig)
        .then((res) => {
            setPlaylist(playlist)
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return(
        <div>
            <TextField 
            id="outlined-basic" 
            label="Playlist" 
            variant="outlined" 
            type="text"
            value={playlist}
            onChange={handlePlaylistChange}
            />
            <Button variant="contained" onClick={() => {criarPlaylists()}}>CRIAR PLAYLIST</Button>
        </div>
    )
}

export default CreatePlaylist;