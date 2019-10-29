import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CodeBlock = (props) => {
    return (
        <SyntaxHighlighter language={props.language} style={docco}>
            {props.value}
        </SyntaxHighlighter>
    )
}

export default CodeBlock