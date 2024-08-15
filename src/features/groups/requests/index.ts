import { request } from "../../../lib/axios";


export const getGroups = async () => {
    return request({
      url: "/user/group-chats",
      method: "GET",
    });
  };
  