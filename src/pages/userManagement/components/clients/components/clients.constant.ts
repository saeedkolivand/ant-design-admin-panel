import { GenderEnum } from "../clients.types";

export const Genders = {
  [GenderEnum.FEMALE]: {
    title: "Female",
    value: GenderEnum.FEMALE,
  },
  [GenderEnum.MALE]: {
    title: "Male",
    value: GenderEnum.MALE,
  },
  [GenderEnum.OTHER]: {
    title: "Other",
    value: GenderEnum.OTHER,
  },
};
