operation:"-","accSub",left:Member(MemberExpr { span: 365911..365934, obj: Ident(Ident { span: 365911..365919, ctxt: #3, sym: "saveData", optional: false }), prop: Ident(IdentName { span: 365920..365934, sym: "invoice_amount" }) }),right:Paren(ParenExpr { span: 365949..366030, expr: Cond(CondExpr { span: 365950..366029, test: Bin(BinExpr { span: 365950..365993, op: "===", left: Member(MemberExpr { span: 365950..365979, obj: Ident(Ident { span: 365950..365958, ctxt: #3, sym: "saveData", optional: false }), prop: Ident(IdentName { span: 365959..365979, sym: "invoice_notax_amount" }) }), right: Ident(Ident { span: 365984..365993, ctxt: #1, sym: "undefined", optional: false }) }), cons: Lit(Num(Number { span: 365996..365997, value: 0.0, raw: Some("0") })), alt: Member(MemberExpr { span: 366000..366029, obj: Ident(Ident { span: 366000..366008, ctxt: #3, sym: "saveData", optional: false }), prop: Ident(IdentName { span: 366009..366029, sym: "invoice_notax_amount" }) }) }) })
start:365911,end:366030
operation:"-","accSub",left:Member(MemberExpr { span: 367020..367044, obj: Ident(Ident { span: 367020..367029, ctxt: #6, sym: "otherData", optional: false }), prop: Ident(IdentName { span: 367030..367044, sym: "invoice_amount" }) }),right:Paren(ParenExpr { span: 367059..367142, expr: Cond(CondExpr { span: 367060..367141, test: Bin(BinExpr { span: 367060..367104, op: "===", left: Member(MemberExpr { span: 367060..367090, obj: Ident(Ident { span: 367060..367069, ctxt: #6, sym: "otherData", optional: false }), prop: Ident(IdentName { span: 367070..367090, sym: "invoice_notax_amount" }) }), right: Ident(Ident { span: 367095..367104, ctxt: #1, sym: "undefined", optional: false }) }), cons: Lit(Num(Number { span: 367107..367108, value: 0.0, raw: Some("0") })), alt: Member(MemberExpr { span: 367111..367141, obj: Ident(Ident { span: 367111..367120, ctxt: #6, sym: "otherData", optional: false }), prop: Ident(IdentName { span: 367121..367141, sym: "invoice_notax_amount" }) }) }) })
start:367020,end:367142