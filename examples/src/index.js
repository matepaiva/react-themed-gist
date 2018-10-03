import React from 'react';
import { render} from 'react-dom';
import ThemedGist from '../../src';
const App = () => [
    <ThemedGist id="a2b96ecc78311ff353ee79fce1fae36b" hideMeta key="1" theme="terminal" />,
    <ThemedGist id="a2b96ecc78311ff353ee79fce1fae36b" hideMeta key="3" theme="monokai" />,
];
render(<App />, document.getElementById('root'));