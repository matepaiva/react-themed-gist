import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Parser from 'html-react-parser';
import fetchJsonp from 'fetch-jsonp';
import classnames from 'classnames';

import './style.css';

const getGistUrl = (id, file) =>
  `https://gist.github.com/${id}.json${file ? `?file=${file}` : ''}`

class Gist extends Component {
  state = { loading: true, src: "" };
  
  componentDidMount() {
    const { id, file } = this.props;
		const url = getGistUrl(id, file);
		
		fetchJsonp(url)
			.then((response) => response.json())
			.then((data) => {
				this.setState({
					loading: false,
					src: data.div
				})
				Gist.addStylesheet(data.stylesheet)
			});
  }

  render() {
    const { loading, src } = this.state;
    const { hideMeta, theme, loader: Loader } = this.props;

    if (loading) {
      return Loader;
    }

    return <div className={classnames(
        'themed-gist',
        { 'hide-meta': hideMeta },
        theme
    )}>
      {Parser(src)}
    </div>;
  }
}

Gist.addedStylesheets = [];

Gist.addStylesheet = (href) => {
  if (!Gist.addedStylesheets.includes(href)) {
    Gist.addedStylesheets.push(href);

    const link = document.createElement('link');
    link.type = "text/css";
    link.rel = "stylesheet";
    link.href = href;

    document.head.appendChild(link);
  }
}

Gist.defaultProps = {
  hideMeta: false,
  theme: '',
  loader: null,
}

Gist.propTypes = {
    loader: PropTypes.any,
    id: PropTypes.string.isRequired, // e.g. "username/id"
    file: PropTypes.string, // to embed a single specific file from the gist
    hideMeta: PropTypes.bool,
    theme: PropTypes.string,
};

export default Gist;