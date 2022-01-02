import React,{useState, useEffect} from "react";
import {BASE_URL, axiosConfig} from "../../constants/urls";
import axios from "axios";
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import {useParams} from "react-router-dom";
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import styled from "styled-components";


const ListTrack = styled.article`
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const ListTracks = () => {
    const [tracks, setTracks] = useState([]);
    const params = useParams()

    
    const exibirTracks = () => {
        axios
        .get(`${BASE_URL}/playlists/${params.id}/tracks`,axiosConfig)
        .then((res) => {
            setTracks(res.data.result.tracks)
            console.log(res.data.result.tracks)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        exibirTracks();
    }, [])

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

        <CardContent sx={{ display: 'flex', ml: 10, mt: 20, bl: 1, width: 320, justifyContent: "center", alignItems: "center"}}>
                {tracks.map((track) => {
                    return(
                        <ListTrack key={track.id}>
                            <Typography component="div" variant="h5">{track.name}</Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">{track.artist}</Typography>
                            <DeleteForeverIcon sx={{fontSize: 40, color: 'red', mt: 2, cursor: "pointer", textAlign: "center" }} onClick={() => {removeTrack(track.id)}}/>
                        </ListTrack>
                    )
                    })
                }
        </CardContent>
    )
}

export default ListTracks;