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

class FbiScraper {
  constructor() {
    this.baseUrl = 'https://api.fbi.gov/wanted/list?';
    this.pageSize = 1;
    this.person_classification = 'main';
  }

  async getTerrorists() {
    const response = await fetch(
      this.baseUrl +
        new URLSearchParams({
          pageSize: this.pageSize,
          person_classification: this.person_classification,
          poster_classification: "terrorist",
        }),
    );
    const responseData = await response.json();
    return responseData.items;
  }

  async getFraudCriminals() {
    const response = await fetch(
      this.baseUrl +
        new URLSearchParams({
          pageSize: 400,
          person_classification: this.person_classification,
          poster_classification: "default",
        }),
    );
    const responseData = await response.json();
    const fraudCriminals = responseData.items.filter((item) =>
      item?.description?.match(/Bank Fraud/gi),
    );
    return fraudCriminals;
  }

}