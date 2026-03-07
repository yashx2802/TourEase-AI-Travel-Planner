// Stripe temporarily disabled

export const createProduct = async (
  name: string,
  description: string,
  images: string[],
  price: number,
  tripId: string
) => {
  console.log("Stripe disabled for now");

  return {
    url: "#",
  };
};