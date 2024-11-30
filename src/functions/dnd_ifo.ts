import { DnD_INFO } from "../Class/DnD_API"

const private_api = new DnD_INFO()
export function class_ifo(name: string) {
   const response = private_api.getClass(name)
   return response
}
export function classes_list() {
   const response = private_api.getClasses()
   return response
}