/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Builder, Token} from "@romejs/formatter";

import {JSXText} from "@romejs/ast";
import {escapeXHTMLEntities} from "@romejs/js-parser";

export default function JSXText(builder: Builder, node: JSXText): Token {
	return escapeXHTMLEntities(node.value);
}
