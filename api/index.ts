interface IParams {
    [key: string]: any
}

const HOST = 'http://192.168.1.81:8098';

export default {
    // 注册
    register: async (params: any) => await fetch(HOST + '/phone/send', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
    })
}