import { Button, SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";
import GameCardContainer from "./GameCardContainer";

import { GameQuery } from "../App";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";


interface Props {
    gameQuery: GameQuery

}

const GameGrid = ({gameQuery}: Props) => {
  const { data, error, isLoading , isFetchingNextPage, fetchNextPage, hasNextPage} = useGames(gameQuery);
  //We need out useStates to help us render update our UI with out games and others

  const skeleton = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,22,23,24,25,26,27,28,29,30
  ];



    const fetchedGameCount =  data?.pages.reduce((total,page) => total + page.results.length,0) || 0;

  return (
    <>
      {/* Disp[lay our data ul li grid table usally map it with unique key ] */}
      {/* 1 = 4px */}
      <InfiniteScroll
  dataLength={fetchedGameCount} //This is important field to render the next data
  next={() => fetchNextPage()}
  hasMore={hasNextPage!}
  loader={<h4>Loading...</h4>}
  endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  
>
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

{data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
</InfiniteScroll>
      {hasNextPage && <Button onClick={()=> fetchNextPage()}>{isFetchingNextPage ? 'Loading...' : 'Load More'}</Button>}
    </>
  );
};

export default GameGrid;
