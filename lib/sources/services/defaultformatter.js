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

goog.provide( 'zz.i18n.services.DefaultFormatter' );

goog.require( 'zz.services.BaseService' );

/**
 * Base formatter class.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.DefaultFormatter = function( ){

	goog.base( this );
};
goog.inherits( zz.i18n.services.DefaultFormatter, zz.services.BaseService );
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