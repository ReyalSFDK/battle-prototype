import React, { useState } from 'react';
import {
  Box,
  Select,
  Button,
  Text,
  Container,
  Heading,
  VStack,
  SimpleGrid,
  Divider,
  Badge,
} from "@chakra-ui/react";

import { modernAttackItems, modernDefenseItems, DefenseItem, AttackItem } from './itemData';

interface Character {
  name: string;
  attackItem: AttackItem | null;
  defenseItem: DefenseItem | null;
}

const randomDamageWithinRange = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const calculateAttackSuccess = (agilityModifier: number, accuracy: number) => {
  const randomValue = Math.random(); // Valor aleatório entre 0 e 1
  const chanceOfSuccess = 0.5 + agilityModifier + accuracy; // 0.5 é uma probabilidade base
  return randomValue <= chanceOfSuccess;
};

const calculateCritSuccess = (critChance: number) => {
  const randomValue = Math.random(); // Valor aleatório entre 0 e 1
  return randomValue <= critChance / 100; // Convertendo critChance para uma probabilidade decimal
};

const calculateDamage = (selectedAttackItem: AttackItem, selectedDefenseItem: DefenseItem) => {
  const slashingDamage = randomDamageWithinRange(selectedAttackItem.slashingDamage[0], selectedAttackItem.slashingDamage[1]);
  const impactDamage = randomDamageWithinRange(selectedAttackItem.impactDamage[0], selectedAttackItem.impactDamage[1]);
  const piercingDamage = randomDamageWithinRange(selectedAttackItem.piercingDamage[0], selectedAttackItem.piercingDamage[1]);

  const slashingEffectiveDamage = slashingDamage - selectedDefenseItem.slashingDefense;
  const impactEffectiveDamage = impactDamage - selectedDefenseItem.impactDefense;
  const piercingEffectiveDamage = piercingDamage - selectedDefenseItem.piercingDefense;

  const agilityModifier = (selectedAttackItem.weight - selectedDefenseItem.weight) / 100;
  const attackSuccessful = calculateAttackSuccess(agilityModifier, selectedAttackItem.accuracy);
  const critSuccessful = calculateCritSuccess(selectedAttackItem.critChance);

  const totalSlashingDamage = critSuccessful ? slashingEffectiveDamage * 2 : slashingEffectiveDamage;
  const totalImpactDamage = critSuccessful ? impactEffectiveDamage * 2 : impactEffectiveDamage;
  const totalPiercingDamage = critSuccessful ? piercingEffectiveDamage * 2 : piercingEffectiveDamage;

  return {
    totalDamage: totalSlashingDamage + totalImpactDamage + totalPiercingDamage,
    critSuccessful,
    slashingEffectiveDamage,
    impactEffectiveDamage,
    piercingEffectiveDamage,
    agility: agilityModifier,
    attackSuccessful,
  };
};

