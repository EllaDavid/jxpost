import $req, { HttpMethod } from '../myFetch';
import { IMessageRsp } from '../type';

/**
 * 上传文件
 */
export async function uploadLog(id: number, type: string, county: string, callBack: Function) {
  const getUrl = 'upload/log';
  const reqBody: any = {
    id: id,
    type: type,
    county: county
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

/**
 * 导入已经上传的文件
 */
export async function uploadLoad(id: number, callBack: Function) {
  const getUrl = 'uploadDetail/load';
  const reqBody: any = {
    id: id
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