// https://memegen-link-examples-upleveled.netlify.app/
import axios from 'axios';
import cheerio from 'cheerio';
import fs from 'fs';

// axios is getting the website and cheerio is loading it
axios
  .get('https://memegen-link-examples-upleveled.netlify.app/')
  .then((response) => {
    const $ = cheerio.load(response.data);
    const memes = [];

    // returns lots of info for each img element
    $('#images').each((index, element) => {
      memes.push({
        url: $(element).find('a').attr('href'),
      });

      // console.log($(element));
    });

    // created memes.json and stores image url there
    fs.writeFile('./memes.json', JSON.stringify(memes), (error) => {
      if (error) throw error;
    });

    // this is end of the .then response - stop deleting it!
  })
  .catch((error) => {
    console.log(error);
  });

// returns list with 0src: 1src: , etc.
// $('img').each(function (index) {
//   console.log(index + 'src:' + ' ' + $(this).text());
// });
