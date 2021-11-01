import styles from "./index.module.less";
import {Input, Form,Button} from "antd";
import {useState, useEffect} from "react";
import hljs from "highlight.js";
import marked from "marked";
const {TextArea} = Input;
const {Item} = Form;
export default function CreateArticle() {
    const [text, setText] = useState("");
    function onFinish(e:any) {
        console.log(e)
    }

    function onChange(e: any) {
        const text = e.target.value;
        setText(text);
    }
    useEffect(() => {
        // 配置highlight
        hljs.configure({
            classPrefix: 'hljs-',
            languages: ['CSS', 'HTML', 'JavaScript', 'Python', 'TypeScript', 'Markdown'],
        });
        // 配置marked
        marked.setOptions({ 
            renderer: new marked.Renderer(), 
            gfm: true, 
            breaks: true, 
            pedantic: false, 
            sanitize: false, 
            smartLists: true, 
            smartypants: false, 
            highlight(code) { 
                console.log(code);
             return hljs.highlightAuto(code).value 
            }
           }) 
    }, []);
    return (
        <Form
            onFinish={onFinish}
            className={styles.container}>
            <Item
                name="textarea"
                className={styles.left}>
                <TextArea autoSize= {{minRows: 30}} onChange={onChange}/>
            </Item>
            <Item className={styles.right}>
                <div
                    dangerouslySetInnerHTML={{
                        __html: marked(text).replace(/<pre>/g, "<pre id='hljs'>"),
                    }}></div>
            </Item>
            <Item
                className={styles.button}>  
                <Button htmlType="submit">1236465</Button>
            </Item>
        </Form>
    )
}