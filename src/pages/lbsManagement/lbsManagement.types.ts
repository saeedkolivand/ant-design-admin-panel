export interface viewPointTypes {
  lat: number;
  lng: number;
}

export interface LocationsGetResponseModel {
  address: Address;
  banner: string[] | any;
  categoriesId: string[];
  children?: Child[];
  confirmedBy: string;
  createdDate: string;
  description: string;
  id: string;
  lat: number | undefined;
  lng: number | undefined;
  metaData: MetaData;
  owner: Owner;
  parentID: string;
  propertiesID: string[];
  publishDate: number;
  status: "PUBLISHED" | "DRAFT";
  tagsID: string[];
  title: string;
  type: string;
  viewPoint?: { lat: number; lng: number };
}

interface Address {
  city: string;
  country?: string;
  gid?: string;
  route?: string;
  state: string;
}

interface Child {
  address: Address;
  banner: string[];
  categories: Category[];
  children: null[];
  confirmedBy: string;
  createdDate: string;
  description: string;
  id: string;
  lat: number;
  lng: number;
  metaData: MetaData;
  owner: Owner;
  parentID: string;
  properties: Property[];
  propertiesID: string[];
  publishDate: number;
  status: string;
  tags: Tag[];
  title: string;
  type: string;
}

interface Category {
  description: string;
  id: string;
  imagePath: string;
  parentID: string;
  title: string;
  type: string;
}

interface MetaData {
  address: string;
  website: string;
  phoneNumber: string;
  workingFrom: string;
  workingTo: string;
  workingTime?: { workingFrom: string; workingTo: string };
  firstEmail?: string;
}

interface Owner {
  id: string;
  name: string;
}

interface Property {
  iconPath: string;
  id: string;
  title: string;
}

interface Tag {
  id: string;
  title: string;
}

export interface LocationPostResponseModel {
  address: Address;
  banner: string[];
  categoriesId: string[];
  createdDate: string;
  description: string;
  id?: string;
  lat: number | undefined;
  lng: number | undefined;
  website?: string;
  phoneNumber?: string;
  workingFrom?: string;
  workingTo?: string;
  firstEmail?: string;
  owner?: Owner;
  publishDate?: number;
  status: "PUBLISHED" | "DRAFT";
  title: string;
}
