import React from 'react';
import parse from 'html-react-parser';
import sanitizeHtml from 'sanitize-html';

const RichText = ({ html }: { html: string }) => <>{parse(sanitizeHtml(html))}</>;

export default RichText;
