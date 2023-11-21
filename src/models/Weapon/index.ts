import { Item } from "../Item";
import { makeAutoObservable } from "mobx";
/**
 * Representa uma arma.
 * @class
 * @implements {Item}
 *
 * Ideias futuras:
 * - Adicionar números de ataques para uma arma
 * - Adicionar precisão para o acerto de uma arma
 * - Adicionar limite de ataques, onde a cada ataque unico vai diminuindo
 * até esvaziar os ataques, quando chegar nesse limite, ter um cool-down de ataques no round (onde 0 seria ilimitado)
 * - Adicionar cool-down de rounds quando esgotar o limite de ataques
 */
export class Weapon implements Item {
	constructor(
		public name: string,
		public energyPerUse: number,
		public damage: [number, number],
		public mobility: number,
	) {
		makeAutoObservable(this);
	}

	/**
	 * Calcula o dano base da arma sem modificadores
	 * @returns {number} O valor do dano calculado.
	 *
	 * Este método calcula o dano com base nos valores mínimos e máximos definidos para a arma.
	 */
	public get calculateBaleDamage(): number {
		const [minDamage, maxDamage] = this.damage;
		// Calcula o dano aleatório dentro do intervalo
		return Math.floor(Math.random() * (maxDamage - minDamage + 1)) + minDamage;
	}
}
