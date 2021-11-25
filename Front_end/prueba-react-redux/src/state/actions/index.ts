import { ActionType } from './../action-type/index';


interface DepositAction {
    type: ActionType.DEPOSIT,
    payload: number
}

interface WithDrawAction {
    type: ActionType.WITHDRAW,
    payload: number
}

interface BankruptAction {
    type: ActionType.BANKRUPT
}

export type Action = DepositAction | WithDrawAction | BankruptAction