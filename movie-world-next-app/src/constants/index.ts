/** kobisBaseUrl */
export const kobisBaseUrl = `http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=${process.env.NEXT_PUBLIC_KOBIS_API_KEY_1}`;

/** kmdbBaseUrl */
export const kmdbBaseUrl = `http://api.koreafilm.or.kr/openapi-data2/wisenut/search_api/search_json2.jsp?collection=kmdb_new2&ServiceKey=${process.env.NEXT_PUBLIC_KMDB_API_KEY}`;

/** koreaWebtoonBaseUrl */
export const koreaWebtoonBaseUrl = 'https://korea-webtoon-api.herokuapp.com';

/** kmasBaseUrl */
export const kmasBaseUrl = `https://www.kmas.or.kr/openapi/search/rgDtaMasterList?key=${process.env.NEXT_PUBLIC_KMAS_API_KEY}`;

/** aladinBaseUrl */
const aladinBaseUrl = `http://www.aladin.co.kr/ttb/api`;

/** aladinUrlParams */
const aladinUrlParams = `ttbkey=${process.env.NEXT_PUBLIC_ALADIN_API_KEY}&output=JS&Version=20131101&SearchTarget=Book`;

/** aladinItemSearchUrl */
export const aladinItemSearchUrl = `${aladinBaseUrl}/ItemSearch.aspx?${aladinUrlParams}`;

/** aladinItemListUrl */
export const aladinItemListUrl = `${aladinBaseUrl}&ItemList.aspx?${aladinUrlParams}`;
