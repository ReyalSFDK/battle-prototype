import { makeAutoObservable } from "mobx";
import { Entity } from "../../models";
import { AttributeShelf } from "../../shelves";

export class BattlePlayerStore {
	public currentHealth: AttributeShelf<number>;
	public currentEnergy: AttributeShelf<number>;

	constructor(
		public entity: Entity,
		currentHealth?: number,
		currentEnergy?: number,
	) {
		this.currentHealth = new AttributeShelf(currentHealth || entity.totalHealth);
		this.currentEnergy = new AttributeShelf(currentEnergy || entity.totalEnergy);

		makeAutoObservable(this);
	}

	public calculateTotalMobility = () => {
		let totalMobility = 0;

		if (this.entity.weapon) {
			totalMobility += this.entity.weapon.mobility;
		}

		return totalMobility;
	}

	public calculateDamage = () => {
		let damage = 0;

		if (this.entity.weapon) {
			damage = this.entity.weapon.calculateBaleDamage;
		}

		return damage;
	}

	public takeDamage = (damage: number) => {
		let newCurrentHealth = this.currentHealth.value - damage;

		if (newCurrentHealth < 0) {
			newCurrentHealth = 0;
		}

		this.currentHealth.setValue(newCurrentHealth);
	}

	public get name(): string {
		return this.entity.name;
	}

	public get hasAlive(): boolean {
		return this.currentHealth.value > 0;
	}
}
