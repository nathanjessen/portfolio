import { Octokit } from 'octokit';
import type { RestEndpointMethodTypes } from '@octokit/plugin-rest-endpoint-methods';

type GitHubRepo = RestEndpointMethodTypes['repos']['listForUser']['response']['data'][0];

// Cache the results for 5 minutes
const CACHE_DURATION = 5 * 60 * 1000;
let cachedRepos: GitHubRepo[] | null = null;
let lastFetchTime: number | null = null;

export const getLatestRepos = async (username: string): Promise<GitHubRepo[]> => {
  try {
    // Return cached data if available and not expired
    if (cachedRepos && lastFetchTime && Date.now() - lastFetchTime < CACHE_DURATION) {
      return cachedRepos;
    }

    const octokit = new Octokit({ 
      auth: process.env.GITHUB_AUTH_TOKEN,
      userAgent: 'nathanjessen-portfolio',
      timeZone: 'America/Chicago',
    });

    // Check rate limit before making request
    const { data: rateLimit } = await octokit.request('GET /rate_limit');
    if (rateLimit.resources.core.remaining === 0) {
      const resetTime = new Date(rateLimit.resources.core.reset * 1000);
      console.warn(`GitHub API rate limit exceeded. Resets at ${resetTime}`);
      // Return cached data if available, even if expired
      if (cachedRepos) return cachedRepos;
      throw new Error('GitHub API rate limit exceeded');
    }

    const response = await octokit.request(`GET /users/${username}/repos`, {
      sort: 'updated',
      direction: 'desc',
      per_page: 6,
      headers: {
        'If-None-Match': '', // Ensure we get fresh data
      },
    });

    // Update cache
    cachedRepos = response.data;
    lastFetchTime = Date.now();

    return response.data;
  } catch (err) {
    console.error('GitHub API Error:', err);
    // Return cached data if available, even if expired
    if (cachedRepos) return cachedRepos;
    // Return empty array instead of undefined
    return [];
  }
};
