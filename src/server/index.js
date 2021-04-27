import axios from 'axios';
import {apiKey} from '../const/apiKey'

const getData = (queryString, page) => {
    return new Promise((resolve, reject) => {
        axios
            .get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${queryString}&page=${page}&per_page=25&format=json&nojsoncallback=1`)
            .then((response) =>{
                resolve(response.data.photos.photo);
            })
            .catch(err => {
                console.log("Encountered an error with fetching and parsing data",
                err);
                reject(err);
            })
    })
}

export default getData;