import { types } from "mobx-state-tree";
import { Weapon, WeaponModel } from "../models/WeaponModel";
import { Armor, ArmorModel } from "../models/ArmorModel";
import { Hunter, HunterModel } from "../models/HunterModel";
import { weapons } from "../mocks/weapons";
import { armors } from "../mocks/armors";
import { Battle, BattleModel } from "../models/BattleModel";

const RootStore = types
	.model("RootStore", {
		weapons: types.array(WeaponModel), // Array para armas
		armors: types.array(ArmorModel),   // Array para armaduras
		hunters: types.array(HunterModel), // Array para caçadores
		battles: types.optional(types.array(BattleModel), []), // Array para armazenar batalhas
	})
	.actions((self) => ({
		// Ações para adicionar novas instâncias de armas, armaduras e caçadores
		addWeapon(weapon: Weapon) {
			self.weapons.push(WeaponModel.create(weapon));
		},
		addArmor(armor: Armor) {
			self.armors.push(ArmorModel.create(armor));
		},
		addHunter(hunter: Hunter) {
			self.hunters.push(HunterModel.create({
				...hunter,
				armor: hunter.armor ? hunter.armor.id : null,
				weapon: hunter.weapon ? hunter.weapon.id : null,
			}));
		},
		addBattle(challenger: Hunter, opponent: Hunter) {
			console.log(challenger, opponent);
			self.battles.push(BattleModel.create({
				challenger: challenger.id,
				opponent: opponent.id,
			}));
		},
	}));

// Crie uma instância da store global
const rootStore = RootStore.create({
	weapons: [...weapons],
	armors: [...armors],
	hunters: [
		{
			id: 1,
			name: "Sam",
			weapon: weapons[1].id,
			armor: armors[1].id,
		},
		{
			id: 2,
			name: "Dean",
			weapon: weapons[2].id,
			armor: armors[2].id,
		},
	],
});

export { rootStore };
