import { e as useRoute, a as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.e962e355.mjs';
import { u as useCartStore } from './cartStore.8f535d1f.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderStyle, ssrRenderComponent } from 'vue/server-renderer';
import { P as ProductType, a as PaymentType, D as DeliverType } from './common.b877c4b5.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
import 'naive-ui';
import 'defu';
import '../../nitro/node-server.mjs';
import 'node-fetch-native/polyfill';
import 'http';
import 'https';
import 'destr';
import 'unenv/runtime/fetch/index';
import 'scule';
import 'ohash';
import 'unstorage';
import 'radix3';
import 'node:fs';
import 'node:url';
import 'pathe';

const _sfc_main = {
  __name: "checkout",
  __ssrInlineRender: true,
  setup(__props) {
    var _a, _b, _c, _d, _e, _f, _g, _h;
    useRoute();
    useRouter();
    useRuntimeConfig();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const bonusCut = ref(0);
    const cartType = ref(ProductType.General);
    const totalPrice = computed({
      get: () => {
        return currentMerch.value.reduce(
          (total, cur) => total + getCurrentPriceByAuth(cur) * cur.amount,
          0
        );
      },
      set: (_new) => {
        totalPrice.value = _new;
      }
    });
    const rewardCredit = computed(() => {
      var _a2;
      return ((_a2 = authStore == null ? void 0 : authStore.user) == null ? void 0 : _a2.rewardCredit) || 0;
    });
    const currentMerch = computed(() => {
      switch (cartType.value) {
        case ProductType.ColdChain:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === "COLD_CHAIN");
        default:
          return cartStore == null ? void 0 : cartStore.merch.filter((e) => e.attribute === "GENERAL");
      }
    });
    const preSettlement = ref({});
    const deliverFee = computed(() => {
      var _a2;
      const fee = (_a2 = preSettlement.value) == null ? void 0 : _a2.deliveryFee;
      return fee <= 0 ? "\u514D\u904B" : fee;
    });
    const getCurrentPriceByAuth = (item) => {
      var _a2, _b2;
      if (((_a2 = authStore == null ? void 0 : authStore.user) == null ? void 0 : _a2.memberLevel) === "SVIP") {
        return item == null ? void 0 : item.svipPrice;
      }
      if (((_b2 = authStore == null ? void 0 : authStore.user) == null ? void 0 : _b2.memberLevel) === "VIP") {
        return item == null ? void 0 : item.vipPrice;
      }
      if (authStore.status.loggedIn) {
        return item == null ? void 0 : item.memberPrice;
      }
      return item == null ? void 0 : item.price;
    };
    const inputField = ref({
      attribute: cartType.value,
      choosePayment: PaymentType.CreditOneTime,
      consignee: {
        deliveryType: DeliverType.Home,
        addressDetailOne: (_a = authStore.user) == null ? void 0 : _a.addressOne,
        city: "",
        district: "",
        email: (_b = authStore.user) == null ? void 0 : _b.email,
        idNo: "",
        idType: "1",
        cellphone: (_c = authStore.user) == null ? void 0 : _c.cellphone,
        name: (_d = authStore.user) == null ? void 0 : _d.nickname,
        province: "",
        remark: "",
        senderRemark: "",
        stationCode: "",
        stationName: "",
        town: "",
        zipCode: ""
      },
      invoiceParams: {
        customerName: (_e = authStore.user) == null ? void 0 : _e.nickname,
        customerEmail: (_f = authStore.user) == null ? void 0 : _f.email,
        customerPhone: (_g = authStore.user) == null ? void 0 : _g.cellphone,
        customerAddr: (_h = authStore.user) == null ? void 0 : _h.addressOne,
        customerIdentifier: "00000000",
        carruerType: "",
        carruerNum: "",
        donation: "0",
        loveCode: ""
      },
      products: currentMerch.value.map((e) => {
        return {
          id: e.id,
          quantity: e.amount
        };
      })
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_input_number = resolveComponent("n-input-number");
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30" }, _attrs))}><form id="checkout_form" action="javascript:;" class="cart_container"><table class="cart_list"><tbody><!--[-->`);
      ssrRenderList(unref(currentMerch), (item) => {
        var _a2, _b2;
        _push(`<tr><td class="cart_img"><img${ssrRenderAttr("src", ((_a2 = item == null ? void 0 : item.thumbnail) == null ? void 0 : _a2.url) || "/products/p" + (item.id - 10) + ".jpg")}></td><td class="cart_tl"><h5>${ssrInterpolate(item == null ? void 0 : item.name)}</h5><div class="product-quantity"> x${ssrInterpolate(item == null ? void 0 : item.amount)}</div><span>\u6EFF\u4EF6\u514D\u904B</span></td><td class="cart_price text-right"><span>\u5E02\u50F9 $${ssrInterpolate((_b2 = item == null ? void 0 : item.price) == null ? void 0 : _b2.market)}</span> \u50F9\u9322 $${ssrInterpolate(getCurrentPriceByAuth(item))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="cart_info"><h5>\u5BC4\u9001\u65B9\u5F0F</h5><div class="checkout-form"><label class="radio form-check"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).consignee.deliveryType, unref(DeliverType).Home)) ? " checked" : ""} type="radio" name="shipping"${ssrRenderAttr("value", unref(DeliverType).Home)}> \u5B85\u914D\u5230\u5E9C </label><label style="${ssrRenderStyle(unref(cartType) === unref(ProductType).General ? null : { display: "none" })}" class="radio form-check"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).consignee.deliveryType, unref(DeliverType).Store)) ? " checked" : ""} type="radio" name="shipping"${ssrRenderAttr("value", unref(DeliverType).Store)}> \u8D85\u5546\u53D6\u8CA8 </label></div></div><div class="cart_info"><h5>\u4ED8\u6B3E\u65B9\u5F0F</h5><div class="checkout-form"><label class="radio form-check"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).CreditOneTime)) ? " checked" : ""} type="radio" name="payment"${ssrRenderAttr("value", unref(PaymentType).CreditOneTime)}> \u4FE1\u7528\u5361 </label><label class="radio form-check"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).BarCode)) ? " checked" : ""} type="radio" name="payment"${ssrRenderAttr("value", unref(PaymentType).BarCode)}> \u8D85\u5546\u689D\u78BC\u4ED8\u6B3E </label><label class="radio form-check"><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).Cvs)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", unref(PaymentType).Cvs)} name="payment"> \u8D85\u5546\u4EE3\u78BC\u4ED8\u6B3E </label></div></div><div class="cart_info"><h5>\u7D05\u5229\u6263\u9EDE (\u76EE\u524D\u53EF\u7528\u7D05\u5229\uFF1A${ssrInterpolate(unref(rewardCredit))} \u9EDE)</h5><div class="checkout-form">`);
      _push(ssrRenderComponent(_component_n_input_number, {
        value: unref(bonusCut),
        "onUpdate:value": ($event) => isRef(bonusCut) ? bonusCut.value = $event : null,
        min: "0",
        max: unref(rewardCredit),
        style: { width: "150px", margin: "4px 0 4px 15px" }
      }, null, _parent));
      _push(`</div></div><div id="ship_home_form" class="cart_info"><h5>\u6536\u4EF6\u4EBA\u8CC7\u8A0A</h5><div class="ship_info"><input id="ship_name2"${ssrRenderAttr("value", unref(authStore).user.nickname)} type="text" placeholder="\u59D3\u540D*" class="form-control" name=""><input id="ship_phone2"${ssrRenderAttr("value", unref(authStore).user.cellphone)} type="text" placeholder="\u624B\u6A5F*" class="form-control" name=""><input id="ship_address"${ssrRenderAttr("value", unref(authStore).user.addressOne)} type="text" placeholder="\u5730\u5740*" class="form-control" name="">`);
      if (unref(cartType) === unref(ProductType).General) {
        _push(`<input id="shipday" type="datetime-local" placeholder="\u8ACB\u9078\u64C7\u53EF\u6536\u8CA8\u65E5\u671F" class="form-control" name="">`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="cart_info checkout-form"><h5>\u767C\u7968\u8CC7\u8A0A</h5><div class="ship_info"><input id="" type="text" placeholder="\u8ACB\u8F38\u5165\u8F09\u5177\u865F\u78BC" class="form-control" name=""></div><label class="checkbox pt10 pb10"><input id="change-image" type="checkbox"> \u767C\u7968\u8981\u6253\u7D71\u7DE8 </label><div class="invoice_form d_none"><h5>\u7D71\u7DE8\u8CC7\u8A0A</h5><div class="ship_info"><input id="" type="text" placeholder="\u7D71\u4E00\u7DE8\u865F*" class="form-control" name=""><input id="" type="text" placeholder="\u767C\u7968\u62AC\u982D*" class="form-control" name=""><input id="" type="email" placeholder="\u767C\u7968\u6536\u53D6E-mail" class="form-control" name=""></div></div></div><div class="cart_info checkout-form"><h5>\u8A02\u55AE\u5099\u8A3B</h5><textarea id="" rows="6" placeholder="\u8ACB\u8F38\u5165\u8A02\u55AE\u5099\u8A3B\u5167\u5BB9" class="form-control" name="">${ssrInterpolate(unref(inputField).consignee.remark)}</textarea></div><div class="cart_info"><h5>\u4ED8\u6B3E\u660E\u7D30</h5><ul class="cart_check"><li> \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1)\uFF1A$${ssrInterpolate(unref(totalPrice))}</li><li> \u904B\u8CBB\uFF1A${ssrInterpolate(unref(deliverFee))}</li><li> \u7D05\u5229\u6263\u9EDE\uFF1A${ssrInterpolate(unref(bonusCut))}</li><li class="border_top"> \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A<span>$${ssrInterpolate(unref(totalPrice) - unref(bonusCut) + unref(deliverFee))}</span></li></ul></div><div class="cart_info checkout-form ptb10"><label class="checkbox"><input id="check_service" type="checkbox"> \u6211\u5DF2\u7D93\u95B1\u8B80\u4E26\u540C\u610F\u4EE5\u4E0A\u8CFC\u8CB7\u9808\u77E5\u3001 <a href="/terms" target="new">\u6703\u54E1\u4F7F\u7528\u689D\u6B3E</a>\u8207<a href="/privacy" target="new">\u96B1\u79C1\u6B0A\u653F\u7B56</a>\uFF0C\u6B64\u6B04\u4F4D\u52FE\u9078\u624D\u53EF\u9001\u51FA\u3002 </label></div><div class="text-center mb-20 mt-20"><span id="errormsg"></span></div><div class="text-center mb-20 mt-20">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        type: "button",
        class: "btn btn-main btn-default",
        to: "/cart"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` \u4E0A\u4E00\u9801 `);
          } else {
            return [
              createTextVNode(" \u4E0A\u4E00\u9801 ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<input id="" type="submit" class="btn btn-main btn-check check_service_btn submit_home" value="\u78BA\u8A8D\u9001\u51FA"></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=checkout.3fe69b18.mjs.map
