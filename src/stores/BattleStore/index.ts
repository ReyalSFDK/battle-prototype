import { makeAutoObservable } from "mobx";
import { BattleTurnStore } from "../BattleTurnStore";
import { BattlePlayerStore } from "../BattlePlayerStore";

export class BattleStore {
	public battleTurns: BattleTurnStore[]  = [];

	constructor(
		public player1: BattlePlayerStore,
		public player2: BattlePlayerStore,
	) {
		makeAutoObservable(this);
	}

	public nextTurn = () => {
		if (this.hasBothAlive) {
			this.battleTurns.push(
				new BattleTurnStore(
					this.player1,
					this.player2,
					this.battleTurns.length,
				),
			);
		}
	}

	public get hasBothAlive() {
		return this.player1.hasAlive && this.player2.hasAlive;
	}
}
