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

goog.provide( 'zz.i18n.services.SoyMessages' );

goog.require( 'soy' );
goog.require( 'goog.dom' );
goog.require( 'goog.array' );

goog.require( 'zz.services.BaseService' );

/**
 * Base class for all views messages services.
 * @constructor
 * @extend {zz.services.BaseService}
 */
zz.i18n.services.SoyMessages = function( tpl ){

	this.msg_ = {};
	this.msgElement_ = soy.renderAsElement( tpl );
	this.extractMessages_( );

	goog.base( this );
};
goog.inherits( zz.i18n.services.SoyMessages, zz.services.BaseService );

/**
 * @private
 */
zz.i18n.services.SoyMessages.prototype.extractMessages_ = function( ){

	if( this.msgElement_.children.length ){

		goog.array.forEach(

			goog.dom.getElementsByTagNameAndClass( goog.dom.TagName.SPAN, undefined, this.msgElement_ ),
			function( span ){

				this.msg_[ span.id ] = goog.dom.getTextContent( span );

			}, this );
	}else{

		this.msg_[ this.msgElement_.id ] = goog.dom.getTextContent( this.msgElement_ );
	}
	this.msgElement_ = undefined;
	delete this.msgElement_;
};

/**
 * @param {string} id
 * @returns {string}
 */
zz.i18n.services.SoyMessages.prototype.getMessage = function( id ){

	return this.msg_[ id ];
};