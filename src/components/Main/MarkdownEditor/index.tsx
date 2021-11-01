import styles from "./index.module.less";
import {Form, Button, Input} from "antd";
import {useState, useEffect} from "react";
import marked from "marked";
import hljs from "highlight.js";
import { submitArticle } from "../../../utils/request";
// import "highlight.js/styles/vs.css";
import "./index.css";
const {Item} = Form;
const {TextArea} = Input;
interface Data {
    content: string;
    title: string;
}
export default function MarkdownEditor(a=10) {
    const [input, setInput] = useState("");
    function onFinish(data: Data) {
        const {content, title} = data
        const time = new Date();
        const year = time.getFullYear();
        const month = time.getMonth();
        const date = time.getDate();
        const ctime = year + '-' + month + '-' + date;
        const etime = ctime;
        const article = {
            content,
            ctime,
            etime,
            title
        }
        submitArticle(article).then(v=> {
            // 
            console.log(v);
        }, r=> {
            //错误处理
        })
    }
    function onChange(e:any) {
        setInput(e.target.value);
    }

    useEffect(()=> {
        marked.setOptions({
            renderer: new marked.Renderer(),
            highlight: code => hljs.highlightAuto(code).value,
            gfm: true, //默认为true。 允许 Git Hub标准的markdown.
            breaks: true, //默认为false。 允许回车换行。该选项要求 gfm 为true。
        });
        hljs.configure({
            classPrefix: 'hljs-',
            languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
        });
    }, [])
    return (
        <Form 
            className={styles.container}
            onFinish={onFinish}>
            <Item 
                className={styles.inputItem} 
                name="content">
                <TextArea 
                    className={styles.input}
                    autoSize={{minRows:27}}
                    onChange={onChange}
                ></TextArea>
            </Item>
            <Item className={styles.outputItem}>
                <div 
                    className={styles.output}
                    dangerouslySetInnerHTML={{
                        __html: marked(input),
                    }}></div>
            </Item>
            <Item 
                className={styles.title}
                name="title">
                <Input/>
            </Item>
            <Item className={styles.button}>
                <Button htmlType="submit">提交</Button>
            </Item>
        </Form>
    )
}