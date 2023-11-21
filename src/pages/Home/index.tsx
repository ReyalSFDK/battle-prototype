import * as React from "react";
import { observer, useLocalObservable } from "mobx-react-lite";
import { Box, Center, Text, Button } from "@chakra-ui/react";
import { BattlePlayerStore, BattleStore } from "../../stores";
import { Weapon, Hunter } from "../../models";
import { AttributeShelf } from "../../shelves";

export const Home: React.FC = observer(() => {
	const battleStore = useLocalObservable(
		() => new BattleStore(
			new BattlePlayerStore(
				new Hunter("Dean", 100, 100, new AttributeShelf(100), new AttributeShelf(100), new Weapon("Conjugadora do Caos", 2, [5, 35], 5), null, null, null),
			),
			new BattlePlayerStore(
				new Hunter("Sam", 100, 100, new AttributeShelf(100), new AttributeShelf(100), new Weapon("Criador de Fendas", 2, [15, 20], 15), null, null, null),
			),
		),
	);

	const handleAttack = () => {
		battleStore.nextTurn();
		setCurrentIndex(battleStore.battleTurns.length -1);
	}

	const [currentIndex, setCurrentIndex] = React.useState(0);

	const handlePrevClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex - 1 + battleStore.battleTurns.length) % battleStore.battleTurns.length);
	};

	const handleNextClick = () => {
		setCurrentIndex((prevIndex) => (prevIndex + 1) % battleStore.battleTurns.length);
	};

	const isPrevDisabled = currentIndex === 0;
	const isNextDisabled = currentIndex === battleStore.battleTurns.length - 1;

	return (
		<Center height="100vh">
			<Box textAlign="center">
				<Text fontSize="xl">{battleStore.player1.name}: [{battleStore.player1.currentHealth.value}/{battleStore.player1.entity.totalHealth}]</Text>
				<Text fontSize="xl">{battleStore.player2.name}: [{battleStore.player2.currentHealth.value}/{battleStore.player2.entity.totalHealth}]</Text>
				{battleStore.hasBothAlive && (
					<Text fontSize="xl">Próxima rodada: {battleStore.battleTurns.length}</Text>
				)}
				<Button onClick={handleAttack} isDisabled={!battleStore.hasBothAlive} >Brigar</Button>
				{battleStore.battleTurns.length > 0 && (
					<Box animation="ease">
						<Text fontSize="2xl">Rodada {battleStore.battleTurns[currentIndex].turn}</Text>
						<Text fontSize="xl" mb="4">
							{battleStore.battleTurns[currentIndex].battleLog.map((turn) => (
								<Text fontSize="md" key={turn}>
									{turn}
								</Text>
							))}
						</Text>
						<Button onClick={handlePrevClick} mr="2" isDisabled={isPrevDisabled}>
							Voltar
						</Button>
						<Button onClick={handleNextClick} isDisabled={isNextDisabled}>Avançar</Button>
					</Box>
				)}
			</Box>
		</Center>
	)
});
