import React from 'react';
import { Grid } from "@mui/material";
import HostsCard from "../HostsCard/HostsCard.jsx";

const HostsGrid = ({ hosts, onEdit, onDelete }) => {
    return (
        <Grid container spacing={2}>
            {hosts.map((host) => (
                <Grid item key={host.id} xs={12} sm={6} md={4}>
                    <HostsCard
                        host={host}
                        onEdit={onEdit}
                        onDelete={onDelete}
                    />
                </Grid>
            ))}
        </Grid>
    );
};

export default HostsGrid;