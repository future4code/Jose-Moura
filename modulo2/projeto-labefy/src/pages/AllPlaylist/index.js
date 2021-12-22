import React, {useState, useEffect} from "react";
import axios from "axios";
import { BASE_URL, axiosConfig } from "../../constants/urls";
import DeleteIcon from '@mui/icons-material/Delete';

const AllPlaylist = () => {
    const [playlist, setPlaylist] = useState([]);

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
        <div>
            <p>
            {playlist.map((playlist) => {
                return(
                    <article>
                        {playlist.name}
                        {<DeleteIcon onClick={() => {deletePlaylist(playlist.id)}} />}
                    </article>
                )
            })}
            </p>
        </div>
    )   
}

export default AllPlaylist;