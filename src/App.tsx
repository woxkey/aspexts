import React from "react";
import {AuthPage} from "./pages/auth-page";
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Layout from "./components/Layout/Layout.tsx";
import {Reservations} from "./pages/reservation-page";
import {RegisterPage} from "./pages/register-page";

const App: React.FC = (): React.ReactElement => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Reservations />} />
                </Route>
                <Route path="/login" element={<AuthPage />} />
                <Route path="/register" element={<RegisterPage />} />

            </Routes>
        </BrowserRouter>
    )
}

export default App
