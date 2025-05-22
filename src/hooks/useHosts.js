import {useCallback, useEffect, useState} from "react";
import hostRepository from "../repository/hostRepository.js";
import countryRepository from "../repository/countryRepository.js";


const initialState = {
    "hosts": [],
    "loading": true,
};
const useHosts = () => {
    const [hosts, setHosts] = useState(initialState);

    const fetchUsers = useCallback(() => {
        hostRepository
            .findAll()
            .then((response) => {
                setHosts({
                    "hosts": response.data,
                    "loading": false,
                });
            })
            .catch((error) => console.log(error));
    }, []);


    const onAdd = useCallback((data) => {
        hostRepository
            .add(data)
            .then(() => {
                console.log("Successfully added a new Host.");
                fetchUsers();
            })
            .catch((error) => console.log(error));
    }, [fetchUsers]);

    const onEdit = useCallback((id, data) => {
        hostRepository
            .edit(id, data)
            .then(() => {
                console.log(`Successfully edited the country with ID ${id}.`);
                fetchUsers();
            })
            .catch((error) => console.log(error));
    }, [fetchUsers]);

    const onDelete = useCallback((id) => {
        hostRepository
            .delete(id)
            .then(() => {
                console.log(`Successfully deleted the host with ID ${id}.`);
                fetchUsers();
            })
            .catch((error) => console.log(error));
    }, [fetchUsers]);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    return {...hosts, onAdd: onAdd, onEdit: onEdit, onDelete: onDelete};


};

export default useHosts;