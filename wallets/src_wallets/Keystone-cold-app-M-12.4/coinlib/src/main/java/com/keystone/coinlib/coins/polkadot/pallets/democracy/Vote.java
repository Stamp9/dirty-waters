package com.keystone.coinlib.coins.polkadot.pallets.democracy;

import com.keystone.coinlib.coins.polkadot.UOS.Network;
import com.keystone.coinlib.coins.polkadot.pallets.Pallet;
import com.keystone.coinlib.coins.polkadot.scale.ScaleCodecReader;

public class Vote extends Pallet<VoteParameter> {
    public Vote(Network network, int code) {
        super("democracy.vote", network, code);
    }

    @Override
    public VoteParameter read(ScaleCodecReader scr) {
        return new VoteParameter(name, network, code, scr);
    }
}
