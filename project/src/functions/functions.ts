import { Octokit } from "@octokit/rest";

export function arrayShuffle(array:any[]) {
    const size = array.length;
    
    for (let index = 0; index < array.length; index++) {
        const randomNumber = Math.floor(Math.random() * size);
        const element1 = array[index];
        const element2 = array[randomNumber];
        array[randomNumber] = element1;
        array[index] = element2;
    }
}
