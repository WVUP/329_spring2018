
const baseUrl = "https://api.twitch.tv/helix/";
const ClientId = "y6kouq97fzl0cu1043kkqc9yylgtfv";

const header = {
    method: 'Get',
    headers: new Headers({
        "Client-ID": ClientId
    })
};

async function CallApi(url){
    let data;

    return fetch(url, header)
    .then(res => res.json())
    .then(response => data = response.data)
    .then(() => data);
}

export function GetTopGames(){
    return CallApi(baseUrl + "games/top");
}

export function GetTopSteamers(){
  return CallApi(baseUrl + "streams");
}

export function GetUser(userId){
  console.log(userId);
  return CallApi(baseUrl + `users?id=${userId}`);
}
