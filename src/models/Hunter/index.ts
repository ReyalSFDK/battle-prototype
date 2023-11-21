import { Entity } from "../Entity";
import { AttributeShelf } from "../../shelves";
import { Weapon } from "../Weapon";
import { makeAutoObservable } from "mobx";

export class Hunter implements Entity {
	constructor(
		public name: string,
		public totalEnergy: number,
		public totalHealth: number,
		public currentEnergy: AttributeShelf<number>,
		public currentHealth: AttributeShelf<number>,
		public weapon: Weapon | null,
		public armor: null,
		public mobility: null,
		public accessory: null,
	) {
		makeAutoObservable(this);
	}

	public takeDamage = (damage: number) => {
		let newCurrentHealth = this.currentHealth.value - damage;

		if (newCurrentHealth < 0) {
			newCurrentHealth = 0;
		}

		this.currentHealth.setValue(newCurrentHealth);
	}

	public get weaponName(): string {
		if (this.weapon) {
			return this.weapon.name;
		}

		return "Mãos";
	}

	public get weaponDamage(): number {
		if (this.weapon) {
			return this.weapon.calculateBaleDamage;
		}

		return 0;
	}

	public get totalMobility(): number {
		let totalMobility = 0;

		if (this.weapon) {
			totalMobility += this.weapon.mobility;
		}

		return totalMobility;
	}
}
