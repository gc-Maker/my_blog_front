import {ajax} from "./ajax";
const url = "http://localhost:8080";

export interface Information{
    numberOfLike: string;
    numberOfArticle?: string;
}
// 获取information版块文章和点赞的信息
export const getLikeAndArticle = () : Promise<Information>=> ajax(url + "/home/getLikeAndArticle");
// 设置information版块点赞的信息

export const setLike = (props: any) : Promise<Information>=> ajax(url + "/home/setLike", props, 'POST');


export type Label = Array<{labelName: string, number: number}>;
// 获取classcification版块内容
export const getLabel = ():Promise<Label> => ajax(url + "/home/getLabel");


// 创建Timeline内容
export interface TimelineData{
    event: string;
    createTime: string;
}
export const createTimelineData = (props: TimelineData) => ajax(url + "/admin/createTimelineData", props, "POST");

// 获取Timeline内容
export const getTimelineData = ():Promise<TimelineData[]> => ajax(url+"/home/getTimelineData");