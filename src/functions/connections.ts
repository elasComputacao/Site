import { Octokit } from "@octokit/rest";

export async function getUsersFromGitHub() {
    const octokit = new Octokit(
        {
          auth: process.env.REACT_APP_GITHUB_TOKEN,
          baseUrl: 'https://api.github.com',
        }
      );
  
      return(octokit.orgs.listMembers({
        org: "elasComputacao",
        per_page: 100,
        type: "",
      }));
}   