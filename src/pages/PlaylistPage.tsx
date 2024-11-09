// src/pages/PlaylistPage.tsx
import React, { useState, useEffect } from 'react';
import { Container, CircularProgress } from '@mui/material';
import Playlist from '../components/Playlist/Playlist';
import FullPlayer from "../components/Player/FullPlayer";
import { fetchPlaylist, Track } from '../services/api';

const PlaylistPage: React.FC = () => {
    const [selectedTrack, setSelectedTrack] = useState<Track | null>(null);
    const [playlist, setPlaylist] = useState<Track[]>([]);
    const [loading, setLoading] = useState(true);

    const handleSelectTrack = (track: Track) => {
        setSelectedTrack(track); // 선택한 트랙 정보를 상태에 저장
    };

    useEffect(() => {
        const loadPlaylist = async () => {
            try {
                const data = await fetchPlaylist();
                setPlaylist(data);
            } catch (error) {
                console.error("재생 목록을 불러오는 중 오류 발생:", error);
            } finally {
                setLoading(false);
            }
        };

        loadPlaylist();
    }, []);

    if (loading) {
        return (
            <Container style={{ textAlign: 'center', padding: '2rem' }}>
                <CircularProgress /> {/* 로딩 중일 때 로딩 스피너 표시 */}
            </Container>
        );
    }

    return (
        <Container>
            {selectedTrack && <FullPlayer track={selectedTrack} />}
            <Playlist tracks={playlist} onSelectTrack={handleSelectTrack} />
        </Container>
    );
};

export default PlaylistPage;
