var app = app || {};

(function () {
	'use strict';

	// use different delimiter as jsp uses the default delimiter
	_.templateSettings = {
		interpolate: /\{\{(.+?)\}\}/gim,
	    evaluate: /\{\{(.+?)\}\}/gim,
	    escape: /\{\{\-(.+?)\}\}/gim
	};

	
	// My Texts Collection
	var MyTexts = Backbone.Collection.extend({
        
		model: app.MyText,

		// persistance store item in localstorage for now
		localStorage: new Backbone.LocalStorage('mytexts-backbone'),

		// nextid for item
		nextId: function () {
			return this.length ? this.first().get('itemId') + 1 : 1;
		},

        comparator: function (m){
            //sort by date added
            return -m.get('date');
        }
	});

	// new collection
	app.mytexts = new MyTexts();
})();