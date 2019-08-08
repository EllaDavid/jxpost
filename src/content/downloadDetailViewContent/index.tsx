import * as React from 'react';
import { Table, Icon } from 'antd';

import { getDownloadDetailColumnCom } from '../../communication/tableColumn/tableColumn';
import { getDownloadDetailDataCom } from '../../communication/tableData/downloadDetailData';

import { IProps, IState } from './type'
import { IMessageRsp } from '../../communication/type';

class DownloadDetailViewContent extends React.Component<IProps, IState> {
  /**
   * 取得table的列表名
   */
  private getColumns() {
    let columns: any = [];

    let action = {
      title: '操作',
      key: 'operation',
      fixed: 'right',
      width: 100,
      render: (text: any, record: any, index: any) => {
        const url = '/download/download?id=' + record.id;
        return (
          <div>
            <a href = { url }>
              <Icon type = "download" title = "下载" />
            </a>
          </div>
        )}
    };

    getDownloadDetailColumnCom((rsp: IMessageRsp) => {
      columns = rsp.rowList;
      columns.push(action);
      this.setState({ columns: columns });
    })
  }

  /**
   * 取得table里的数据
   */
  private getData() {
    let data: any = [];

    getDownloadDetailDataCom(this.state.page, this.state.limit, (rsp: IMessageRsp) => {
      data = rsp.rowList;
      this.setState({ data: data, total: rsp.total });
    })
  }

  public constructor(props: IProps) {
    super(props);
    this.state = {
      total: 20,
      page: 0,
      limit: 20,
      columns: [],
      data: []
    }

    this.handlePaginationOnChange = this.handlePaginationOnChange.bind(this);
    this.handlePaginationOnShowSizeChange = this.handlePaginationOnShowSizeChange.bind(this);
  }

  public componentDidMount() {
    this.getColumns();
    this.getData();
  }

  private handlePaginationOnChange(page: number, pageSize: number|undefined) {
    let defaultPageSize;
    if(pageSize === undefined) {
      defaultPageSize = 20;
    } else {
      defaultPageSize = pageSize;
    }

    this.setState({ page: page -1, limit: defaultPageSize}, () => {
      this.getData();
    })
  }

  private handlePaginationOnShowSizeChange(current: number, size: number) {
    this.setState({ page: current -1, limit: size }, () => {
      this.getData();
    });
  }

  public render() {
    return (
      <Table
        columns = { this.state.columns }
        dataSource = { this.state.data }
        pagination = {{
          total: this.state.total,
          pageSize: this.state.limit,
          showSizeChanger: true,
          onChange: this.handlePaginationOnChange,
          onShowSizeChange: this.handlePaginationOnShowSizeChange
        }}
        scroll = {{ x: 1500, y: 640 }}/>
    )
  }
}

export default DownloadDetailViewContent;