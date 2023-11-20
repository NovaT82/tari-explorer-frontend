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

import numeral from 'numeral';
import TariLogo from '../../assets/TariLogo';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useTheme } from '@mui/material/styles';
import StatsItem from './StatsItem';
import { Divider } from '@mui/material';
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@mui/material';
import { useAllBlocks } from '../../api/hooks/useBlocks';
import { IoAnalyticsOutline, IoSearchOutline } from 'react-icons/io5';
import IconButton from '@mui/material/IconButton';
import StatsDialog from './StatsDialog';

function Header() {
  const { data } = useAllBlocks();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const values = data?.blockTimes || [];
  const sum = values.reduce(
    (accumulator: number, currentValue: number) => accumulator + currentValue,
    0
  );
  const average = sum / values.length;
  const formattedAverageBlockTime = numeral(average).format('0') + 's';

  const formattedBlockHeight = numeral(
    data?.tipInfo.metadata.height_of_longest_chain
  ).format('0,0');
  const formattedMoneroHashRate =
    numeral(data?.currentMoneroHashRate).format('0.0 a') + 'H';
  const formattedSha3HashRate =
    numeral(data?.currentShaHashRate).format('0.0 a') + 'H';
  // //   const formattedTotalTransactions = numeral(metadata.totalTransactions).format(
  // //     '0,0'
  // //   );
  //   const formattedAverageFee = numeral(metadata.averageFee).format('0,0');

  return (
    <Grid item xs={12} md={12} lg={12}>
      <Box
        style={{
          backgroundColor: theme.palette.divider,
          width: '100%',
          borderBottom: `1px solid ${theme.palette.divider}`,
        }}
      >
        <Container maxWidth="xl">
          <Box
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
              paddingTop: theme.spacing(3),
              paddingBottom: theme.spacing(3),
            }}
          >
            <Grid container spacing={3}>
              <Grid item xs={10} md={3} lg={3}>
                <Link to="/">
                  <TariLogo fill={theme.palette.text.primary} />
                </Link>
              </Grid>
              {isMobile ? (
                <Grid item xs={2}>
                  <StatsDialog />
                </Grid>
              ) : (
                <Grid item xs={12} md={9} lg={9}>
                  <Box
                    style={{
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                      gap: theme.spacing(3),
                    }}
                  >
                    {/* <StatsItem label="Total Txns" value="408" />
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={theme.palette.divider}
                  /> */}
                    <StatsItem
                      label="RandomX Hash Rate"
                      value={formattedMoneroHashRate}
                    />
                    <Divider
                      orientation="vertical"
                      flexItem
                      color={theme.palette.divider}
                    />
                    <StatsItem
                      label="Sha3 Hash Rate"
                      value={formattedSha3HashRate}
                    />
                    <Divider
                      orientation="vertical"
                      flexItem
                      color={theme.palette.divider}
                    />
                    {/* <StatsItem label="Avg Fee" value="28" />
                  <Divider
                    orientation="vertical"
                    flexItem
                    color={theme.palette.divider}
                  /> */}
                    <StatsItem
                      label="Avg Block Time"
                      value={formattedAverageBlockTime}
                      lowerCase
                    />
                    <Divider
                      orientation="vertical"
                      flexItem
                      color={theme.palette.divider}
                    />
                    <StatsItem
                      label="Block Height"
                      value={formattedBlockHeight}
                    />
                  </Box>
                </Grid>
              )}
            </Grid>
          </Box>
        </Container>
      </Box>
    </Grid>
  );
}

export default Header;
