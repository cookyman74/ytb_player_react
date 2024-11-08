import React from 'react';
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";

const Playlist: React.FC = () => {
    const tracks = [
        {id : 1, title: '노래1', artist: 'Wham'},
        {id : 2, title: '노래2', artist: 'Qeen'},
        {id : 3, title: '노래3', artist: '노라줘'},
        {id : 4, title: '노래4', artist: 'MJ'},
    ];

    return (
        <Box>
            <Typography variant="h5" component="div">재생목록</Typography>
            <List>
                {tracks.map(track => (
                    <ListItem key={track.id}>
                        <ListItemText primary={track.title} secondary={track.artist} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Playlist;
