import AddTrack from "../pages/AddTrack"
import AllPlaylist from "../pages/AllPlaylist"
import CreatePlaylist from "../pages/CreatePlaylist"; 
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Headers from "../components/Header";

const Router = () => {
    return(
        <BrowserRouter>
            <Headers />
            <Routes>
                <Route exact path={"/"} element={<CreatePlaylist />} />
                <Route exact path={"/playlists"} element={<AllPlaylist />} />
                <Route exact path={"/addtracks/:id"} element={<AddTrack />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;