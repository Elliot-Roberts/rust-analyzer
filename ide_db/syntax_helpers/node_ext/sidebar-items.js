initSidebarItems({"fn":[["block_as_lone_tail",""],["expr_as_name_ref",""],["for_each_break_and_continue_expr",""],["for_each_tail_expr","Calls `cb` on each expression inside `expr` that is at “tail position”. Does not walk into `break` or `return` expressions. Note that modifying the tree while iterating it will cause undefined iteration which might potentially results in an out of bounds panic."],["full_path_of_name_ref",""],["is_pattern_cond",""],["parse_tt_as_comma_sep_paths","Parses the input token tree as comma separated plain paths."],["preorder_expr","Preorder walk all the expression’s child expressions preserving events. If the callback returns true on an [`WalkEvent::Enter`], the subtree of the expression will be skipped. Note that the subtree may already be skipped due to the context analysis this function does."],["single_let","Returns the `let` only if there is exactly one (that is, `let pat = expr` or `((let pat = expr))`, but not `let pat = expr && expr` or `non_let_expr`)."],["vis_eq",""],["walk_expr","Preorder walk all the expression’s child expressions."],["walk_pat","Preorder walk all the pattern’s sub patterns."],["walk_patterns_in_expr","Preorder walk all the expression’s child patterns."],["walk_ty","Preorder walk all the type’s sub types."]]});