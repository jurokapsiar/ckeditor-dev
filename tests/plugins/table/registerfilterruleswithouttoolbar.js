/* bender-ckeditor-plugins: table */

( function() {
	'use strict';

	bender.editor = true;

	bender.test( {
		'test for table without toolbar': function() {
			var editor = this.editor;

			assert.isNotUndefined( editor.plugins.table );
			assert.isUndefined( editor.plugins.toolbar );
			assert.isTrue( editor.activeFilter.check( 'table{width,height}[align,border,cellpadding,cellspacing,summary]' ) );
			assert.isTrue( editor.activeFilter.check( 'caption' ) );
			assert.isTrue( editor.activeFilter.check( 'tbody' ) );
			assert.isTrue( editor.activeFilter.check( 'thead' ) );
			assert.isTrue( editor.activeFilter.check( 'tfoot' ) );
			assert.isTrue( editor.activeFilter.check( 'th[scope]' ) );
			assert.isTrue( editor.activeFilter.check( 'td[scope]' ) );
			assert.isTrue( editor.activeFilter.check( 'tr[scope]' ) );
		}
	} );
} )();
