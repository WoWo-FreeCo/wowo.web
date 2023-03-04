import { _ as __nuxt_component_0 } from './client-only.6d8d71ff.mjs';
import { _ as _export_sfc, e as useRoute, a as useRouter, u as useRuntimeConfig, f as __nuxt_component_0$1 } from '../server.mjs';
import { ref, computed, onUnmounted, resolveComponent, mergeProps, unref, isRef, withCtx, createTextVNode, useSSRContext } from 'vue';
import { u as useAuthStore } from './authStore.a0d3dca8.mjs';
import { u as useCartStore } from './cartStore.e615b64d.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual, ssrRenderComponent, ssrLooseContain } from 'vue/server-renderer';
import { useMessage } from 'naive-ui';
import { P as ProductType, a as PaymentType, D as DeliverType, U as UICType } from './common.0260327a.mjs';
import 'ofetch';
import 'hookable';
import 'unctx';
import 'ufo';
import 'h3';
import '@unhead/vue';
import '@unhead/dom';
import 'vue-router';
import 'axios';
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
    useMessage();
    useRuntimeConfig();
    const authStore = useAuthStore();
    const cartStore = useCartStore();
    const bonusCut = ref(0);
    ref(false);
    const useUic = ref(false);
    const readRules = ref(false);
    const useDonation = ref(false);
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
    const store = ref({
      name: "",
      id: "",
      outside: 0,
      ship: 0,
      address: ""
    });
    const deliverFee = computed(() => {
      var _a2;
      const fee = (_a2 = preSettlement.value) == null ? void 0 : _a2.deliveryFee;
      return fee;
    });
    let timer = null;
    onUnmounted(() => {
      clearInterval(timer);
      timer = null;
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
        city: "",
        email: (_a = authStore.user) == null ? void 0 : _a.email,
        idNo: "",
        idType: "1",
        cellphone: (_b = authStore.user) == null ? void 0 : _b.cellphone,
        name: (_c = authStore.user) == null ? void 0 : _c.nickname,
        remark: "",
        senderRemark: "",
        stationCode: "",
        stationName: "",
        addressDetailOne: (_d = authStore.user) == null ? void 0 : _d.addressOne,
        province: "",
        district: "",
        town: "",
        zipCode: ""
      },
      invoiceParams: {
        customerName: (_e = authStore.user) == null ? void 0 : _e.nickname,
        customerEmail: (_f = authStore.user) == null ? void 0 : _f.email,
        customerPhone: (_g = authStore.user) == null ? void 0 : _g.cellphone,
        customerAddr: (_h = authStore.user) == null ? void 0 : _h.addressOne,
        customerIdentifier: "",
        carruerType: UICType.Member,
        carruerNum: "",
        donation: "0",
        loveCode: ""
      },
      products: [],
      bonusPointRedemption: 0
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_n_input_number = resolveComponent("n-input-number");
      const _component_ClientOnly = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "full_height mt185ptb30" }, _attrs))} data-v-25a83678><form id="checkout_form" action="javascript:;" class="cart_container" data-v-25a83678><table class="cart_list" data-v-25a83678><tbody data-v-25a83678><!--[-->`);
      ssrRenderList(unref(currentMerch), (item) => {
        var _a2, _b2;
        _push(`<tr class="prod-tr" data-v-25a83678><td class="cart_img" data-v-25a83678><img${ssrRenderAttr("src", item == null ? void 0 : item.coverImg)} data-v-25a83678></td><td class="cart_tl" data-v-25a83678><h5 data-v-25a83678>${ssrInterpolate(item == null ? void 0 : item.name)}</h5><div class="product-quantity" data-v-25a83678> x${ssrInterpolate(item == null ? void 0 : item.amount)}</div></td><td class="cart_price text-right" data-v-25a83678><span style="${ssrRenderStyle(((_a2 = unref(authStore).user) == null ? void 0 : _a2.memberLevel) && ((_b2 = unref(authStore).user) == null ? void 0 : _b2.memberLevel) !== "NORMAL" ? null : { display: "none" })}" data-v-25a83678>\u5E02\u50F9 $${ssrInterpolate(item == null ? void 0 : item.price)}</span> \u50F9\u9322 $${ssrInterpolate(getCurrentPriceByAuth(item))}</td></tr>`);
      });
      _push(`<!--]--></tbody></table><div class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u5BC4\u9001\u65B9\u5F0F</h5><div class="checkout-form" data-v-25a83678><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).consignee.deliveryType, unref(DeliverType).Home)) ? " checked" : ""} type="radio" name="shipping"${ssrRenderAttr("value", unref(DeliverType).Home)} data-v-25a83678> \u5B85\u914D\u5230\u5E9C </label><label style="${ssrRenderStyle(unref(cartType) === unref(ProductType).General ? null : { display: "none" })}" class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).consignee.deliveryType, unref(DeliverType).Store)) ? " checked" : ""} type="radio" name="shipping"${ssrRenderAttr("value", unref(DeliverType).Store)} data-v-25a83678> \u8D85\u5546\u53D6\u8CA8 </label></div></div><div class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u4ED8\u6B3E\u65B9\u5F0F</h5><div class="checkout-form" data-v-25a83678><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).CreditOneTime)) ? " checked" : ""} type="radio" name="payment"${ssrRenderAttr("value", unref(PaymentType).CreditOneTime)} data-v-25a83678> \u4FE1\u7528\u5361 </label><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).BarCode)) ? " checked" : ""} type="radio" name="payment"${ssrRenderAttr("value", unref(PaymentType).BarCode)} data-v-25a83678> \u8D85\u5546\u689D\u78BC\u4ED8\u6B3E </label><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).choosePayment, unref(PaymentType).Cvs)) ? " checked" : ""} type="radio"${ssrRenderAttr("value", unref(PaymentType).Cvs)} name="payment" data-v-25a83678> \u8D85\u5546\u4EE3\u78BC\u4ED8\u6B3E </label></div></div><div class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u7D05\u5229\u6263\u9EDE (\u76EE\u524D\u53EF\u7528\u7D05\u5229\uFF1A${ssrInterpolate(unref(rewardCredit))} \u9EDE)</h5><div class="checkout-form" data-v-25a83678>`);
      _push(ssrRenderComponent(_component_n_input_number, {
        value: unref(bonusCut),
        "onUpdate:value": ($event) => isRef(bonusCut) ? bonusCut.value = $event : null,
        min: "0",
        max: unref(rewardCredit),
        style: { width: "150px", margin: "4px 0 4px 15px" }
      }, null, _parent));
      _push(`</div></div><div id="ship_home_form" class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u6536\u4EF6\u4EBA\u8CC7\u8A0A</h5><div class="ship_info" data-v-25a83678><input id="ship_name2"${ssrRenderAttr("value", unref(inputField).consignee.name)} type="text" placeholder="\u59D3\u540D*" class="form-control" name="" required data-v-25a83678><input id="ship_phone2"${ssrRenderAttr("value", unref(inputField).consignee.cellphone)} type="text" placeholder="\u624B\u6A5F*" class="form-control" name="" required data-v-25a83678><input id="ship_address"${ssrRenderAttr("value", unref(inputField).consignee.province)} type="text" placeholder="\u7701*" class="form-control" name="" required data-v-25a83678><input id="ship_address"${ssrRenderAttr("value", unref(inputField).consignee.district)} type="text" placeholder="\u884C\u653F\u5340*" class="form-control" name="" required data-v-25a83678><input id="ship_address"${ssrRenderAttr("value", unref(inputField).consignee.city)} type="text" placeholder="\u57CE\u5E02*" class="form-control" name="" required data-v-25a83678><input id="ship_address"${ssrRenderAttr("value", unref(inputField).consignee.zipCode)} type="text" placeholder="\u90F5\u905E\u5340\u865F*" class="form-control" name="" required data-v-25a83678><input id="ship_address"${ssrRenderAttr("value", unref(inputField).consignee.addressDetailOne)} type="text" placeholder="\u6536\u4EF6\u5730\u5740*" class="form-control" name="" required data-v-25a83678>`);
      _push(ssrRenderComponent(_component_ClientOnly, null, null, _parent));
      _push(`</div></div><div style="${ssrRenderStyle(unref(inputField).consignee.deliveryType === unref(DeliverType).Store ? null : { display: "none" })}" class="cart_info checkout-form" data-v-25a83678><h5 data-v-25a83678>\u8D85\u5546\u53D6\u8CA8\u8CC7\u8A0A</h5><div class="emap" data-v-25a83678><button data-v-25a83678> \u9078\u64C7\u5E97\u8216 </button></div><div class="store-name" data-v-25a83678><input id="store-name"${ssrRenderAttr("value", unref(store).name)} type="text" required class="form-control bold" disabled data-v-25a83678></div><div class="store-address" data-v-25a83678><input id="store-address"${ssrRenderAttr("value", unref(store).address)} type="text" required class="form-control bold" disabled data-v-25a83678></div></div><div class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u8ACB\u9078\u64C7\u767C\u7968\u9078\u9805</h5><div class="checkout-form" data-v-25a83678><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(useDonation), false)) ? " checked" : ""} type="radio" name="donation"${ssrRenderAttr("value", false)} data-v-25a83678> \u958B\u7ACB\u767C\u7968 </label><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(useDonation), true)) ? " checked" : ""} type="radio" name="donation"${ssrRenderAttr("value", true)} data-v-25a83678> \u6350\u8D08\u767C\u7968 </label></div></div>`);
      if (unref(useDonation)) {
        _push(`<div class="cart_info checkout-form" data-v-25a83678><h5 data-v-25a83678>\u767C\u7968\u8CC7\u8A0A</h5><div class="ship_info inv-info" data-v-25a83678><div class="ship_info" data-v-25a83678><input id="inv_ship_lovecode"${ssrRenderAttr("value", unref(inputField).invoiceParams.loveCode)} type="text" placeholder="\u8ACB\u8F38\u5165\u6350\u8D08\u611B\u5FC3\u78BC*" class="form-control" name="" required data-v-25a83678></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="cart_info checkout-form" data-v-25a83678><h5 data-v-25a83678>\u8F09\u5177\u8CC7\u8A0A</h5><div class="ship_info inv-info" data-v-25a83678><label class="checkbox pt10 pb10" data-v-25a83678><input id="change-image"${ssrIncludeBooleanAttr(Array.isArray(unref(useUic)) ? ssrLooseContain(unref(useUic), null) : unref(useUic)) ? " checked" : ""} type="checkbox" data-v-25a83678> \u4F7F\u7528\u8F09\u5177 </label>`);
      if (unref(useUic)) {
        _push(`<div class="ship_info" data-v-25a83678><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).invoiceParams.carruerType, unref(UICType).Member)) ? " checked" : ""} type="radio" name="uic-member"${ssrRenderAttr("value", unref(UICType).Member)} data-v-25a83678> \u6703\u54E1\u8F09\u5177 </label><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).invoiceParams.carruerType, unref(UICType).NPC)) ? " checked" : ""} type="radio" name="uic-npc"${ssrRenderAttr("value", unref(UICType).NPC)} data-v-25a83678> \u81EA\u7136\u4EBA\u6191\u8B49 </label><label class="radio form-check" data-v-25a83678><input${ssrIncludeBooleanAttr(ssrLooseEqual(unref(inputField).invoiceParams.carruerType, unref(UICType).Mobile)) ? " checked" : ""} type="radio" name="uic-mobile"${ssrRenderAttr("value", unref(UICType).Mobile)} data-v-25a83678> \u624B\u6A5F\u689D\u78BC </label>`);
        if (unref(inputField).invoiceParams.carruerType >= 2) {
          _push(`<input id="inv-carruerNum"${ssrRenderAttr("value", unref(inputField).invoiceParams.carruerNum)} type="text" placeholder="\u8ACB\u8F38\u5165\u5C0D\u61C9\u7684\u8F09\u5177\u7DE8\u865F" class="form-control" required name="" data-v-25a83678>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="cart_info checkout-form" data-v-25a83678><h5 data-v-25a83678>\u8A02\u55AE\u5099\u8A3B</h5><textarea id="" rows="6" placeholder="\u8ACB\u8F38\u5165\u8A02\u55AE\u5099\u8A3B\u5167\u5BB9" class="form-control" name="" data-v-25a83678>${ssrInterpolate(unref(inputField).consignee.remark)}</textarea></div><div class="cart_info" data-v-25a83678><h5 data-v-25a83678>\u4ED8\u6B3E\u660E\u7D30</h5><ul class="cart_check" data-v-25a83678><li data-v-25a83678> \u5546\u54C1\u91D1\u984D\u5C0F\u8A08 (\u5171${ssrInterpolate(unref(currentMerch).length)}\u9805\u5546\u54C1)\uFF1A$${ssrInterpolate(unref(totalPrice))}</li><li data-v-25a83678> \u904B\u8CBB\uFF1A${ssrInterpolate(unref(deliverFee))}</li><li data-v-25a83678> \u7D05\u5229\u6263\u9EDE\uFF1A${ssrInterpolate(unref(bonusCut))}</li><li class="border_top" data-v-25a83678> \u8A02\u55AE\u7E3D\u91D1\u984D\uFF1A<span data-v-25a83678>$${ssrInterpolate(unref(totalPrice) - unref(bonusCut) + unref(deliverFee))}</span></li></ul></div><div class="cart_info checkout-form ptb10" data-v-25a83678><label class="checkbox" data-v-25a83678><input id="check_service"${ssrIncludeBooleanAttr(Array.isArray(unref(readRules)) ? ssrLooseContain(unref(readRules), null) : unref(readRules)) ? " checked" : ""} type="checkbox" required data-v-25a83678> \u6211\u5DF2\u7D93\u95B1\u8B80\u4E26\u540C\u610F\u4EE5\u4E0A\u8CFC\u8CB7\u9808\u77E5\u3001 <a href="/terms" target="new" data-v-25a83678>\u6703\u54E1\u4F7F\u7528\u689D\u6B3E</a>\u8207<a href="/privacy" target="new" data-v-25a83678>\u96B1\u79C1\u6B0A\u653F\u7B56</a>\uFF0C\u6B64\u6B04\u4F4D\u52FE\u9078\u624D\u53EF\u9001\u51FA\u3002 </label></div><div class="text-center mb-20 mt-20" data-v-25a83678><span id="errormsg" data-v-25a83678></span></div><div class="text-center mb-20 mt-20" data-v-25a83678>`);
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
      _push(`<input id="" type="submit" class="btn btn-main btn-check check_service_btn submit_home" value="\u78BA\u8A8D\u9001\u51FA" data-v-25a83678></div></form></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/checkout.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const checkout = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-25a83678"]]);

export { checkout as default };
//# sourceMappingURL=checkout.9edabc39.mjs.map
