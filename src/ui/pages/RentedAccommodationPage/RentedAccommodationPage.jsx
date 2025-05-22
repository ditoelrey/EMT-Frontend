import React from 'react';
import AccomodationCard from "../../components/accomodations/AccomodationCard/AccomodationCard.jsx";
import useAccomodations from "../../../hooks/useAccomodations.js"; // assuming this hook fetches all accommodations
import {Box, CircularProgress, Typography} from "@mui/material";

const RentedAccommodationsPage = () => {
    const {accommodations, loading, error} = useAccomodations();

    const rentedAccommodations = accommodations.filter(acc => acc.rented === true);

    if (loading) return <CircularProgress />;
    if (error) return <Typography color="error">Failed to load accommodations</Typography>;

    return (
        <Box sx={{display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 2, p: 2}}>
            {rentedAccommodations.length > 0 ? (
                rentedAccommodations.map(accommodation => (
                    <AccomodationCard
                        key={accommodation.id}
                        accommodation={accommodation}
                        onEdit={() => {}}
                        onDelete={() => {}}
                    />
                ))
            ) : (
                <Typography variant="h5">No rented accommodations.</Typography>
            )}
        </Box>
    );
};

export default RentedAccommodationsPage;
