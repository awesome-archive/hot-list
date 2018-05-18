import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List, Tag } from 'antd';

const CheckableTag = Tag.CheckableTag;

class HotList extends Component {
  render() {
    const { siteId, sites, hotList, onSetSite } = this.props;

    const sitesMenu = (
      <div>
        {sites.map((item, i) => (
          <CheckableTag
            key={i}
            checked={siteId === item.id}
            onChange={() => onSetSite(item.id)}
          >
            {item.title}
          </CheckableTag>
        ))}
      </div>
    );

    return (
      <div className="b-list">
        <List
          header={sitesMenu}
          bordered
          dataSource={hotList}
          renderItem={(item, index) => (
            <List.Item>
              <List.Item.Meta
                title={
                  <div>
                    <span>{`${index + 1}.`}&nbsp;</span>
                    <a href={item.url}>{item.title}</a>
                  </div>
                }
                description={item.summary}
              />
            </List.Item>
          )}
        />
      </div>
    );
  }
}

HotList.propTypes = {
  siteId: PropTypes.number.isRequired,
  sites: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  ),
  hotList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      summary: PropTypes.string
    })
  ),
  onSetSite: PropTypes.func.isRequired
};

export default HotList;
