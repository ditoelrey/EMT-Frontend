import {useCallback, useEffect, useState} from "react";
import categoryRepository from "../repository/accomodationsRepository.js";
import accomodationsRepository from "../repository/accomodationsRepository.js";
import countryRepository from "../repository/countryRepository.js";


const initialState = {
    "countries": [],
    "loading": true,
};

const useCountries = () => {
    const [countries, setCountries] = useState(initialState);

    const fetchCountries = useCallback(() => {
        countryRepository
            .findAll()
            .then((response) => {
                setCountries({
                    "countries": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);


    const onAdd = useCallback((data) => {
        countryRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new Country.");
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    const onEdit = useCallback((id, data) => {
        countryRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the country with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    const onDelete = useCallback((id) => {
        countryRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the country with ID ${id}.`);
                fetchCountries();
            })
            .catch((error) => console.log(error));
    }, [fetchCountries]);

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);

    return {...countries, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};


};

export default useCountries;