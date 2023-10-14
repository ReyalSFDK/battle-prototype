import { Instance, types } from "mobx-state-tree";
import { NumberRangeModel } from "../NumberRangeModel";
import { ItemModel } from "../ItemModel";

export const WeaponModel = ItemModel
    .named("Weapon")
    .props({
      piercingDamage: NumberRangeModel,
      impactDamage: NumberRangeModel,
      slashingDamage: NumberRangeModel,
      weight: types.number,
      criticalChance: types.number,
      mobility: types.number,
      accuracy: types.number,
    });

export type Weapon = Instance<typeof WeaponModel>;
