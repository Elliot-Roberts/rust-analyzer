initSidebarItems({"enum":[["Access",""],["Adt","A Data Type"],["AssocItem","Invariant: `inner.as_assoc_item(db).is_some()` We do not actively enforce this invariant."],["AssocItemContainer",""],["CallableKind",""],["CfgAtom","A simple configuration value passed in from the outside."],["CfgExpr",""],["DefWithBody","The defs which have a body."],["FieldSource",""],["GenericDef",""],["GenericParam",""],["ItemInNs",""],["MacroKind",""],["ModuleDef","The defs which can be visible in the module."],["ModuleSource",""],["Mutability",""],["Namespace",""],["Origin",""],["PathKind",""],["PathResolution",""],["PrefixKind",""],["ScopeDef","For IDE only"],["StructKind",""],["TypeRef","Compare ty::Ty"],["VariantDef",""],["Visibility","Visibility of an item, with the path resolved."]],"mod":[["db","Re-exports various subcrates databases so that the calling code can depend only on `hir`. This breaks abstraction boundary a bit, it would be cool if we didn’t do that."],["diagnostics","Re-export diagnostics such that clients of `hir` don’t have to depend on low-level crates."],["import_map","A map of all publicly exported items in a crate."],["known",""],["symbols","File symbol extraction."]],"struct":[["Attr",""],["AttributeTemplate","A template that the attribute input must match. Only top-level shape (`#[attr]` vs `#[attr(...)]` vs `#[attr = ...]`) is considered now."],["Attrs",""],["AttrsWithOwner",""],["BuiltinAttr",""],["BuiltinType",""],["Callable",""],["CfgOptions","Configuration options used for conditional compilation on items with `cfg` attributes. We have two kind of options in different namespaces: atomic options like `unix`, and key-value options like `target_arch=\"x86\"`."],["Const",""],["ConstParam",""],["Crate","hir::Crate describes a single crate. It’s the main interface with which a crate’s dependencies interact. Mostly, it should be just a proxy for the root module."],["CrateDependency",""],["Documentation","Holds documentation"],["Enum",""],["Field",""],["Function",""],["HirFileId","Input to the analyzer is a set of files, where each file is identified by `FileId` and contains source code. However, another source of source code in Rust are macros: each macro can be thought of as producing a “temporary file”. To assign an id to such a file, we use the id of the macro call that produced the file. So, a `HirFileId` is either a `FileId` (source code written by user), or a `MacroCallId` (source code produced by macro)."],["Impl",""],["InFile","`InFile<T>` stores a value of `T` inside a particular file/syntax tree."],["IncorrectCase",""],["Label",""],["LifetimeParam",""],["Local","A single local definition."],["Macro",""],["MacroFile",""],["ModPath",""],["Module",""],["Name","`Name` is a wrapper around string, which is used in hir for both references and declarations. In theory, names should also carry hygiene info, but we are not there yet!"],["Param",""],["SelfParam",""],["Semantics","Primary API to get semantic information, like types, from syntax trees."],["SemanticsScope","`SemanticScope` encapsulates the notion of a scope (the set of visible names) at a particular program point."],["Static",""],["Struct",""],["ToolModule",""],["Trait",""],["Type",""],["TypeAlias",""],["TypeInfo",""],["TypeOrConstParam",""],["TypeParam",""],["Union",""],["Variant",""],["VisibleTraits",""]],"trait":[["AsAssocItem",""],["HasAttrs",""],["HasCrate","Trait for obtaining the defining crate of an item."],["HasSource",""],["HasVisibility",""],["HirDisplay",""]],"type":[["ExpandResult",""]]});