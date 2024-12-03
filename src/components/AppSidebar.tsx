"use client";
import * as React from "react";
import {
  ChevronRight,
  ChevronsUpDown,
  LogOut,
  Ship,
  ShoppingCart,
  UserRound,
  House,
  Logs,
} from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/Avatar";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "~/components/ui/Collapsible";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/DropdownMenu";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
  SidebarTrigger,
} from "~/components/ui/Sidebar";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
interface CartItem {
  productId: string;
  name: string;
  quantity: number;
  priceInCents: number;
}

export const CartContext = React.createContext<{
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
} | null>(null);

export const GlobalContext = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = React.useState<CartItem[]>([]);
  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useGlobalContext = () => React.useContext(CartContext);

export default function AppSidebar() {
  const Context = useGlobalContext();
  const { data: session } = useSession();
  const data = {
    user: {
      name: session?.user.name ?? "",
      email: session?.user.email ?? "",
      avatar: session?.user.image ?? "",
    },
    Admin:
      session?.user.role === "Admin"
        ? [
            {
              title: "Admin",
              icon: UserRound,
              url: "#",
              isActive: true,
              items: [
                {
                  title: "Add Products",
                  url: "/admin/products/new",
                },
                {
                  title: "Products",
                  url: "/admin/products",
                },
                {
                  title: "Orders",
                  url: "/admin/orders",
                },
                {
                  title: "Users",
                  url: "/admin/users",
                },
              ],
            },
          ]
        : [],
    User: [
      {
        icon: House,
        title: "Add Address",
        url: "/address/new",
      },
      {
        icon: ShoppingCart,
        title: "Cart",
        url: "/cart",
      },
      {
        icon: Logs,
        title: "products",
        url: "/products",
      },
      {
        icon: Ship,
        title: "My Orders",
        url: "/orders",
      },
    ],
  };

  const router = useRouter();
  const pathname = usePathname();

  return (
    <Sidebar collapsible="icon">
      <SidebarContent>
        <SidebarTrigger className="absolute -right-7 top-2" />
        <SidebarGroup>
          <SidebarMenu>
            {data.Admin.map((item) => (
              <Collapsible
                key={item.title}
                asChild
                defaultOpen={item.isActive}
                className="group/collapsible"
              >
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton tooltip={item.title}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                      <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <SidebarMenuSub>
                      {item.items?.map((subItem) => (
                        <SidebarMenuSubItem key={subItem.title}>
                          <SidebarMenuSubButton asChild>
                            <Link href={subItem.url}>
                              <span>{subItem.title}</span>
                            </Link>
                          </SidebarMenuSubButton>
                        </SidebarMenuSubItem>
                      ))}
                    </SidebarMenuSub>
                  </CollapsibleContent>
                </SidebarMenuItem>
              </Collapsible>
            ))}
            {data.User.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenu>
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      className={`${pathname === item.url ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-gray-200"}`}
                      disabled={pathname === item.url}
                    >
                      <Link
                        href={item.url}
                        className={`${pathname === item.url ? "bg-gray-200 hover:bg-gray-200" : "hover:bg-gray-200"}`}
                      >
                        <item.icon />
                        {item.title}
                        {item.title === "Cart" ? (
                          <div className="min-w-6 rounded-full bg-gray-300 text-center">
                            {Context?.cart.length}
                          </div>
                        ) : (
                          <></>
                        )}
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                </SidebarMenu>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton
                  size="lg"
                  className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                  <Avatar className="h-8 w-8 rounded-lg">
                    <AvatarImage src={data.user.avatar} alt={data.user.name} />
                    <AvatarFallback className="rounded-lg">
                      {session?.user.name?.split(" ").map((n) => {
                        return n.charAt(0).toUpperCase();
                      })}
                    </AvatarFallback>
                  </Avatar>
                  <div className="grid flex-1 text-left text-sm leading-tight">
                    <span className="truncate font-semibold">
                      {data.user.name}
                    </span>
                    <span className="truncate text-xs">{data.user.email}</span>
                  </div>
                  <ChevronsUpDown className="ml-auto size-4" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                className="w-[--radix-dropdown-menu-trigger-width] min-w-56 rounded-lg"
                side="bottom"
                align="end"
                sideOffset={4}
              >
                <DropdownMenuLabel className="p-0 font-normal">
                  <div
                    className="flex items-center gap-2 px-1 py-1.5 text-left text-sm hover:bg-gray-200"
                    onClick={() => router.push("/profile")}
                  >
                    <Avatar className="h-8 w-8 rounded-lg">
                      <AvatarImage
                        src={data.user.avatar}
                        alt={data.user.name}
                      />
                      <AvatarFallback className="rounded-lg">
                        {session?.user.name?.split(" ").map((n) => {
                          return n.charAt(0).toUpperCase();
                        })}
                      </AvatarFallback>
                    </Avatar>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                      <span className="truncate font-semibold">
                        {data.user.name}
                      </span>
                      <span className="truncate text-xs">
                        {data.user.email}
                      </span>
                    </div>
                  </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  className="hover:bg-gray-200"
                  onClick={() => signOut()}
                >
                  <LogOut />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
