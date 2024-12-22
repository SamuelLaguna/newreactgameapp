
interface GameQuery {
    genreId?: number;
    platform?:number;
    sortOrder: string;
    searchText: string
}


interface GameQueryStore{
    gameQuery: GameQuery;
    setSearchText: (searchText:string) => void;
    setGenreId: (genreId:number) => void;
    setPlatformId:(platformId:number) => void
    setSortOrder:(sortOrder:string) => void;
}


create<GameQueryStore>(set => ({
    gameQuery:{},
    setSearchText:{searchText} => set(() => {{gameQuery: {searchText}}}),
    setGenreId: (genreId) => set(store => {{gameQuery: {store.gameQuery,genreId}}}),
    setPlatformId: (platform) => set(store => {{gameQuery: {...store.gameQuery,platformId}}})
}))