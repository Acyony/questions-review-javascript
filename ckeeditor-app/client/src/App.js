import React, {useState} from 'react';
import './App.css';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';

function App() {
    const [text, setText] = useState('');

    return (
        <div className="App">
            <div className="editor">
                <CKEditor
                    editor={ClassicEditor}
                    data={text}
                    config={
                        {
                            ckfinder: {
                                uploadUrl: 'http://localhost:8000/uploads'
                            }
                        }
                    }
                    onChange={(event, editor) => {
                        const data = editor.getData()
                        setText(data)
                    }}
                />
            </div>
            <div>
                <h2>Content</h2>
                <p>{parse(text)}</p>
            </div>
        </div>
    );
}

export default App;
