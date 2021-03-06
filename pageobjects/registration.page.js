import { RerunFormatter } from "@cucumber/cucumber";

class Registration {
    
    // Registration page locators (This locator common for all brands except AF(UK))
    get reName(){ return $('#name'); }
    get reEmail(){ return $('#email'); }
    get rePhone(){ return $('#phone'); }
    get reCompanyName(){ return $('#company');}
    get showPlans_button(){ return $('#register');}

   
    //AnswerForce US
    async registrationData_For_AnswerForce (name,email,phone,companyName){
        (await this.reName).waitForDisplayed();
        await this.reName.setValue(name);
        await this.reEmail.setValue(email);
        await this.rePhone.setValue(phone);
        await this.reCompanyName.setValue(companyName);
        await this.showPlans_button.click();
    };

    //AnswerForceUK Registration page locators (AF UK locator not match with common locator)
    get AF_UK_nameForm(){return $("#newname")}
    get AF_UK_emailForm(){return $("#newemail")}
    get AF_UK_phoneForm(){return $("#newphone")}
    get AF_UK_RegistrationPagecheckBox(){return $("#gdpr_agree")}
    get AF_UK_ConntineButton(){return $('#newsubmitbtn')}

    //AnswerForce UK Registration page Action
    async registrationData_For_AnswerForceUK(name, email,phone,){
        await this.AF_UK_nameForm.setValue(name);
        (await this.AF_UK_emailForm).setValue(email);
        (await this.AF_UK_phoneForm).setValue(phone);
        await (await this.AF_UK_RegistrationPagecheckBox).click();
       await (await this.AF_UK_ConntineButton).click();
    }

    //AnswerForce_CA
    async registrationData_For_AF_CA(name,email,phone,companyName){

       // this.registrationData_For_AnswerForce(name,email,phone,companyName); // AF(Us) and AF(CA) both registration element and meothod are same so i reuse AF(UK) Method
    
       (await this.reName).setValue(name);
       await this.reEmail.setValue(email);
       await this.rePhone.setValue(phone);
       await this.reCompanyName.setValue(companyName);
       await (await this.showPlans_button).click();
    
    }

    //AnswerConnect_UK
     async registration_For_AnswerConnetUK(name, email,phone){
        await this.reName.setValue(name);
        await this.reEmail.setValue(email);
        await this.rePhone.setValue(phone);
        await (await this.showPlans_button).click();
        
     };

       //AnswerConnect_US
       async registrationData_For_AC_US(name,email,phone){
        await this.reName.setValue(name);
        await this.reEmail.setValue(email);
        await this.rePhone.setValue(phone);
        await (await this.showPlans_button).click();

     }

     //AnswerConnect_CA
     async registrationData_For_AC_CA(name,email,phone){

       await this.registration_For_AnswerConnetUK(name,email,phone); // AC(UK) and AC(CA) both elemenet and method are same so i reuse AC(UK) method
     }

     //Lexreceptions
     async registration_For_Lexreception(name,companyName, email, phone){

        await this.reName.setValue(name);
        await this.reCompanyName.setValue(companyName);
        await this.reEmail.setValue(email);
        await this.rePhone.setValue(phone);
        await (await this.showPlans_button).click();
}

    //wellReceived
    async registration_For_WellReceived(name, email,phone ){
    
       await this.reName.setValue(name);
       await this.reEmail.setValue(email);
       await this.rePhone.setValue(phone);
       await (await this.showPlans_button).click();

    }
    get view_plans_and_prices_hellosells_button(){return $("#submitbtn")}
    async registration_For_HelloSells(name ,companyemail ,phone){

        (await this.reName).setValue(name);
        (await this.reEmail).setValue(companyemail);
        (await this.rePhone).setValue(phone);
        await (await this.view_plans_and_prices_hellosells_button).click();
        
    }
}

export default new Registration();
