import { getType, types } from "mobx-state-tree";

const Item = types
	.model(
		"Item",
		{
			id: types.identifierNumber,
			name: types.string,
		},
	);

export const ItemModel = Item;
