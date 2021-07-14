import { BigInt, BigDecimal, Address } from "@graphprotocol/graph-ts"
import { 
  USDC,
  Approval,
  AuthorizationCanceled,
  AuthorizationUsed,
  Blacklisted,
  MetaTransactionExecuted,
  Pause,
  RescuerChanged,
  RoleAdminChanged,
  RoleGranted,
  RoleRevoked,
  Transfer,
  UnBlacklisted,
  Unpause  
 } from "../generated/USDC/USDC"

 import{
   USDCProxy,
   ProxyOwnerUpdate,
   ProxyUpdated


 } from "../generated/USDCProxy/USDCProxy"

import { Contract } from "../generated/schema"

export function handleApproval(event: Approval): void {
  let usdc = USDC.bind(event.address)
  let contract = new Contract(event.block.number.toString())

 let totalSupplyCall = usdc.try_totalSupply()
 if(!totalSupplyCall.reverted){
   contract.totalSupply = totalSupplyCall.value
 }

 let symbolCall = usdc.try_symbol()
 if(!symbolCall.reverted){
   contract.symbol = symbolCall.value
 }

  contract.name = usdc._name

  
  contract.save()


}
export function handleAuthorizationCanceled(event: AuthorizationCanceled): void {}
export function handleAuthorizationUsed(event: AuthorizationUsed): void {}
export function handleBlacklisted(event: Blacklisted): void {}
export function handleMetaTransactionExecuted(event: MetaTransactionExecuted): void {}
export function handlePause(event: Pause): void {}
export function handleRescuerChanged(event: RescuerChanged): void {}
export function handleRoleAdminChanged(event: RoleAdminChanged): void {}
export function handleRoleGranted(event: RoleGranted): void {}
export function handleRoleRevoked(event: RoleRevoked): void {}
export function handleTransfer(event: Transfer): void {}
export function handleUnBlacklisted(event: UnBlacklisted): void {}
export function handleUnpause(event: Unpause): void {}

export function handleProxyOwnerUpdate(event: ProxyOwnerUpdate): void {}
export function handleProxyUpdated(event: ProxyUpdated): void {}
