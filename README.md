# Sistema de Dano em React

Este é um projeto de exemplo de um sistema de dano em React, que demonstra como o dano é calculado com base nos atributos de armas e defesa dos personagens. O sistema é construído com a biblioteca Chakra UI.

## Atributos das Armas

Neste sistema, as armas são caracterizadas por vários atributos que influenciam no cálculo do dano. Aqui estão os atributos das armas:

### 1. **Nome:**
- O nome da arma.

### 2. **Dano de Corte (Slashing Damage):**
- Faixa de dano cortante que a arma pode causar.
- O dano cortante é eficaz contra alvos desprotegidos.

### 3. **Dano de Impacto (Impact Damage):**
- Faixa de dano de impacto que a arma pode causar.
- O dano de impacto pode afetar a resistência dos alvos.

### 4. **Dano de Perfuração (Piercing Damage):**
- Faixa de dano perfurante que a arma pode causar.
- O dano perfurante pode penetrar na armadura e resistência dos alvos.

### 5. **Peso (Weight):**
- O peso da arma em quilogramas.
- O peso influencia na agilidade do personagem ao usá-la.

### 6. **Chance de Crítico (Crit Chance):**
- A probabilidade de realizar um ataque crítico com a arma.

### 7. **Mobilidade (Mobility):**
- A mobilidade da arma, que afeta a capacidade de um personagem em se mover rapidamente com ela.
- Quanto mais alto, mais ágil o personagem é ao usar a arma.

### 8. **Precisão (Accuracy):**
- A precisão da arma, que influencia na probabilidade de acertar o alvo.

## Cálculo do Dano

O dano é calculado considerando os atributos da arma do Personagem 1 e o item de defesa do Personagem 2. E vice-versa, o dano do Personagem 2 é calculado com base nos atributos de sua arma e no item de defesa do Personagem 1.

O cálculo do dano leva em consideração:

- O dano cortante, impacto e perfuração gerados pela arma.
- A eficácia do dano em relação aos valores de defesa do item de defesa do personagem alvo.
- A agilidade do personagem com base no peso da arma e do item de defesa.
- A chance de ataque bem-sucedido (precisão e mobilidade).

### Ataque Bem-sucedido:

Se o ataque for bem-sucedido, o dano é calculado usando os valores de corte, impacto e perfuração gerados pela arma. Além disso, pode ocorrer um ataque crítico com base na chance de crítico da arma.

### Ataque Falho:

Se o ataque falhar, o dano é reduzido e pode não causar impacto no personagem alvo.

## Executando o Projeto

Certifique-se de ter o Node.js instalado no seu ambiente. Para executar o projeto, siga os passos abaixo:

1. Clone este repositório.

2. No diretório do projeto, execute o seguinte comando para instalar as dependências:
