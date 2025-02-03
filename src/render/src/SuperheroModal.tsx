import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { retrieveSuperherosList, saveSuperhero } from './apis';

export default function SuperherosModal({ setRows }: { setRows: React.Dispatch<React.SetStateAction<{ name: string; superpower: string; humilityScore: number; }[]>> }) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formJson = Object.fromEntries(formData.entries());
        saveSuperhero({
            name: formJson.name as string,
            superpower: formJson.superpower as string,
            humilityScore: parseInt(formJson.humilityScore as string),
        }).then(() => {
            retrieveSuperherosList().then((data) => {
                setRows(data);
            });
        });
        handleClose();
    };

    return (
        <React.Fragment>
            <Button variant="contained" onClick={handleClickOpen} style={{ margin: '10px' }}>
                Add new Superhero
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle>Add new Superhero</DialogTitle>
                <form onSubmit={handleSubmit}>
                    <DialogContent>
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="name"
                            name="name"
                            label="Superhero Name"
                            type="name"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="superpower"
                            name="superpower"
                            label="Superpower"
                            type="text"
                            fullWidth
                            variant="standard"
                        />
                        <TextField
                            autoFocus
                            required
                            margin="dense"
                            id="humilityScore"
                            name="humilityScore"
                            label="Humility Score"
                            type="number"
                            fullWidth
                            variant="standard"
                            inputProps={{ min: 0, max: 10 }}
                        />
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose}>Cancel</Button>
                        <Button type="submit">Save</Button>
                    </DialogActions>
                </form>
            </Dialog>
        </React.Fragment>
    );
}
