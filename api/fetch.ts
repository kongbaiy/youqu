interface IFetchContextGlobalConfig {}
type TFetchContextGlobalConfig = IFetchContextGlobalConfig | any;
interface IFetchContextOptions extends RequestInit {}

class FetchContext {
    globalConfig?: TFetchContextGlobalConfig;
    result?: Response | undefined;

    constructor(globalConfig?: TFetchContextGlobalConfig) {
        if (typeof globalConfig === "function")
            this.globalConfig = globalConfig;
    }

    commonMethod(options?: IFetchContextOptions | any) {
        const { url, method, body } = options;
        const globalConfig = this.globalConfig?.() || {};

        const headers = {
            ...globalConfig.handlers,
            ...options,
        };

        return fetch(url, {
            method,
            headers,
            body,
        });
    }

    get(url: string, options?: IFetchContextOptions | any) {
        return this.commonMethod({
            ...options,
            url,
            method: "post",
        });
    }

    post(url: string, options?: IFetchContextOptions | any) {
        return this.commonMethod({
            ...options,
            url,
            method: "post",
        });
    }
}

export default FetchContext;
