# `index.test.ts`

**DO NOT MODIFY**. This file has been autogenerated. Run `rome test packages/@romejs/js-parser/index.test.ts --update-snapshots` to update.

## `core > uncategorised > 288`

```javascript
JSRoot {
	comments: Array []
	corrupt: false
	diagnostics: Array []
	directives: Array []
	filename: "input.js"
	hasHoistedVars: false
	interpreter: undefined
	mtime: undefined
	sourceType: "script"
	syntax: Array []
	loc: Object {
		filename: "input.js"
		end: Object {
			column: 25
			index: 25
			line: 1
		}
		start: Object {
			column: 0
			index: 0
			line: 1
		}
	}
	body: Array [
		JSExpressionStatement {
			loc: Object {
				filename: "input.js"
				end: Object {
					column: 25
					index: 25
					line: 1
				}
				start: Object {
					column: 0
					index: 0
					line: 1
				}
			}
			expression: JSFunctionExpression {
				id: JSBindingIdentifier {
					name: "test"
					loc: Object {
						filename: "input.js"
						identifierName: "test"
						end: Object {
							column: 14
							index: 14
							line: 1
						}
						start: Object {
							column: 10
							index: 10
							line: 1
						}
					}
				}
				loc: Object {
					filename: "input.js"
					end: Object {
						column: 24
						index: 24
						line: 1
					}
					start: Object {
						column: 1
						index: 1
						line: 1
					}
				}
				body: JSBlockStatement {
					body: Array []
					directives: Array []
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 24
							index: 24
							line: 1
						}
						start: Object {
							column: 21
							index: 21
							line: 1
						}
					}
				}
				head: JSFunctionHead {
					async: false
					generator: false
					hasHoistedVars: false
					rest: undefined
					returnType: undefined
					thisType: undefined
					typeParameters: undefined
					loc: Object {
						filename: "input.js"
						end: Object {
							column: 20
							index: 20
							line: 1
						}
						start: Object {
							column: 14
							index: 14
							line: 1
						}
					}
					params: Array [
						JSBindingIdentifier {
							name: "t"
							loc: Object {
								filename: "input.js"
								identifierName: "t"
								end: Object {
									column: 16
									index: 16
									line: 1
								}
								start: Object {
									column: 15
									index: 15
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 16
										index: 16
										line: 1
									}
									start: Object {
										column: 15
										index: 15
										line: 1
									}
								}
							}
						}
						JSBindingIdentifier {
							name: "t"
							loc: Object {
								filename: "input.js"
								identifierName: "t"
								end: Object {
									column: 19
									index: 19
									line: 1
								}
								start: Object {
									column: 18
									index: 18
									line: 1
								}
							}
							meta: JSPatternMeta {
								optional: undefined
								typeAnnotation: undefined
								loc: Object {
									filename: "input.js"
									end: Object {
										column: 19
										index: 19
										line: 1
									}
									start: Object {
										column: 18
										index: 18
										line: 1
									}
								}
							}
						}
					]
				}
			}
		}
	]
}
```
