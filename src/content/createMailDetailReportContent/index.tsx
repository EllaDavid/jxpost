import * as React from 'react';
import { Form, DatePicker, Button, Select, message } from 'antd';

import { IProps, IState } from './type'
import { IMessageRsp } from '../../communication/type';

import { createExcel } from '../../communication/download/donwload';

const { Item } = Form;
const { RangePicker } = DatePicker;
const { Option } = Select;

class BaseCreateMailDetailReportContent extends React.Component<IProps, IState> {
  public constructor(props: IProps) {
    super(props);
  }

  handleFormSubmit = (e: any) => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll((err, fieldsValue) => {
      if(err) {
        return;
      }

      const values = {
        startDate: fieldsValue.rangeDate[0].format('YYYY-MM-DD'),
        endDate: fieldsValue.rangeDate[1].format('YYYY-MM-DD'),
        county: fieldsValue.select
      }

      createExcel(values, (rsp: IMessageRsp) => {
        if(rsp.state) {
          message.success("文件生成成功");
        } else {
          message.error(`文件生成失败，${ rsp.message }.`);
        }
      })
    });
  };

  public render() {
    const { getFieldDecorator } = this.props.form;
    const rangeConfig = {
      rules: [{ type: 'array', required: true, message: '请选择开始与结束日期' }]
    };
    const selectConfig = {
      rules: [{ type: 'string', required: true, message: '请请选择县市' }]
    }

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

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 12,
          offset: 0,
        },
        sm: {
          span: 8,
          offset: 4,
        },
      },
    };
    return (
      <Form { ...formItemLayout } onSubmit={ this.handleFormSubmit }>
        <Item label = "选择日期">
          { getFieldDecorator('rangeDate', rangeConfig)(<RangePicker />) }
        </Item>
        <Item label = "所属县市">
            { getFieldDecorator('select', selectConfig)(
            <Select>
              <Option value="嘉兴">嘉兴</Option>
              <Option value="嘉善">嘉善</Option>
              <Option value="平湖">平湖</Option>
              <Option value="桐乡">桐乡</Option>
              <Option value="海盐">海盐</Option>
              <Option value="海宁">海宁</Option>
            </Select>
          ) }
        </Item>
        <Item { ...tailFormItemLayout }>
          <Button type  ="primary" htmlType = "submit">
            提交
          </Button>
        </Item>
      </Form>
    );
  }
}

const CreateMailDetailReportContent = Form.create<IProps>({ name: '生成寄递成本文件' })(BaseCreateMailDetailReportContent);

export default CreateMailDetailReportContent;