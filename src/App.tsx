//  Copyright 2022. The Tari Project
//
//  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the
//  following conditions are met:
//
//  1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following
//  disclaimer.
//
//  2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the
//  following disclaimer in the documentation and/or other materials provided with the distribution.
//
//  3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote
//  products derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES,
//  INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
//  DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
//  SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
//  SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY,
//  WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE
//  USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

import MainLayout from './theme/MainLayout';
import PageLayout from './theme/PageLayout';
import BlockExplorerPage from './routes/BlockExplorer';
import BlocksPage from './routes/Blocks/BlocksPage';
import MempoolPage from './routes/Mempool/MempoolPage';
import VNPage from './routes/VNs/VNPage';
import Block from './routes/Blocks/Block';

import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<BlockExplorerPage />} />
          {/* <Route path="*" element={<ErrorPage />} /> */}
          <Route path="mempool" element={<MempoolPage />} />
          <Route path="vns" element={<VNPage />} />
        </Route>
        <Route
          path="blocks"
          element={
            <PageLayout title="Blocks" subTitle="All blocks in the chain" />
          }
        >
          <Route index element={<BlocksPage />} />
        </Route>
        <Route path="blocks/:blockHeight" element={<PageLayout blockHeader />}>
          <Route index element={<Block />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;