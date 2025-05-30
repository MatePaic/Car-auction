﻿using AuctionService.Entities;

namespace AuctionService.UnitTests;

public class UnitTest1
{
    [Fact]
    public void HasReservePrice_ReservePriceGtZero_True() // Method_Scenario_ExpectedResult()
    {
        // arrange
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 10 };

        // act
        var result = auction.HasReservePrice();

        //assert
        Assert.True(result);
    }

    [Fact]
    public void HasReservePrice_ReservePriceIsZero_True() // Method_Scenario_ExpectedResult()
    {
        // arrange
        var auction = new Auction { Id = Guid.NewGuid(), ReservePrice = 0 };

        // act
        var result = auction.HasReservePrice();

        //assert
        Assert.False(result);
    }
}
