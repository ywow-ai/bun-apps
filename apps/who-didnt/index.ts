// type User = {
//   strong_id__: string;
//   pk: string;
//   pk_id: string;
//   id: string;
//   full_name: string;
//   fbid_v2: string;
//   third_party_downloads_enabled: number;
//   profile_pic_id: string;
//   profile_pic_url: string;
//   is_verified: boolean;
//   username: string;
//   is_private: boolean;
//   has_anonymous_profile_picture: boolean;
//   latest_reel_media: number;
// };

// type ResponseX = {
//   users: User[];
//   big_list: boolean;
//   page_size: number;
//   next_max_id: string;
//   has_more: boolean;
//   should_limit_list_of_followers: boolean;
//   use_clickable_see_more: boolean;
//   show_spam_follow_request_tab: boolean;
//   follow_ranking_token: string;
//   status: string;
// };

// const id = 2912272714;
// const requestInit: RequestInit = {};
// const throttle = 10;
// const perPage = 25;

// const followersUrl = new URL(
//   "https://www.instagram.com/api/v1/friendships/{id}/followers",
// );
// followersUrl.searchParams.set("count", String(perPage));
// followersUrl.searchParams.set("search_surface", "follow_list_page");
// let has_more_followers = true;
// let followers: User[] = [];
// while (has_more_followers) {
//   const response = await fetch(followersUrl, requestInit);
//   if (response.ok && response.status === 200) {
//     const result = (await response.json()) as ResponseX;
//     has_more_followers = result.has_more;
//     if (result.has_more) {
//       followersUrl.searchParams.set("max_id", result.next_max_id);
//     }
//     followers = [...followers, ...result.users];
//   }
//   await new Promise((resolve) => {
//     setTimeout(resolve, throttle * 1000);
//   });
// }

// const followingUrl = new URL(
//   "https://www.instagram.com/api/v1/friendships/{id}/following",
// );
// followingUrl.searchParams.set("count", String(perPage));
// let has_more_following = true;
// let following: User[] = [];
// while (has_more_following) {
//   const response = await fetch(followingUrl, requestInit);
//   if (response.ok && response.status === 200) {
//     const result = (await response.json()) as ResponseX;
//     has_more_following = result.has_more;
//     if (result.has_more) {
//       followingUrl.searchParams.set("max_id", result.next_max_id);
//     }
//     following = [...following, ...result.users];
//   }
//   await new Promise((resolve) => {
//     setTimeout(resolve, throttle * 1000);
//   });
// }

// const notFollowBack = following.filter(
//   ({ username: u1 }) => !followers.some(({ username: u2 }) => u1 === u2),
// );

// const mutual = following.filter(({ username: u1 }) =>
//   followers.some(({ username: u2 }) => u1 === u2),
// );

// console.log(notFollowBack);
// console.log(mutual);

// fetch("https://www.instagram.com/graphql/query", {
//   headers: {
//     "content-type": "application/x-www-form-urlencoded",
//     "x-csrftoken": "cmuoYh2lvhVpRuQeIQed5fV1px2IhiX1",
//     "x-ig-app-id": "936619743392459",
//   },
//   body: "doc_id=9846833695423773&variables=%7B%22target_user_id%22%3A%2234467668622%22%2C%22container_module%22%3A%22profile%22%7D",
//   method: "POST",
//   credentials: "include",
// });

const who = {
  notFollowBack: [],
  mutual: [],
  async execute() {
    console.log(this.mutual.push(1), this.mutual);
  },
};

console.log(await who.execute());
