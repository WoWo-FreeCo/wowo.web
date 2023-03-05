export enum ProductType {
  General = 'GENERAL',
  ColdChain = 'COLD_CHAIN'
}

export enum PaymentType {
  CreditOneTime = 'CREDIT_ONE_TIME',
  Cvs = 'CVS', // 超商代碼
  BarCode = 'BARCODE' // 超商條碼
}

export enum DeliverType {
  Home = 'HOME',
  Store = 'STORE'
}

export enum UICType {
  Member = 1,
  NPC = 2,
  Mobile = 3
}

export enum OrderStatus {
  WaitPayment = 'WAIT_PAYMENT',
  WaitDeliver = 'WAIT_DELIVER',
  WaitReceive = 'WAIT_RECEIVE',
  Completed = 'COMPLETED',
  Cancelled = 'CANCELLED',
  Revoked = 'REVOKED',
}
