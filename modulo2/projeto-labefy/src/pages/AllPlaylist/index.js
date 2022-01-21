import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, axiosConfig } from "../../constants/urls";
import DeleteIcon from '@mui/icons-material/Delete';
import {AllPlaylistContainer,ListPlaylist, DetailPlaylist, TrackName} from "./styled"
import {useNavigate} from  "react-router-dom";

const AllPlaylist = () => {
    const [playlist, setPlaylist] = useState([]);
    const navegacao = useNavigate();

    const getAllPlaylist = () => {
        axios
        .get(`${BASE_URL}/playlists`,axiosConfig) 
        .then((res) => {
            setPlaylist(res.data.result.list);
            console.log(res.data.result.list)
        })
        .catch((err) => {
            console.log(err)
        })
    }
    useEffect(() => {
        getAllPlaylist()
    },[]);
    console.log(playlist.id)
    const deletePlaylist = (id) => {
        axios
        .delete(`${BASE_URL}/playlists/${id}`,axiosConfig)
        .then((res) => {
            getAllPlaylist()
            
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    return(
        <AllPlaylistContainer>
            <ListPlaylist>
            {playlist.map((playlist) => {
                return(
                    <DetailPlaylist > 
                        <TrackName onClick={()=>{navegacao(`/addtracks/${playlist.id}`)}} >{playlist.name}</TrackName>
                        {<DeleteIcon sx={{fontSize: 35, cursor: "pointer"}} onClick={() => {deletePlaylist(playlist.id)}} />}
                    </DetailPlaylist>
                )
            })}
            </ListPlaylist>
        </AllPlaylistContainer>
    )   
}

export default AllPlaylist;