import { request } from "../lib/axios";
import { HabitDuration } from "../types";

export const loginRequest = async (login: string, password: string) => {
  return request({
    url: "/auth/login",
    method: "POST",
    data: {
      username: login,
      password: password,
    },
  });
};

export const registerRequest = async (
  email: string,
  username: string,
  password: string
) => {
  return request({
    url: "/auth/register",
    method: "POST",
    data: {
      email: email,
      username: username,
      password: password,
    },
  });
};

export const getHabits = async () => {
  return request({
    url: "/habits",
    method: "GET",
  });
};

export const getHabitById = async (id: string) => {
  return request({
    url: `/habits/${id}`,
    method: "GET",
  });
};

export const initializeUserState = async () => {
  return request({
    url: "/user",
    method: "GET",
  });
};

export const initializeCommitment = async (data: {
  habit_id: string;
  intensity: string;
  duration: HabitDuration;
  alarm_time: string;
}) => {
  const { habit_id, intensity, duration, alarm_time } = data;
  return request({
    url: "/user/commitments/initialize",
    method: "POST",
    data: {
      habit_id,
      intensity,
      duration,
      alarm_time,
    },
  });
};

export const getCommitments = async () => {
  return request({
    url: "/user/commitments",
    method: "GET",
  });
};

export const getGroups = async () => {
  return request({
    url: "/user/group-chats",
    method: "GET",
  });
};
