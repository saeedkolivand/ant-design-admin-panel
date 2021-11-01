import HttpService from "../../../../app/apiService";

export const getLbsCategoriesService = (data: string[]) => {
  const ids = data.map((item) => `ids=${item}&`);
  return HttpService.get(
    `/locations/categories?${ids.toString().replaceAll(",", "")}`
  );
};
