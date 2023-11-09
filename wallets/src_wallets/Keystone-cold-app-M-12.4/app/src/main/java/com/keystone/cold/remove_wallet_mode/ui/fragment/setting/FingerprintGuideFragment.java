/*
 * Copyright (c) 2021 Keystone
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * in the file COPYING.  If not, see <http://www.gnu.org/licenses/>.
 */

package com.keystone.cold.remove_wallet_mode.ui.fragment.setting;

import android.os.Bundle;
import android.view.View;

import com.keystone.cold.R;
import com.keystone.cold.databinding.FragmentFingerprintGuideBinding;
import com.keystone.cold.ui.fragment.BaseFragment;

public class FingerprintGuideFragment extends BaseFragment<FragmentFingerprintGuideBinding> {
    @Override
    protected int setView() {
        return R.layout.fragment_fingerprint_guide;
    }

    @Override
    protected void init(View view) {
        mBinding.toolbar.setNavigationOnClickListener(v -> navigateUp());
        mBinding.startEnroll.setOnClickListener(v -> startEnroll());

    }

    private void startEnroll() {
        navigate(R.id.action_to_fingerprintEnrollFragment, getArguments());
    }

    @Override
    protected void initData(Bundle savedInstanceState) {

    }
}
