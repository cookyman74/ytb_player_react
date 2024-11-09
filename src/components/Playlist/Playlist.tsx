import React from 'react';
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";
import {Track} from "../../services/api";

interface PlaylistProps {
    tracks: Track[];
    onSelectTrack: (track: Track) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ tracks, onSelectTrack }) => {
    return (
        <Box>
            <Typography variant="h5">재생 목록</Typography>
            <List>
                {tracks.map((track) => (
                    <ListItem key={track.id} onClick={() => onSelectTrack(track)}>
                        <ListItemText primary={track.title} secondary={track.src} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Playlist;
