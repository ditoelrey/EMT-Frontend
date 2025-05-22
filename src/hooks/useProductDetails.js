import {useEffect, useState} from "react";
import countryRepository from "../repository/countryRepository.js";
import categoryRepository from "../repository/accomodationsRepository.js";
import hostRepository from "../repository/hostRepository.js";

const useProductDetails = (id) => {
    const [state, setState] = useState({
        "product": null,
        "category": null,
        "manufacturer": null,
    });

    useEffect(() => {
        countryRepository
            .findById(id)
            .then((response) => {
                setState(prevState => ({...prevState, "product": response.data}));
                categoryRepository
                    .findById(response.data.categoryId)
                    .then((response) => {
                        setState(prevState => ({...prevState, "category": response.data}));
                    })
                    .catch((error) => console.log(error));
                hostRepository
                    .findById(response.data.manufacturerId)
                    .then((response) => {
                        setState(prevState => ({...prevState, "manufacturer": response.data}));
                    })
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, [id]);

    return state;
};

export default useProductDetails;