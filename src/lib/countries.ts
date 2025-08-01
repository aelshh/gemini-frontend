import { Country } from "../../types";

export const fetchCountries = async (): Promise<Country[]> => {
  try {
    const reponse = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca2,idd"
    );
    const data = await reponse.json();

    return (
      data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .filter((country: any) => country.idd?.root)
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        .map((country: any) => ({
          name: country.name.common,
          code: country.cca2,
          dialCode: country.idd.root + (country.idd.suffixes?.[0] || ""),
        }))
        .sort((a: Country, b: Country) => a.name.localeCompare(b.name))
    );
  } catch (error) {
    console.error("Failed to fetch countries: ", error);
    return [];
  }
};
