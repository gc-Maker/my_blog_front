import {ArticleDesc} from "../../utils/request";

interface Action {
    type: string;
    data: ArticleDesc[];
}
export default function articleDesc(preState:ArticleDesc[] = [], action: Action) {
    const {type, data} = action;
    switch(type) {
        case 'GET':
            return preState;
        case 'SET':
            return data;
        default:
            return preState;
    }
}