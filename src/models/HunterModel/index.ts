import { Instance, types } from "mobx-state-tree";
import { Weapon, WeaponModel } from "../WeaponModel";
import { Armor, ArmorModel } from "../ArmorModel";

export const HunterModel = types
	.model(
		"Hunter",
		{
			id: types.identifierNumber,
			name: types.string,
			health: types.optional(types.number, 100),
			weapon: types.maybeNull(types.reference(WeaponModel)),
			armor: types.maybeNull(types.reference(ArmorModel)),
		},
	)
	.actions((self) => ({
		equipWeapon(weapon: Weapon) {
			self.weapon = weapon;
		},
		equipArmor(armor: Armor) {
			self.armor = armor;
		},
		takeDamage(damage: number) {
			self.health -= damage;

			if (self.health < 0) {
				self.health = 0;
			}
		},
	}))
	.views((self) => ({
		get totalMobility(): number {
			let totalMobility = 0;

			if (self.weapon) {
				totalMobility -= self.weapon.weight;
				totalMobility += self.weapon.mobility;
			}
			if (self.armor) {
				totalMobility -= self.armor.weight;
				totalMobility += self.armor.mobility;
			}

			return totalMobility;
		}
	}));

export type Hunter = Instance<typeof HunterModel>;
