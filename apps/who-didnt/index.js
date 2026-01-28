// @bun
var requestInit = {
  headers: {
    accept: "*/*",
    "accept-language": "en-US,en;q=0.9,ha;q=0.8,id;q=0.7",
    "cache-control": "no-cache",
    pragma: "no-cache",
    priority: "u=1, i",
    "sec-ch-prefers-color-scheme": "dark",
    "sec-ch-ua":
      '"Not(A:Brand";v="8", "Chromium";v="144", "Google Chrome";v="144"',
    "sec-ch-ua-full-version-list":
      '"Not(A:Brand";v="8.0.0.0", "Chromium";v="144.0.7559.96", "Google Chrome";v="144.0.7559.96"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-model": '""',
    "sec-ch-ua-platform": '"Linux"',
    "sec-ch-ua-platform-version": '""',
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-asbd-id": "359341",
    "x-csrftoken": "cmuoYh2lvhVpRuQeIQed5fV1px2IhiX1",
    "x-ig-app-id": "936619743392459",
    "x-ig-www-claim": "hmac.AR3fZHISfRmYjxMIuJwpW8KNXfyW2Y8E4saIy5R4LXE03-RC",
    "x-requested-with": "XMLHttpRequest",
    "x-web-session-id": "oeeltn:50ppdb:lbihw3",
  },
  referrer: "https://www.instagram.com/ywow.ai/followers/",
  body: null,
  method: "GET",
  mode: "cors",
  credentials: "include",
};
var followersUrl = new URL(
  "https://www.instagram.com/api/v1/friendships/2912272714/followers",
);
followersUrl.searchParams.set("count", String(25));
followersUrl.searchParams.set("search_surface", "follow_list_page");
var has_more_followers = !0,
  followers = [];
while (has_more_followers) {
  let response = await fetch(followersUrl, requestInit);
  if (response.ok && response.status === 200) {
    let result = await response.json();
    if (((has_more_followers = result.has_more), result.has_more))
      followersUrl.searchParams.set("max_id", result.next_max_id);
    followers = [...followers, ...result.users];
  }
  await new Promise((resolve) => {
    setTimeout(resolve, 1e4);
  });
}
var followingUrl = new URL(
  "https://www.instagram.com/api/v1/friendships/2912272714/following",
);
followingUrl.searchParams.set("count", String(25));
var has_more_following = !0,
  following = [];
while (has_more_following) {
  let response = await fetch(followingUrl, requestInit);
  if (response.ok && response.status === 200) {
    let result = await response.json();
    if (((has_more_following = result.has_more), result.has_more))
      followingUrl.searchParams.set("max_id", result.next_max_id);
    following = [...following, ...result.users];
  }
  await new Promise((resolve) => {
    setTimeout(resolve, 1e4);
  });
}
var notFollowBack = following.filter(
    ({ username: u1 }) => !followers.some(({ username: u2 }) => u1 === u2),
  ),
  mutual = following.filter(({ username: u1 }) =>
    followers.some(({ username: u2 }) => u1 === u2),
  );
console.log(notFollowBack);
console.log(mutual);
