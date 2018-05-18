import { SET_SITE_ID, FETCH_SITES, FETCH_HOT_LIST } from '../constants/types';
import api from '../utils/api';

export const selectSiteId = siteId => {
  return { type: SET_SITE_ID, payload: siteId };
};

export const fetchSites = () => {
  return dispatch => {
    dispatch({ type: FETCH_SITES.PENDING });

    return api
      .fetchSites()
      .then(response => {
        dispatch({
          type: FETCH_SITES.SUCCESS,
          payload: response.sites
        });
        return response;
      })
      .catch(() => {
        dispatch({
          type: FETCH_SITES.ERROR
        });
      });
  };
};

export const fetchHotList = siteId => {
  return dispatch => {
    dispatch({ type: FETCH_HOT_LIST.PENDING });

    return api
      .fetchHotList(siteId)
      .then(response => {
        dispatch({
          type: FETCH_HOT_LIST.SUCCESS,
          payload: response.list
        });
      })
      .catch(() => {
        dispatch({
          type: FETCH_HOT_LIST.ERROR
        });
      });
  };
};
