import { makeAutoObservable } from "mobx";

export class AttributeShelf<T> {
	public value: T;

	constructor(value: T) {
		this.value = value;

		makeAutoObservable(this);
	}

	public setValue = (value: T) => {
		this.value = value;
	}
}
