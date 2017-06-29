var app = app || {};

(function () {
	'use strict';

	// Model
	app.MyText = Backbone.Model.extend({
		defaults: {
			title: '',
			text: ''
		}
	});
})();