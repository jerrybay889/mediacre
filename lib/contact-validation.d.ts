export type ContactValidationResult = {ok:false;message:string}|{ok:true;honeypot:boolean;payload:Record<string,string>};
export function validateContact(input: unknown): ContactValidationResult;
