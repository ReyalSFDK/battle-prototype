import { Weapon } from "../Weapon";

export interface Entity {
	name: string;
	totalHealth: number;
	totalEnergy: number
	weapon: Weapon | null;
	armor: null;
	mobility: null;
	accessory: null;
	/**
	 * Reduz a saúde atual do jogador após receber dano.
	 * @param {number} damage - O valor do dano a ser aplicado ao jogador.
	 *
	 * Esta função diminui a saúde atual do jogador com base no valor de dano fornecido.
	 * Se o valor de dano resultar em uma saúde atual menor que zero, a saúde atual será ajustada para zero.
	 *
	 * @param {number} damage - O valor do dano a ser aplicado ao jogador.
	 *
	 * @example
	 * player.takeDamage(20); // Reduz a saúde do jogador em 20 pontos.
	 */
	takeDamage(damage: number): void;
	weaponName: string;
}
