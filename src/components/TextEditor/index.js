import React, { useState, useRef } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import './style.scss';

const TextEditor = (props) => {
  // Create empty state for editor
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const textInputRef = useRef();
  console.log('Editor: ', convertToRaw(editorState.getCurrentContent()));

  const onChange = (editorState) => {
    setEditorState(editorState);
  };
  return (
    <div>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}>Bold</button>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))}>Italic</button>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))}>Underline</button>

      <div className="text-editor-component" onClick={() => textInputRef.current.focus()}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          ref={textInputRef}
        />
      </div>
    </div>
  )
};

export default TextEditor;