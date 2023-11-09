package com.keystone.coinlib.coins.cosmos.REGEN;

import com.keystone.coinlib.coins.AbsCoin;
import com.keystone.coinlib.coins.cosmos.CosmosDeriver;
import com.keystone.coinlib.interfaces.Coin;
import com.keystone.coinlib.utils.Coins;

public class Regen extends AbsCoin {

    protected Regen(Coin impl) {
        super(impl);
    }

    @Override
    public String coinCode() {
        return Coins.REGEN.coinCode();
    }

    public static class Deriver extends CosmosDeriver {
        public Deriver() {
            prefix = "regen";
        }
    }
}
