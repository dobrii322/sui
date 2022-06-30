// Copyright (c) 2022, Mysten Labs, Inc.
// SPDX-License-Identifier: Apache-2.0

import { useParams } from 'react-router-dom';

export function DappTxApprovalPage() {
    const { txID } = useParams();
    return <h1>Tx {txID} approval request</h1>;
}
