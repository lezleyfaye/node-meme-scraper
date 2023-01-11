// https://memegen-link-examples-upleveled.netlify.app/
import axios from 'axios';
import cheerio from 'cheerio';

// axios.get('/user/12345')
//    .then(function (response) {
//  console.log(response.data);
//  console.log(response.status);
//  console.log(response.statusText);
//  console.log(response.headers);
//  console.log(response.config);
// });

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    console.log(response.data);
  });
