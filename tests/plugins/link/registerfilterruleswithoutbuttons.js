/* bender-ckeditor-plugins: link */

( function() {
	'use strict';

	bender.editor = true;

	bender.test( {
		'test for link without toolbar': function() {
			var editor = this.editor;

			assert.isNotUndefined( editor.plugins.link );
			assert.isUndefined( editor.plugins.toolbar );
			assert.isTrue( editor.activeFilter.check( 'a[href,name,id]' ) );
		}
	} );
} )();
