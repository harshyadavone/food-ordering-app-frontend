import { useGetMyOrders } from "@/api/OrderApi";
import NoResultFound from "@/components/NoResultFound";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { OrderStatusSkeleton } from "@/skeleton/OrderStatusPageSkeleton";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return <OrderStatusSkeleton />;
  }

  if (!orders || orders.length === 0) {
    return (
      <NoResultFound heading="There are no orders" description="Try to order somthing..." />
    )
  }

  return (
    <div className="space-y-10">
      {orders.map((order) => (
        <div className="space-y-10 bg-gray-50 p-10 rounded-lg dark:bg-gray-950">
          <OrderStatusHeader order={order} />
          <div className="grid gap-10 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-md object-cover h-full w-full"
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
