var app = app || {};

(function ($) {
	'use strict';

	// Text Item
	app.MyTextView = Backbone.View.extend({
        
		tagName:  'li',

		// template for item.
		template: _.template($('#item-template').html()),

		// item events
		events: {
			'click .text-item': 'edit',
			'click .saveBtn-edit': 'saveEditItem'
		},
        
		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},

		render: function () {
			// Backbone LocalStorage workaround for 
            // adding twice id for item
			if (this.model.changed.id !== undefined) {
				return;
			}
            
            // render template
			this.$el.html(this.template(this.model.toJSON()));       
            
            this.$editSection = $('#sectionEdit');
            this.$viewSection = $('#sectionView');
            this.$titleInput = this.$('#inputTitle');
            this.saveBtnEdit = $('.saveBtn-edit');
            
			return this;
		},
        
		edit: function () {
			this.$el.addClass('editing');
            this.$el.find('.edit').toggleClass('hidden');
            
            this.$el.find('input').val(this.model.get('title'));
            this.$el.find('textarea').val(this.model.get('text'));
		},

		// save edited item.
		saveEditItem: function () {
            //edit input title
			var titleValue = this.$el.find('input').val();
			var trimmedTitleValue = titleValue.trim();
            
            //edit textarea text
            var textValue = this.$el.find('textarea').val();
			var trimmedTextValue = textValue.trim();

			if (!this.$el.hasClass('editing')) {
				return;
			}

			if (trimmedTitleValue) {
				this.model.save({ title: trimmedTitleValue, text: trimmedTextValue });
			} else {
				this.clear();
			}
            
            this.$el.find('.edit').addClass('hidden');
			this.$el.removeClass('editing');
			
            
		}
	});
})(jQuery);