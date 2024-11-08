import React from 'react';
import {Box, Button, TextField, Typography} from "@mui/material";

const SettingsForm: React.FC = () => {
    return (
        <Box display="flex" flexDirection="column" gap={"1rem"} padding={"1rem"}>
            <Typography variant="h5" component="div">설정</Typography>
            <TextField label="API 키" variant="outlined" />
            <TextField label="다운로드 경로" variant="outlined" />
            <Button variant="contained" color="primary">
                저장
            </Button>
        </Box>
    );
};

export default SettingsForm;
