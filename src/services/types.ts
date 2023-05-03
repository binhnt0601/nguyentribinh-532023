type Option = {
    value: number;
    label: string;
};
    

export interface Movie {
    Title: string;
    Year: string;
    Plot: string;
    Poster: string;
    Runtime: string;
    Genre: string;
    Director: string;
}

export interface ListResponse {
    count?: number;
    next?: string;
    previous?:string;
    results: Array<Movie>;
}

export interface GetListPayload {
	limit?: number;
}
