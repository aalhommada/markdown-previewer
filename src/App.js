import React from "react";
import marked from "marked";
import "bootstrap/dist/css/bootstrap.css";

const { useState } = React;

const defaultMarkdown = `
Heading
=======

Sub-heading
-----------
 
### Another deeper heading
 
Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a  
line break

Text attributes *italic*, **bold**, 
\`monospace\`, ~~strikethrough~~.

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

\`\`\`
Hey, look, a code block!
\`\`\`

 *[Abdullah Al Hommada](https://github.com/aalhommada)*
`;

export default function App() {
  const [markdown, setMarkdown] = useState(defaultMarkdown);

  return (
    <div className="container">
      <h4 className="text-center text-danger m-3 border-bottom">
        Markdown Previewer
      </h4>
      <div className="row d-flex justify-content-center">
        <div className="col-md-6">
          <textarea
            onChange={e => setMarkdown(e.target.value)}
            value={markdown}
            placeholder="markdown"
            rows="20"
            className="form-control"
          />
        </div>

        <div className="col-md-6 border">
          <div
            className=" m-2"
            dangerouslySetInnerHTML={{ __html: marked(markdown) }}
          />
        </div>
      </div>
    </div>
  );
}
