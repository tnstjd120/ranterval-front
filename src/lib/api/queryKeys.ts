export const userQueryKeys = {
  getUser: (userId: number) => ['user', userId],
  putUser: (userId: number) => ['user', userId],
  delUser: (userId: number) => ['user', userId],
  patchProfileImage: (userId: number) => ['user', userId],
} as const;
