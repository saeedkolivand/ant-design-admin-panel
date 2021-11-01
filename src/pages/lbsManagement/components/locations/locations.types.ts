export interface ShowCategoriesTypes {
  description: string;
  id: string;
  imagePath: string;
  parentId: string;
  title: string;
  type: string;
}

export interface LocationModel {
  address?: Address;
  banner?: string[];
  categoriesId?: string[];
  confirmed_by?: string;
  createdDate?: string;
  description?: string;
  id?: string;
  lat?: number;
  lng?: number;
  metaData?: MetaData;
  owner?: Owner;
  parentId?: string;
  propertiesId?: string[];
  publishDate?: number;
  status?: string;
  tagsId?: string[];
  title?: string;
  type?: string;
}

interface Address {
  city?: string;
  country?: string;
  gid?: string;
  route?: string;
  state?: string;
}

export interface Category {
  description?: string;
  id?: string;
  imagePath?: string;
  parentId?: string;
  title?: string;
  type?: string;
}

export interface MetaData {
  workingTo: string;
  workingFrom: string;
  website?: string;
  phoneNumber?: string;
  workingHour?: string;
}

export interface Owner {
  id?: string;
  name?: string;
}

export interface Property {
  iconPath?: string;
  id?: string;
  title?: string;
}

export interface Tag {
  id?: string;
  title?: string;
}
