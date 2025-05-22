import {useCallback, useEffect, useState} from "react";
import accomodationsRepository from "../repository/accomodationsRepository.js";

const initialState = {
    "accommodations": [],
    "loading": true,
};

const useAccomodations = () => {
    const [state, setState] = useState(initialState);

    const fetchAccomodations = useCallback(() => {
        accomodationsRepository
            .findAll()
            .then((response) => {
                setState({
                    "accommodations": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);

    const onAdd = useCallback((data) => {
        accomodationsRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new accomodation.");
                fetchAccomodations();
            })
            .catch((error) => console.log(error));
    }, [fetchAccomodations]);

    const onEdit = useCallback((id, data) => {
        accomodationsRepository
            .update(id, data)
            .then(() => {
                console.log(`Successfully edited the accomodation with ID ${id}.`);
                fetchAccomodations();
            })
            .catch((error) => console.log(error));
    }, [fetchAccomodations]);

    const onDelete = useCallback((id) => {
        accomodationsRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the accommodations with ID ${id}.`);
                fetchAccomodations();
            })
            .catch((error) => console.log(error));
    }, [fetchAccomodations]);

    useEffect(() => {
        fetchAccomodations();
    }, [fetchAccomodations]);

    return {...state, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};
};

export default useAccomodations;