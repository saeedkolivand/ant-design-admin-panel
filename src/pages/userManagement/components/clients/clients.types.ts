export interface ClientsTypes {}

export enum GenderEnum {
  FEMALE = "FEMALE",
  MALE = "MALE",
  OTHER = "OTHER",
}

export interface DatyarUserDto {
  createdDate: string;
  createdDateMilli: number;
  credit: number;
  deleted: boolean;
  email: string;
  emailVerifiedAt: string;
  extraInfo: ExtraInfo;
  id?: string;
  lastOrder: string;
  locked: boolean;
  mobile: string;
  mobileVerifiedAt: string;
  roles: string[];
  userStatus: string;
  username: string;
}

export interface ExtraInfo {
  addressList: AddressList[];
  avatar: string;
  avatarImageURL: string;
  birthDay: number;
  birthdate: Date;
  economicCode: number;
  education: string;
  firstName: string;
  fullName: string;
  gender: string;
  lastName: string;
  nationalCode: number;
  tag: string;
  workResume: string;
}

export interface AddressList {
  address: string;
  city: string;
  lat: number;
  lon: number;
  province: string;
}
