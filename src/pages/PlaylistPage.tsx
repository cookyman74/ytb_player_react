import React, {useState} from 'react';
import {Container} from "@mui/material";
import Playlist from "../componets/Player/Playlist";
import FullPlayer from "../componets/Player/FullPlayer";


interface Track {
    id: number;
    title: string;
    artist: string;
    src: string;
}

const PlaylistPage: React.FC = () => {
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);

    const handleSelectTrack = (track: Track) => {
        setSelectedTrack(track);
    };

    return (
        <Container>
            <Playlist onSelectTrack={handleSelectTrack} />
            {selectedTrack && <FullPlayer track={selectedTrack} />}
        </Container>
    );
};

export default PlaylistPage;
