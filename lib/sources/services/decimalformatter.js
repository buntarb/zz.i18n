// Copyright 2016 Artem Lytvynov <buntarb@gmail.com>. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * @license Apache-2.0
 * @copyright Artem Lytvynov <buntarb@gmail.com>
 */

goog.provide( 'zz.i18n.services.DecimalFormatter' );

goog.require( 'goog.i18n.NumberFormat' );
goog.require( 'goog.i18n.NumberFormat.Format' );

goog.require( 'zz.services.BaseService' );

/**
 * Base formatter class.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.DecimalFormatter = function( ){

	this.num_ = new goog.i18n.NumberFormat( goog.i18n.NumberFormat.Format.DECIMAL );
	goog.base( this );
};
goog.inherits( zz.i18n.services.DecimalFormatter, zz.services.BaseService );
goog.addSingletonGetter( zz.i18n.services.DecimalFormatter );

/**
 * Formatting model value to view form.
 * @param {number} modelValue
 * @returns {string}
 */
zz.i18n.services.DecimalFormatter.prototype.format = function( modelValue ){

	return goog.isDefAndNotNull( modelValue ) ? this.num_.format( modelValue ) : '';
};

/**
 * Parse model value from view form.
 * @param {string} viewValue
 * @returns {number}
 */
zz.i18n.services.DecimalFormatter.prototype.parse = function( viewValue ){

	return goog.isDefAndNotNull( viewValue ) && viewValue !== '' && viewValue === viewValue ?

		this.num_.parse( viewValue ) :
		null;
};