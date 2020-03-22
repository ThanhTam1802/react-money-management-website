import React, { useState, useRef } from "react";
import { Editor, EditorState, RichUtils, convertToRaw } from 'draft-js';
import { stateToHTML } from 'draft-js-export-html';
import { stateFromHTML } from 'draft-js-import-html';
import './style.scss';

const TextEditor = (props) => {
  // Create empty state for editor
  const [editorState, setEditorState] = React.useState(EditorState.createEmpty());
  const textInputRef = useRef();
  console.log('Editor: ', convertToRaw(editorState.getCurrentContent()));
  // console.log(stateToHTML(editorState.getCurrentContent()));

  const onChange = (editorState) => {
    setEditorState(editorState);
  };

  const myBlockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    const text = contentBlock.getText();
    console.log('TYPE:', text)
    if (type === 'wao-cool') {
      return 'wao-cool';
    }
  }

  let options = {
    inlineStyles: {
      BOLD: { element: 'b' },
      ITALIC: {
        attributes: { class: 'foo' },
        style: { fontSize: 20 }
      },
      RED: { style: { color: '#900' } },
    },
    // blockRenderers: {
    //   'wao-cool': (block) => {
    //     return '<div>' + escape(block.getText()) + '</div>';
    //   }
    // },
    defaultBlockTag: 'div',
    blockStyleFn: (block) => {
      if (block.getType() === 'wao-cool') return { attributes: { class: 'wao-cool' } }
    }
  };
  let html = stateToHTML(editorState.getCurrentContent(), options);
  console.log(html);
  // console.log('From HTML: ', convertToRaw(stateFromHTML(html)));

  return (
    <div>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'BOLD'))}>Bold</button>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'ITALIC'))}>Italic</button>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'UNDERLINE'))}>Underline</button>
      <button onClick={() => onChange(RichUtils.toggleInlineStyle(editorState, 'RED'))}>Red</button>
      <button onClick={() => onChange(RichUtils.toggleBlockType(editorState, 'wao-cool'))}>quote</button>
      <div className="text-editor-component" onClick={() => textInputRef.current.focus()}>
        <Editor
          editorState={editorState}
          onChange={onChange}
          ref={textInputRef}
          blockStyleFn={myBlockStyleFn}
        />
      </div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  )
};

export default TextEditor;