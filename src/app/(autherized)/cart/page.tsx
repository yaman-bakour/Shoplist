"use client";
import { useRouter } from "next/navigation";
import { useGlobalContext } from "~/components/AppSidebar";
import { Button } from "~/components/ui/Button";

export default function Page() {
  const CartContext = useGlobalContext();
  const router = useRouter();
  return (
    <div className="h-screen  w-full overflow-x-scroll bg-gray-200 p-6">
      {CartContext?.cart.map((item) => (
        <div
          key={item.productId}
          className="mb-4 flex justify-between rounded-xl border border-solid border-black p-4"
        >
          <span>{item.name}</span>
          <span>{(item.priceInCents / 100) * item.quantity} $</span>
          <span>
            <Button
              className="mr-3 h-8 bg-red-500 px-2 hover:bg-red-600"
              onClick={() =>
                // @ts-ignore
                CartContext.setCart((prev) => {
                  const res = prev
                    .map((filtered) => {
                      if (filtered.productId === item.productId) {
                        if (filtered.quantity - 1 !== 0)
                          return {
                            ...filtered,
                            quantity: filtered.quantity - 1,
                          };
                      } else return filtered;
                    })
                    .filter((filtered) => filtered !== undefined);
                  return res;
                })
              }
            >
              -
            </Button>
            {item.quantity}
            <Button
              className="ml-3 bg-green-500 px-2 hover:bg-green-600"
              onClick={() =>
                CartContext.setCart((prev) =>
                  prev.map((filtered) => {
                    if (filtered.productId === item.productId) {
                      return { ...filtered, quantity: filtered.quantity + 1 };
                    } else return filtered;
                  }),
                )
              }
            >
              +
            </Button>
          </span>
        </div>
      ))}
      <div className="flex justify-between border-t border-black pt-4">
        <div>
          Total :{" "}
          {(CartContext?.cart
            .map((item) => {
              return item.priceInCents * item.quantity;
            })
            .reduce((total, value) => {
              return total + value;
            }, 0) ?? 0) / 100}{" "}
          $
        </div>
        <Button
          className="bg-green-500 hover:bg-green-600"
          onClick={() => router.push("/shipping")}
        >
          Go To Checkout
        </Button>
      </div>
    </div>
  );
}
