import { ContainerRoute } from "./containerRoutes.types";

export default function getContainerRoutes(
  routes: ContainerRoute[]
): ContainerRoute[] {
  routes.forEach((item, index) => {
    const id = `${index + 1}-`;
    const { children } = item;

    if (children) {
      children.forEach((child, childIndex) => {
        if (children && children[childIndex]) {
          children[childIndex] = { ...child, id: `${id}${childIndex}` };
        }
      });
    }
    routes[index] = { ...item, id, ...children };
  });

  return routes;
}
