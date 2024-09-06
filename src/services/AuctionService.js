import { $api } from "@/utils/api";

const AUCTION_API_URL = "/auctions";
class AuctionService {
    getAuction() {
        return $api(AUCTION_API_URL, {
            method: "GET",
        });
    }
}

export default new AuctionService();
