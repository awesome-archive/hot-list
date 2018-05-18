import { SITE_ID_KEY } from '../constants/keys';

export const setSiteId = siteId => {
  localStorage.setItem(SITE_ID_KEY, siteId);
};

export const getSiteId = () => {
  return parseInt(localStorage.getItem(SITE_ID_KEY), 10);
};
