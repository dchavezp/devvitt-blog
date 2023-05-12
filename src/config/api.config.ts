import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
    url: process.env.GHOST_URL as string,
    key: process.env.GHOST_KEY as string,
    version: "v5.0"
});
export default api