import $req, { HttpMethod } from '../myFetch';
import { IMessageRsp } from '../type';

export async function getColumn(callBack: Function) {
  const getUrl = 'tableColumn/uploadDetail';
  const reqBody: any = {
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

export async function getDownloadDetailColumnCom(callBack: Function) {
  const getUrl = 'tableColumn/downloadDetail';
  const reqBody: any = {
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