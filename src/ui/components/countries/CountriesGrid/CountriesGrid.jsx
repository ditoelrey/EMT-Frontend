import React from 'react';
import { Grid } from "@mui/material";
import CountriesCard from "../CountriesCard/CountriesCard.jsx";

const CountriesGrid = ({ countries, onEdit, onDelete }) => {
    return (
        <Grid container spacing={2}>
            {countries.map((country) => (
                <Grid item key={country.id} xs={12} sm={6} md={4}>
                    <CountriesCard
                        country={country}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default CountriesGrid;