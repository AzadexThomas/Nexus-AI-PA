import assert from 'node:assert/strict';
import {evaluateCreditorOffer} from '../src/creditor-offer-contract.mjs';
const terms={start_date:'2027-01-01',end_date:'2027-07-01',duration_months:6,required_payment_cents:0,enrollment_fee_cents:0,monthly_fee_cents:0,other_fee_cents:0,apr_percent:0,interest_accrues:false,account_closed:false,adverse_reporting:false,reporting_terms:'No new adverse reporting during plan.',delinquency_treatment:'Existing delinquency frozen during plan.',restrictions:'Purchases restricted temporarily; account remains open.',post_plan_repayment:'Original contractual terms resume.',deferred_balance_cents:0,final_lump_sum_cents:0,term_extension_months:0,new_borrowing:false,collateral_change:false,debit_authorization:false,payment_promise:false,settlement:false,written_terms_reference:'synthetic-written-offer'};
const authority={mode:'fee_free_zero_card_6_10_months'},card={product:'credit_card'};let n=0;
assert.equal(evaluateCreditorOffer(card,terms,authority).may_accept,true);n++;
for(const field of Object.keys(terms)){const incomplete={...terms};delete incomplete[field];assert.equal(evaluateCreditorOffer(card,incomplete,authority).may_accept,false);n++;}
for(const [field,value]of Object.entries({required_payment_cents:1,enrollment_fee_cents:1,monthly_fee_cents:1,other_fee_cents:1,apr_percent:1,interest_accrues:true,account_closed:true,adverse_reporting:true,new_borrowing:true,collateral_change:true,debit_authorization:true,payment_promise:true,settlement:true,duration_months:3,final_lump_sum_cents:1,term_extension_months:1})){assert.equal(evaluateCreditorOffer(card,{...terms,[field]:value},authority).may_accept,false);n++;}
for(const product of ['auto_loan','mortgage']){assert.equal(evaluateCreditorOffer({product},terms,authority).may_accept,false);n++;}
assert.equal(evaluateCreditorOffer(card,terms,{}).may_accept,false);n++;
console.log(JSON.stringify({passed:n,synthetic:true,external_calls:0,policy_only_not_execution_authority:true}));
