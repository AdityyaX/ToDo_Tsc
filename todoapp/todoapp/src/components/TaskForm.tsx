import { TextField, Button, Stack, Typography } from "@mui/material";
import { ToggleButtonGroup, ToggleButton } from '@mui/material';
import { FormControl } from '@mui/material';
import Grid from '@mui/material/Grid';
// export {};
import { useState } from "react";
export const Muitext = () => {
    const [todo,setodo] = useState<string>('')
    const [description,setdescription] = useState<string>('')
    const [priority,setPriority] = useState<string>('')
    const [task,settask] = useState<any[]>([])

    // const AddTask = (newtask: any[]) => {
    //     const updated = [...task, newtask];
    //     settask(updated);
    //   };
    const handleSubmit = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();
        if (!todo || !priority || !description) {
            console.error('Please fill in all required fields.');
            return;
        }

        const newtask = {
            title: todo,
            description: description,
            priority: priority,
        };
        console.log(newtask);
        // AddTask([newtask]
        // ); 
        const updated = [...task, newtask];
        // console.log(updated);
        settask(updated);
      
    }



    const handleFormatChange = (newAlignment: string) => {
        if (newAlignment !== null) {
            setPriority(newAlignment);
        }
        console.log(priority);
        
    }

    return (
        <>
        <Grid
            container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            sx={{ minHeight: '100vh', backgroundColor: 'lightblue' }}
        >
            <Grid item xs={6}>
            <Stack direction='column' sx={{ minHeight: '50vh', minWidth:'80vh', marginTop:'20vh', padding: '2vh', borderRadius: '1vh', backgroundColor: 'white' }}>
                <FormControl>
                    <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'primary.main' }}>
                        To Do List
                    </Typography>

                    <Stack direction='column' spacing={2}>
                        <TextField 
                            label="title" 
                            variant="filled" 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setodo(event.target.value);
                            }}
                        />
                        <TextField 
                            label="Description" 
                            variant="filled" 
                            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                                setdescription(event.target.value);
                            }} 
                        />

                        <ToggleButtonGroup  
                            sx={{ marginTop:'5vh', display:'flex', justifyContent:'center' }} 
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
                            Submit
                        </Button>
                    </Stack>
                </FormControl>
            </Stack>
            </Grid>
            <Grid item xs={6}>
                <Stack direction='column' sx={{ minHeight: '50vh', minWidth:'80vh', marginTop:'20vh', padding: '2vh', borderRadius: '1vh', backgroundColor: 'white' }} spacing={2}>
                <Typography variant="h4" gutterBottom component="div" sx={{ textAlign: 'center', color: 'primary.main' }}>List</Typography>
        {task.map((task) => (
            <div key={task.title} >
                <Stack direction="row" spacing={4}>
                <Typography variant="h6">*</Typography>
                <Typography variant="h6">{task.title}</Typography>
                <Typography variant="h6">{task.description}</Typography>
                <Typography variant="h6">{task.priority}</Typography>
                </Stack>
            </div>
        ))}
        </Stack>
        </Grid>
        </Grid>
       
       </>
    );
}