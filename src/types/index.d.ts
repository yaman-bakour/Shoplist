import { RouterOutputs } from "~/server/api/root";

export type ProductsType = RouterOutputs["product"]["getAllProducts"];
export type OrdersType = RouterOutputs["order"]["getAllOrders"];
export type UsersType = RouterOutputs["user"]["getAllUsers"];
export type UserInfoType = RouterOutputs["user"]["getUserInfo"];
