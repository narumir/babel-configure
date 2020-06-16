바벨의 트렌스컴파일 단계

AST 구조 : https://astexplorer.net

Parse: 입력된 코드로부터 AST(abstract syntax tree)를 만든다. 이때 presets가 적용된다.

TranseForm: AST를 적용된 plugins 따라 변환 한다.

Generate: 변환된 AST를 출력한다.

``` AST 구조
Node {
  type: 'File',
  start: 0,
  end: 113,
  loc: SourceLocation {
    start: Position { line: 1, column: 0 },
    end: Position { line: 3, column: 28 }
  },
  errors: [],
  program: Node {
    type: 'Program',
    start: 0,
    end: 113,
    loc: SourceLocation { start: [Position], end: [Position] },
    sourceType: 'module',
    interpreter: null,
    body: [ [Node], [Node], [Node] ],
    directives: [],
    leadingComments: undefined,
    innerComments: undefined,
    trailingComments: undefined
  },
  comments: [],
  leadingComments: undefined,
  innerComments: undefined,
  trailingComments: undefined
}
```