import React from 'react';
import { render} from 'react-dom';
import ThemedGist from '../../src';
const App = () => [
    <ThemedGist id="e109cbb2350b5fd12c7f48601dcd4f0f" key="1" theme="terminal" />,
    <ThemedGist id="e109cbb2350b5fd12c7f48601dcd4f0f" hideMeta key="3" theme="monokai" />,
];
render(<App />, document.getElementById('root'));