const DamageSystem: React.FC = () => {
  const [result, setResult] = useState<{
    totalDamage: number | null;
    critSuccessful: boolean;
    slashingEffectiveDamage: number;
    impactEffectiveDamage: number;
    piercingEffectiveDamage: number;
    agility: number;
    attackSuccessful: boolean;
    damageResult2: {
      totalDamage: number;
      critSuccessful: boolean;
      slashingEffectiveDamage: number;
      impactEffectiveDamage: number;
      piercingEffectiveDamage: number;
      agility: number;
      attackSuccessful: boolean;
    } | null;
  } | null>(null);

  const [character1, setCharacter1] = useState<Character>({
    name: "Jane",
    attackItem: null,
    defenseItem: null,
  });
  const [character2, setCharacter2] = useState<Character>({
    name: "John",
    attackItem: null,
    defenseItem: null,
  });

  const calculateTotalDamage = () => {
    if (character1 && character2) {
      const damageResult1 = calculateDamage(character1.attackItem!, character2.defenseItem!);
      const damageResult2 = character2
          ? calculateDamage(character2.attackItem!, character1.defenseItem!)
          : null;

      setResult({
        totalDamage: damageResult1.totalDamage,
        critSuccessful: damageResult1.critSuccessful,
        slashingEffectiveDamage: damageResult1.slashingEffectiveDamage,
        impactEffectiveDamage: damageResult1.impactEffectiveDamage,
        piercingEffectiveDamage: damageResult1.piercingEffectiveDamage,
        agility: damageResult1.agility,
        attackSuccessful: damageResult1.attackSuccessful,
        damageResult2,
      });
    }
  };

  return (
      <Container centerContent>
        <Heading as="h2" size="lg" mb={4}>
          Damage System
        </Heading>

        <SimpleGrid columns={2} spacing={4} width="100%">
          <Box>
            <VStack spacing={4} alignItems="flex-start">
              <Heading as="h3" size="md">
                Character 1
              </Heading>
              <Select
                  value={character1 ? character1.attackItem?.name : ''}
                  onChange={(e) => {
                    const selected = modernAttackItems.find((item) => item.name === e.target.value);
                    setCharacter1((prevCharacter) => ({
                      ...prevCharacter,
                      attackItem: selected || null,
                    }));
                  }}
                  width="100%"
              >
                <option value="">Select Attack Item</option>
                {modernAttackItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                ))}
              </Select>
              <Select
                  value={character1 ? character1.defenseItem?.name : ''}
                  onChange={(e) => {
                    const selected = modernDefenseItems.find((item) => item.name === e.target.value);
                    setCharacter1((prevCharacter) => ({
                      ...prevCharacter,
                      defenseItem: selected || null,
                    }));
                  }}
                  width="100%"
              >
                <option value="">Select Defense Item</option>
                {modernDefenseItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                ))}
              </Select>
            </VStack>
          </Box>

          <Box>
            <VStack spacing={4} alignItems="flex-start">
              <Heading as="h3" size="md">
                Character 2
              </Heading>
              <Select
                  value={character2 ? character2.attackItem?.name : ''}
                  onChange={(e) => {
                    const selected = modernAttackItems.find((item) => item.name === e.target.value);
                    setCharacter2((prevCharacter) => ({
                      ...prevCharacter,
                      attackItem: selected || null,
                    }));
                  }}
                  width="100%"
              >
                <option value="">Select Attack Item</option>
                {modernAttackItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                ))}
              </Select>
              <Select
                  value={character2 ? character2.defenseItem?.name : ''}
                  onChange={(e) => {
                    const selected = modernDefenseItems.find((item) => item.name === e.target.value);
                    setCharacter2((prevCharacter) => ({
                      ...prevCharacter,
                      defenseItem: selected || null,
                    }));
                  }}
                  width="100%"
              >
                <option value="">Select Defense Item</option>
                {modernDefenseItems.map((item) => (
                    <option key={item.name} value={item.name}>
                      {item.name}
                    </option>
                ))}
              </Select>
            </VStack>
          </Box>
        </SimpleGrid>

        <Button colorScheme="teal" onClick={calculateTotalDamage}>
          Calculate Damage
        </Button>

        {result && (
            <VStack mt={4} alignItems="flex-start">
              <Divider />
              <Heading as="h3" size="md">
                Battle Log
              </Heading>
              <Text>
                <strong>Character 1</strong> - Total Damage: {result.totalDamage}{" "}
                {result.attackSuccessful ? (
                    <Badge colorScheme="green">Successful Attack</Badge>
                ) : (
                    <Badge colorScheme="red">Failed Attack</Badge>
                )}
                {result.critSuccessful && (
                    <Badge colorScheme="purple">Critical Hit</Badge>
                )}
              </Text>
              {result.damageResult2 && (
                  <Text>
                    <strong>Character 2</strong> - Total Damage: {result.damageResult2.totalDamage}{" "}
                    {result.damageResult2.attackSuccessful ? (
                        <Badge colorScheme="green">Successful Attack</Badge>
                    ) : (
                        <Badge colorScheme="red">Failed Attack</Badge>
                    )}
                    {result.damageResult2.critSuccessful && (
                        <Badge colorScheme="purple">Critical Hit</Badge>
                    )}
                  </Text>
              )}
            </VStack>
        )}
      </Container>
  );
};

export default DamageSystem;
