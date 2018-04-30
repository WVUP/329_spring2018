const baseUrl = "https://api.twitch.tv/kraken/";
const ClientId = "aswvsgvoi2cppvyconfiuf0pumt0nq";

const header = {
    method: 'Get',
    headers: new Headers({
        "Client-Id": ClientId
    })
};

async function CallApi(url){
    let data;
    if(url.includes("games"))
    {
        console.log(url);
        console.log(header);
        return fetch(url, header)
        .then(res => res.json()) 
        .then(response => data = response.top)
        .then(() => data);
    }
    else
    {
        console.log(url);
        console.log(header);
        return fetch(url, header)
        .then(res => res.json()) 
        .then(response => data = response)
        .then(() => data);
    }
   
    
}

export function GetTopGames(){
    return CallApi(baseUrl + "games/top/?limit=20");
}


export function GetUser(userId){
  console.log(userId);
  return CallApi(baseUrl + `users/${userId}`);
}

export function GetFollowers(userId)
{
    return CallApi(baseUrl + `users/${userId}/follows/channels`);
}