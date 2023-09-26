const { URLSearchParams } = require('url');

// BASE FBI SCRAPING
(async () => {
  // const keywords = ['terrorist', 'Money Laundering'];
  // Terrorist
  // const response = await fetch(
  //   `https://api.fbi.gov/wanted/list?` +
  //     new URLSearchParams({
  //       pageSize: 400,
  //       person_classification: 'main',
  //       poster_classification: 'terrorist',
  //     }),
  // );

  // Bank Froud
  const response = await fetch(
    `https://api.fbi.gov/wanted/list?` +
      new URLSearchParams({
        pageSize: 400,
        person_classification: 'main',
        poster_classification: 'default',
      }),
  );
  // https://ws-public.interpol.int/notices/v1/red?freeText=fraud&resultPerPage=20&page=8

  const responseData = await response.json();
  // console.log(responseData);
  const fraudCriminals = responseData.items.filter((item) =>
    item?.description?.match(/Bank Fraud/gi),
  );

  console.log(JSON.stringify(responseData.items, null, 2));
  console.log(fraudCriminals, `quantity ${fraudCriminals.length}`);

  // console.log(responseData._embedded.notices.length);
  // console.log(JSON.stringify(responseData._embedded.notices[0], null, 2));
})();
