define({
	// This css path is used as a default by the Kalei project it self.
	css_path: window.location.protocol + '//' + window.location.hostname + (window.location.port === '' ? '' : ':'+ window.location.port) + window.location.pathname +  '../../css/styleguide.css',
	// You can configure any path by just deleteing the one above and uncommenting the one below to point at your css directory
	//css_path: 'http://localhost/css/styles.css',
	
	// You can optionally set configuration for marked.js
	marked_options: {
		tables: true
	}

	//disqus_shortname: 'kaleistyleguide'
});
