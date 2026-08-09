import { getWebsiteByBusinessId } from "../repositories/prisma-website-repository";

export async function getBusinessWebsite(
  businessId: string,
) {
  return getWebsiteByBusinessId(businessId);
}