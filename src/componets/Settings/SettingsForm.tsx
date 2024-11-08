import React, {useEffect, useState} from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

const SettingsForm: React.FC = () => {
    const [apiKey, setApiKey] = useState<string>('');
    const [downloadPath, setDownloadPath] = useState<string>('');

    useEffect(() => {
        const savedApiKey = localStorage.getItem('apikey');
        const savedDownloadPath = localStorage.getItem('downloadPath');
        if (savedApiKey) setApiKey(savedApiKey);
        if (savedDownloadPath) setDownloadPath(savedDownloadPath);
    }, [])

    const handleSave = () => {
        localStorage.setItem('apiKey', apiKey);
        localStorage.setItem('downloadPath', downloadPath);
        alert('설정이 저장되었습니다.')
    }

    return (
        <Box display="flex" flexDirection="column" gap="1rem" padding="1rem">
            <Typography variant="h5">설정</Typography>
            <TextField
                label="API 키"
                variant="outlined"
                value={apiKey}
                onChange={(e) => setApiKey(e.target.value)}
            />
            <TextField
                label="다운로드 경로"
                variant="outlined"
                value={downloadPath}
                onChange={(e) => setDownloadPath(e.target.value)}
            />
            <Button variant="contained" color="primary" onClick={handleSave}>
                저장
            </Button>
        </Box>
    );
};

export default SettingsForm;
