import $req, { HttpMethod } from '../myFetch';
import { IMessageRsp } from '../type';

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