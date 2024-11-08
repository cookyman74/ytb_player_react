import React from 'react';
import {Box, List, ListItem, ListItemText, Typography} from "@mui/material";

interface Track {
    id: number;
    title: string;
    artist: string;
    src: string;
}

interface PlaylistProps {
    onSelectTrack: (track: Track) => void;
}

const Playlist: React.FC<PlaylistProps> = ({ onSelectTrack }) => {
    const tracks: Track[] = [
        { id: 1, title: '노래 1', artist: '아티스트 A', src: 'track1.mp3' },
        { id: 2, title: '노래 2', artist: '아티스트 B', src: 'track2.mp3' },
        { id: 3, title: '노래 3', artist: '아티스트 C', src: 'track3.mp3' },
    ];

    return (
        <Box>
            <Typography variant="h5">재생 목록</Typography>
            <List>
                {tracks.map((track) => (
                    <ListItem key={track.id} onClick={() => onSelectTrack(track)}>
                        <ListItemText primary={track.title} secondary={track.artist} />
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default Playlist;
