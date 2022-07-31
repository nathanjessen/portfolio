import { UserProps } from "../constants/UserProps";

export const getLatestRepos = async (data: UserProps) => {
  try {
    const username = data.githubUsername;
    const token = `token ${process.env.GITHUB_AUTH_TOKEN}`;
    let options = {};

    if (token) {
      options = {
        headers: {
          Authorization: `token ${token}`,
        }
      };
    }

    const response = await fetch(
      `https://api.github.com/search/repositories?q=user:${username}+sort:author-date-asc`
    ).then(res => res.json());
    return response.items.splice(0, 6);
  } catch (err) {
    console.log(err);
  }
};
