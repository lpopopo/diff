operation:"*","accMul",left:Call(CallExpr { span: 2210743..2210788, ctxt: #0, callee: Expr(Ident(Ident { span: 2210743..2210749, ctxt: #1, sym: "Number", optional: false })), args: [ExprOrSpread { spread: None, expr: Bin(BinExpr { span: 2210750..2210787, op: "||", left: Call(CallExpr { span: 2210750..2210782, ctxt: #0, callee: Expr(Member(MemberExpr { span: 2210750..2210772, obj: Ident(Ident { span: 2210750..2210764, ctxt: #8, sym: "invoice_amount", optional: false }), prop: Ident(IdentName { span: 2210765..2210772, sym: "replace" }) })), args: [ExprOrSpread { spread: None, expr: Lit(Regex(Regex { span: 2210773..2210777, exp: ",", flags: "g" })) }, ExprOrSpread { spread: None, expr: Lit(Str(Str { span: 2210779..2210781, value: "", raw: Some("''") })) }], type_args: None }), right: Lit(Num(Number { span: 2210786..2210787, value: 0.0, raw: Some("0") })) }) }], type_args: None }),right:Lit(Num(Number { span: 2210791..2210794, value: 100.0, raw: Some("100") }))
start:2210743,end:2210794
operation:"+=","accAdd",left:BytePos(2212619),right:BytePos(2212619)
start:2212619,end:2212630