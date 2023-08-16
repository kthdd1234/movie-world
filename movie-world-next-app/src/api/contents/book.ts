/** aladinBaseUrl */
const aladinBaseUrl = `http://www.aladin.co.kr/ttb/api`;

/** aladinUrlParams */
const aladinUrlParams = `ttbkey=${process.env.NEXT_PUBLIC_ALADIN_API_KEY}&output=JS&Version=20131101&SearchTarget=Book`;

/** aladinItemSearchUrl */
const aladinItemSearchUrl = `${aladinBaseUrl}/ItemSearch.aspx?${aladinUrlParams}`;

/** aladinItemListUrl */
const aladinItemListUrl = `${aladinBaseUrl}&ItemList.aspx?${aladinUrlParams}`;
