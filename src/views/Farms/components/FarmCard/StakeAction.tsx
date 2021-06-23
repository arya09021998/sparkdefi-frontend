import React, { useCallback } from 'react'
import { useWeb3React } from '@web3-react/core'
import styled from 'styled-components'
import BigNumber from 'bignumber.js'
import { Button, Flex, Heading, IconButton, AddIcon, MinusIcon, useModal } from '@sparkpointio/sparkswap-uikit'
import { useLocation } from 'react-router-dom'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import { useAppDispatch } from 'state'
import { fetchFarmUserDataAsync } from 'state/farms'
import { useLpTokenPrice } from 'state/hooks'
import useStake from 'hooks/useStake'
import useUnstake from 'hooks/useUnstake'
import { Farm } from 'state/types'
import { getBalanceAmount, getBalanceNumber, getFullDisplayBalance } from 'utils/formatBalance'
import DepositModal from '../DepositModal'
import WithdrawModal from '../WithdrawModal'

interface FarmCardActionsProps {
  stakedBalance?: BigNumber
  tokenBalance?: BigNumber
  tokenName?: string
  pid?: number
  addLiquidityUrl?: string
  addTokenUrl?: string
  farm?: Farm
}

const IconButtonWrapper = styled.div`
  display: flex;
  svg {
    width: 20px;
  }
`

const StakeAction: React.FC<FarmCardActionsProps> = ({
  stakedBalance,
  tokenBalance,
  tokenName,
  pid,
  addLiquidityUrl,
  addTokenUrl,
  farm,
}) => {
  const { t } = useTranslation()
  const { onStake } = useStake(pid)
  const { onUnstake } = useUnstake(pid)
  const location = useLocation()
  const dispatch = useAppDispatch()
  const { account } = useWeb3React()
  const lpPrice = useLpTokenPrice(tokenName)

  const handleStake = async (amount: string) => {
    await onStake(amount)
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
  }

  const handleUnstake = async (amount: string) => {
    await onUnstake(amount)
    dispatch(fetchFarmUserDataAsync({ account, pids: [pid] }))
  }

  const displayBalance = useCallback(() => {
    const stakedBalanceBigNumber = getBalanceAmount(stakedBalance)
    if (stakedBalanceBigNumber.gt(0) && stakedBalanceBigNumber.lt(0.0001)) {
      return getFullDisplayBalance(stakedBalance).toLocaleString()
    }
    return stakedBalanceBigNumber.toFixed(3, BigNumber.ROUND_DOWN)
  }, [stakedBalance])

  const [onPresentDeposit] = useModal(
    <DepositModal 
    max={tokenBalance} 
    onConfirm={onStake} 
    tokenName={tokenName} 
    addLiquidityUrl={addLiquidityUrl} 
    addTokenUrl={addTokenUrl} 
    tokenReward={farm.quoteToken.symbol} 
    tokenRewardAddress={farm.quoteToken.address[97]}
    tokenBalance={farm.userData.tokenBalance} 
    stakedBalance={farm.userData.stakedBalance} 
    tokenEarnings={farm.userData.earnings}
    
    />,
  )
  const [onPresentWithdraw] = useModal(
    <WithdrawModal max={stakedBalance} onConfirm={handleUnstake} tokenName={tokenName} />,
  )

  const renderStakingButtons = () => {
    return (
      <Button
        onClick={onPresentDeposit}
        disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
        fullWidth
      >
        {t('Deposit')}
      </Button>
    )
  }

  // (
  //   <IconButtonWrapper>
  //     <IconButton variant="tertiary" onClick={onPresentWithdraw} mr="6px">
  //       <MinusIcon color="primary" width="14px" />
  //     </IconButton>
  //     <IconButton
  //       variant="tertiary"
  //       onClick={onPresentDeposit}
  //       disabled={['history', 'archived'].some((item) => location.pathname.includes(item))}
  //     >
  //       <AddIcon color="primary" width="14px" />
  //     </IconButton>
  //   </IconButtonWrapper>
  // )
  return (
    <Flex justifyContent="space-between" alignItems="center">
      {/* <Heading color={stakedBalance.eq(0) ? 'textDisabled' : 'text'}>{displayBalance()}</Heading> */}
      {renderStakingButtons()}
    </Flex>
  )
}

export default StakeAction
