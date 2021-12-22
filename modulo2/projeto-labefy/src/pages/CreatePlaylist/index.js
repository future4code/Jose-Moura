import React, {useState} from "react";
import axios from "axios";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { BASE_URL, axiosConfig} from "../../constants/urls";
import {CreateContainer, NamePlaylist} from "./styled";
import {createTheme } from '@mui/system';

const theme = createTheme({
    palette: {
      border: {
        paper: "#fff",
      },
    }
})

const CreatePlaylist = () => {
    const [playlist, setPlaylist] = useState("");
    const handlePlaylistChange = (event) => {
        setPlaylist(event.target.value)
    }

    const criarPlaylists = () => {
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
        <CreateContainer>
            <NamePlaylist theme={theme}>
            <TextField 
                sx={{ 
                color: 'border.paper',
                borderRadius: 2,
                width: 300,
                mr: 1 }}
                id="outlined-basic" 
                label="Playlist" 
                variant="outlined" 
                type="text"
                value={playlist}
                onChange={handlePlaylistChange}
             />
                <Button variant="contained" 
                    sx={{ ml: 2 }}
                    sx={{ width: 150 }} 
                    sx={{ height: (theme) => theme.spacing(6) }} 
                    onClick={() => {criarPlaylists()}}>CRIAR PLAYLIST
                </Button>
                </NamePlaylist>
        </CreateContainer>
    )
}

export default CreatePlaylist;