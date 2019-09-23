import * as React from 'react';

import "./index.less"

import { Divider } from 'antd';

class HelloContent extends React.Component {
  public render() {
    return (
      <div className = "left">
        <h1>
          Version: 1.0
        </h1>
        <ul>
          <p>
            2019-09-23
          </p>
          <li>
            上传指定格式文件至数据库。
          </li>
          <li>
            对数据进行预处理。
          </li>
          <li>
            生成报表并下载
          </li>
        </ul>
        <Divider />
      </div>
    )
  }
}

export default HelloContent;