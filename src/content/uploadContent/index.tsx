import * as React from 'react';
import { Button, Icon, Upload, message, Select, Divider, Form } from 'antd';

import { IProps, IState } from './type'
import { IMessageRsp } from '../../communication/type';

import { uploadLog } from '../../communication/upload/uploadLog';

const { Option } = Select;
const { Item } = Form;

class UploadContent extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);

    this.state = {
      county: "嘉兴",
      type: "寄递数据"
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleCountyChange = this.handleCountyChange.bind(this);
  }

  private handleChange(info: any) {
    if(info.file.status === "done") {
      if(info.file.response.state) {
        uploadLog(info.file.response.message, this.state.type, this.state.county, (rsp: IMessageRsp) => {
          if(rsp.state) {
            message.success(`${info.file.name} 文件上传成功.`);
          } else {
            message.error(`${info.file.name} ${ info.file.response.message }.`);
          }
        })
      } else {
        message.error(`${info.file.name} ${ info.file.response.message }.`);
      }
    } else if(info.file.status === 'error') {
      message.error(`${info.file.name} 文件上传失败.`);
    }
  }

  private handleTypeChange(value: string) {
    this.setState({
      type: value
    })
  }

  private handleCountyChange(value: string) {
    this.setState({
      county: value
    })
  }

  public render() {
    const formItemLayout = {
      labelCol: {
        xs: { span: 12 },
        sm: { span: 4 },
      },
      wrapperCol: {
        xs: { span: 12 },
        sm: { span: 8 },
      },
    };

    return (
      <div>
        <Form {...formItemLayout}>
          <Item label = "文件类型">
            <Select defaultValue="寄递数据" onChange = { this.handleTypeChange }>
              <Option value="寄递数据">寄递数据</Option>
            </Select>
          </Item>
          <Item label = "所属县市">
            <Select defaultValue="嘉兴" onChange = { this.handleCountyChange }>
              <Option value="嘉兴">嘉兴</Option>
              <Option value="嘉善">嘉善</Option>
              <Option value="平湖">平湖</Option>
              <Option value="桐乡">桐乡</Option>
              <Option value="海盐">海盐</Option>
              <Option value="海宁">海宁</Option>
            </Select>
          </Item>
          <Divider />
          <Item label = "文件选择">
            <Upload name = "upload" action = "upload/single" onChange = { this.handleChange }>
              <Button>
                <Icon type = "upload"/>
                上传文件
              </Button>
            </Upload>
          </Item>
        </Form>
      </div>
    )
  }
}

export default UploadContent;