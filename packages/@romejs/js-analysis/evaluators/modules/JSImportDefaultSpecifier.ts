/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {Scope} from "../../scopes";
import {
	AnyNode,
	JSImportDefaultSpecifier,
	jsImportDefaultSpecifier,
} from "@romejs/ast";

export default function JSImportDefaultSpecifier(node: AnyNode, scope: Scope) {
	node = jsImportDefaultSpecifier.assert(node);
	scope;
	throw new Error("unimplemented");
}
