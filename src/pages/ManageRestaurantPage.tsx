import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/user-profile-form/manage-restaurant-form/ManageRestaurantForm";
import OrderItemCardSkeleton from "@/skeleton/OrderItemCardSkeleton";
import { useState } from "react";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant  } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders, isLoading: isOrdersLoading} = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;
  const [activeTab, setActiveTab] = useState("orders");


  return (
    <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value)}>
      <TabsList>
        <TabsTrigger value="orders">Orders</TabsTrigger>
        <TabsTrigger value="manage-restaurant">Manage Restaurant</TabsTrigger>
      </TabsList>
      <TabsContent
        value="orders"
        className="space-y-5 bg-gray-50 p-10 rounded-lg dark:bg-gray-950"
      >
       <h2 className="text-2xl font-bold">{isOrdersLoading ? "Loading..." : `${orders?.length} active orders`}</h2>
        {isOrdersLoading
          ? Array(5).fill(<OrderItemCardSkeleton />)
          : orders?.map((order) => <OrderItemCard key={order._id} order={order} />)}
      </TabsContent>
      <TabsContent value="manage-restaurant">
      <ManageRestaurantForm
      restaurant={restaurant}
      onSave={isEditing ? updateRestaurant : createRestaurant}
      isLoading={isCreateLoading || isUpdateLoading}
    />
      </TabsContent>
    </Tabs>
    
  );
};

export default ManageRestaurantPage;
