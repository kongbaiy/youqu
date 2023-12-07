export const phone = /\d{11}/;
export const password = /^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,12}$/;


interface ICopyObject {
    [key:string]: any
}

//函数拷贝
export const copyObject = (obj: ICopyObject = {}) => {  //变量先置空
    let newobj:ICopyObject | null = null;

    //判断是否需要继续进行递归
    if (typeof (obj) == 'object' && obj !== null) {
        newobj = obj instanceof Array ? [] : {};  //进行下一层递归克隆
        for (let i in obj) {
            newobj[i] = copyObject(obj[i])
        }                //如果不是对象直接赋值
    } else newobj = obj;

    return newobj;
}



interface IPickObjectAttribute {
    [key:string]: any
}

export const pickObjectAttribute = (obj:IPickObjectAttribute = {}, keys:Array<string> = []) => {
    const newObj:IPickObjectAttribute = {};
    
    keys.map((i) => {
        if (obj[i]) newObj[i] = obj[i];
    });

    return newObj
}

export const omitObjectAttribute = (obj = {}, keys:Array<string> = []) => {
    const newObj = copyObject(obj);

    for (let i in newObj) {
        if (keys.indexOf(i) >= 0) delete newObj[i];
    }
    return newObj
}

export const debounce = () => {
    let timeout: any = null;

    return (callback: Function, delay: number = 600) => {
        if (timeout) clearTimeout(timeout);
        timeout = setTimeout(() => {
            callback(timeout);
        }, delay);
    }
}
