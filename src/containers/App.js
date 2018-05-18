import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import LoadingPage from '../components/LoadingPage';
import Navbar from '../components/Navbar';
import HotList from '../components/HotList';
import { selectSiteId, fetchSites, fetchHotList } from '../actions/list';
import { setSiteId } from '../utils/storage';

class App extends Component {
  componentWillMount() {
    const { siteId, fetchSites, fetchHotList, selectSiteId } = this.props;

    fetchSites().then(resp => {
      if (!siteId && resp.sites) {
        selectSiteId(resp.sites[0].id);
        fetchHotList(resp.sites[0].id);
      } else {
        fetchHotList(siteId);
      }
    });
  }

  handleSetSite = siteId => {
    const { selectSiteId, fetchHotList } = this.props;

    selectSiteId(siteId);
    setSiteId(siteId);
    fetchHotList(siteId);
  };

  render() {
    const { siteId, sites, hotList } = this.props;

    if (sites.length) {
      return (
        <div className="has-navbar-fixed-top">
          <Navbar />
          <div className="b-content">
            <div className="container">
              <HotList
                siteId={siteId}
                sites={sites}
                hotList={hotList}
                onSetSite={this.handleSetSite}
              />
            </div>
          </div>
        </div>
      );
    } else {
      return <LoadingPage />;
    }
  }
}

const mapStateToProps = state => ({
  siteId: state.list.siteId,
  sites: state.list.sites,
  hotList: state.list.hotList
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      setSiteId,
      selectSiteId,
      fetchSites,
      fetchHotList
    },
    dispatch
  );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
