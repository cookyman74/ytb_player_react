// src/App.tsx


import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import {AppBar, Button, Container, Toolbar, Typography} from "@mui/material";
import HomePage from "./pages/HomePage";
import PlaylistPage from "./pages/PlaylistPage";
import SettingsPage from "./pages/SettingsPage";

const App: React.FC = () => {
    return (
        <Router>
            <AppBar position="static">
                <Toolbar>
                    <Button color="inherit" component={Link} to="/">
                        홈
                    </Button>
                    <Button color="inherit" component={Link} to="/playlist">
                        재생 목록
                    </Button>
                    <Button color="inherit" component={Link} to="/settings">
                        설정
                    </Button>
                </Toolbar>
            </AppBar>
            <Container style={{ marginTop: '2rem' }}>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/playlist" element={<PlaylistPage />} />
                    <Route path="/settings" element={<SettingsPage />} />
                </Routes>
            </Container>
        </Router>
    );
};

export default App;
