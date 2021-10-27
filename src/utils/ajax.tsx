import axios from "axios"
export function ajax(url: string, data={}, type="GET") : Promise<any>{
    return new Promise((resolve, reject)=>{
        let promise;
        if(type === "GET"){
            promise =  axios.get(url, {
                params: data,
            })
        }else{
            promise =  axios.post(url, data);
        }
        promise.then(response => resolve(response.data))
        .catch(err => alert(err));
    })
}