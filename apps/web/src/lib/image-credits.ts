/**
 * Real, appropriately-licensed photography sourced from Wikimedia Commons, used as
 * placeholder editorial imagery until Unda has its own photography per
 * unda-design-os/brand-expression/manual/03-photography-direction.md. Every entry is
 * CC-licensed and requires attribution — keep this file in sync with what's actually used.
 */
export const IMAGE_CREDITS = {
  heroOfficeBuilding: {
    src: "/photography/hero-office-building.jpg",
    alt: "Modern glass office building with curved facade",
    credit: "Dale Cruse",
    source:
      "https://commons.wikimedia.org/wiki/File:Cloudflare_and_EY_Office_Complex_%E2%80%93_Modern_Architecture_in_Alc%C3%A2ntara,_Lisbon_(54708346011).jpg",
    license: "CC BY 4.0",
  },
  techDataCenter: {
    src: "/photography/tech-data-center.jpg",
    alt: "Server racks in a data center",
    credit: "BalticServers.com",
    source: "https://commons.wikimedia.org/wiki/File:BalticServers_data_center.jpg",
    license: "CC BY-SA 3.0",
  },
  travelAirport: {
    src: "/photography/travel-airport.jpg",
    alt: "Airport terminal hangar interior",
    credit: "Wikimedia Commons contributor",
    source:
      "https://commons.wikimedia.org/wiki/File:Mexico_City_International_Airport_-_Hangar_Terminal_2.jpg",
    license: "CC BY-SA 4.0",
  },
} as const;
