import React from 'react';
import { Spin, Icon } from 'antd';

const antIcon = <Icon type="loading" style={{ fontSize: 24 }} spin />;

function LoadingPage() {
  return (
    <div className="b-loading">
      <Spin indicator={antIcon} />
    </div>
  );
}

export default LoadingPage;
