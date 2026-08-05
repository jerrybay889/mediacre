import { validateContact } from "../lib/contact-validation.js";
const valid=validateContact({company:"Test",name:"Tester",email:"test@example.com",message:"Hello",consent:"agreed",website:""});
if(!valid.ok||valid.honeypot)throw new Error("Valid contact payload rejected");
if(validateContact({company:"Test",name:"Tester",email:"invalid",message:"Hello",consent:"agreed"}).ok)throw new Error("Invalid email accepted");
const bot=validateContact({website:"bot-field"});if(!bot.ok||!bot.honeypot)throw new Error("Honeypot payload not handled");
console.log("Contact validation tests passed.");
