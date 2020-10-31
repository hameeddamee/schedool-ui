import {
  SET_CURRENT_USER,
  CLEAR_CURRENT_USER,
  GET_PROFILE,
  CLEAR_USER,
  PROFILE_ERROR,
} from "../actions/userActions";

const initialState = {
  isLoading: false,
  errors: null,
  loadingUserInfo: false,
  userInfo: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_PROFILE:
      let { user, bankName } = payload;

      return {
        ...state,
        profile: { ...user },
        bankDetails: {
          bankAccountName: user.bankAccountName,
          bankAccountNumber: user.bankAccountNumber,
          bankCode: bankName,
        },
        isLoading: false,
      };

    case CLEAR_USER:
      return {
        ...state,
        agentprofiles: [],
        profile: {},
        bankDetails: {
          bankAccountName: "",
          bankAccountNumber: "",
          bankCode: "",
        },
        registeredCustomers: {},
        isLoading: false,
        errors: null,
      };

    default:
      return state;
  }
}
