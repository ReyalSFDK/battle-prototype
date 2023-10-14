import * as React from "react";
import { HunterModel } from "../../models/HunterModel";
import { Container } from "@chakra-ui/react";
import { observer } from "mobx-react-lite";
import { weapons } from "../../mocks/weapons";
import { armors } from "../../mocks/armors";
import { BattleModel } from "../../models/BattleModel";
import { getSnapshot, onSnapshot } from "mobx-state-tree";

import { rootStore } from "../../stores/RootStore";

export const Home = observer(() => {
	// Obtenha um instantâneo do estado atual
	const snapshot = getSnapshot(rootStore);

// Registre uma função para ouvir mudanças no estado
	onSnapshot(rootStore, (newSnapshot) => {
		console.log("Estado MST atualizado:", newSnapshot);
	});

	React.useEffect(
		() => {
			console.log("asas")
			rootStore.addBattle(rootStore.hunters[0], rootStore.hunters[1]);
		},
		[],
	);

	React.useEffect(
		() => {
			rootStore.battles[0].chooseWhoStartAttacking();
		},
		[rootStore],
	);

	return (
		<Container centerContent pt={50}>
		</Container>
	);
});
