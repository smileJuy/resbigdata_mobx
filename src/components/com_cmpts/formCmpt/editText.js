import React from 'react'
// 引入编辑器以及EditorState子模块
import BraftEditor, { EditorState } from 'braft-editor'
// 引入编辑器样式
import 'braft-editor/dist/index.css';
import styles from './form.css';
import {message} from 'antd';


// 将html字符串转换成editorState
const htmlString = `<p>Hello <b>World!</b></p>`
const editorState2 = EditorState.createFrom(htmlString)
export default class EditorDemo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            // 创建一个空的editorState作为初始值
            editorState: EditorState.createFrom(props.labelCon)
        }
    }
   
    fetchEditorContent = () =>{
        const htmlString = this.props.editorState;
        return htmlString;
    }
    componentWillReceiveProps(nextProps){
        // if(this.props.editorState !== nextProps.editorState){
            console.log("ssssssssss",nextProps.editorState)
            this.setState({
                // editorState: EditorState.createFrom(''),
                editorState:EditorState.createFrom(nextProps.labelCon)
            })
        // }
    }
    async componentDidMount () {
        // 假设此处从服务端获取html格式的编辑器内容
        const htmlContent = await this.fetchEditorContent();
        // 使用EditorState.createFrom将html字符串转换为编辑器需要的editorState数据
        this.setState({
            editorState: EditorState.createFrom(htmlContent)
        })
    }
    saveEditorContent = (expkey,htmlContent) =>{
        let expbookctn = this.props.labelCon; 
        // expbookctn[expkey].guide_content = htmlContent;

        // this.props.getEditorCtn(expbookctn);
        console.log(this.state.expbookctn);
    }
    submitContent = async (expkey) => {
        // 在编辑器获得焦点时按下ctrl+s会执行此方法
        // 编辑器内容提交到服务端之前，可直接调用editorState.toHTML()来获取HTML格式的内容
        const htmlContent = this.state.editorState.toHTML()
        console.log(htmlContent)
        this.props.getEditCtn(htmlContent);
        const result = await this.saveEditorContent(expkey,htmlContent);
    }

    handleEditorChange = (editorState) => {
        this.setState({ editorState })
    }
    // resolve = () =>{

    // }
    // reject = () =>{
    //     return message.warn("文件太大请重新上传！");
    // }
    render () {
console.log("editorStatexxxxxxx:",this.state.editorState);
        const { editorState } = this.state;
        const myUploadFn = (param) => {

            const serverURL = "data/uploadItem.svt";
            const xhr = new XMLHttpRequest
            const fd = new FormData()
          
            const successFn = (response) => {
              // 假设服务端直接返回文件上传后的地址
              // 上传成功后调用param.success并传入上传后的文件地址
              console.log("xhr",xhr);
              param.success({
                url: JSON.parse(xhr.responseText).url,
                meta: {
                  id: 'img' + Math.random()*10,
                  title: '上传文件',
                  alt: '上传文件',
                  loop: true, // 指定音视频是否循环播放
                  autoPlay: true, // 指定音视频是否自动播放
                  controls: true, // 指定音视频是否显示控制栏
                  poster: 'http://xxx/xx.png', // 指定视频播放器的封面
                }
              })
            }
          
            const progressFn = (event) => {
              // 上传进度发生变化时调用param.progress
              param.progress(event.loaded / event.total * 100)
            }
          
            const errorFn = (response) => {
              // 上传发生错误时调用param.error
              param.error({
                msg: '上传失败！'
              })
            }
          
            xhr.upload.addEventListener("progress", progressFn, false)
            xhr.addEventListener("load", successFn, false)
            xhr.addEventListener("error", errorFn, false)
            xhr.addEventListener("abort", errorFn, false)
          
            fd.append('file', param.file)
            xhr.open('POST', serverURL, true)
            xhr.send(fd)
         // console.log("xhr",xhr);
          }
        //  校验不通过的媒体文件将不会被添加到媒体库中
        const myValidateFn = (file) => {
            // return file.size < 1024 * 100 ? message.success("图片上传成功！") : message.warn("图片太大，请上传合适大小的图片！");
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    file.size < 1024 * 100 ? resolve() : reject()
                }, 2000)
            })
        }
        // 指定媒体库允许选择的本地文件的MIME类型
          const myUploadaccepts = {
            image: 'image/png,image/jpeg,image/gif,image/webp,image/apng,image/svg',
            video: 'video/mp4',
            audio: 'audio/mp3'
          }
        return (
            <div className="my-component">
               
                <BraftEditor
                    value={editorState}
                    onChange={this.handleEditorChange}
                    onSave={() =>{this.submitContent(this.props.expkey)}}
                    onBlur={(e) =>{this.submitContent(this.props.expkey)}}
                    wrap="hard"
                    media={{uploadFn: myUploadFn,validateFn: myValidateFn,accepts:myUploadaccepts,pasteImage:true}}
                />
            </div>
        )

    }
  
}