export type RestaurantLegalLinks = {
  privacyPolicyUrl: string | null;
  termsAndConditionsUrl: string | null;
};

const EMPTY_LINKS: RestaurantLegalLinks = {
  privacyPolicyUrl: null,
  termsAndConditionsUrl: null,
};

export async function getRestaurantLegalLinks(): Promise<RestaurantLegalLinks> {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
  const restaurantId = "dragonkitchen";

  if (!supabaseUrl || !supabaseKey) return EMPTY_LINKS;

  try {
    const query = new URL("/rest/v1/restaurants", supabaseUrl);
    query.searchParams.set("select", "privacy_policy_url,terms_and_conditions_url");
    query.searchParams.set("id", `eq.${restaurantId}`);
    query.searchParams.set("limit", "1");

    const response = await fetch(query, {
      headers: {
        apikey: supabaseKey,
      },
      next: { revalidate: 3600 },
    });

    if (!response.ok) return EMPTY_LINKS;

    const rows = await response.json() as Array<{
      privacy_policy_url?: string | null;
      terms_and_conditions_url?: string | null;
    }>;
    const restaurant = rows[0];

    return {
      privacyPolicyUrl: restaurant?.privacy_policy_url ?? null,
      termsAndConditionsUrl: restaurant?.terms_and_conditions_url ?? null,
    };
  } catch {
    return EMPTY_LINKS;
  }
}
