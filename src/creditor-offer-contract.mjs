// Generic policy contract only. No personal records, sources, credentials or production configuration.
const fields=['start_date','end_date','duration_months','required_payment_cents','enrollment_fee_cents','monthly_fee_cents','other_fee_cents','apr_percent','interest_accrues','account_closed','adverse_reporting','reporting_terms','delinquency_treatment','restrictions','post_plan_repayment','deferred_balance_cents','final_lump_sum_cents','term_extension_months','new_borrowing','collateral_change','debit_authorization','payment_promise','settlement','written_terms_reference'];
export function evaluateCreditorOffer(account,terms,authority){
 const review=[];if(!terms||typeof terms!=='object'||Array.isArray(terms))return {decision:'awaiting_owner_decision',reasons:['complete_terms_required'],may_accept:false};
 for(const k of fields)if(terms[k]===undefined||terms[k]===null||terms[k]==='')review.push('missing_'+k);
 if(Object.keys(terms).some(k=>!fields.includes(k)))review.push('unrecognized_material_terms');
 if(account.product!=='credit_card')review.push('auto_or_mortgage_modification_requires_owner');
 if(authority?.mode!=='fee_free_zero_card_6_10_months')review.push('structured_acceptance_authority_required');
 const a=Date.parse(terms.start_date),b=Date.parse(terms.end_date);if(!Number.isFinite(a)||!Number.isFinite(b)||b<=a)review.push('invalid_plan_dates');
 if(!Number.isInteger(terms.duration_months)||terms.duration_months<6||terms.duration_months>10)review.push('duration_requires_review');
 if(Number.isFinite(a)&&Number.isFinite(b)&&Number.isInteger(terms.duration_months)){const end=new Date(a);end.setUTCMonth(end.getUTCMonth()+terms.duration_months);if(Math.abs(end.getTime()-b)>2*86400000)review.push('duration_date_conflict');}
 for(const k of ['required_payment_cents','enrollment_fee_cents','monthly_fee_cents','other_fee_cents','apr_percent','deferred_balance_cents','final_lump_sum_cents','term_extension_months'])if(typeof terms[k]!=='number'||!Number.isFinite(terms[k])||terms[k]<0)review.push('invalid_'+k);
 for(const k of ['required_payment_cents','enrollment_fee_cents','monthly_fee_cents','other_fee_cents','apr_percent','final_lump_sum_cents','term_extension_months'])if(terms[k]!==0)review.push(k+'_requires_review');
 for(const k of ['interest_accrues','account_closed','adverse_reporting','new_borrowing','collateral_change','debit_authorization','payment_promise','settlement'])if(terms[k]!==false)review.push(k+'_requires_review');
 for(const k of ['reporting_terms','delinquency_treatment','restrictions','post_plan_repayment','written_terms_reference'])if(typeof terms[k]!=='string'||!terms[k].trim()||terms[k].length>600||/unknown|unclear|not (?:known|provided)|pending|tbd/i.test(terms[k]))review.push('unconfirmed_'+k);
 if(terms.deferred_balance_cents!==0)review.push('deferred_balance_requires_review');
 return {decision:review.length?'awaiting_owner_decision':'eligible_for_narrow_acceptance',may_accept:review.length===0,reasons:[...new Set(review)],requires_written_confirmation:true};
}
