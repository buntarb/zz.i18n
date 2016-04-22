/**
 * @fileoverview Provide zz.i18n.services.DefaultFormatter.
 * @license Apache-2.0
 * @author buntarb@gmail.com (Artem Lytvynov)
 */

goog.provide( 'zz.i18n.services.DefaultFormatter' );

/**
 * Base formatter class.
 * @constructor
 */
zz.i18n.services.DefaultFormatter = function( ){ };
goog.addSingletonGetter( zz.i18n.services.DefaultFormatter );

/**
 * Formatting model value to view form.
 * @param {*} modelValue
 * @returns {*}
 */
zz.i18n.services.DefaultFormatter.prototype.format = function( modelValue ){

	return modelValue;
};

/**
 * Parse model value from view form.
 * @param {*} viewValue
 * @returns {*}
 */
zz.i18n.services.DefaultFormatter.prototype.parse = function( viewValue ){

	return viewValue;
};