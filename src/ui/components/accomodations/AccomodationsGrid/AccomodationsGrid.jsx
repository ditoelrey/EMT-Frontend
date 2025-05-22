import React from 'react';
import AccomodationCard from "../AccomodationCard/AccomodationCard.jsx";
import {Grid} from "@mui/material";

const AccomodationsGrid = ({accommodations, onEdit, onDelete}) => {
    return (
        <Grid container spacing={{xs: 2, md: 3}}>
            {accommodations.map((accommodation) => (
                <Grid key={accommodation.id} xs={12} sm={6} md={4} lg={3}>
                    <AccomodationCard
                        accommodation={accommodation}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default AccomodationsGrid;
