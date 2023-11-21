import { makeAutoObservable } from "mobx";
import { BattlePlayerStore } from "../BattlePlayerStore";

export class BattleTurnStore {
	public firstAttacker: BattlePlayerStore;
	public secondAttacker: BattlePlayerStore;

	public debugLog: string[] = [];
	/**
	 * Trocar futuramente para uma shelf que vai gerar linhas com base em textos aleatórios para aumentar a imersão
	 * e tentar adicionar tags html para deixar coloridinho
	 */
	public battleLog: string[] = [];

	constructor(
		challenger: BattlePlayerStore,
		opponent: BattlePlayerStore,
		public turn: number,
	) {
		const [firstAttacker, secondAttacker] = this.chooseWhoStartAttacking(challenger, opponent);
		this.firstAttacker = firstAttacker;
		this.secondAttacker = secondAttacker;
		this.battleLog.push(`Tomando a iniciativa, ${this.firstAttacker.name} ataca primeiro!`);

		// TEMP
		this.defferAttack(firstAttacker, secondAttacker);
		if (secondAttacker.hasAlive) {
			this.defferAttack(secondAttacker, firstAttacker);
		}

		makeAutoObservable(this);
	}

	/**
	 * Escolhe aleatoriamente o primeiro atacante em uma batalha com base na mobilidade dos participantes.
	 *
	 * @param {Entity} challenger - O primeiro participante da batalha.
	 * @param {Entity} opponent - O segundo participante da batalha.
	 * @returns {[Entity, Entity]} - Um array contendo o primeiro atacante e o segundo atacante, com base na mobilidade.
	 *
	 * Esta função determina aleatoriamente qual dos dois participantes da batalha será o primeiro a atacar, com base em suas mobilidades relativas.
	 * A probabilidade de o desafiante (challenger) começar o ataque é calculada com base em sua mobilidade em relação à mobilidade total dos participantes.
	 * Se o desafiante tiver uma mobilidade significativamente maior, ele terá uma chance maior de começar o ataque.
	 * O resultado é um array contendo o primeiro atacante e o segundo atacante.
	 *
	 * @example
	 * const [firstAttacker, secondAttacker] = chooseWhoStartAttacking(player1, player2);
	 * console.log(`${firstAttacker.name} inicia o ataque!`);
	 */
	public chooseWhoStartAttacking = (challenger: BattlePlayerStore, opponent: BattlePlayerStore): [BattlePlayerStore, BattlePlayerStore] => {
		const challengerMobility = challenger.calculateTotalMobility();
		const opponentMobility = opponent.calculateTotalMobility();
		const totalMobility = challengerMobility + opponentMobility;

		const probabilityToChallengerGoFirst = challengerMobility / totalMobility;
		const randomNumber = Math.random();
		const isChallengeGoFist = randomNumber > probabilityToChallengerGoFirst;

		this.debugLog.push("--[chooseWhoStartAttacking]");
		this.debugLog.push(`[mobility] ${challenger.name}: ${challenger} | ${opponent.name}: ${opponentMobility}`)
		this.debugLog.push(`[firstAttack] ${randomNumber}, ${challenger.name} go first? ${isChallengeGoFist}`);

		if (isChallengeGoFist) {
			return [challenger, opponent];
		} else {
			return [opponent, challenger]
		}
	}




	public defferAttack = (attacker: BattlePlayerStore, defender: BattlePlayerStore) => {
		const damage = attacker.calculateDamage();
		this.debugLog.push("--[defferAttack]");
		this.debugLog.push(`[damage] ${attacker.name}`)

		this.battleLog.push(`${attacker.name} ataca ${defender.name} usando ${attacker.entity.weaponName} causando ${damage} de dano!`);
		defender.takeDamage(damage);

		if (!defender.hasAlive) {
			this.battleLog.push(`${defender.name} foi de base.`);
		}
	};

}
