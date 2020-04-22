/**
 * Code delivery model returned from amplify Auth.signUp() function.
 */

export interface CodeDeliveryDetailsModel {
  codeDeliveryDetails: {
    attributeName: string,
    deliveryMedium: string,
    destination: string
  };
  userConfirmed: boolean;
  userSub: string;
}
