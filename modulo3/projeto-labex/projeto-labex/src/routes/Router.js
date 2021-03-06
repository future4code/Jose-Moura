import {AdminHomePage} from "../pages/AdminHomePage/AdminHomePage";
import {ApplicationFormPage} from "../pages/ApplicationFormPage/ApplicationFormPage";
import {CreateTripPage} from "../pages/CreateTripPage/CreateTripPage";
import {HomePage} from "../pages/HomePage/HomePage";
import {ListTripsPage} from "../pages/ListTripsPage/ListTripsPage";
import {LoginPage} from "../pages/LoginPage/LoginPage";
import {TripDetailsPage} from "../pages/TripDetailsPage/TripDetailsPage";

import {BrowserRouter, Routes, Route} from "react-router-dom";

export const Router = () => {
    return(
        <BrowserRouter>
            <div>
            <Routes>
                <Route exact path={"/"} element={<HomePage />} />
                <Route exact path="/trips/list" element={ <ListTripsPage />} />
                <Route exact path={"/trips/application"} element = {<ApplicationFormPage />} />
                <Route exact path={"/login"} element = {<LoginPage />} />
                <Route exact path={"/admin/trips/list"} element = {<AdminHomePage />} />
                <Route exact path={"/admin/trips/create"} element = {<CreateTripPage />} />
                <Route exact path={"/admin/trips/:id"} element = {<TripDetailsPage />} />
            </Routes>
            </div>
        </BrowserRouter>
    )
}

export default Router;