import React, {useState} from "react";
import {BASE_URL, axiosConfig} from "../../constants/urls";
import axios from "axios";
import TextField from '@mui/material/TextField';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
//import {useParams} from "react-router-dom";
import ListTracks from "../ListTracks";


const AddTrack = () => {
    const [form,setForm] = useState({name:"", artist:"",url:""});
    

    const handleTracksChanges = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const AddTrackToPlaylist = (id) => {
        axios
        .post(`${BASE_URL}/playlists/${form.id}/tracks`, form, axiosConfig)
        .then((res) => {
            setForm(form.name, form.artist, form.url);
            console.log(form.id)
            alert(`A música ${form.name} foi adicionada com sucesso`)
        })
        .catch((err) => {
            console.log(err)
        })
    }

   

    return(
        <div>
            <form onSubmit={AddTrackToPlaylist(form.id)}>
            <TextField
                id="input-with-icon-textfield"
                label="Música"
                name="name"
                value={form.name}
                type="text"
                required
                onChange={handleTracksChanges}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AudiotrackIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
             <TextField
                id="input-with-icon-textfield"
                label="Artista"
                name="artist"
                value={form.artist}
                type="text"
                onChange={handleTracksChanges}
                required
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AudiotrackIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
             <TextField
                id="input-with-icon-textfield"
                label="URL"
                name="url"
                value={form.url}
                type="text"
                required
                onChange={handleTracksChanges}
                InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                    <AudiotrackIcon />
                    </InputAdornment>
                ),
                }}
                variant="standard"
            />
            <Button onClick={() => {AddTrackToPlaylist(form.id)}} variant="contained">ADICIONAR MUSICA</Button>
            </form>
            <ListTracks />
        </div>
    )
}

export default AddTrack;