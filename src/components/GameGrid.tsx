import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";


interface Props {
    gameQuery: GameQuery

}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading } = useGames(gameQuery);
  //We need out useStates to help us render update our UI with out games and others

  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      {/* Disp[lay our data ul li grid table usally map it with unique key ] */}
      {/* 1 = 4px */}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding={"20px"}
      >
        {isLoading &&
          skeleton.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton  />
            </GameCardContainer>
          ))}
        {data.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
      {error && <Text color={"red"}>{error}</Text>}
    </>
  );
};

export default GameGrid;
