import "./Editor.css";
import { useState, useRef, useContext } from "react";
import { TodoDispatchContext } from "../App";

const Editor = ({}) => {
    const { onCreate } = useContext(TodoDispatchContext);
    const [content, setContent] = useState("");
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    };

    // 엔터키 눌렀을 때 가능하게
    const onKeyDown = (e) => {
        if (e.keyCode === 13) {
            onSubmit();
        }
    };

    const onSubmit = () => {
        if (content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        // 추가버튼 눌렀을 때 검색창 초기화(빈 문자열)
        setContent("");
    };

    return (
        <div className="Editor">
            <input
                ref={contentRef}
                value={content}
                onKeyDown={onKeyDown}
                onChange={onChangeContent}
                placeholder="새로운 Todo..."
            />
            <button onClick={onSubmit}>추가</button>
        </div>
    );
};
export default Editor;
