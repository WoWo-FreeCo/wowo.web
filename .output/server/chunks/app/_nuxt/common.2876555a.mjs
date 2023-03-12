var ProductType = /* @__PURE__ */ ((ProductType2) => {
  ProductType2["General"] = "GENERAL";
  ProductType2["ColdChain"] = "COLD_CHAIN";
  return ProductType2;
})(ProductType || {});
var PaymentType = /* @__PURE__ */ ((PaymentType2) => {
  PaymentType2["CreditOneTime"] = "CREDIT_ONE_TIME";
  PaymentType2["Cvs"] = "CVS";
  PaymentType2["BarCode"] = "BARCODE";
  return PaymentType2;
})(PaymentType || {});
var DeliverType = /* @__PURE__ */ ((DeliverType2) => {
  DeliverType2["Home"] = "HOME";
  DeliverType2["Store"] = "STORE";
  return DeliverType2;
})(DeliverType || {});
var UICType = /* @__PURE__ */ ((UICType2) => {
  UICType2[UICType2["Member"] = 1] = "Member";
  UICType2[UICType2["NPC"] = 2] = "NPC";
  UICType2[UICType2["Mobile"] = 3] = "Mobile";
  return UICType2;
})(UICType || {});
var OrderStatus = /* @__PURE__ */ ((OrderStatus2) => {
  OrderStatus2["WaitPayment"] = "WAIT_PAYMENT";
  OrderStatus2["WaitDeliver"] = "WAIT_DELIVER";
  OrderStatus2["WaitReceive"] = "WAIT_RECEIVE";
  OrderStatus2["Completed"] = "COMPLETED";
  OrderStatus2["Cancelled"] = "CANCELLED";
  OrderStatus2["Revoked"] = "REVOKED";
  return OrderStatus2;
})(OrderStatus || {});
var InvoiceType = /* @__PURE__ */ ((InvoiceType2) => {
  InvoiceType2[InvoiceType2["Normal"] = 0] = "Normal";
  InvoiceType2[InvoiceType2["CustomerId"] = 1] = "CustomerId";
  InvoiceType2[InvoiceType2["Donation"] = 2] = "Donation";
  return InvoiceType2;
})(InvoiceType || {});
var BonusRecordActivity = /* @__PURE__ */ ((BonusRecordActivity2) => {
  BonusRecordActivity2["Register"] = "REGISTEr";
  BonusRecordActivity2["Upgrad"] = "UPGRADE";
  BonusRecordActivity2["Reward"] = "REWARD";
  BonusRecordActivity2["Redeem"] = "REDEEM";
  return BonusRecordActivity2;
})(BonusRecordActivity || {});

export { BonusRecordActivity as B, DeliverType as D, InvoiceType as I, OrderStatus as O, ProductType as P, UICType as U, PaymentType as a };
//# sourceMappingURL=common.2876555a.mjs.map