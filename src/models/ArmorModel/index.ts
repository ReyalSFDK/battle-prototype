import { Instance, types } from "mobx-state-tree";
import { ItemModel } from "../ItemModel";

export const ArmorModel = ItemModel
	.named("Armor")
	.props({
		piercingDefense: types.number,
		impactDefense: types.number,
		slashingDefense: types.number,
		weight: types.number,
		mobility: types.number,
	});

export type Armor = Instance<typeof ArmorModel>;
