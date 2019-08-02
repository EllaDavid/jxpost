import $req, { HttpMethod } from '../myFetch';
import { IMessageRsp } from '../type';

export async function getData(page: number, limit: number, callBack: Function) {
  const getUrl = 'uploadDetail/listByAnonymous';
  const reqBody: any = {
    json: '',
    page: page,
    limit: limit
  }

  try {
    const res: IMessageRsp = await $req(getUrl, {
      body: reqBody,
      method: HttpMethod.get
    });

    callBack(res);
  } catch(e) {
    console.log(e);
  }
}