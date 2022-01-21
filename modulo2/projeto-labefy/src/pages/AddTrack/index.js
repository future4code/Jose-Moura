import React, {useEffect, useState} from "react";
import {BASE_URL, axiosConfig} from "../../constants/urls";
import axios from "axios";
import TextField from '@mui/material/TextField';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import {useParams} from "react-router-dom";
import ListTracks from "../ListTracks";
import {FormContainer, TracsContainer} from "./styled"

const AddTrack = () => {
    const [form,setForm] = useState({name:"", artist:"",url:""});
    const params = useParams();

    const handleTracksChanges = (e) => {
        setForm({...form, [e.target.name]:e.target.value})
    }

    const AddTrackToPlaylist = () => {
        axios
        .post(`${BASE_URL}/playlists/${params.id}/tracks`, form, axiosConfig)
        .then(() => {
            setForm(form.name, form.artist, form.url);
            alert(`A música ${form.name} foi adicionada com sucesso`)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        AddTrackToPlaylist()
    },[])

    return(
        <TracsContainer>
            <FormContainer onSubmit={()=>{AddTrackToPlaylist()}}>
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
                sx={{ 
                    width: 300,
                    mb: 3,
                }} 
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
                sx={{ 
                    width: 300,
                    mb: 3,
                }} 
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
                sx={{ 
                    width: 300,
                    mb: 3,
                }} 
            />
            
            <Button onClick={() => {AddTrackToPlaylist(form.id)}} variant="contained">ADICIONAR MUSICA</Button>
            </FormContainer>
            <ListTracks />
        </TracsContainer>
    )
}

export default AddTrack;