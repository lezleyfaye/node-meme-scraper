// https://memegen-link-examples-upleveled.netlify.app/
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

// axios.get('/user/12345')
//    .then(function (response) {
//  console.log(response.data);
//  console.log(response.status);
//  console.log(response.statusText);
//  console.log(response.headers);
//  console.log(response.config);
// });

// downloads html from website

axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    const $ = cheerio.load(response.data);
    $('img').each((index, element) => {
      console.log($(element));
    });
  })
  .catch((error) => {
    console.log(error);
  });
//

// $('a[href]').each((index, element) => {
//   console.log($(element).find('a[href]').text().trim());
// });
// .catch((error) => {
//       console.log(error);
//   });
