import { Octokit } from "@octokit/rest";
import GITHUBTOKEN from "../GITHUB-TOKEN";

export async function getUsersFromGitHub() {
    const octokit = new Octokit(
        {
          auth: GITHUBTOKEN,
          baseUrl: 'https://api.github.com',
        }
      );
  
      return(octokit.orgs.listMembers({
        org: "elasComputacao",
        per_page: 100,
        type: "",
      }));
}   