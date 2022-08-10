import { Octokit } from 'octokit';

export const getLatestRepos = async (username: string) => {
  try {
    const octokit = new Octokit({ auth: process.env.GITHUB_AUTH_TOKEN });

    // https://docs.github.com/en/rest/repos/repos#list-repositories-for-a-user
    return await octokit
      .request(`GET /users/${username}/repos`, {
        sort: 'updated',
        direction: 'desc',
        per_page: 6,
      })
      .then((res) => res.data);
  } catch (err) {
    console.log(err);
  }
};
