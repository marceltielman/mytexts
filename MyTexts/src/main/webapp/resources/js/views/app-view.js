var app = app || {};

(function ($) {
	'use strict';

	app.AppView = Backbone.View.extend({

		el: '.myTexts',

		events: {
            'click .add-mytext' : 'createNew',
            'click .saveBtn' : 'saveItem'
		},
        
		initialize: function () {
            
            this.$listContainer = this.$('.textsList')
            this.$viewSection = this.$('#sectionView');
            this.$editSection = this.$('#sectionEdit');
            this.$titleInput = this.$('#inputTitle');
            this.$textInput = this.$('#inputTextDesc');
            this.$textList = $('#addedTexts');

			this.listenTo(app.mytexts, 'add', this.addOne);
			this.listenTo(app.mytexts, 'reset', this.resetView);
			this.listenTo(app.mytexts, 'all', _.debounce(this.render, 0));

			app.mytexts.fetch({reset: true});
		},

		render: function () {

			if (app.mytexts.length) {
				this.$listContainer.show();
                
			} else {
				this.$listContainer.hide();
			}
		},

		// Add item to list with template
		addOne: function (mytext) {
			var view = new app.MyTextView({ model: mytext });
            this.$textList.append(view.render().el);
		},

		resetView: function () {
			this.$textList.html('');
			app.mytexts.each(this.addOne, this);
		},

		newAttributes: function () {
			return {
				title: this.$titleInput.val().trim(),
				itemId: app.mytexts.nextId(),
                text: this.$textInput.val().trim(),
                date: moment().unix()
			};
		},
        
        toggleSection: function(){
            this.$editSection.toggleClass('hidden');
            this.$viewSection.toggleClass('hidden');
        },
        
        // create new mytext model, store to localstorage.
        saveItem: function (){
            if (this.$titleInput.val().trim()) {
                //app.mytexts.create(this.newAttributes(), {at:0});
            	app.mytexts.create(this.newAttributes());
				this.$titleInput.val('');
                this.$textInput.val('');
                
                this.toggleSection();
                this.resetView();
			}
        },
        
        createNew: function (e) {
            this.toggleSection();
        }
	});
})(jQuery);