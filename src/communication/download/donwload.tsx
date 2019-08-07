import $req, { HttpMethod } from '../myFetch';
import { IMessageRsp } from '../type';

/**
 * 生成寄递的成本EXCEL文件
 */
export async function createExcel(value: object, callBack: Function) {
  const getUrl = 'downloadDetail/exportMailDetail';
  const reqBody: any = {
    ...value
  }
  try {
    const res: IMessageRsp = await $req(getUrl, {
      body: reqBody,
      method: HttpMethod.put
    });
  
    callBack(res);
  } catch(e) {
    console.log(e);
  }
}