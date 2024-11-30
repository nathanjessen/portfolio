import { Octokit } from 'octokit';
import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

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
      .then((res: RestEndpointMethodTypes['repos']['listForUser']['response']) => res.data);
  } catch (err) {
    console.log(err);
  }
};
