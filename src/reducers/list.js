import { SET_SITE_ID, FETCH_SITES, FETCH_HOT_LIST } from '../constants/types';

const initialState = {
  siteId: 0,
  isfetchSitesPending: false,
  sites: [],
  isfetchHotListPending: false,
  hotList: []
};

export const listReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_SITE_ID:
      return {
        ...state,
        siteId: action.payload
      };
    case FETCH_SITES.PENDING:
      return {
        ...state,
        isfetchSitesPending: true
      };
    case FETCH_SITES.SUCCESS:
      return {
        ...state,
        isfetchSitesPending: false,
        sites: action.payload
      };
    case FETCH_SITES.ERROR:
      return {
        ...state,
        isfetchSitesPending: false
      };
    case FETCH_HOT_LIST.PENDING:
      return {
        ...state,
        isfetchHotListPending: true
      };
    case FETCH_HOT_LIST.SUCCESS:
      return {
        ...state,
        isfetchHotListPending: false,
        hotList: action.payload
      };
    case FETCH_HOT_LIST.ERROR:
      return {
        ...state,
        isfetchHotListPending: false
      };
    default:
      return state;
  }
};
