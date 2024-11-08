import React from 'react';
import {Box, Button, Typography} from "@mui/material";

const FullPlayer = () => {
    const handlePlayPause = () => {
        // 재생 일시 정지 기능
        console.log('Play paused');
    }

    return (
        <Box display="flex" flexDirection="column" alignItems={"center"} padding={"1rem"}>
            <Typography variant="h5">현재 재생 중인 음악</Typography>
            <Typography variant="subtitle1" color="textSecondary">
                아티스트 이름 - 노래 제목
            </Typography>
            <Button variant="contained" color={"primary"} onClick={handlePlayPause}>
                재생/일시정지
            </Button>
        </Box>
    )
}

export default FullPlayer;
