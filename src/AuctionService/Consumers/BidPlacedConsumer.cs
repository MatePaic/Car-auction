﻿using AuctionService.Data;
using Contracts;
using MassTransit;

namespace AuctionService.Consumers
{
    public class BidPlacedConsumer(AuctionDbContext auctionDbContext) : IConsumer<BidPlaced>
    {
        public async Task Consume(ConsumeContext<BidPlaced> context)
        {
            Console.WriteLine("--> Consuming bid placed");

            var auction = await auctionDbContext.Auctions.FindAsync(context.Message.AuctionId)
                ?? throw new MessageException(typeof(AuctionFinished), "Cannot retrieve this auction");

            if (auction.CurrentHighBid == null 
                || context.Message.BidStatus.Contains("Accepted") 
                && context.Message.Amount > auction.CurrentHighBid)
            {
                auction.CurrentHighBid = context.Message.Amount;
            }

            await auctionDbContext.SaveChangesAsync();
        }
    }
}
