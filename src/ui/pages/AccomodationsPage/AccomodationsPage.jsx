import React, {useState} from 'react';
import {Box, Button, CircularProgress} from "@mui/material";
import AccomodationsGrid from "../../components/accomodations/AccomodationsGrid/AccomodationsGrid.jsx";
import useAccomodations from "../../../hooks/useAccomodations.js";
import "./AccomodationsPage.css";
import AddAcomodationDialog from "../../components/accomodations/AddAccomodationDialog/AddAcomodationDialog.jsx";
import RentedAccommodationPage from "../RentedAccommodationPage/RentedAccommodationPage.jsx";
import {useNavigate} from "react-router";

const AccomodationsPage = () => {
    const {accommodations, loading, onAdd, onEdit, onDelete} = useAccomodations();
    const [addAccomodationDialogOpen, setAddAccomodationDialogOpen] = useState(false);

    const navigate = useNavigate();

    return (
        <>
            <Box className="products-box">
                {loading && (
                    <Box className="progress-box">
                        <CircularProgress/>
                    </Box>
                )}
                {!loading &&
                    <>
                        <Box sx={{display: "flex", justifyContent: "flex-end", mb: 2}}>
                            <Button variant="contained" color="primary" onClick={() => setAddAccomodationDialogOpen(true)}>
                                Add Accomodation
                            </Button>

                        </Box>
                        <Box sx={{display: "flex", justifyContent: "flex-start", mb: 2}}>
                        <Button variant="contained" color="primary" onClick={() => navigate("/rentedaccommodations")}>
                            Rented Accommodations
                        </Button>
                        </Box>
                        <AccomodationsGrid accommodations={accommodations} onEdit={onEdit} onDelete={onDelete}/>
                    </>
                }
            </Box>
            <AddAcomodationDialog
                open={addAccomodationDialogOpen}
                onClose={() => setAddAccomodationDialogOpen(false)}
                onAdd={onAdd}
            />

        </>
    );
};

export default AccomodationsPage;
