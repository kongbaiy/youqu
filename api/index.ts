import FetchContext  from './fetch';
import api from './api';

interface IDefaultObject {
    [key: string]: any
}

const host = 'http://192.168.1.81:8098';
const apiObject: IDefaultObject = api;
const f:IDefaultObject = new FetchContext();
let newApi:IDefaultObject = {};

const transform = () => {
    for (let i in apiObject) {
        const apiValue = apiObject[i]?.split(/\s/);
        const method: string = apiValue[0];
        newApi[i] = (options: Request) => f[method]( host+ apiValue[1], options)
    }
}
transform();

export default newApi