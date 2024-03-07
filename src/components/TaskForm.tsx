import { TextField, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
import AddIcon from '@mui/icons-material/Add';

import React, { useState } from "react";

export const Muitext = () => {
    const [todo, setodo] = useState<string>('');
    const [description, setdescription] = useState<string>('');
    const [priority, setPriority] = useState<string>('');
    const [task, settask] = useState<any[]>([]);

    const handledelete = (event: React.MouseEvent<HTMLElement>, id: any) => {
        event.preventDefault();
        settask(task => task.filter(task => task.id !== id));
    }

    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (!todo || !priority || !description) {
            console.error('Please fill in all required fields.');
            return;
        }

        const newtask = {
            id: new Date().getTime(),
            title: todo,
            description: description,
            priority: priority,
        };

        const updated = [...task, newtask];
        settask(updated);
    }

    const handleFormatChange = (newAlignment: string) => {
        if (newAlignment !== null) {
            setPriority(newAlignment);
        }
    }

    return (
        <>
            <Grid container spacing={2} sx={{
        minHeight: '100vh',
        backgroundColor: 'lightblue',
        flexDirection: { xs: 'column', sm: 'row' },
        
      }}>
                <Grid item xs={12} sm={6}>
                    <Stack direction='column'  sx={{ minHeight: '50vh', padding: '2vh', borderRadius: '1vh', backgroundColor: 'white',marginTop: '20vh', }}>
                        <FormControl>
                            <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'primary.main' }}>
                                To Do List
                            </Typography>

                            <Stack direction='column' spacing={2}>
                                <TextField
                                    label="title"
                                    variant="standard"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setodo(event.target.value);
                                    }}
                                />
                                <TextField
                                    label="Description"
                                    variant="standard"
                                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                        setdescription(event.target.value);
                                    }}
                                />

                                <ToggleButtonGroup
                                    sx={{ marginTop: '5vh', display: 'flex', justifyContent: 'center' }}
                                    onChange={(event, newAlignment) => handleFormatChange(newAlignment)}
                                >
                                    <ToggleButton value="Highest" color="primary" sx={{ color: 'black' }}>Highest</ToggleButton>
                                    <ToggleButton value="Medium" color="primary" sx={{ color: 'black' }}>Medium</ToggleButton>
                                </ToggleButtonGroup>

                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleSubmit}
                                >
                                    Add Task
                                </Button>
                            </Stack>
                        </FormControl>
                    </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Stack direction='column' sx={{ minHeight: '50vh', padding: '2vh', borderRadius: '1vh', backgroundColor: 'white' ,marginTop: '20vh',}} spacing={2}>
                        <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'primary.main' }}>List</Typography>
                        <Stack direction="row" spacing={2}>
                            <Typography variant="h6">S.NO</Typography>
                            <Typography variant="h6">Title</Typography>
                            <Typography variant="h6">Description</Typography>
                            <Typography variant="h6">Priority</Typography>
                        </Stack>

                        {task.map((task) => (
                            <div key={task.title} >
                                <Stack direction="row" spacing={2}>
                                    <Typography variant="h6">*</Typography>
                                    <Typography variant="h6">{task.title}</Typography>
                                    <Typography variant="h6">{task.description}</Typography>
                                    <Typography variant="h6">{task.priority}</Typography>
                                    <Button onClick={(event: React.MouseEvent<HTMLElement>) => { handledelete(event, task.id) }} variant="contained">Completed</Button>
                                </Stack>
                            </div>
                        ))}
                    </Stack>
                </Grid>
            </Grid>
        </>
    );
}
