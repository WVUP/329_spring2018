
export default function BoxArtParser(boxArtUrl, width, height){
    let tokens = boxArtUrl.split("{width}");
    let newUrl = tokens[0] + width + tokens[1];
    tokens = newUrl.split("{height}");
    newUrl = tokens[0] + height + tokens[1];
    return newUrl;
}