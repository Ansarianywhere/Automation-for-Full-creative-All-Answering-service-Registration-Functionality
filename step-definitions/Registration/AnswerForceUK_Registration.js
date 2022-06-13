/* eslint-disable linebreak-style */
/* eslint-disable camelcase */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable linebreak-style */
import { Given, When, Then } from '@wdio/cucumber-framework';

import HomePage from '../../pageobjects/home.page';
import Registration from '../../pageobjects/registration.page';
import ChoosePlan_Singup from '../../pageobjects/signup.page';

Given(/^I am on the home page and I Navigate to the Register page$/, async () => {
  await HomePage.openHomePageAnswerForceUK();
});

When(/^I set the value for All mandantory fields$/, async () => {
  await Registration.registrationData_For_AnswerForceUK();
});

Then(/^I click the choose plan Button and verify the given details$/, async () => {
  await ChoosePlan_Singup.verify_All_RegistrationData_For_AF_UK();
});
