import React, { useState } from 'react';
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    TextField
} from "@mui/material";
import useCountries from "../../../../hooks/useCountries.js";
import useHosts from "../../../../hooks/useHosts.js";

const initialFormData = {
    name: "",
    numRooms: "",
    hostId: "1",
    category: "",
    rented: false
};

const AddAcomodationDialog = ({ open, onClose, onAdd }) => {
    const [formData, setFormData] = useState(initialFormData);
    const {countries } = useCountries();
    const { hosts } = useHosts();

    const categoryOptions = ["APARTMENT", "HOUSE", "ROOM","FLAT","MOTEL","HOTEL"];

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = () => {
        onAdd(formData);
        setFormData(initialFormData);
        onClose();
    };

    return (
        <Dialog open={open} onClose={onClose}>
            <DialogTitle>Add Accommodation</DialogTitle>
            <DialogContent>
                <TextField
                    margin="dense"
                    label="Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Number of Rooms"
                    name="numRooms"
                    type="number"
                    value={formData.numRooms}
                    onChange={handleChange}
                    fullWidth
                />
                <FormControl fullWidth margin="dense">
                    <InputLabel>Category</InputLabel>
                    <Select
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        label="Category"
                    >
                        {categoryOptions.map((cat) => (
                            <MenuItem key={cat} value={cat}>{cat}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Host</InputLabel>
                    <Select
                        name="hostId"
                        value={formData.hostId}
                        onChange={handleChange}
                        label="Host"
                    >
                        {hosts.map((host) => (
                            <MenuItem key={host.id} value={host.id}>{host.name}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl fullWidth margin="dense">
                    <InputLabel>Rented</InputLabel>
                    <Select
                        name="rented"
                        value={formData.rented}
                        onChange={handleChange}
                        label="Rented"
                    >
                        <MenuItem value={true}>Yes</MenuItem>
                        <MenuItem value={false}>No</MenuItem>
                    </Select>
                </FormControl>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={handleSubmit} variant="contained" color="primary">
                    Add
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddAcomodationDialog;
