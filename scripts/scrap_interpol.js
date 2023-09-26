// BASE INTERPOL SCRAPING
(async () => {
  // const keywords = ['financing of terrorism', 'Money Laundering', "Securities Fraud"];
  const response = await fetch(
    `https://ws-public.interpol.int/notices/v1/red?freeText=fraud&resultPerPage=100`,
  );
  // https://ws-public.interpol.int/notices/v1/red?freeText=fraud&resultPerPage=20&page=8

  const responseData = await response.json();
  // console.log(responseData);
  // console.log(responseData._embedded.notices.length);
  console.log(JSON.stringify(responseData._embedded.notices, null, 2));
})();
