import { Instance, types } from "mobx-state-tree";
import { HunterModel } from "../HunterModel";

const BattleTurnModel = types
	.model(
		"BattleTurn",
		{
			firstAttacker: types.reference(HunterModel),
			secondAttacker: types.reference(HunterModel),
			currentTurn: types.optional(types.number, 0),
		},
	);
;

export const BattleModel = types
	.model(
		"Battle",
		{
			challenger: types.reference(HunterModel),
			opponent: types.reference(HunterModel),
			turns: types.optional(types.array(BattleTurnModel), []),
		}
	)
	.actions((self) => ({
		nextTurn() {
		},
		chooseWhoStartAttacking() {
			const totalMobility = self.challenger.totalMobility + self.opponent.totalMobility;

			const probabilityToChallengerGoFirst = self.challenger.totalMobility / totalMobility;
			const randomNumber = Math.random();

			if (randomNumber < probabilityToChallengerGoFirst) {
				self.turns.push(
					BattleTurnModel.create({
						firstAttacker: self.challenger.id,
						secondAttacker: self.opponent.id,
						currentTurn: self.turns.length,
					})
				);
			} else {
				self.turns.push(
					BattleTurnModel.create({
						firstAttacker: self.opponent.id,
						secondAttacker: self.challenger.id,
						currentTurn: self.turns.length,
					})
				);
			}
		}
	}));

export type Battle = Instance<typeof BattleModel>;
