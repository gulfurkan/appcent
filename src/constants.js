export const Constants = {
    apiKey: "70cdb551e1799f30f8f07384107ff80f",
    logo: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg",
    footerLogo: "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg",
    noImage: [
        "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-36-user-female-1252799405af813fe2e29e8b25c44d9a12406c0db697a6b4a25080f5974ddf68.svg",
        "https://www.themoviedb.org/assets/2/v4/glyphicons/basic/glyphicons-basic-4-user-grey-d8fe957375e70239d6abdd549fd7568c89281b2179b5f4470e2e12895792dfa5.svg"
    ]
}

export const calculateRGB = (ratio) => {
    return "rgb(" + (255 - (255 * (ratio / 10))) + "," + 255 * (ratio / 10) + ",0)";
}
export const getMovieList = async (key, page) => {
    const url = "https://api.themoviedb.org/3/movie/" + key + "?api_key=" + Constants.apiKey + "&page=" + page;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const getMovie = async (id) => {
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + Constants.apiKey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const getCrew = async (id) => {
    const url = "https://api.themoviedb.org/3/movie/" + id + "/credits?api_key=" + Constants.apiKey;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}
export const getImage = (w, path) => {
    return "http://image.tmdb.org/t/p/" + w + path;
}

export const isExist = async (key, page) => {
    console.log(await getMovieList(key, page));
    return (await getMovieList(key, page)) != null || (await getMovieList(key, page)) != undefined ? true : false;
}