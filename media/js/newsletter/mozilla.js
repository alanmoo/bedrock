/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

$(function () {
    'use strict';

    $(document).ajaxSuccess(function(evt, xhr, settings, response) {
        if ((settings.url.indexOf('/newsletter/') > -1) && response.success) {
            $('.section-subscribe .section-title').hide();
        }
    });
});
