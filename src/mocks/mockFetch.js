const gamesArray = [
  {
  internalName: "SIDMEIERSCIVILIZATIONVI",
  title: "Sid Meiers Civilization VI",
  metacriticLink: "sid-meiers-civ"
  },
  {
    internalName: "2SIDMEIERSCIVILIZATIONVI",
    title: "2 Sid Meiers Civilization VI",
    metacriticLink: "2-sid-meiers-civ"
    }
]

export default async function mockFetch(url) {
  if(url.startsWith('https://www.cheapshark.com/api/')) {
    return {
      ok: true,
      status: 200,
      json: async () => gamesArray,
    };
  }


  throw new Error(`Unhandled request: ${url}`);        
}