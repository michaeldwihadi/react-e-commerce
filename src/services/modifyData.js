export const modifyData = ({ resultData }) => {
  if (!resultData) {
    return;
  }

  resultData.forEach((data) => {
    data.sliderImageTitle = "SUMMER SALE";
    data.sliderImageDesc =
      "DONT COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.";
    data.sliderImageBg = "f5fafd";
    data.quantity = 5;

    switch (data.id) {
      case 1:
        data.sliderImage =
          "https://images.unsplash.com/photo-1622445275463-afa2ab738c34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
        break;

      case 2:
        data.sliderImage =
          "https://images.unsplash.com/photo-1622445272461-c6580cab8755?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80";
        break;

      case 3:
        data.sliderImage =
          "https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80";
        break;

      default:
        break;
    }
  });

  return resultData;
};
